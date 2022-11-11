import { useState, useEffect} from 'react'
        
export default function Footer(){
    return (
        <div className='footer'>
            <div className="footer__box">
                <span className="footer__title">Resources</span>
                <div className="footer__data">
                    <div className="footer__information">
                        Cryptocurrency API:
                        <a className="footer__bold" href='https://www.cryptocompare.com/'>cryptocompare</a>
                    </div>
                    <div className="footer__information">
                        Illustration:
                        <a className="footer__bold" href='https://icons8.com/illustrations/author/zD2oqC8lLBBA'>Icons8 by OUCH!</a>
                    </div>
                </div>
            </div>
        </div>
    )   
}