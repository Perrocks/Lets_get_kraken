import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import InfoList from '../components/InfoList'
import { getMarineInfo, getOneMarineItem, updateOneMarineItem } from '../components/MarineService'
import { getScoreData, updateScore } from '../components/QuizzService'
import NavBar from '../components/NavBar'
import Quizz from '../components/Quizz'
import HomePage from '../components/HomePage'

const MainContainer = () => {

const[listOfMarineInfo, setListOfMarineInfo] = useState([])
const[listOfScoreData,setScoreData]=useState([])
const [filterCount, setFilterCount] = useState ([])

useEffect(() => {
    getMarineInfo()
    .then((allMarineInfo) =>{
        setListOfMarineInfo(allMarineInfo)
        setFilterCount(allMarineInfo.filter(item => item.isChecked === true))
    })
    getScoreData()
    .then((allScoreData)=>{
        setScoreData(allScoreData)
    })
}, [])

const changeCounter = (isChecked, item) => {
    updateOneMarineItem(item)
    const updateItemIndex = listOfMarineInfo.findIndex(marineItem => marineItem._id === item._id)
    const updateMarineInfo = [...listOfMarineInfo]
    updateMarineInfo [updateItemIndex] = item
    setListOfMarineInfo(updateMarineInfo)
    const listOfFilteredInfo = updateMarineInfo.filter(item => item.isChecked === true)
    setFilterCount(listOfFilteredInfo)
}
const updateCurrentScore=(score)=>{
    updateScore(score)
    const updatedScoreIndex=listOfScoreData.findIndex(scoreItem=>scoreItem._id===score._id)
    const updatedScoreData=[...listOfScoreData]
    updatedScoreData[updatedScoreIndex]=score
    setScoreData(updatedScoreData)
}



    return (
        <>
            {/* {console.log(listOfScoreData[0])} */}
            <Router>
                <NavBar/>
                <Routes>
                    <Route exact path='/' element={<HomePage/>}/>
                    <Route path='/modules' exact element={<InfoList listOfMarineInfo = {listOfMarineInfo} changeCounter={changeCounter} filterCount={filterCount}/>}/>
                    <Route path='/quizz' element={<Quizz listOfMarineInfo={listOfMarineInfo} listOfScoreData={listOfScoreData} updateCurrentScore={updateCurrentScore}/>}/>
                </Routes>
                
            </Router>
        </>
    )
}

export default MainContainer
