import React from 'react'
import * as shirtStyles from './taikaiwi.module.css'
import shark from '../assets/images/sharktransparent.png'

const TiakiIka = () => {
    const radius = 300
    const arc = 180
    const characters = ["T", "I", "A", "K", "I"]
    const degree = ['15', '60', '90', '125', '160']
    console.log(radius, arc, characters, degree)

    const styles = ['-300px', '-108px', '-22px', '-45px', '-210px']
    const left = ['-305px', '-220px', '-89px', '135px', '270px']
    const rotations = ['-75deg', '-50deg', '-1deg', '46deg', '75deg']


    return (
        <div className={shirtStyles.taikaiwiContainer}>
            {/* <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '110px', position: 'relative', border: '2px solid white' }}>
                {characters.map((char, i) => (
                    <span style={{ display: 'inline-block', bottom: styles[i], left: left[i], transform: `rotate(${rotations[i]})` }}>
                        <h1 style={{transform: char === "K" ? 'scale(0.8, 0.7)' : 'scale(1, 0.7)'}}>{char}</h1>
                    </span>
                ))}
            </div> */}

            {/* <h1 className={shirtStyles.moveable}>
                {characters.map((char, i) => (
                    <span
                        key={`heading-span-${i}`}
                        style={{
                            height: `${radius}px`,
                            transform: `rotate(${degree[i] - arc / 2 - 10}deg)`,
                        }}>
                        {char}
                    </span>
                ))}
            </h1> */}
            {/* <h1>TIAKI</h1> */}
            {/* <h1 className={shirtStyles.depth} title="TAIKA">TAIKA</h1> */}
            <h2>TIAKI</h2>
            <img src={shark} alt="shark" />
            <h2>IKA</h2>
            {/* <h1 className={shirtStyles.depth} title="IWI">IWI</h1> */}
        </div>
    )
}

export default TiakiIka