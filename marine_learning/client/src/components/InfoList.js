import React from 'react'
import InfoItem from './InfoItem'

const InfoList = ({listOfMarineInfo}) => {
    console.log(listOfMarineInfo)
    const mappedMarineInfo = listOfMarineInfo.map((item) => {
        return <InfoItem item = {item} key = {item._id}/>

    })
    return (
        <ul>
            {mappedMarineInfo}
        </ul>
    )
}

export default InfoList