import React, { Component } from 'react'
import './style.css'



export default class History extends Component {

    constructor(props) {
        super(props);
        this.games = require('./games.json');

    }

    componentDidMount() {

    }

    render() {

        return (
            <div id="history">
                
                    <div class="card">
                        <text id="h_text"> id </text>
                        <text id="h_text"> date </text>
                        <text id="h_text"> quizId </text>
                        <text id="h_text"> correctAnswers </text>
                    </div>
                
                {this.games.map(item => (
                    <div class="card">
                        <text id="h_text"> {item.id} </text>
                        <text id="h_text"> {item.date} </text>
                        <text id="h_text"> {item.quizId} </text>
                        <text id="h_text"> {item.correctAnswers} </text>
                    </div>
                ))}
            </div>
        )

    }
}




/*function createCard(i) {

    let table = document.getElementById('root1');
    let id = document.createElement('text');
    let date = document.createElement('text');
    let quizId = document.createElement('text');
    let correctAnswers = document.createElement('text');
    let card = document.createElement('div');
    card.id = "card";

    if (i == -1) {
        id.innerText = "id";
        date.innerText = "date";
        quizId.innerText = "quizId";
        correctAnswers.innerText = "correct answers";
    }
    else {
        id.innerText = games[i].id;
        date.innerText = games[i].date;
        quizId.innerText = games[i].quizId;
        correctAnswers.innerText = games[i].correctAnswers;
    }
    card.appendChild(id);
    card.appendChild(date);
    card.appendChild(quizId);
    card.appendChild(correctAnswers);
    table.appendChild(card);

}*/