var newStyle = document.createElement('style');newStyle.type = "text/css";
document.getElementsByTagName('head').item(0).appendChild(newStyle);
css = document.styleSheets.item(0)

var idx = document.styleSheets[0].cssRules.length;
css.insertRule("ts-message:not(:first-child) {border-top: 1px solid #eee;}", idx);
// css.insertRule(".message {border-top: 1px solid #eee;}", idx);
// var idx = document.styleSheets[0].cssRules.length;
// css.insertRule(".first {border: none;}", idx);