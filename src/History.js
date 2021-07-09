import React, { Component } from 'react'
import './style.css'

let games = require('./games.json');

export default class History extends Component {
    render() {
        
        for (let i = -1; i < games.length; i++) {
            createCard(i);

        }


        return (
            <div>
                History
            </div>
        )
    }
}




function createCard(i) {

    let table = document.getElementById('root1');
    let id = document.createElement('text');
    let date = document.createElement('text');
    let quizId = document.createElement('text');
    let correctAnswers = document.createElement('text');
    let card = document.createElement('div');
    card.id = "card";

    if (i == -1) {
        id.innerText ="id";
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

}