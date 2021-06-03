import React from 'react'
import * as shirtStyles from './taikaiwi.module.css'
import shark from '../assets/images/sharktransparent.png'

const TiakiIka = () => {
    const radius = 150
    const arc = 1000
    const characters = ["T", "I", "A", "K", "I"]
    const degree = arc / characters.length
    console.log(radius, arc, characters, degree)

    const styles = []

    return (
        <div className={shirtStyles.taikaiwiContainer}>
            <div style={{display: 'flex', flexDirection: 'row'}}>
                {characters.map(char => (
                    <h1 style={{marginBottom: '-40px'}}>{char}</h1>
                ))}
            </div>

            {/* <h1 className={shirtStyles.moveable}>
                {characters.map((char, i) => (
                    <span
                        key={`heading-span-${i}`}
                        className={shirtStyles.char}>
                        {char}
                    </span>
                ))}
            </h1> */}
            {/* <h1>TIAKI</h1> */}
            {/* <h1 className={shirtStyles.depth} title="TAIKA">TAIKA</h1> */}
            <img src={shark} alt="shark" />
            <h1 >IKA</h1>
            {/* <h1 className={shirtStyles.depth} title="IWI">IWI</h1> */}
        </div>
    )
}

export default TiakiIka