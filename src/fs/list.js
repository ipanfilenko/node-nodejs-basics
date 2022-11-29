import { opendir } from 'node:fs/promises';
import { isPathExist } from './utils/isPathExist.js';
import { errorMessage } from './utils/constants.js';

const path = 'src/fs/files';

const list = async () => {
  const isFolderExist = await isPathExist(path);

  if (!isFolderExist) {
    throw new Error(errorMessage);
  }

  try {
    const sourceDir = await opendir(path);
    for await (const file of sourceDir) console.log(file.name);
  } catch (err) {
    console.error(err);
  }
};

await list();
