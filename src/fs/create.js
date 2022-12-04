import { appendFile } from 'node:fs/promises';
import { isPathExist } from './utils/isPathExist.js';
import { errorMessage, sourceDirectory } from './utils/constants.js';

const fileName = 'fresh.txt';
const textInFile = 'I am fresh and young';
const successMessage = 'File created';
const path = `src/fs/${sourceDirectory}/${fileName}`;

const create = async () => {
  const isFileExist = await isPathExist(path);

  if (isFileExist) {
    throw new Error(errorMessage);
  }

  try {
    await appendFile(path, textInFile);
    console.info(successMessage);
  } catch {
    throw new Error(errorMessage);
  }
};

await create();