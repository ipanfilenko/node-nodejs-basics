import { stdin, stdout } from 'node:process';
import { Transform } from 'node:stream';

const reverseString = new Transform({
  transform(chunk, _encoding, callback) {
    callback(null, String(chunk).split('').reverse().join('') + '\n');
  },
});

const transform = async () => {
  stdin.pipe(reverseString).pipe(stdout);
};

await transform();