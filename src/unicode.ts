
/*
 * This files just contains a bunch of mappings of suits/ranks to various unicode characters
 * that can be used to render them in varying levels of "graphical" ways. There are a number
 * of these that don't really have good unicode representations, but this is mostly a "best match"
 * 
 * https://github.com/Crissov/unicode-proposals/issues/289
 * https://www.unicode.org/L2/L2011/11216-n4089-playingcards.pdf
 * https://www.unicode.org/L2/L2014/14223-tarot.pdf
 */ 

import {
	spades, hearts, diamonds, clubs,
	trump, swords, cups, coins, wands, majorArcana,
	none
} from './suits';

import { unicodeCards, unicodeJokers, unicodeSuits } from './suits/unicode'

import * as ranks from './ranks';
import { jokerColor } from './cards'

/**
 * Renders a generic back of a playing card
 * 
 * @see {@link https://www.compart.com/en/unicode/U+1F0A0}
 * @see {@link http://unicode.org/cldr/utility/character.jsp?a=1F0A0}
 */
export const back = '\u{1F0A0}';

export enum suits {
	spades   = '\u2660',
	hearts   = '\u2665',
	diamonds = '\u2666',
	clubs    = '\u2663',
	swords   = '\u2628',
	cups     = '\u2615',
	coins    = '\u26AA',
	wands    = '\u2663',
}

export namespace cards {
	export enum spades {
		ace      = '\u{1F0A1}',
		one      = '\u{1F0A1}',
		two      = '\u{1F0A2}',
		three    = '\u{1F0A3}',
		four     = '\u{1F0A4}',
		five     = '\u{1F0A5}',
		six      = '\u{1F0A6}',
		seven    = '\u{1F0A7}',
		eight    = '\u{1F0A8}',
		nine     = '\u{1F0A9}',
		ten      = '\u{1F0AA}',
		jack     = '\u{1F0AB}',
		cavalier = '\u{1F0AC}',
		knight   = '\u{1F0AC}',
		queen    = '\u{1F0AD}',
		king     = '\u{1F0AE}',
	}

	export enum hearts {
		ace      = '\u{1F0B1}',
		one      = '\u{1F0B1}',
		two      = '\u{1F0B2}',
		three    = '\u{1F0B3}',
		four     = '\u{1F0B4}',
		five     = '\u{1F0B5}',
		six      = '\u{1F0B6}',
		seven    = '\u{1F0B7}',
		eight    = '\u{1F0B8}',
		nine     = '\u{1F0B9}',
		ten      = '\u{1F0BA}',
		jack     = '\u{1F0BB}',
		cavalier = '\u{1F0BC}',
		knight   = '\u{1F0BC}',
		queen    = '\u{1F0BD}',
		king     = '\u{1F0BE}',
	}

	export enum diamonds {
		ace      = '\u{1F0C1}',
		one      = '\u{1F0C1}',
		two      = '\u{1F0C2}',
		three    = '\u{1F0C3}',
		four     = '\u{1F0C4}',
		five     = '\u{1F0C5}',
		six      = '\u{1F0C6}',
		seven    = '\u{1F0C7}',
		eight    = '\u{1F0C8}',
		nine     = '\u{1F0C9}',
		ten      = '\u{1F0CA}',
		jack     = '\u{1F0CB}',
		cavalier = '\u{1F0CC}',
		knight   = '\u{1F0CC}',
		queen    = '\u{1F0CD}',
		king     = '\u{1F0CE}',
	}

	export enum clubs {
		ace      = '\u{1F0D1}',
		one      = '\u{1F0D1}',
		two      = '\u{1F0D2}',
		three    = '\u{1F0D3}',
		four     = '\u{1F0D4}',
		five     = '\u{1F0D5}',
		six      = '\u{1F0D6}',
		seven    = '\u{1F0D7}',
		eight    = '\u{1F0D8}',
		nine     = '\u{1F0D9}',
		ten      = '\u{1F0DA}',
		jack     = '\u{1F0DB}',
		cavalier = '\u{1F0DC}',
		knight   = '\u{1F0DC}',
		queen    = '\u{1F0DD}',
		king     = '\u{1F0DE}',
	}

