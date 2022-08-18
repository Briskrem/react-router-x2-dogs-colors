import './Dog.css'

export const Dog = ({name, age, src, facts}) => {
    return (
        <div className='Dog'>
            <h3>{name}</h3>
            <div>
                <img className='YY' src={src} alt='dog' ></img>
            </div>  
            {age? <p>{age}</p>: null}
            {facts? <p>{facts}</p>: null}
        </div>
    )
}
