import { access, appendFile } from 'node:fs/promises';

const directory = 'files';
const fileName = 'fresh.txt';
const textInFile = 'I am fresh and young';
const errorMessage = 'FS operation failed';
const successMessage = 'File created';
const path = `src/${directory}/${fileName}`;

const create = async () => {
  let isFileExist = false;

  try {
    await access(path);
    isFileExist = true;
  } catch {}


  if (isFileExist) {
    throw new Error(errorMessage);
  }

  try {
    await appendFile(path, textInFile);
    console.log(successMessage);
  } catch {
    throw new Error(errorMessage);
  }
};

await create();