	export enum none {
		jokerWhite = '\u{1F0BF}',
		jokerRed   = '\u{1F0CF}',
		jokerBlack = '\u{1F0DF}',
	}

	export enum trump {
		trump0  = '\u{1F0E0}',
		trump1  = '\u{1F0E1}',
		trump2  = '\u{1F0E2}',
		trump3  = '\u{1F0E3}',
		trump4  = '\u{1F0E4}',
		trump5  = '\u{1F0E5}',
		trump6  = '\u{1F0E6}',
		trump7  = '\u{1F0E7}',
		trump8  = '\u{1F0E8}',
		trump9  = '\u{1F0E9}',
		trump10 = '\u{1F0EA}',
		trump11 = '\u{1F0EB}',
		trump12 = '\u{1F0EC}',
		trump13 = '\u{1F0ED}',
		trump14 = '\u{1F0EE}',
		trump15 = '\u{1F0EF}',
		trump16 = '\u{1F0F0}',
		trump17 = '\u{1F0F1}',
		trump18 = '\u{1F0F2}',
		trump19 = '\u{1F0F3}',
		trump20 = '\u{1F0F4}',
		trump21 = '\u{1F0F5}',
	}

	// For the time being, these are mapped to the trump characters. There was at one point a proposal to
	// add proper tarot cards to the spec (https://www.unicode.org/L2/L2011/11216-n4089-playingcards.pdf),
	// as well as a proposal to add variant selectors to the existing cards to add support for tarot cards
	// (https://www.unicode.org/L2/L2014/14223-tarot.pdf) but it seems to so far neither have been followed
	// through with. If that ever happens, update these to point to the actual, correct characters
	export enum majorArcana {
		arcana0  = '\u{1F0E0}',
		arcana1  = '\u{1F0E1}',
		arcana2  = '\u{1F0E2}',
		arcana3  = '\u{1F0E3}',
		arcana4  = '\u{1F0E4}',
		arcana5  = '\u{1F0E5}',
		arcana6  = '\u{1F0E6}',
		arcana7  = '\u{1F0E7}',
		arcana8  = '\u{1F0E8}',
		arcana9  = '\u{1F0E9}',
		arcana10 = '\u{1F0EA}',
		arcana11 = '\u{1F0EB}',
		arcana12 = '\u{1F0EC}',
		arcana13 = '\u{1F0ED}',
		arcana14 = '\u{1F0EE}',
		arcana15 = '\u{1F0EF}',
		arcana16 = '\u{1F0F0}',
		arcana17 = '\u{1F0F1}',
		arcana18 = '\u{1F0F2}',
		arcana19 = '\u{1F0F3}',
		arcana20 = '\u{1F0F4}',
		arcana21 = '\u{1F0F5}',
	}
}

export function initUnicode() {
	initSuits();
	initCards();
}

function initSuits() {
	unicodeSuits.set(spades,   suits.spades);
	unicodeSuits.set(hearts,   suits.hearts);
	unicodeSuits.set(diamonds, suits.diamonds);
	unicodeSuits.set(clubs,    suits.clubs);
	unicodeSuits.set(swords,   suits.swords);
	unicodeSuits.set(cups,     suits.cups);
	unicodeSuits.set(coins,    suits.coins);

	// This is currently the same as "club", update this if/when a more appropriate character exists
	unicodeSuits.set(wands,    suits.wands);
	
	// These don't really have a "suit" symbol
	unicodeSuits.set(trump,       null);
	unicodeSuits.set(majorArcana, null);
	unicodeSuits.set(none,        null);
}

