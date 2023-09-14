const fs = require('fs');
const sass = require('node-sass');
const juice = require('juice');

const scss = fs.readFileSync('index.scss', 'utf-8');

const css = sass.renderSync({ data: scss }).css.toString();

const html = fs.readFileSync('index.html', 'utf-8');
const inlinedHtml = juice(html, { extraCss: css });
fs.writeFileSync('output.html', inlinedHtml);