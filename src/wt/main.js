import { Worker } from 'node:worker_threads';
import { cpus } from 'node:os';

const numberOfCPU = cpus().length;
const startNumber = 10;
const status = {
  resolved: 'resolved',
  error: 'error',
};

const createWorker = (resultsFromWorkers, index) => {
  return new Promise((resolve) => {
    const workerData = startNumber + index;
    const worker = new Worker('./src/wt/worker.js', { workerData });
    let result;

    worker.on('message', (msg) => {
      result = { status: status.resolved, data: msg };
    });
    worker.on('error', () => {
      result = { status: status.error, data: null };
    });
    worker.on('exit', () => {
      resultsFromWorkers[index] = result;
      resolve();
    });
  });
};

const performCalculations = async () => {
  const resultsFromWorkers = [];

  await Promise.allSettled(
    Array(numberOfCPU)
      .fill(null)
      .map((_, index) => createWorker(resultsFromWorkers, index))
  );

  console.log(resultsFromWorkers);
};

await performCalculations();
