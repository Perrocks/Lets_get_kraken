import React from 'react'

const InfoItem = ({item}) => {


    return (
        <li>
            <p>Category:{item.category} </p>
            <p>Name:{item.name} </p>
            <p>Description:{item.description} </p>
            {item.category==="Pollutants" ? <p>Solutions:{item.threats}</p> : <p>Threats:{item.threats} </p>}
            <p>Examples:{item.examples} </p>
            <p>Picture: </p>
            <p>Further reading: </p>
        </li>
    )
}

export default InfoItem