function initCards() {
	unicodeCards.set(spades, new Map([
		[ ranks.standard.ace,         cards.spades.ace ],
		[ ranks.nonStandard.one,      cards.spades.one ],
		[ ranks.standard.two,         cards.spades.two ],
		[ ranks.standard.three,       cards.spades.three ],
		[ ranks.standard.four,        cards.spades.four ],
		[ ranks.standard.five,        cards.spades.five ],
		[ ranks.standard.six,         cards.spades.six ],
		[ ranks.standard.seven,       cards.spades.seven ],
		[ ranks.standard.eight,       cards.spades.eight ],
		[ ranks.standard.nine,        cards.spades.nine ],
		[ ranks.standard.ten,         cards.spades.ten ],
		[ ranks.standard.jack,        cards.spades.jack ],
		[ ranks.nonStandard.cavalier, cards.spades.cavalier ],
		[ ranks.nonStandard.knight,   cards.spades.knight ],
		[ ranks.standard.queen,       cards.spades.queen ],
		[ ranks.standard.king,        cards.spades.king ],
		[ ranks.nonStandard.page,     null ]
	]));

	unicodeCards.set(hearts, new Map([
		[ ranks.standard.ace,         cards.hearts.ace ],
		[ ranks.nonStandard.one,      cards.hearts.one ],
		[ ranks.standard.two,         cards.hearts.two ],
		[ ranks.standard.three,       cards.hearts.three ],
		[ ranks.standard.four,        cards.hearts.four ],
		[ ranks.standard.five,        cards.hearts.five ],
		[ ranks.standard.six,         cards.hearts.six ],
		[ ranks.standard.seven,       cards.hearts.seven ],
		[ ranks.standard.eight,       cards.hearts.eight ],
		[ ranks.standard.nine,        cards.hearts.nine ],
		[ ranks.standard.ten,         cards.hearts.ten ],
		[ ranks.standard.jack,        cards.hearts.jack ],
		[ ranks.nonStandard.cavalier, cards.hearts.cavalier ],
		[ ranks.nonStandard.knight,   cards.hearts.knight ],
		[ ranks.standard.queen,       cards.hearts.queen ],
		[ ranks.standard.king,        cards.hearts.king ],
		[ ranks.nonStandard.page,     null ]
	]));

	unicodeCards.set(diamonds, new Map([
		[ ranks.standard.ace,         cards.diamonds.ace ],
		[ ranks.nonStandard.one,      cards.diamonds.one ],
		[ ranks.standard.two,         cards.diamonds.two ],
		[ ranks.standard.three,       cards.diamonds.three ],
		[ ranks.standard.four,        cards.diamonds.four ],
		[ ranks.standard.five,        cards.diamonds.five ],
		[ ranks.standard.six,         cards.diamonds.six ],
		[ ranks.standard.seven,       cards.diamonds.seven ],
		[ ranks.standard.eight,       cards.diamonds.eight ],
		[ ranks.standard.nine,        cards.diamonds.nine ],
		[ ranks.standard.ten,         cards.diamonds.ten ],
		[ ranks.standard.jack,        cards.diamonds.jack ],
		[ ranks.nonStandard.cavalier, cards.diamonds.cavalier ],
		[ ranks.nonStandard.knight,   cards.diamonds.knight ],
		[ ranks.standard.queen,       cards.diamonds.queen ],
		[ ranks.standard.king,        cards.diamonds.king ],
		[ ranks.nonStandard.page,     null ]
	]));

	unicodeCards.set(clubs, new Map([
		[ ranks.standard.ace,         cards.clubs.ace ],
		[ ranks.nonStandard.one,      cards.clubs.one ],
		[ ranks.standard.two,         cards.clubs.two ],
		[ ranks.standard.three,       cards.clubs.three ],
		[ ranks.standard.four,        cards.clubs.four ],
		[ ranks.standard.five,        cards.clubs.five ],
		[ ranks.standard.six,         cards.clubs.six ],
		[ ranks.standard.seven,       cards.clubs.seven ],
		[ ranks.standard.eight,       cards.clubs.eight ],
		[ ranks.standard.nine,        cards.clubs.nine ],
		[ ranks.standard.ten,         cards.clubs.ten ],
		[ ranks.standard.jack,        cards.clubs.jack ],
		[ ranks.nonStandard.cavalier, cards.clubs.cavalier ],
		[ ranks.nonStandard.knight,   cards.clubs.knight ],
		[ ranks.standard.queen,       cards.clubs.queen ],
		[ ranks.standard.king,        cards.clubs.king ],
		[ ranks.nonStandard.page,     null ]
	]));

	unicodeCards.set(trump, new Map([
		[ ranks.trump.trump0,  cards.trump.trump0 ],
		[ ranks.trump.trump1,  cards.trump.trump1 ],
		[ ranks.trump.trump2,  cards.trump.trump2 ],
		[ ranks.trump.trump3,  cards.trump.trump3 ],
		[ ranks.trump.trump4,  cards.trump.trump4 ],
		[ ranks.trump.trump5,  cards.trump.trump5 ],
		[ ranks.trump.trump6,  cards.trump.trump6 ],
		[ ranks.trump.trump7,  cards.trump.trump7 ],
		[ ranks.trump.trump8,  cards.trump.trump8 ],
		[ ranks.trump.trump9,  cards.trump.trump9 ],
		[ ranks.trump.trump10, cards.trump.trump10 ],
		[ ranks.trump.trump11, cards.trump.trump11 ],
		[ ranks.trump.trump12, cards.trump.trump12 ],
		[ ranks.trump.trump13, cards.trump.trump13 ],
		[ ranks.trump.trump14, cards.trump.trump14 ],
		[ ranks.trump.trump15, cards.trump.trump15 ],
		[ ranks.trump.trump16, cards.trump.trump16 ],
		[ ranks.trump.trump17, cards.trump.trump17 ],
		[ ranks.trump.trump18, cards.trump.trump18 ],
		[ ranks.trump.trump19, cards.trump.trump19 ],
		[ ranks.trump.trump20, cards.trump.trump20 ],
		[ ranks.trump.trump21, cards.trump.trump21 ]
	]));

	unicodeCards.set(majorArcana, new Map([
		[ ranks.majorArcana.arcana0,  cards.majorArcana.arcana0 ],
		[ ranks.majorArcana.arcana1,  cards.majorArcana.arcana1 ],
		[ ranks.majorArcana.arcana2,  cards.majorArcana.arcana2 ],
		[ ranks.majorArcana.arcana3,  cards.majorArcana.arcana3 ],
		[ ranks.majorArcana.arcana4,  cards.majorArcana.arcana4 ],
		[ ranks.majorArcana.arcana5,  cards.majorArcana.arcana5 ],
		[ ranks.majorArcana.arcana6,  cards.majorArcana.arcana6 ],
		[ ranks.majorArcana.arcana7,  cards.majorArcana.arcana7 ],
		[ ranks.majorArcana.arcana8,  cards.majorArcana.arcana8 ],
		[ ranks.majorArcana.arcana9,  cards.majorArcana.arcana9 ],
		[ ranks.majorArcana.arcana10, cards.majorArcana.arcana10 ],
		[ ranks.majorArcana.arcana11, cards.majorArcana.arcana11 ],
		[ ranks.majorArcana.arcana12, cards.majorArcana.arcana12 ],
		[ ranks.majorArcana.arcana13, cards.majorArcana.arcana13 ],
		[ ranks.majorArcana.arcana14, cards.majorArcana.arcana14 ],
		[ ranks.majorArcana.arcana15, cards.majorArcana.arcana15 ],
		[ ranks.majorArcana.arcana16, cards.majorArcana.arcana16 ],
		[ ranks.majorArcana.arcana17, cards.majorArcana.arcana17 ],
		[ ranks.majorArcana.arcana18, cards.majorArcana.arcana18 ],
		[ ranks.majorArcana.arcana19, cards.majorArcana.arcana19 ],
		[ ranks.majorArcana.arcana20, cards.majorArcana.arcana20 ],
		[ ranks.majorArcana.arcana21, cards.majorArcana.arcana21 ]
	]));
	
	unicodeJokers.set(jokerColor.white, cards.none.jokerWhite);
	unicodeJokers.set(jokerColor.red,   cards.none.jokerRed);
	unicodeJokers.set(jokerColor.black, cards.none.jokerBlack);
}
