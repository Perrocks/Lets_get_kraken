import React, {useState, useEffect} from 'react'
import InfoList from '../components/InfoList'
import { getMarineInfo, getOneMarineItem } from '../components/MarineService'

const MainContainer = () => {

const[listOfMarineInfo, setListOfMarineInfo] = useState([])

useEffect(() => {
    getMarineInfo()
    .then((allMarineInfo) =>{
        setListOfMarineInfo(allMarineInfo)
    })
})











    return (
        <>
        <h1>"I'm the header of the container!"</h1>
        <InfoList listOfMarineInfo = {listOfMarineInfo}/>
        </>
    )
}

export default MainContainer
