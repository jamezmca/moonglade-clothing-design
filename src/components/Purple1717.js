import React from 'react'
import shark from '../assets/images/blossom2.png'
import * as shirtStyles2 from './purple1717.module.css'


//goodbye blossom

const Purple1717 = () => {
    const radius = 500
    const arc = 130
    const jap = ['さ','よ','う','な','ら','桜']
    const degree = arc / jap.length

    return (
        <div className={shirtStyles2.taikaiwiContainer}>
            <h1 className={shirtStyles2.moveable}>
                {jap.map((char, i) => (
                    <span
                        key={`heading-span-${i}`}
                        style={{
                            height: `${radius}px`,
                            transform: `rotate(${degree * i - arc / 2 + 5}deg)`,
                            transformOrigin: `0 ${radius}px 0`,
                        }}>
                        {char}
                    </span>
                ))}
            </h1>

            <img src={shark} alt="shark" />
            {/* <h2>IKA</h2> */}
            {/* <h2 style={{ letterSpacing: '10px'}} >花木</h2> */}
        </div>
    )
}

export default Purple1717
