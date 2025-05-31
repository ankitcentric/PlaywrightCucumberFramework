"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.smoke = exports.regression = exports.dev = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
var _parseEnv = require("./env/parseEnv");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config({
  path: (0, _parseEnv.env)('COMMON_CONFIG_FILE')
});
var hostsConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('HOST_URLS_PATH'));
console.log("Host config = ".concat(hostsConfig));
var pagesConfig = (0, _parseEnv.getJsonFromFile)((0, _parseEnv.env)('PAGE_URLS_PATH'));
console.log("pages config = ".concat(pagesConfig));
var worldParameters = {
  hostsConfig: hostsConfig,
  pagesConfig: pagesConfig
};
var comman = "./src/features/**/*.feature                 --require-module ts-node/register                 --require ./src/step-definitions/**/**/*.ts                 --world-parameters ".concat(JSON.stringify(worldParameters), "                 -f json:./reports/report.json                 --format progress-bar");
var dev = exports.dev = "".concat(comman, " --tags '@dev'");
var smoke = exports.smoke = "".concat(comman, " --tags '@smoke'");
var regression = exports.regression = "".concat(comman, " --tags '@regression'");