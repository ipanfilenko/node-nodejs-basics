import { stdin } from 'node:process';
import { createWriteStream } from 'node:fs';

const path = 'src/streams/files/fileToWrite.txt';

const write = async () => {
    try {
        const fd = createWriteStream(path);
        stdin.pipe(fd);
    } catch {
        console.error('Can not write in source file');
    } 
};

await write();