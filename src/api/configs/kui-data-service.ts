import { METHODS } from 'http';

const dataServiceHost: string = process.env.KUI_DATA_SERVICE_HOST as string;
const dataServicePort: string = process.env.KUI_DATA_SERVICE_PORT as string;

console.log(dataServiceHost);
console.log(dataServicePort);

export const dataService = {
  endpoint: `${dataServiceHost}:${dataServicePort}`,
};

type Method = 'GET' | 'PUT' | 'POST' | 'DELETE' | 'PATCH';

type RouteInterface = {
  method: Method;
  route: string;
};

export const routes: RouteInterface[] = [
  {
    method: 'GET',
    route: '/v1/user',
  },
];
