import axios from 'axios';
import { Configs } from '../configs';
import DataServiceResponse from '../interfaces/HealthData';
import { UserRequest } from '../interfaces/UserResponse';
import { dataService } from './configs/kui-data-service';

export async function fetchUserExistance(params: {
  email: string;
}): Promise<DataServiceResponse> {
  try {
    const response = await axios.get(`http://${Configs.ENDPOINT}/v1/user`, {
      params,
    });
    return response.data;
  } catch (err) {
    throw new Error((err as DOMException).message);
  }
}

export async function sendUser(params: UserRequest) {
  try {
    const response = await axios.post(
      `http://${Configs.ENDPOINT}/v1/user`,
      params
    );
    console.log(response);
    return response.data;
  } catch (err) {
    throw new Error((err as DOMException).message);
  }
}
