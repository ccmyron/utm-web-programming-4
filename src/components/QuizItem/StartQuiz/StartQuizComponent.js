import {useEffect, useState} from "react";
import axios from "axios";
import {token} from "../../../token";
import AnswersComponent from "./Answers/AnswersComponent";
import {Button} from "@mui/material";

export default function StartQuizComponent () {
    const [rendered, setRendered] = useState(false);
    const [quiz, setQuiz] = useState([]);
    useEffect(() => {
        let quizId = +localStorage.getItem('quizId');
        axios.get(`https://pure-caverns-82881.herokuapp.com/api/v54/quizzes/${quizId}`,
            {
                headers: {
                    "X-Access-Token": token
                }
            }).then(res => {
                setQuiz(res.data)
                setRendered(true);
        })
    }, [])
    return (
        <div>
            {rendered ? <div>
                <h1>{quiz.title}</h1>
                {quiz.questions.map((question) =>
                    <AnswersComponent question={question} key={question.id}/>)}
            </div>
            : <></>}
        </div>
    )
}