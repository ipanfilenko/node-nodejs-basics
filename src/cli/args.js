const parseArgs = () => {
    const results = [];

    for (let i = 0; i < process.argv.length; i++) {
        if ((/--/).test(process.argv[i])) {
            const propName = process.argv[i].replace('--', '');
            const propValue = process.argv[i + 1];
            results.push(`${propName} is ${propValue}`);
        }
    }

    console.log(results.join(', '));
};

parseArgs();