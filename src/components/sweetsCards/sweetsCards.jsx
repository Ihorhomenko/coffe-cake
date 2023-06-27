import { nanoid } from 'nanoid'
import "./sweetsCards.css"

const SweetsCards = ({sweets}) => {
    return (
        <div className='cards-continer'> 
            <ul className="cards">

            {sweets.map((el) => {
                return (<li className='cards-item' key={nanoid()}>
                    <div className="imgCard">
                        {/* <img src= {el.imgUrl} alt="" /> */}
                        <div className='cards-img'>
                            тут має бути фото торитка
                        </div>
                    </div>

                    <h3 className='cards-title'>{el.title}</h3>

                    <p className="cards-price">{el.price}</p>

                    <div className="cards-text-conteiner">
                        <p className='cards-text'>{el.text}</p>
                    </div>
                    
                </li>)
            } )}

            </ul>
        </div>
        
    )
}

export default SweetsCards