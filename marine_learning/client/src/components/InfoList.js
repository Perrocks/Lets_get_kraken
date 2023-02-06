import React from 'react'
import InfoItem from './InfoItem'

const InfoList = ({listOfMarineInfo, changeCounter}) => {
    console.log(listOfMarineInfo)
    const mappedMarineInfo = listOfMarineInfo.map((item) => {
        return <InfoItem item = {item} key = {item._id} changeCounter={changeCounter}/>
    })

    return (
        <ul>
            {mappedMarineInfo}
        </ul>
    )
}

export default InfoList