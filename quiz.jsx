import { useState } from "react";
import questions from "./questions";
import "./quiz.css"

export default function QuizApp() {
    const [count, setCount] = useState(1)
    const [score, setScore] = useState(0)
    const [questionIdx, setQuestionIdx] = useState(0);
    const [showscore, setShowscore] = useState(false)
    const currentquestion = questions[questionIdx];

    const selectAnswer = (i) => {
        if (currentquestion.answer == i) {
            setScore(score + 1)
        }
        const nextQn = questionIdx + 1;
        if (nextQn < questions.length) {
            setQuestionIdx(questionIdx + 1)
            setCount(count + 1)
        }
        else {
            setShowscore(true)
        }
    }

    const reset=()=>{
        setQuestionIdx(0);
        setCount(1);
        setScore(0)
        setShowscore(false);
    }

    return (
        <div className="first">
            <h1 style={{ padding: "15px" }}>Question {count}:</h1>
            <div className="quiz-container">
                {showscore ? (
                <div style={{textAlign:"center"}}>
                <h1><b>Your Score : {score}</b></h1>
                <button onClick={reset}><b>Restart</b></button>
                </div>) :(<div className="question">
                    <p style={{textAlign:"center"}}><b>{currentquestion.question}</b></p>
                    <hr />
                    <div className="options">
                        <ul>
                            {currentquestion.options.map((option,i) => {
                                return <li className="list" onClick={() => selectAnswer(i)}>{option}</li>
                            })}
                            
                        </ul>
                    </div>
                </div>)}
                

            </div>
        </div>

    )

}