import chai, { expect } from "chai";
import { solidity } from "ethereum-waffle";
// eslint-disable-next-line node/no-extraneous-require
const chaiAsPromised = require("chai-as-promised");

chai.use(solidity);
chai.use(chaiAsPromised);

export { expect };
