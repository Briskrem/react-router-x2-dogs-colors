import { useParams, useLocation } from "react-router-dom"

export const ColorDisplay = () => {
    let {choosen} = useParams()

    const location = useLocation()
    const colors = location.state?.colors;

    choosen = colors.filter(col => col.name == choosen)[0]

    return (
        <div style={{backgroundColor: choosen.hue, height: '96vh', width: '100vw'}}>
            <p>{choosen.name}</p>
        </div>
    )
}