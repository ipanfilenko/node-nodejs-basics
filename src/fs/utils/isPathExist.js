import { access } from 'node:fs/promises';

export const isPathExist = async (path) => {
    let isExist = false;
  
    try {
      await access(path);
      isExist = true;
    } catch {} // don't need catch errors (file is not exist, has no access to file and etc)

    return isExist;
}