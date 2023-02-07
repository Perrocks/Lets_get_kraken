import React, {useState, useEffect} from 'react'
// import Scores from './Scores'

const Quizz = ({listOfMarineInfo}) => {

    const [selectedOption, setSelectedOption] = useState(null);

    const eachQuestion = listOfMarineInfo.map((item) => {
        const randomInt = () => {
            const min = 0
            const max = 3
            return Math.trunc(Math.random()*(max - min) + min)
        }
        const resultRandomInt = randomInt()
        return (
            <li>
                <p>{item.questions[resultRandomInt].question}</p>
            </li>
        )
    })

    return (
        <ul>
            {eachQuestion}
        </ul>
        
    )
}

export default Quizz



// return (
//     <li key={item.id}>
//         <p>{item.questions[resultRandomInt].question}</p>
//         {item.questions[resultRandomInt].options.map((option, index) => (
//             <label key={option}>
//                 <input
//                     type="radio"
//                     value={option}
//                     checked={selectedOption === option}
//                     onChange={() => setSelectedOption(option)}
//                 />
//                 {option}
//             </label>
//         ))}
//     </li>
// );

    