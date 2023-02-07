import React, {useState, useEffect} from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom' 
import InfoList from '../components/InfoList'
import { getMarineInfo, getOneMarineItem, updateOneMarineItem } from '../components/MarineService'
import { getScoreData, updateScore } from '../components/QuizzService'
import NavBar from '../components/NavBar'
import Header from '../components/Header'
import Quizz from '../components/Quizz'
import HomePage from '../components/HomePage'

const MainContainer = () => {

    const[listOfMarineInfo, setListOfMarineInfo] = useState([])
    const[listOfScoreData,setScoreData]=useState([])
    const [filterCount, setFilterCount] = useState ([])
    // const [filteredMarineList,setFilteredList]=useState([])
    const [filter,setFilter]=useState(null)

    const [filteredMarineList, setFilteredList] = useState(listOfMarineInfo);


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

    const saveFilteredSearch=(filteredInput)=>{
        setFilter(filteredInput)
        const results=listOfMarineInfo.filter(data=>data.name.toLowerCase().includes(filteredInput))
        setFilteredList(results)
    }

    const handleSelect = (evt) => {
        const category = evt.target.value;
        const sortedItems = listOfMarineInfo.filter(item => item.category === category);
        setFilteredList(sortedItems);
    };

    return (
        <>
            <Router>
                <Header/>
                <NavBar/>
                <Routes>
                    <Route exact path='/' element={<HomePage/>}/>
                    <Route path='/modules' exact element={<InfoList handleSelect={handleSelect} listOfMarineInfo = {!filter ? listOfMarineInfo:filteredMarineList} filter={filter} changeCounter={changeCounter} filterCount={filterCount} saveFilteredSearch={saveFilteredSearch}/>}/>
                    <Route path='/quizz' element={<Quizz listOfMarineInfo={listOfMarineInfo} listOfScoreData={listOfScoreData} updateCurrentScore={updateCurrentScore}/>}/>
                </Routes>
                
            </Router>
        </>
    )
}

export default MainContainer
