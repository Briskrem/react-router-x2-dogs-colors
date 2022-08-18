import {Routes, Route} from 'react-router-dom'
import {Dogs} from './Dogs'
import { Perry } from './Perry'
import { Whiskey } from './Whiskey'
import { Duke } from './Duke'
import { Tubby } from './Tubby'
import { DogDetails} from './DogDetails'
import { NotFound } from './NotFound'

export const MainRoute = () => {

    return (
        <div>
            <Routes>
                <Route path='/' element={<Dogs />}/>
                <Route path='/perry' element={<Perry />} />
                <Route path='/whiskey' element={<Whiskey />} />
                <Route path='/duke' element={<Duke />} />
                <Route path='/tubby' element={<Tubby />} />
                <Route path='/dog-details/:name' element={<DogDetails />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}