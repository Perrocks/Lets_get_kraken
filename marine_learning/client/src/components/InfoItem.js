import React from 'react'

const InfoItem = ({item, changeCounter}) => {

    const handleChange = (evt) => {
        let checkedItem = item.isChecked
        checkedItem = evt.target.checked
        changeCounter(checkedItem, {
            _id: item._id,
            category: item.category,
            name: item.name,
            description: item.description,
            threats: item.threats,
            examples: item.examples,
            picture: item.picture,
            url: item.url,
            isChecked: checkedItem,
            questions: item.questions
        })
    }

    return (
        <li>
            <p>Category:{item.category} </p>
            <p>Name:{item.name} </p>
            <p>Description:{item.description} </p>
            {item.category==="Pollutants" ? <p>Solutions:{item.threats}</p> : <p>Threats:{item.threats} </p>}
            <p>Examples:{item.examples} </p>
            <p>Picture: </p>
            <p>Further reading: </p>
            <div>
                <input type="checkbox" id='checkbox' name='checkbox' checked={item.isChecked} onChange={handleChange}/>
                <label htmlFor='checkbox'>Done!</label>
            </div>
        </li>
    )
}

export default InfoItem