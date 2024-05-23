import { getHttpEndpoint } from "@orbs-network/ton-access";
import { TonClient, Address,  } from "ton";

const endpoint = await getHttpEndpoint(); // get the decentralized RPC endpoint
const client = new TonClient({ endpoint })

export {
    Address,
    client
}