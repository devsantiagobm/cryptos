import { useEffect, useState } from "react"
import CryptoTable from "./CryptoTable";

export default function Cryptos(props) {
    const { monedas, moneda, limite, setMoneda, setLimite, loading } = props;
    const [currentCoin, setCurrentCoin] = useState("USD");
    const [currentLimit, setCurrentLimit] = useState("10")
    const [selectOpen, setSelectOpen] = useState(true);

    const coins = ["USD", "JPY", "EUR", "MXN", "GBP", "COP", "CAD", "BRL"]
    const id = () => Math.random().toString(36).substr(2, 18) + Math.random().toString(36).substr(2, 18);

    function mostrarLista() {
        const lista = document.querySelector('.coin__list')
        lista.style.maxHeight = selectOpen ? "0px" : lista.scrollHeight + 16 + "px"
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (currentLimit !== "") setLimite(currentLimit)
        setMoneda(currentCoin)
    }

    function cambiarMoneda(e) {
        const nuevaMoneda = e.target.dataset.value;
        setSelectOpen(!selectOpen)
        setCurrentCoin(nuevaMoneda)
    }

    function cambiarLimite(e) {
        const nuevoLimite = e.target.value
        const numerosValidos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

        const caracterValido = numerosValidos.some(n => n == Number(nuevoLimite))

        if (caracterValido || nuevoLimite === "") {
            setCurrentLimit(nuevoLimite)
            return
        }

        animarInputNumber()
    }

    function animarInputNumber() {
        const inputNumber = document.querySelector(".cryptos__limit")
        inputNumber.classList.add('cryptos__limit--shake')
        setTimeout(() => inputNumber.classList.remove('cryptos__limit--shake'), 300);
    }

    useEffect(() => {
        mostrarLista()
    }, [selectOpen])

    return (
        <div className="cryptos">
            <h2 className="cryptos__title">Updated Cryptocurrencies</h2>

            <div className="cryptos__options">
                <div className="cryptos__preferences">
                    <div className="cryptos__current-coin">
                        Current coin: {" "}
                        <span className="cryptos__bold">{moneda}</span>
                    </div>
                    <div className="cryptos__current-limit">
                        Current limit: {" "}
                        <span className="cryptos__bold">{limite}</span>
                    </div>
                </div>
                <form action="#" method="#" className="cryptos__form" onSubmit={handleSubmit}>
                    <div className="cryptos__coin coin">
                        <div className="coin__button" onClick={() => setSelectOpen(!selectOpen)}>{currentCoin}</div>
                        <ul className="coin__list">


                            {
                                coins.map(coin => (
                                    <li data-value={coin} key={id()} className="coin__item" onClick={e => cambiarMoneda(e)}  translate="no">{coin}</li>
                                ))
                            }

                        </ul>
                    </div>

                    <input type="number" className="cryptos__limit" placeholder="Limit" min="1" max="20" value={currentLimit} onChange={e => cambiarLimite(e)} />
                    <input type="submit" value="Set" className="cryptos__submit" />
                    { loading && <span className="loader__icon loader__icon--form"></span>}
                </form>
            </div>

            <div className="cryptos__table">
                <div className="cryptos__row cryptos__row--first row">
                    <div className="row__column">Name</div>
                    <div className="row__column">Price</div>
                    <div className="row__column">Highday</div>
                    <div className="row__column">Lowday</div>
                </div>


                { !loading && <CryptoTable monedas={monedas}/>}
            </div>


        </div>
    )
}

