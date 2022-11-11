import Illustration from "../assets/illustration.png"
import Arrow from "../assets/arrow.svg";

export default function Hero() {

    function desplazarPagina() {
        const cryptos = document.querySelector('.cryptos').getBoundingClientRect();
         
        window.scroll({
            top: cryptos.top,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <div className="hero">
            <div className="hero__column hero__column--title">
                <h1 className="hero__title">
                    Quote the price of your most valuable cryptocurrencies
                </h1>
                <p className="hero__text">
                    Know the latest updates of the cryptocurrencies with the best market cap in seconds
                </p>
                <button className="hero__button" onClick={() => desplazarPagina()}>
                    View prices
                    <img src={Arrow} alt="arrow icon" className="hero__arrow" />
                </button>
            </div>

            <div className="hero__column hero__column--illustration">
                <picture className="hero__picture">
                    <img src={Illustration} alt="bitcoin illustration" className="hero__image" />
                </picture>
            </div>

        </div>
    )
}