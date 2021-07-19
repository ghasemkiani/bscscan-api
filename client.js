//	@ghasemkiani/bscscan-api/client

const fetch = require("isomorphic-fetch");

const {cutil} = require("@ghasemkiani/base/cutil");
const {Client: ClientEth} = require("@ghasemkiani/etherscan-api/client");

class Client extends ClientEth {
	//
}
cutil.extend(Client.prototype, {
	endpoint: "https://api.bscscan.com/api",
	apiKeyTokenEnvName: "BSCSCAN_APIKEY_TOKEN",
	cacheName: "bscscan",
});

module.exports = {Client};

// https://api.bscscan.com/apis
