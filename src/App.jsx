import { useState, useEffect } from 'react'
import Hero from "./components/Hero"
import Cryptos from "./components/Cryptos"
import Loader from "./components/Loader"
import Error from './components/Error'
import Footer from './components/Footer'
import MoonIcon from "./assets/moon.svg"
import SunIcon from "./assets/sun.svg"


function App() {
    const [moneda, setMoneda] = useState("USD")
    const [limite, setLimite] = useState("10")
    const [loader, setLoader] = useState(true);
    const [loading, setLoading] = useState(false);
    const [monedas, setMonedas] = useState([])
    const [mode, setMode] = useState("light");
    const [errorFetch, setErrorFetch] = useState("")

    async function consultarApi() {
        const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limite}&tsym=${moneda}`;
        setMonedas([]);
        setLoading(true)

        try {
            const consulta = await fetch(url)
            const resultado = await consulta.json()

            const nuevoResultado = resultado.Data.map(item => {
                return {
                    nombre: item.CoinInfo.FullName,
                    imagen: item.CoinInfo.ImageUrl || undefined,
                    nombreCorto: item.CoinInfo.Name || undefined,
                    precio: item.DISPLAY ? item.DISPLAY[moneda].PRICE : undefined,
                    high: item.DISPLAY ? item.DISPLAY[moneda].HIGHDAY : undefined,
                    low: item.DISPLAY ? item.DISPLAY[moneda].LOWDAY : undefined
                }
            })

            setMonedas(nuevoResultado)
            setLoader(false)
            setLoading(false)
        }
        catch (error) {
            setLoader(false)
            setLoading(false)
            setErrorFetch(error);
        }
    }

    function changeMode(){
        const root = document.querySelector("html");
        
        if(mode === "light"){
            setMode("dark")
            root.setAttribute("dark", true)
        }
        else{
            setMode("light")
            root.setAttribute("dark", false)
        }
    }

    useEffect(() => {
        consultarApi()
    }, [moneda, limite])

    return (
        <div className="App">
            <Loader loader={loader} />
            <Error errorFetch={errorFetch} />
            <button className="mode__button" onClick={changeMode}>
                <img src={mode === "light" ? SunIcon : MoonIcon} alt="mode icon" />
            </button>
            <Hero></Hero>
            <Cryptos
                monedas={monedas}
                setMonedas={setMonedas}
                moneda={moneda}
                setMoneda={setMoneda}
                limite={limite}
                setLimite={setLimite}
                loading={loading}></Cryptos>


            <div> {/* div to be able of use nth:child in css */}
                <div className='circle'></div>
                <div className='circle'></div>
                <div className='circle'></div>
            </div>

            <Footer/>
        </div>
    )
}

export default App