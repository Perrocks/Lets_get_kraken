import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import InfoList from '../components/InfoList'
import { getMarineInfo, getOneMarineItem, updateOneMarineItem } from '../components/MarineService'
import NavBar from '../components/NavBar'
import Quizz from '../components/Quizz'
import HomePage from '../components/HomePage'

const MainContainer = () => {

const[listOfMarineInfo, setListOfMarineInfo] = useState([])
const [filterCount, setFilterCount] = useState ([])

useEffect(() => {
    getMarineInfo()
    .then((allMarineInfo) =>{
        setListOfMarineInfo(allMarineInfo)
        setFilterCount(allMarineInfo.filter(item => item.isChecked === true))
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



    return (
        <>
            <Router>
                {console.log(filterCount)}
                <NavBar/>
                <Routes>
                    <Route exact path='/' element={<HomePage/>}/>
                    <Route path='/modules' exact element={<InfoList listOfMarineInfo = {listOfMarineInfo} changeCounter={changeCounter} filterCount={filterCount}/>}/>
                    <Route path='/quizz' element={<Quizz listOfMarineInfo={listOfMarineInfo}/>}/>
                </Routes>
                
            </Router>
        </>
    )
}

export default MainContainer
