import { createReadStream } from 'node:fs';
const { createHash } = await import('node:crypto');

const path = 'src/hash/files/fileToCalculateHashFor.txt';

const calculateHash = async () => {
  const hash = createHash('sha256');
  const inputFile = createReadStream(path);

  inputFile.on('readable', () => {
    const data = inputFile.read();

    if (data) {
      hash.update(data);
    } else {
      console.log(`${hash.digest('hex')}`);
    }
  });
};

await calculateHash();