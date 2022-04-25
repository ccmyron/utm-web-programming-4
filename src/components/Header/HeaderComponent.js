import PlayerComponent from "./Player/PlayerComponent";
import {NavLink} from "react-router-dom";
import './Header.css'
import {useEffect, useState} from "react";
import {Button} from "@mui/material";

export default function  HeaderComponent () {
    const [logged, setLogged] = useState(false);
    useEffect(() => {
        setLogged(JSON.parse(localStorage.getItem('isLogged')));
    }, [logged])


    return(
        <header className="header-wrapper">
            <PlayerComponent/>
            {logged ? <div className="header-wrapper-btns">
                        <NavLink to="/quizzes"><Button>Quizzes</Button></NavLink>
                        <NavLink to="/addQuiz"><Button>Add  a quiz</Button></NavLink>
            </div> : <></>}
        </header>
    )
}