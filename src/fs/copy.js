import { opendir, copyFile, mkdir  } from 'node:fs/promises';
import { isPathExist } from './utils/isPathExist.js';
import { errorMessage, sourceDirectory } from './utils/constants.js';

const destinationDirectory = 'files_copy';
const path = `src/fs/`;

const copy = async () => {
  try {
    const isDestinationDirExist = await isPathExist(`${path}/${destinationDirectory}`);
    const isSourceDirExist = await isPathExist(`${path}/${sourceDirectory}`);

    if (!isSourceDirExist || isDestinationDirExist) {
        throw new Error(errorMessage)
    }

    await mkdir(`${path}/${destinationDirectory}`);
    const sourceDirExist = await opendir(`${path}/${sourceDirectory}`);

    for await (const file of sourceDirExist)
      copyFile(
        `${path}/${sourceDirectory}/${file.name}`,
        `${path}/${destinationDirectory}/${file.name}`
      );
  } catch (err) {
    console.error(err);
  }
};

copy();