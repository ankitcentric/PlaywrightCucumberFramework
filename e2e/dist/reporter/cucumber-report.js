"use strict";

var _dotenv = _interopRequireDefault(require("dotenv"));
var _cucumberHtmlReporter = _interopRequireDefault(require("cucumber-html-reporter"));
var _parseEnv = require("../env/parseEnv");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
_dotenv["default"].config({
  path: (0, _parseEnv.env)('COMMON_CONFIG_FILE')
});
var options = {
  theme: 'bootstrap',
  jsonFile: (0, _parseEnv.env)('JASON_REPORT_FILE'),
  output: (0, _parseEnv.env)('HTML_REPORT_FILE'),
  screenshotsDirectory: (0, _parseEnv.env)('SCREENSHOT_PATH'),
  storeScreenshots: true,
  reportSuiteAsScenarios: true,
  launchReport: false
};
_cucumberHtmlReporter["default"].generate(options);