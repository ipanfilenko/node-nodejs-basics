import { open } from 'node:fs/promises';
import { stdout } from 'node:process';

const path = 'src/streams/files/fileToRead.txt';

const read = async () => {
    try {
        const fd = await open(path);
        fd.createReadStream().pipe(stdout);
    } catch {
        console.error('Can not read source file');
    } 
};

await read();