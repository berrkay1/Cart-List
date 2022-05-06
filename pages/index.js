import Cart from "../components/Card";
import Style from '../styles/Home.module.css';


export default function Home({ data }) {

 
  return (
    <div className={Style.container}>
      <h2>ETKİNLİK LİSTESİ</h2>
      <ul className={Style.card}>

        {data.map(item => (

          
          <li key={item.id} className={Style.cardList}>
            <Cart item={item} />
          </li>

        ))}
      </ul>
    </div>
  )
}


export const getStaticProps = async () => {
  const res = await fetch('https://oggustowp.bomajans.site/wp-json/wp/v2/posts?_embedded[%27wp:featuredmedia%27][%270%27].source_url');

  const data = await res.json();

  return {
    props: {
      data
    }
  }
}

