import Style from '../styles/Card.module.css';


const Card = ({ item }) => (
    <div>
        <div className={Style.title}>{item.title.rendered}</div>
        <img src={item.img_url} className={Style.img} />
        <p className={Style.descripton}>{item.excerpt.rendered}</p>
    </div>
)


export default Card;