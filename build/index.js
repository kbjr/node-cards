"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.suits = exports.ranks = exports.MathRandomGenerator = exports.shuffle = void 0;
var shuffle_1 = require("./shuffle");
Object.defineProperty(exports, "shuffle", { enumerable: true, get: function () { return shuffle_1.shuffle; } });
Object.defineProperty(exports, "MathRandomGenerator", { enumerable: true, get: function () { return shuffle_1.MathRandomGenerator; } });
__exportStar(require("./cards"), exports);
__exportStar(require("./decks"), exports);
exports.ranks = require("./ranks");
exports.suits = require("./suits");
const unicode_1 = require("./unicode");
(0, unicode_1.initUnicode)();
//# sourceMappingURL=index.js.map