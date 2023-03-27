export interface ClusterResponse {
  uuid: string;
  userId: string;
  clusterAlias: string;
  brokerString: string;
  healthy: boolean;
  brokersCount: number;
}

export interface ClusterRequest {
  userId: string;
  clusterAlias: string;
  brokerString: string;
}


export interface Broker {
    id: string;
    host: string;
    port: number;
    hash: number;
}

export interface Topic {
    topicName: string;
    internal: boolean;
    id: string;
}

export interface Cluster {
    key: string;
    uuid: string;
    userId: string;
    clusterAlias: string;
    brokersString: string;
    clusterId: string;
    healthy: boolean;
    brokers: Broker[];
    topics: Topic[];
}
