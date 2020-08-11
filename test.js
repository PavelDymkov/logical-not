const not = require("./");

test("true value to false", not(true) === false);
test("false value to true", not(false) === true);

test("after transpile", afterTranspileTest());

function test(testName, assertion) {
    if (assertion) console.log(`\x1b[32m\u2713\x1b[0m ${testName}`);
    else throw new Error(`\x1b[31m\u2715\x1b[0m ${testName}`);
}

function afterTranspileTest() {
    "use strict";

    var _ = _interopRequireDefault(require("./"));

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    return (0, _.default)(true) === false;
}
