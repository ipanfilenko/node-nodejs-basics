import { rm } from 'node:fs/promises';
import { isPathExist } from './utils/isPathExist.js';
import { errorMessage } from './utils/constants.js';

const sourceFileName = 'fileToRemove.txt';
const path = "src/fs/files";

const remove = async () => {
  const isSourceFileExist = await isPathExist(`${path}/${sourceFileName}`);

  if (!isSourceFileExist) {
    throw new Error(errorMessage);
  }

  try {
    await rm(`${path}/${sourceFileName}`);
  } catch (err) {
    console.error(err);
  }
};

await remove();