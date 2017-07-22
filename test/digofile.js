var digo = require("digo");

exports.default = function () {
	digo.src("fixtures/*.css").pipe("../", {
		".ttf": "application/x-font-truetype",
		".woff": "application/font-woff",
		".svg": "image/svg+xml",
		".gif": "image/gif",
		".ico": "image/x-icon",
		".png": "image/png",
		".jpg": "image/jpeg",
		".wbmp": "image/vnd.wap.wbmp"
	}).dest("_build");
};