import React from 'react'
import * as shirtStyles from './whatitis.module.css'
import shark from '../assets/images/diplodicus.png'


const Whatitis = () => {
    const radius = 2000
    const arc = 30
    const text = 'diplodicus'
    const characters = ["T", "I", "A", "K", "I"]
    // const jap = [' ', "I","T", " ", "I", "S", ' ', 'W', 'H', 'A', 'T', ' ', 'I', 'T', ' ', 'I', 'S']
    // const jap = ["C", 'U', 'R', 'J', 'O', 'S', 'J', 'T', 'Y']
    const jap = text.split('')
    const degree = arc / jap.length
    
    return (
        <div className={shirtStyles.taikaiwiContainer}>
            <h1 className={shirtStyles.moveable}>
                {jap.map((char, i) => (
                    <span
                        key={`heading-span-${i}`}
                        style={{
                            height: `${radius}px`,
                            transform: char == 'i' ? `rotate(${degree * i - arc / 2 }deg)` : `rotate(${degree * i - arc / 2 }deg)`,
                            transformOrigin: `0 ${radius}px 0`,
                        }}>
                        {char}
                    </span>
                ))}
            </h1>
            <img src={shark} alt="shark" />

        </div>
    )
}

export default Whatitis
