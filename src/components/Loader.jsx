import { useEffect } from "react"

export default function Loader({ loader }){

    useEffect( () => {
        if(!loader){
            document.querySelector('.loader').classList.add('loader--hide')
        }
    },[loader])
    return (
        <div className="loader">
            <span className="loader__icon"></span>
        </div>
    )
}