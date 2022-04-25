import {useEffect, useState} from "react";
import axios from "axios";
import {token} from "../../token";
import QuizItemComponent from "../QuizItem/QuizItemComponent";

export default function  QuizListComponent () {
    const [quizzes, setQuiizzes] = useState([]);
    const [pageLoaded, setPageLoaded] = useState(false);
    useEffect(() => {
        axios.get("https://pure-caverns-82881.herokuapp.com/api/v54/quizzes", { headers: { "X-Access-Token": token }})
            .then(res => {
                setQuiizzes(res.data);
                setPageLoaded(true);
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])
    return(
        <div>
            {pageLoaded ?
                <div className="quizList-wrapper">
                    {quizzes.map((quiz) => <QuizItemComponent quiz={quiz} key={quiz.id}/>)}
                </div>
                : <></>}
        </div>
    )
}