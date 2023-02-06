import React, {useState, useEffect} from 'react'
import Scores from './Scores'

const Quizz = ({listOfMarineInfo}) => {

    const eachQuestion = listOfMarineInfo.map((item) => {
        const randomInt = () => {
            const min = 0
            const max = 3
            return Math.trunc(Math.random()*(max - min) + min)
        }
        const resultRandomInt = randomInt()
        return (
            <li>
                <p>{item.questions[resultRandomInt].question}</p>
                {/* {console.log(item.questions[0], 'csdkchdckh')} */}
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