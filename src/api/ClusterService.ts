import axios from 'axios';
import { Configs } from '../configs';
import { ClusterRequest, ClusterResponse, Cluster} from '../interfaces/Cluster';
import DataServiceResponse from '../interfaces/HealthData';
import { dataService } from './configs/kui-data-service';

export async function getAllClusters(userId: string): Promise<Cluster[]> {
  try {
    console.log(Configs.ENDPOINT)
    const response = await axios.get(`http://${Configs.ENDPOINT}/v1/clusters`,{
      headers: {
        'X-USER-ID': userId
      }
    });
    console.log(response)
    return response.data.payload as Cluster[];
  } catch (err) {
    throw new Error((err as DOMException).message);
  }
}

export async function addCluster(params: ClusterRequest) {
  try {
    const response = await axios.post(`http://${dataService.endpoint}/v1/clusters`, params);
    console.log(response);
    return response.data;
  } catch (err) {
    throw new Error((err as DOMException).message);
  }
}
