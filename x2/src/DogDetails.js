import {dogList} from './dogList'
import { useParams } from 'react-router-dom'
import { Dog } from './Dog'



export const DogDetails = () => {
    const {name} = useParams()

    let choosen= dogList.filter(dog => dog.name == name)
    choosen = choosen[0]

    return (
        <div>
            <Dog name={choosen.name} age={choosen.age} src={choosen.src} facts={choosen.facts}/>
        </div>
    )
}