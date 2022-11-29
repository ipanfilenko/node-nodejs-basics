const parseEnv = () => {
  const rssKeys = Object.keys(process.env)
    .filter((key) => !key.search(/^(RSS_)/))
    .map((key) => `${key}=${process.env[key]}`)
    .join("; ");

  console.log(rssKeys);
};

parseEnv();
