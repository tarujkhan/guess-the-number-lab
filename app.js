const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    prevGuess: [],
    getGuess: function() {
        console.log(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
        // let newguess = 0;
        // while(newguess > this.smallestNum.length && newguess < this.biggestNum.length)
        // console.log(newguess); {
        //   this.prevGuess.push(newguess);
        //   return this.prevGuess;
        //   console.log(this.prevGuess);
        // }
        // grab user input through a method
            
    },
    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        this.secretNum;
        let newguess = 0;
        while(newguess > this.smallestNum.length && newguess < this.biggestNum.length);
        newguess++; 
        console.log(newguess); {
          this.prevGuess.push(newguess);
          return this.prevGuess;
          console.log(this.prevGuess);
        }
    }
  }
  console.log(game.play())