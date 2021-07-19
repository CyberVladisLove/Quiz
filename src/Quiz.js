import React, { Component } from 'react'

export default class Quiz extends Component {

    constructor(props) {

        super(props);
        this.state = { questionNum: 0, question: "q1", answersVar: ["a1", "a2", "a3", "a4"], correctAnswer: "" };

        this.answers = { answer1: "Нет ответа", answer2: "Нет ответа", answer3: "Нет ответа", answer4: "Нет ответа", answer5: "Нет ответа" };
        this.score = 0;
        this.questionLength = 0;
        this.toRes = false;
    }

    componentDidMount() {
        this.nextQuestion();

    }
    nextQuestion() {
        let file = require('./quizes.json');

        let quiz = file[0];
        let q = quiz.questions[this.state.questionNum];
        this.setState({ questionNum: this.state.questionNum + 1, question: q.question, answersVar: q.answers, correctAnswer: q.correctAnswer });
        this.questionLength = quiz.questions.length;

        console.log(this.score);
    }
    setScore(val) {
        this.score = val;
    }
    

    componentWillUnmount() {


    }
    toResult() {
        

    }
    getAnswer(answer) {
        if (answer == this.state.correctAnswer) {
            this.setScore(this.score + 1);

        }
        let quiz = require('./quizes.json');
        let q = quiz[0].questions;
        if (this.state.questionNum < q.length) {

            this.nextQuestion();
        }
        else {
            this.toRes = true;
            
        }
        this.render();
        console.log(this.toRes);
    }

    render() {
        
        

        
        if (this.toRes) {
            console.log("s");
            return (
                <div className="result">
                    <div>Правильных ответов: {this.score} из {this.questionLength}</div>
                </div>
            )
        }
        else {
            return (

                <div className="quiz">
                    <h2>{this.state.question}</h2>

                    <button onClick={() => this.getAnswer(this.state.answersVar[0])} id="btn-v1" className="link" >{this.state.answersVar[0]} </button>
                    <button onClick={() => this.getAnswer(this.state.answersVar[1])} id="btn-v2" className="link" >{this.state.answersVar[1]} </button>
                    <button onClick={() => this.getAnswer(this.state.answersVar[2])} id="btn-v3" className="link" >{this.state.answersVar[2]} </button>
                    <button onClick={() => this.getAnswer(this.state.answersVar[3])} id="btn-v4" className="link" >{this.state.answersVar[3]} </button>

                </div>

            )
        }
        
    }
}