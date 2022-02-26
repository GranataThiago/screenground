import React from 'react'
import ColorPicker from './ColorPicker'

const GradientPicker = ({colors, setColors, pos, setPos}) => {

    const addColor = () => {
        setColors([...colors, '#000'])
        setPos([...pos, 100])
    }

    return (
        <div>
            {
            colors.map((currentColor, i) => {

                const childProps = {
                    colors,
                    setColors,
                    pos,
                    setPos,
                    currentColor,
                    currentPos: pos[i],
                    i
                }

                return <ColorPicker key={crypto.randomUUID()} {...childProps}/>
            })
            }
            <button onClick={addColor}>+</button>
        </div>
    )
}

export default GradientPicker