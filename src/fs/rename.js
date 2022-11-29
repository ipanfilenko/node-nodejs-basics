import { rename as renameFile } from 'node:fs/promises';
import { isPathExist } from './utils/isPathExist.js';
import { errorMessage } from './utils/constants.js';

const sourceFileName = 'wrongFilename.txt';
const destinationFileName = 'properFilename.md';
const path = `src/fs/files`;

const rename = async () => {
  const isDestinationFileExist = await isPathExist(
    `${path}/${destinationFileName}`
  );
  const isSourceFileExist = await isPathExist(
    `${path}/${sourceFileName}`
  );

  if (!isSourceFileExist || isDestinationFileExist) {
    throw new Error(errorMessage);
  }

  try {
    await renameFile(
      `${path}/${sourceFileName}`,
      `${path}/${destinationFileName}`
    );
  } catch (err) {
    console.error(err);
  }
};

await rename();