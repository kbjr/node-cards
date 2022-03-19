
import { Card } from './cards';
import { Suit } from './suits';
import { Rank, standard } from './ranks';

export const pokerRanking = ranking([
	standard.ace,
	standard.two,
	standard.three,
	standard.four,
	standard.five,
	standard.six,
	standard.seven,
	standard.eight,
	standard.nine,
	standard.ten,
	standard.jack,
	standard.queen,
	standard.king,
	standard.ace,
]);

export interface EvaluateHandsOpts {
	ranking?: Map<Rank, number[]>;
	wrapRanking?: boolean;
	// TODO: Wild-card evaluation
	wildCards?: null;
	minSizes?: {
		sameRank?: number;
		sameSuit?: number;
		sameSuitRuns?: number;
		runs?: number;
	};
}

export interface EvaluateHandsResult {
	highCard: Card;
	sameRank: Card[][];
	sameSuit: Card[][];
	sameSuitRuns: Card[][];
	runs: Card[][];
}

export function evaluatePossiblePokerHands(cards: Card[], wildCards?: null) {
	return evaluatePossibleHands(cards, {
		ranking: pokerRanking,
		wrapRanking: false,
		wildCards: wildCards,
		minSizes: {
			sameRank: 2,
			sameSuit: 5,
			sameSuitRuns: 5,
			runs: 5
		}
	});
}

export function evaluatePossibleHands(cards: Card[], opts: EvaluateHandsOpts = { }) : EvaluateHandsResult {
	const byRank: Map<Rank, Card[]> = new Map();
	const bySuit: Map<Suit, Card[]> = new Map();

	const minSizes = Object.assign({
		sameRank: 2,
		sameSuit: 5,
		sameSuitRuns: 5,
		runs: 5,
	}, opts.minSizes || { });

	const runs: Card[][] = findRuns(cards, minSizes.runs);
	const sameRank: Card[][] = [ ];
	const sameSuit: Card[][] = [ ];
	const sameSuitRuns: Card[][] = [ ];

	cards.forEach((card) => {
		if (byRank.has(card.rank)) {
			byRank.get(card.rank).push(card);
		}

		else {
			const cards = [ card ];
			byRank.set(card.rank, cards);
			sameRank.push(cards);
		}

		if (bySuit.has(card.suit)) {
			bySuit.get(card.suit).push(card);
		}

		else {
			const cards = [ card ];
			bySuit.set(card.suit, cards);
			sameSuit.push(cards);
		}
	});

	sameSuit.forEach((suitCards) => {
		sameSuitRuns.push(...findRuns(suitCards, minSizes.sameSuitRuns));
	});

	return {
		highCard: findHighCard(cards, opts.ranking),
		sameRank: sameRank.filter((cards) => cards.length >= minSizes.sameRank),
		sameSuit: sameSuit.filter((cards) => cards.length >= minSizes.sameSuit),
		sameSuitRuns,
		runs
	};
}

function findHighCard(cards: Card[], ranking: Map<Rank, number[]>) : Card {
	// 
}

function findRuns(cards: Card[], minLength: number) : Card[][] {
	// 
}

function ranking(ranks: Rank[]) {
	const rankingMap = new Map<Rank, number[]>();

	// ranks.forEach((rank, index) => {
	// 	rankingMap.set(rank, )
	// })

	return rankingMap;
}
