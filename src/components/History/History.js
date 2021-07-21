import React, { Component } from 'react'
import './style.css'

export default class History extends Component {

    constructor(props) {
        super(props);
        this.games = require('../../data/games.json');//из файла
        this.gamesLS = JSON.parse(localStorage.getItem("quizes"));//из localstorage

    }

    componentDidMount() {

    }

    render() {

        if (this.gamesLS) {

            return (
                <div id="history">

                    <div class="card">
                        <text id="h_text"> id </text>
                        <text id="h_text"> date </text>
                        <text id="h_text"> quizId </text>
                        <text id="h_text"> correctAnswers </text>
                    </div>


                    {
                        this.gamesLS.map(item => (
                            <div class="card">
                                <text id="h_text"> {item.id} </text>
                                <text id="h_text"> {item.date} </text>
                                <text id="h_text"> {item.quizId} </text>
                                <text id="h_text"> {item.correctAnswers} </text>
                            </div>
                        ))
                    }
                </div >
            )
        }
        else {
            return (

                <div id="history">

                    <div class="card">
                        <text id="h_text"> id </text>
                        <text id="h_text"> date </text>
                        <text id="h_text"> quizId </text>
                        <text id="h_text"> correctAnswers </text>
                    </div>
                </div>
            )
        }

    }
}




