//	@ghasemkiani/bscscan-api/client

import {cutil} from "@ghasemkiani/base";
import {Client as ClientEth} from "@ghasemkiani/etherscan-api";

class Client extends ClientEth {
	//
}
cutil.extend(Client.prototype, {
	endpoint: "https://api.bscscan.com/api",
	apiKeyTokenEnvName: "BSCSCAN_APIKEY_TOKEN",
	cacheName: "bscscan",
});

export {Client};

// https://api.bscscan.com/apis
