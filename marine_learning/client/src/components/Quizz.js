import React, {useState, useEffect} from 'react'
import Scores from './Scores'

const Quizz = ({listOfMarineInfo,listOfScoreData,updateCurrentScore}) => {
    console.log("score data",listOfScoreData)

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
            const newWins=listOfScoreData[0].wins +1
            const newTotalPlayed=listOfScoreData[0].total_played+1
            updateCurrentScore({
                _id:listOfScoreData[0]._id,
                wins:newWins,
                losses:listOfScoreData[0].losses,
                total_played:newTotalPlayed
            })
            return(
                alert("Whale done , you got that right!!")
            )
        }
        else{
            const newLosses=listOfScoreData[0].losses +1
            const newTotalPlayed=listOfScoreData[0].total_played+1
            updateCurrentScore({
                _id:listOfScoreData[0]._id,
                wins:listOfScoreData[0].wins,
                losses:newLosses,
                total_played:newTotalPlayed
            })
            return(
                alert("You got this wrong, but dont be crabby")
            )
        }
    }

    const [selectedOption, setSelectedOption] = useState(null);

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
        <section>
            <ul>
                {eachQuestion}
            </ul>
            <div>
                {listOfScoreData.length && <Scores listOfScoreData={listOfScoreData}/>}
            </div>
        </section>

    )
}

export default Quizz



    