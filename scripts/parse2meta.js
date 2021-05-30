const visit = require("unist-util-visit");

function flattenListItemParagraphs() {
  return (ast) => {
    visit(ast, "listItem", (listItem) => {
      console.log("listItem", listItem);

      if (
        listItem.children.length === 1 &&
        listItem.children[0].type === "paragraph"
      ) {
        listItem.children = listItem.children[0].children;
      }
      return listItem;
    });
    return ast;
  };
}

module.exports = flattenListItemParagraphs;
