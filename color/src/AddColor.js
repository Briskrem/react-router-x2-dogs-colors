import {useState} from 'react'
import { useNavigate } from 'react-router-dom'

export const AddColor = ({mesh}) => {
    const navigate = useNavigate()
    
    let initial = {
        name: '',
        hue: '#000000'
    }
    const [ data, setData] = useState(initial)

    function handleChange(e){
        const {name, value} = e.target
        setData(data => ({
            ...data, 
            [name]: value
        }))
    }

    function handleSubmit(e){
        e.preventDefault()
        mesh(data)
        navigate('/')
    }

    return (
        <div>
            <form>
                <label>ENTER NAME</label>
                <input name='name' onChange={handleChange} type='text' value={data.name}/>

                <input name='hue' onChange={handleChange} type='color' value={data.hue}/>
                <button onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    )
}