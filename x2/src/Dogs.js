import { dogList } from "./dogList"
import {useNavigate} from 'react-router-dom'
import {Dog} from './Dog'


export const Dogs = () => {

    const navigate = useNavigate()
    return (
        <div>
        hello
        {dogList.map((dog, idx) => (
            <button  key={idx} onClick={()=>navigate(`/dog-details/${dog.name}`)}>
                <Dog name={dog.name} src={dog.src} />
            </button>   
        ))}
        </div>
    )
}