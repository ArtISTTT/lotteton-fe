import { getHttpEndpoint } from '@orbs-network/ton-access';
import { TonClient, Address } from 'ton';

let endpoint: string;
let client: TonClient;

const getClient = async () => {
  endpoint = await getHttpEndpoint(); // get the decentralized RPC endpoint
  client = new TonClient({ endpoint });
};

export { Address, client, getClient };
