import {Routes, Route, Link} from 'react-router-dom'
import { useState} from "react"
import {Colors} from './Colors'
import {ColorDisplay} from './ColorDisplay'
import {AddColor} from './AddColor'
import {colorList} from './ColorList'
import './MainRoutes.css'


export const MainRoutes = () => {
    const [colors, setColor] = useState(colorList)

    function mesh({name, hue}){
        setColor(color => [...color, {name: name, hue: hue}])
    }
   
    return (
        <div className='MainRoutes'>
            <nav> 
                <Link to={'add-color'}>Add Color</Link>
            </nav>
            <Routes>
                <Route path={'/'} element={<Colors colors={colors}/>} />
                <Route path={'/colors/:choosen'} element={<ColorDisplay />} />
                <Route path={'add-color'} element={<AddColor mesh={mesh}/>} />
            </Routes>
        </div>
    )
}