import { nanoid } from 'nanoid'
import "./cake.css"

const CakeCards = ({cakes}) => {
    return (
        <div className='cards-continer'> 
            <ul className="cards">

            {cakes.map((el) => {
                return (<li className='cards-item' key={nanoid()}>
                    <div className="imgCard">
                        {/* <img src= {el.imgUrl} alt="" /> */}
                        <div className='cards-img'>
                            тут має бути фото торитка
                        </div>
                    </div>

                    <h3 className='title'>{el.title}</h3>

                    <p className="price">{el.price}</p>

                    <div className="text-conteiner">
                        <p className='text'>{el.text}</p>
                    </div>
                    
                </li>)
            } )}

            </ul>
        </div>
        
    )
}

export default CakeCards