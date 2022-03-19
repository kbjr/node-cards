
import { Rank } from './_rank';

export namespace standard {
	export const ace   = new Rank('A',     'Ace');
	export const two   = new Rank('2',     'Two');
	export const three = new Rank('3',     'Three');
	export const four  = new Rank('4',     'Four');
	export const five  = new Rank('5',     'Five');
	export const six   = new Rank('6',     'Six');
	export const seven = new Rank('7',     'Seven');
	export const eight = new Rank('8',     'Eight');
	export const nine  = new Rank('9',     'Nine');
	export const ten   = new Rank('10',    'Ten');
	export const jack  = new Rank('J',     'Jack');
	export const queen = new Rank('Q',     'Queen');
	export const king  = new Rank('K',     'King');
	export const joker = new Rank('Joker', 'Joker');
}
