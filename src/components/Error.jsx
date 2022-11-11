import { useEffect } from "react"
import NotFoundIcon from "../assets/not-found.svg"

export default function Error({ errorFetch }) {
    return (
        <div className={`error ${Boolean(errorFetch) && "error__visible"}`}>
            <div className="error__box">
                <picture>
                    <img src={NotFoundIcon} alt="error icon" className="error__img"/>
                </picture>
                <div className="error__advice">
                    Ups!{" "}
                    <span >An error has occurred</span>
                    <div className="error__regular">Check your connection or reload the page</div>
                </div>
                <div className="error__message">
                    Message error:
                    <span className="error__data">{Boolean(errorFetch) && `${errorFetch}`}</span>
                </div>
            </div>
        </div>
    )
}