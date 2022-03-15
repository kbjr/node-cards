"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
function remove(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === item) {
            array.splice(i--, 1);
        }
    }
}
exports.remove = remove;
//# sourceMappingURL=util.js.map