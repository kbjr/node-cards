/**
 * Renders a generic back of a playing card
 *
 * @see {@link https://www.compart.com/en/unicode/U+1F0A0}
 * @see {@link http://unicode.org/cldr/utility/character.jsp?a=1F0A0}
 */
export declare const back = "\uD83C\uDCA0";
export declare enum suits {
    spades = "\u2660",
    hearts = "\u2665",
    diamonds = "\u2666",
    clubs = "\u2663",
    swords = "\u2628",
    cups = "\u2615",
    coins = "\u26AA",
    wands = "\u2663"
}
export declare namespace cards {
    enum spades {
        ace = "\uD83C\uDCA1",
        one = "\uD83C\uDCA1",
        two = "\uD83C\uDCA2",
        three = "\uD83C\uDCA3",
        four = "\uD83C\uDCA4",
        five = "\uD83C\uDCA5",
        six = "\uD83C\uDCA6",
        seven = "\uD83C\uDCA7",
        eight = "\uD83C\uDCA8",
        nine = "\uD83C\uDCA9",
        ten = "\uD83C\uDCAA",
        jack = "\uD83C\uDCAB",
        cavalier = "\uD83C\uDCAC",
        knight = "\uD83C\uDCAC",
        queen = "\uD83C\uDCAD",
        king = "\uD83C\uDCAE"
    }
    enum hearts {
        ace = "\uD83C\uDCB1",
        one = "\uD83C\uDCB1",
        two = "\uD83C\uDCB2",
        three = "\uD83C\uDCB3",
        four = "\uD83C\uDCB4",
        five = "\uD83C\uDCB5",
        six = "\uD83C\uDCB6",
        seven = "\uD83C\uDCB7",
        eight = "\uD83C\uDCB8",
        nine = "\uD83C\uDCB9",
        ten = "\uD83C\uDCBA",
        jack = "\uD83C\uDCBB",
        cavalier = "\uD83C\uDCBC",
        knight = "\uD83C\uDCBC",
        queen = "\uD83C\uDCBD",
        king = "\uD83C\uDCBE"
    }
    enum diamonds {
        ace = "\uD83C\uDCC1",
        one = "\uD83C\uDCC1",
        two = "\uD83C\uDCC2",
        three = "\uD83C\uDCC3",
        four = "\uD83C\uDCC4",
        five = "\uD83C\uDCC5",
        six = "\uD83C\uDCC6",
        seven = "\uD83C\uDCC7",
        eight = "\uD83C\uDCC8",
        nine = "\uD83C\uDCC9",
        ten = "\uD83C\uDCCA",
        jack = "\uD83C\uDCCB",
        cavalier = "\uD83C\uDCCC",
        knight = "\uD83C\uDCCC",
        queen = "\uD83C\uDCCD",
        king = "\uD83C\uDCCE"
    }
    enum clubs {
        ace = "\uD83C\uDCD1",
        one = "\uD83C\uDCD1",
        two = "\uD83C\uDCD2",
        three = "\uD83C\uDCD3",
        four = "\uD83C\uDCD4",
        five = "\uD83C\uDCD5",
        six = "\uD83C\uDCD6",
        seven = "\uD83C\uDCD7",
        eight = "\uD83C\uDCD8",
        nine = "\uD83C\uDCD9",
        ten = "\uD83C\uDCDA",
        jack = "\uD83C\uDCDB",
        cavalier = "\uD83C\uDCDC",
        knight = "\uD83C\uDCDC",
        queen = "\uD83C\uDCDD",
        king = "\uD83C\uDCDE"
    }
    enum none {
        jokerWhite = "\uD83C\uDCBF",
        jokerRed = "\uD83C\uDCCF",
        jokerBlack = "\uD83C\uDCDF"
    }
    enum trump {
        trump0 = "\uD83C\uDCE0",
        trump1 = "\uD83C\uDCE1",
        trump2 = "\uD83C\uDCE2",
        trump3 = "\uD83C\uDCE3",
        trump4 = "\uD83C\uDCE4",
        trump5 = "\uD83C\uDCE5",
        trump6 = "\uD83C\uDCE6",
        trump7 = "\uD83C\uDCE7",
        trump8 = "\uD83C\uDCE8",
        trump9 = "\uD83C\uDCE9",
        trump10 = "\uD83C\uDCEA",
        trump11 = "\uD83C\uDCEB",
        trump12 = "\uD83C\uDCEC",
        trump13 = "\uD83C\uDCED",
        trump14 = "\uD83C\uDCEE",
        trump15 = "\uD83C\uDCEF",
        trump16 = "\uD83C\uDCF0",
        trump17 = "\uD83C\uDCF1",
        trump18 = "\uD83C\uDCF2",
        trump19 = "\uD83C\uDCF3",
        trump20 = "\uD83C\uDCF4",
        trump21 = "\uD83C\uDCF5"
    }
    enum majorArcana {
        arcana0 = "\uD83C\uDCE0",
        arcana1 = "\uD83C\uDCE1",
        arcana2 = "\uD83C\uDCE2",
        arcana3 = "\uD83C\uDCE3",
        arcana4 = "\uD83C\uDCE4",
        arcana5 = "\uD83C\uDCE5",
        arcana6 = "\uD83C\uDCE6",
        arcana7 = "\uD83C\uDCE7",
        arcana8 = "\uD83C\uDCE8",
        arcana9 = "\uD83C\uDCE9",
        arcana10 = "\uD83C\uDCEA",
        arcana11 = "\uD83C\uDCEB",
        arcana12 = "\uD83C\uDCEC",
        arcana13 = "\uD83C\uDCED",
        arcana14 = "\uD83C\uDCEE",
        arcana15 = "\uD83C\uDCEF",
        arcana16 = "\uD83C\uDCF0",
        arcana17 = "\uD83C\uDCF1",
        arcana18 = "\uD83C\uDCF2",
        arcana19 = "\uD83C\uDCF3",
        arcana20 = "\uD83C\uDCF4",
        arcana21 = "\uD83C\uDCF5"
    }
}
export declare function initUnicode(): void;
