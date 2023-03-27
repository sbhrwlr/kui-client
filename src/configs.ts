const dataServiceHost = 'localhost';
const dataServicePort = '28080';
console.log(dataServiceHost, dataServicePort);

export const Configs = {
  HOST: dataServiceHost,
  PORT: dataServicePort,
  ENDPOINT: `${dataServiceHost}:${dataServicePort}`,
};
