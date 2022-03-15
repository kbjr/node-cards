
/**
 * The main base class for representing a rank of card (eg. "ace" or "king")
 */
export class Rank {
	constructor(
		public readonly abbrn: string,
		public readonly name: string,
	) { }

	/**
	 * Returns a human-readable string representation of the rank object
	 *
	 * eg. `"<Rank name=Ace abbrn=A>"`
	 */
	public toString() {
		return `<Rank name=${this.name} abbrn=${this.abbrn}>`;
	}
}
