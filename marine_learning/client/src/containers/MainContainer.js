import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import InfoList from '../components/InfoList'
import { getMarineInfo, getOneMarineItem } from '../components/MarineService'
import NavBar from '../components/NavBar'
import Quizz from '../components/Quizz'
import HomePage from '../components/HomePage'

const MainContainer = () => {

const[listOfMarineInfo, setListOfMarineInfo] = useState([])

useEffect(() => {
    getMarineInfo()
    .then((allMarineInfo) =>{
        setListOfMarineInfo(allMarineInfo)
    })
}, [])




    return (
        <Router>
            <NavBar/>
            <Routes>
                <Route exact path='/' element={<HomePage/>}/>
                <Route path='/modules' exact element={<InfoList listOfMarineInfo = {listOfMarineInfo}/>}/>
                <Route path='/quizz' element={<Quizz/>}/>
            </Routes>
        </Router>
    )
}

export default MainContainer
