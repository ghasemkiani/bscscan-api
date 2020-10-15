//	@ghasemkiani/bscscan-api/api

const fetch = require("isomorphic-fetch");

const {cutil} = require("@ghasemkiani/commonbase/cutil");
const {Base} = require("@ghasemkiani/commonbase/base");

class Api extends Base {
	async toListTransactions(address, startblock = 0, endblock = 999999999, sort = "desc") {
		let url = `${this.endpoint}?module=account&action=txlist&address=${address}&startblock=${startblock}&endblock=${endblock}&sort=${sort}`;
		let rsp = await fetch(url);
		let json = await rsp.json();
		return json;
	}
	async toGetContractAbi(address) {
		let url = `${this.endpoint}?module=contract&action=getabi&address=${address}`;
		let rsp = await fetch(url);
		let json = await rsp.json();
		let abi = JSON.parse(json.result);
		return abi;
	}
}
cutil.extend(Api.prototype, {
	endpoint: "https://api.bscscan.com/api",
});

module.exports = {Api};
