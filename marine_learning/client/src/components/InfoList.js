import React, {useState} from 'react'
import InfoItem from './InfoItem'

const InfoList = ({listOfMarineInfo, changeCounter, filterCount,saveFilteredSearch,filter}) => {

    const handleChange=(evt)=>{
        const filterInput=evt.target.value      
        saveFilteredSearch(filterInput)
    }

    const mappedMarineInfo = listOfMarineInfo.map((item) => {
        return <InfoItem item = {item} key = {item._id} changeCounter={changeCounter}/>
    })


    return (
        <>
        <form>
            <input type="text" placeholder="Search for ..." value={filter} onChange={handleChange}/>
        </form>
        <ul>
            {mappedMarineInfo}
        </ul>
        <div>
            {filterCount.length === 20 ? <a href='/quizz'>Test your knowledge!</a> : <p>Read all the info to unlock the quiz...!</p>}
        </div>
        
        </>
    )
}

export default InfoList

