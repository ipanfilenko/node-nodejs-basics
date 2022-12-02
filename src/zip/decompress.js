import { createGunzip } from 'node:zlib';
import { pipeline } from 'node:stream';
import { createReadStream, createWriteStream } from 'node:fs';

const gunzip = createGunzip();
const source = createReadStream('src/zip/files/archive.gz');
const destination = createWriteStream('src/zip/files/fileToCompress.txt');

const decompress = async () => {
  pipeline(source, gunzip, destination, (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  });
};

await decompress();