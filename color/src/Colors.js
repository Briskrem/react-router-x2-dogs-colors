import { Link } from "react-router-dom"

export const Colors = ({colors}) => {

    return (
        <div>
            {colors.map((color, idx) => (
                <Link key={idx} to={`/colors/${color.name}`} state={{ colors: colors }} >   {color.name}   </Link>
            ))}
        </div>
    )
}