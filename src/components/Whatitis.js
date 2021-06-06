import React from 'react'
import * as shirtStyles from './whatitis.module.css'

const Whatitis = () => {
    const radius = 800
    const arc = 200
    const characters = ["T", "I", "A", "K", "I"]
    const jap = [' ', "I","T", " ", "I", "S", ' ', 'W', 'H', 'A', 'T', ' ', 'I', 'T', ' ', 'I', 'S']
    const degree = arc / jap.length
    
    return (
        <div className={shirtStyles.taikaiwiContainer}>
            <h1 className={shirtStyles.moveable}>
                {jap.map((char, i) => (
                    <span
                        key={`heading-span-${i}`}
                        style={{
                            height: `${radius}px`,
                            transform: `rotate(${degree * i - arc / 2 }deg)`,
                            transformOrigin: `0 ${radius}px 0`,
                        }}>
                        {char}
                    </span>
                ))}
            </h1>
        </div>
    )
}

export default Whatitis
