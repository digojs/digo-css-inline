var digo = require("digo");

module.exports = function CSSInline(file, options) {
    file.content = file.content.replace(/url\s*\(\s*(?:\s*"([^"]+)"\s*|\s*'([^']+)'\s*|([^)]+))\)/g, (all, url1, url2, url3) => {
        var p = file.resolve(url1 || url2 || url3);
        var mimeType = options[digo.getExt(p)];
        if (mimeType) {
            var data = digo.readFileIf(p);
            if (data.length) {
                return `url("${digo.base64Uri(mimeType, data)}")`;
            }
        }
        return all;
    });
};