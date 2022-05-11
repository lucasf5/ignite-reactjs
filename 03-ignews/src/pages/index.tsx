import { GetStaticProps} from "next"
import Head from "next/head";
import SubscribeButton from "../components/SubscribeButton/SubscribeButton";
import { stripe } from "../services/stripe";
import style from "./home.module.scss"

interface HomeProps{
  product: {
    priceId: string,
    amount: number,
  }
}

export default function Home({product}:HomeProps) {
  
  return (
    <>
      <Head>
        <title>Home | ig.News</title>
      </Head>
      <div>
        <main className={style.contentContainer}>
          <section className={style.hero}>
            <span>👏 Hey, welcome!</span>
            <h1>News about the <span>React</span> world.</h1>
            <p>
              Get acess to all the publications
              <br />
              <span> for {product.amount} month</span>
            </p>
            < SubscribeButton priceId={product.priceId}/>
          </section>
          <img src="/imgs/avatar.svg" alt="girl coding"/>
        </main>
      </div>
    </>
  );
}

export const getStaticProps :GetStaticProps = async() => {
  const price = await stripe.prices.retrieve('price_1KyFrnDH5u8b9sYeUk6CgOGr', {
    expand: ['product']
  })

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
      }).format((price.unit_amount / 100)) ,
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 //24 horas
  }
}