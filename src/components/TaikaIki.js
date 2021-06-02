import React from 'react'
import * as shirtStyles from './taikaiwi.module.css'
import shark from '../assets/images/sharktransparent.png'

const TaikaIki = () => {
    return (
        <div className={shirtStyles.taikaiwiContainer}>

            <h1>TAIKI</h1>
            {/* <h1 className={shirtStyles.depth} title="TAIKA">TAIKA</h1> */}
            <img src={shark} alt="shark"/>
            <h1 >IWI</h1>
            {/* <h1 className={shirtStyles.depth} title="IWI">IWI</h1> */}
        </div>
    )
}

export default TaikaIki