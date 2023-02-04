import React from 'react'
import InfoItem from './InfoItem'

const InfoList = ({listOfMarineInfo}) => {
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