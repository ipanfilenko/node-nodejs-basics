import { readFile } from 'node:fs/promises';
import { isPathExist } from './utils/isPathExist.js';
import { errorMessage } from './utils/constants.js';

const path = 'src/fs/files/fileToRead.txt';

const read = async () => {
  const isSourceFileExist = await isPathExist(path);

  if (!isSourceFileExist) {
    throw new Error(errorMessage);
  }

  try {
    const contents = await readFile(path, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err);
  }
};

await read();