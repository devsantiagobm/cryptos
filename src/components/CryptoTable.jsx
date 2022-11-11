export default function CryptoTable({monedas}) {
    const id = () => Math.random().toString(36).substr(2, 18) + Math.random().toString(36).substr(2, 18);

    return (
        <div className="cryptos__information">
            {
            monedas.map(moneda => {
                return (
                    <div className="cryptos__row row" key={id()}>
                        <div className="row__column">
                            <img src={`https://www.cryptocompare.com/${moneda.imagen}`} alt="cryptocurrency image" className="row__image" />
                            <span className="row__name">{moneda.nombre}</span>
                            <span className="row__alias">{moneda.nombreCorto}</span>
                        </div>
                        <div className="row__column">{Boolean(moneda.precio) ? moneda.precio : "Not found"}</div>
                        <div className="row__column">{Boolean(moneda.high) ? moneda.high : "Not found"}</div>
                        <div className="row__column">{Boolean(moneda.low) ? moneda.low : "Not found"}</div>
                    </div>

                )
            })

            }


        </div>
    )
}