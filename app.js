const game = {
    title: 'Guess the Number!',
    biggestNum: 100,
    smallestNum: 1,
    secretNum: null,
    guessNum: null,
    prevGuess: [],
    getGuess: function() {
        guessNum = prompt(`Enter a guess between ${this.smallestNum} and ${this.biggestNum}`)
        return guessNum;
                   
    },

    guessNum: null,

    play: function() {
      this.secretNum = Math.floor(Math.random() * 
        (this.biggestNum - this.smallestNum + 1)) + this.smallestNum;
        while (this.getGuess()!= this.secretNum) { // the loop is going to run if they are not equal
          if(guessNum != 0) { 
            this.render(); // the value of getguess will be put into guessnum and if guessnum is not equal to 0 render will be called
          }
        }
      },

      render: function () {
        if(guessNum > this.secretNum) {
          alert("Too high")
        } else {
          alert("Too low")
        }
      }
        // this.secretNum;
        // let newguess = 0;
        // while(newguess > this.smallestNum.length && newguess < this.biggestNum.length);
        // newguess++; 
        // console.log(newguess); {
        //   this.prevGuess.push(newguess);
        //   return this.prevGuess;
        //   console.log(this.prevGuess);
        // }
    }
  
  console.log(game.play())