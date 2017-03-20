const process = require("process");

exports.main = function (event, context, callback) {
	console.log(event.Records[0].Sns.Subject);
	console.log(process.env["SHOPIFY_HOSTNAME"]);
	callback();
};
