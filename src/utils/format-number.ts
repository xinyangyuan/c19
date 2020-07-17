function getEnvLocale() {
  const env = process.env;
  return env.LC_ALL || env.LC_MESSAGES || env.LANG || env.LANGUAGE;
}

const formatNumber = (num: string | number) => {
  const env = getEnvLocale();
  const lang = env ? env.split("_")[0] : "en";
  return (+num).toLocaleString(lang);
};

export default formatNumber;
