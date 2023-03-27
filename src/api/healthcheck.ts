import axios from 'axios';
import DataServiceResponse from '../interfaces/HealthData';

export async function fetchHealthData(): Promise<DataServiceResponse> {
  try {
    const response = await axios.get(
      'http://localhost:28080/v1/health/sbhrwlr'
    );
    return response.data;
  } catch (err) {
    throw new Error((err as DOMException).message);
  }
}
