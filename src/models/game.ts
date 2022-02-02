// in dieser datei werden alle eigenschaften vom spiel gespeichert

export class Game {
    public players: string[] = [];
    public stack: string[] = []; //<= die ungespielten karten
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('spade_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
        }

        shuffleArray(this.stack);
    }
}


function shuffleArray(inputArray: any[]) {
    inputArray.sort(() => Math.random() - 0.5);
}