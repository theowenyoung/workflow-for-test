const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");
var remark = require("remark");
var strip = require("strip-markdown");
var parse2meta = require("./parse2meta");
const main = async () => {
  const content = await fs.promises.readFile(
    path.resolve(__dirname, "./readme.md")
  );

  remark()
    .use(parse2meta)
    .process(content, function (err, file) {
      if (err) throw err;
      // console.log(String(file));
    });
};

main().catch((e) => {
  console.error(e);
});
