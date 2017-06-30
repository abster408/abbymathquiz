import { Component } from '@angular/core';

@Component({//1
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})//1
export class AppComponent {//


  question() {
    this.questions = false
    this.resetbutton();
    this.markbutton = false
    //this.allanswers = [];
    // reset symbol array
    // reset question array
    // reset answer array
    if (this.multiply)
      this.symbol.push('*')

    if (this.divide)
      this.symbol.push('/')
    console.log(this.symbol);

    for (var i = 0; i < 20; i++) {

      var symbol = this.symbol[Math.floor(Math.random() * this.symbol.length)]
      var question = (Math.floor((Math.random() * 10) + 1) + symbol + Math.floor((Math.random() * 10) + 1))
      // this.symbol.push(this.multiply)
      // this.symbol.push(this.divide)
      this.questionlist.push(question)

      var rightanswer = eval(question)
      var allanswers = []

      allanswers.push(rightanswer + 2)
      allanswers.push(rightanswer - 17)
      allanswers.push(rightanswer + 15)
      allanswers.push(rightanswer)
      this.correctanswer.push(rightanswer)
      allanswers = this.shuffleArray(allanswers)
      console.log(allanswers)
      this.answerlist.push(allanswers)
    }
    this.Timer();

    console.log(this.questionlist);
    console.log(this.answerlist);
  }
  //Just like functions, variables and stuff
  timer = 120;
  timereset = 120
  title = 'app'
  num1 = Math.floor((Math.random() * 10) + 1);
  num2 = Math.floor((Math.random() * 10) + 1);
  questionlist = [];
  answerlist = [];
  correctanswer = [];
  allanswers = [];
  symbol = ["+", "-"];
  start = false
  questions = false
  startbutton = false
  markbutton = true
  retry = true
  multiply;
  divide;
  studans = [];
  score = 0;
  name;
  disabled = false;
  timerfunction;
  nameandscore = [];
  //The way the answers are suffled(the correct answers aren't always in the same place)
  shuffleArray(array) {//6
    for (var i = array.length - 1; i > 0; i--) {//7
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }//6
    return array;//don't really know
  }//7
  Timer() {
    let a2 = this;
    this.timerfunction = setInterval(function() {//5
      a2.checkTime()
    }, 1000);
  }

  resetbutton() {
    this.symbol = ["+", "-"];
    this.questionlist = [];
    this.answerlist = [];
    this.correctanswer = [];
    this.allanswers = [];
    // this.name = ""
    clearInterval(this.timerfunction)
    this.disabled = false
    this.timer = 120
    this.score = undefined
    this.start = true
  }

  mark() {
    this.questions = true
    this.start = false
    this.markbutton = true
    this.retry = false
    this.score = 0
    console.log(this.name);
    // this.array.push({name:this.name,score:this.score})
    clearInterval(this.timerfunction)
    console.log(this.studans)
    console.log(this.correctanswer)
    for (var i = 0; i < 20; i++) {
      if (this.studans[i] == this.correctanswer[i]) {
        this.score = this.score + 1

      }
    }
    this.nameandscore.push({ name: this.name, score: this.score })

    console.log(this.nameandscore[0].name)
    console.log(this.nameandscore[0].score)
    console.log(this.nameandscore)

    this.disabled = true
    console.log(this.score)
  }
  //checks the time to keep the timer going
  checkTime() {//8

    //the way the timer goes down(removes 1 from 120 every second)
    this.timer = this.timer - 1;
    if (this.timer == 0) {
      clearInterval(this.timerfunction)
      this.disabled = true
    }
  }
}
