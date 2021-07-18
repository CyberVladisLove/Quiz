import React, {Component} from 'react'

export default class Quiz extends Component{

    constructor(props) {
        
        super(props);
        this.state = {questionNum: 0, question: "q1", answersVar:[ "a1","a2", "a3", "a4"], correctAnswer: ""};
        
        this.answers = {answer1: "Нет ответа", answer2: "Нет ответа", answer3: "Нет ответа", answer4: "Нет ответа"};
        this.score = 0;

        
    }

    componentDidMount() {
        this.nextQuestion();
        
    }
    nextQuestion(){
        let quiz = require('./quizes.json');
        console.log(this.state.question);
        let q = quiz[0].questions[this.state.questionNum];
        this.setState({question: q.question, answersVar: q.answers, correctAnswer: q.correctAnswer});

        
        console.log(this.score);
    }
    setScore(val){
        this.score = val;
    }
    
    componentWillUnmount() {
        
        
    }
    getAnswer(answer){
        if(answer==this.state.correctAnswer){
            this.setScore(this.score + 1);
        }
        let quiz = require('./quizes.json');
        let q = quiz[0].questions;
        if(this.state.questionNum < q.length){
            this.setState({questionNum: this.state.questionNum + 1});
            this.nextQuestion();
        }
        else{
            console.log("to result");
        }
    }

    render(){
        return(
            <div>
                
                <h2>{this.state.question}</h2>
                
                <button onClick={() => this.getAnswer(this.state.answersVar[0])} id="btn-v1" className="link" value={this.state.answersVar[0]}>{this.state.answersVar[0]} </button>
                <button onClick={() => this.getAnswer(this.state.answersVar[1])} id="btn-v2" className="link" value={this.state.answersVar[1]}>{this.state.answersVar[1]} </button>
                <button onClick={() => this.getAnswer(this.state.answersVar[2])} id="btn-v3" className="link" value={this.state.answersVar[2]}>{this.state.answersVar[2]} </button>
                <button onClick={() => this.getAnswer(this.state.answersVar[3])} id="btn-v4" className="link" value={this.state.answersVar[3]}>{this.state.answersVar[3]} </button>
                
                
            </div>
            
        )
    }
}