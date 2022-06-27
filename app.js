const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuess: [],
    getGuess: function() {
        console.log(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
        let newguess = 0;
        
    },
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum
        return this.secretNum;
    }
  }
  console.log(game.play())