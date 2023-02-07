import React, {useState, useEffect} from 'react'
import Scores from './Scores'

const Quizz = ({listOfMarineInfo}) => {


    const handleClick=(currentQuestion,val)=>{
        console.log("this is the current quest ",currentQuestion)
        let buttonValue=val
        if(buttonValue==="true"){
            buttonValue=true
        }
        else{
            buttonValue="false"
        }
        if(currentQuestion.correct_answer===buttonValue){
            //increment score
            console.log("gets to here")
            return(
                // <p>Congrats</p>
                alert("Congrats")
            )
        }
        else{
            console.log("gets to here fasle")
            return(
                alert("")
                // <p>You got this wrong, are you sure you read the information?</p>
            )
        }
    }

    const eachQuestion = listOfMarineInfo.map((item) => {
        const randomInt = () => {
            const min = 0
            const max = 3
            return Math.trunc(Math.random()*(max - min) + min)
        }
        const resultRandomInt = randomInt()
        const variableToPassIn=item.questions[resultRandomInt]
        return (
            <li>
                <p>{item.questions[resultRandomInt].question}</p>
                {/* {console.log("afhdf",item.questions[resultRandomInt])} */}
                <button onClick={()=>handleClick(variableToPassIn,'true')}>True</button>
                <button onClick={()=>handleClick(variableToPassIn,'false')}>False</button>
            </li>
        )
    })

    return (
        <ul>
            {eachQuestion}
        </ul>
    )
}

export default Quizz