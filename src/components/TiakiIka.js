import React from 'react'
import * as shirtStyles from './taikaiwi.module.css'
import shark from '../assets/images/marlin.png'

//ally to good

const TiakiIka = () => {
    const radius = 500
    const arc = 160
    const characters = ["T", "I", "A", "K", "I"]
    const jap = ['か','じ','き','ま','ぐ','ろ']
    const degree = arc / jap.length
    console.log(radius, arc, characters, degree)

    const styles = ['-300px', '-108px', '-22px', '-45px', '-210px']
    const left = ['-305px', '-220px', '-89px', '135px', '270px']
    const rotations = ['-75deg', '-50deg', '-1deg', '46deg', '75deg']


    return (
        <div className={shirtStyles.taikaiwiContainer}>
            {/* <h2>善意の味方</h2> */}
            <h1 className={shirtStyles.moveable}>
                {jap.map((char, i) => (
                    <span
                        key={`heading-span-${i}`}
                        style={{
                            height: `${radius}px`,
                            transform: `rotate(${degree * i - arc / 2 +4}deg)`,
                            transformOrigin: `0 ${radius}px 0`,
                        }}>
                        {char}
                    </span>
                ))}
            </h1>

            <img src={shark} alt="shark" />
            {/* <h2>IKA</h2> */}
            {/* <h1 className={shirtStyles.depth} title="IWI">IWI</h1> */}
        </div>
    )
}

export default TiakiIka

//  {/* <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '110px', position: 'relative', border: '2px solid white' }}>
//                 {characters.map((char, i) => (
//                     <span style={{ display: 'inline-block', bottom: styles[i], left: left[i], transform: `rotate(${rotations[i]})` }}>
//                         <h1 style={{transform: char === "K" ? 'scale(0.8, 0.7)' : 'scale(1, 0.7)'}}>{char}</h1>
//                     </span>
//                 ))}
//             </div> */}

            
            // {/* <h1>TIAKI</h1> */}
            // {/* <h1 className={shirtStyles.depth} title="TAIKA">TAIKA</h1> */}
            /* <h2>TIAKI</h2> */