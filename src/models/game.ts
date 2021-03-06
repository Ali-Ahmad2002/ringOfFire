// in dieser datei werden alle eigenschaften vom spiel gespeichert

export class Game {
    public players: string[] = [];
    public playerImages: string[] = [];
    public stack: string[] = []; //<= die ungespielten karten
    public playedCards: string[] = [];
    public currentPlayer: number = 0;
    public pickCardAnimation = false;
    public currentCard: string = '';

    constructor() {
        for (let i = 1; i < 14; i++) {
            this.stack.push('spade_' + i);
            this.stack.push('hearts_' + i);
            this.stack.push('clubs_' + i);
            this.stack.push('diamonds_' + i);
        }

        shuffleArray(this.stack);
    }
    public toJson() {
        return {
            players: this.players,
            playerImages: this.playerImages,
            stack: this.stack,
            playedCards: this.playedCards,
            currentPlayer: this.currentPlayer,
            pickCardAnimation: this.pickCardAnimation,
            currentCard: this.currentCard
        };
    }
}

function shuffleArray(inputArray: any[]) {
    inputArray.sort(() => Math.random() - 0.5);
}