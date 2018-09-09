
exports.suits = Object.freeze({
	heart:    '\u2665',
	diamond:  '\u2666',
	club:     '\u2663',
	spade:    '\u2660',
	sword:    '\u2628',
	pentacle: '\u26AA',
	cup:      '\u2615',

	// This is currently the same as "club", update this if/when a more appropriate character exists
	wand:     '\u2663'
});

exports.back = '\u{1F0A0}';

exports.spades = Object.freeze({
	'A':  '\u{1F0A1}',
	'2':  '\u{1F0A2}',
	'3':  '\u{1F0A3}',
	'4':  '\u{1F0A4}',
	'5':  '\u{1F0A5}',
	'6':  '\u{1F0A6}',
	'7':  '\u{1F0A7}',
	'8':  '\u{1F0A8}',
	'9':  '\u{1F0A9}',
	'10': '\u{1F0AA}',
	'J':  '\u{1F0AB}',
	'KN': '\u{1F0AC}',
	'Q':  '\u{1F0AD}',
	'K':  '\u{1F0AE}'
});

exports.hearts = Object.freeze({
	'A':  '\u{1F0B1}',
	'2':  '\u{1F0B2}',
	'3':  '\u{1F0B3}',
	'4':  '\u{1F0B4}',
	'5':  '\u{1F0B5}',
	'6':  '\u{1F0B6}',
	'7':  '\u{1F0B7}',
	'8':  '\u{1F0B8}',
	'9':  '\u{1F0B9}',
	'10': '\u{1F0BA}',
	'J':  '\u{1F0BB}',
	'KN': '\u{1F0BC}',
	'Q':  '\u{1F0BD}',
	'K':  '\u{1F0BE}'
});

exports.diamonds = Object.freeze({
	'A':  '\u{1F0C1}',
	'2':  '\u{1F0C2}',
	'3':  '\u{1F0C3}',
	'4':  '\u{1F0C4}',
	'5':  '\u{1F0C5}',
	'6':  '\u{1F0C6}',
	'7':  '\u{1F0C7}',
	'8':  '\u{1F0C8}',
	'9':  '\u{1F0C9}',
	'10': '\u{1F0CA}',
	'J':  '\u{1F0CB}',
	'KN': '\u{1F0CC}',
	'Q':  '\u{1F0CD}',
	'K':  '\u{1F0CE}'
});

exports.clubs = Object.freeze({
	'A':  '\u{1F0D1}',
	'2':  '\u{1F0D2}',
	'3':  '\u{1F0D3}',
	'4':  '\u{1F0D4}',
	'5':  '\u{1F0D5}',
	'6':  '\u{1F0D6}',
	'7':  '\u{1F0D7}',
	'8':  '\u{1F0D8}',
	'9':  '\u{1F0D9}',
	'10': '\u{1F0DA}',
	'J':  '\u{1F0DB}',
	'KN': '\u{1F0DC}',
	'Q':  '\u{1F0DD}',
	'K':  '\u{1F0DE}'
});

exports.jokers = Object.freeze({
	'white': '\u{1F0BF}',
	'red': '\u{1F0CF}',
	'black': '\u{1F0DF}'
});

exports.fool = '\u{1F0E0}';

exports.trumps = Object.freeze({
	'1':  '\u{1F0E1}',
	'2':  '\u{1F0E2}',
	'3':  '\u{1F0E3}',
	'4':  '\u{1F0E4}',
	'5':  '\u{1F0E5}',
	'6':  '\u{1F0E6}',
	'7':  '\u{1F0E7}',
	'8':  '\u{1F0E8}',
	'9':  '\u{1F0E9}',
	'10': '\u{1F0EA}',
	'11': '\u{1F0EB}',
	'12': '\u{1F0EC}',
	'13': '\u{1F0ED}',
	'14': '\u{1F0EE}',
	'15': '\u{1F0EF}',
	'16': '\u{1F0F0}',
	'17': '\u{1F0F1}',
	'18': '\u{1F0F2}',
	'19': '\u{1F0F3}',
	'20': '\u{1F0F4}',
	'21': '\u{1F0F5}'
});

// For the time being, these are mapped to the trump characters. There was at one point a proposal to
// add proper tarot cards to the spec (https://www.unicode.org/L2/L2011/11216-n4089-playingcards.pdf),
// as well as a proposal to add variant selectors to the existing cards to add support for tarot cards
// (https://www.unicode.org/L2/L2014/14223-tarot.pdf) but it seems to so far neither have been followed
// through with. If that ever happens, update these to point to the actual, correct characters
exports.majorArcana = Object.freeze({
	'0':  '\u{1F0E0}',
	'1':  '\u{1F0E1}',
	'2':  '\u{1F0E2}',
	'3':  '\u{1F0E3}',
	'4':  '\u{1F0E4}',
	'5':  '\u{1F0E5}',
	'6':  '\u{1F0E6}',
	'7':  '\u{1F0E7}',
	'8':  '\u{1F0E8}',
	'9':  '\u{1F0E9}',
	'10': '\u{1F0EA}',
	'11': '\u{1F0EB}',
	'12': '\u{1F0EC}',
	'13': '\u{1F0ED}',
	'14': '\u{1F0EE}',
	'15': '\u{1F0EF}',
	'16': '\u{1F0F0}',
	'17': '\u{1F0F1}',
	'18': '\u{1F0F2}',
	'19': '\u{1F0F3}',
	'20': '\u{1F0F4}',
	'21': '\u{1F0F5}'
});
