//	@ghasemkiani/bscscan-api/client

const fetch = require("isomorphic-fetch");

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Client: ClientEth} = require("@ghasemkiani/etherscan-api/client");

class Client extends ClientEth {
	//
}
cutil.extend(Client.prototype, {
	endpoint: "https://api.bscscan.com/api",
	apiKeyTokenEnvName: null,
	cacheName: "bscscan",
});

module.exports = {Client};

// https://api.bscscan.com/apis
