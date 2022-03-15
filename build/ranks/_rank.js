"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rank = void 0;
/**
 * The main base class for representing a rank of card (eg. "ace" or "king")
 */
class Rank {
    constructor(abbrn, name) {
        this.abbrn = abbrn;
        this.name = name;
    }
    /**
     * Returns a human-readable string representation of the rank object
     *
     * eg. `"<Rank name=Ace abbrn=A>"`
     */
    toString() {
        return `<Rank name=${this.name} abbrn=${this.abbrn}>`;
    }
}
exports.Rank = Rank;
//# sourceMappingURL=_rank.js.map