import React, { Component } from 'react'

export default class Quiz extends Component {

    constructor(props) {

        super(props);
        this.state = { questionNum: 0, question: "q1", answersVar: ["a1", "a2", "a3", "a4"], correctAnswer: "" };

        this.answers = { answer1: "Нет ответа", answer2: "Нет ответа", answer3: "Нет ответа", answer4: "Нет ответа", answer5: "Нет ответа" };
        
        this.questionLength = 0;

        this.score = 0;
        this.toRes = false; //триггер, если true - игра завершена
        this.quizes = require('../../data/quizes.json'); //доступ к файлу квизов
        this.index = Math.floor(Math.random() * this.quizes.length); //рандомный подбор квиза
    }

    componentDidMount() {
        this.nextQuestion();

    }
    nextQuestion() {
        
        
        const quiz = this.quizes[this.index];
        const q = quiz.questions[this.state.questionNum];
        this.setState({ questionNum: this.state.questionNum + 1, question: q.question, answersVar: q.answers, correctAnswer: q.correctAnswer });
        this.questionLength = quiz.questions.length;

    }
    
    

    
    getAnswer(answer) {
        if (answer === this.state.correctAnswer) {
            this.score++;
        }
        
        const q = this.quizes[0].questions;
        if (this.state.questionNum < q.length) {

            this.nextQuestion();
        }
        else {
            this.toRes = true;
            const buttons = document.getElementById("vars");
            buttons.style.visibility = "hidden";
            const result = "Правильных ответов: " + this.score + " из " + q.length;
            this.setState({question: result});

        }
        this.render();
        console.log(this.toRes);
    }

    render() {

        if (this.toRes) {
            
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
                    
                    <div id="vars">
                    {this.state.answersVar.map((item) => (
                        <button onClick={() => this.getAnswer(item)} id="btn-v" className="link" >{item} </button>
                    ))}
                    </div>
        
                </div>
                

            )
        }
        
    }
}