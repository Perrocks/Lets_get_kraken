import React from 'react'

const Scores = ({listOfScoreData}) => {
    console.log(listOfScoreData)

    return (
        <>
        <h1>Track your progress</h1>
        <p>Questions you've answered correctly!!: {listOfScoreData[0].wins}</p>
        <p>Questions you've answered incorrectly: {listOfScoreData[0].losses}</p>
        <p>Total questions you've answered: {listOfScoreData[0].total_played}</p>
        </>
    )
}

export default Scores