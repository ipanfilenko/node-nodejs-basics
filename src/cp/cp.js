import { fork } from 'node:child_process';

const path = 'src/cp/files/script.js';

// solution based on https://nodejs.org/api/child_process.html#child_processforkmodulepath-args-options
const spawnChildProcess = async (args) => fork(path, args, { stdio: [0, 1, 2, 'ipc'] } );

spawnChildProcess(['arg1', 'arg2', 42]);
