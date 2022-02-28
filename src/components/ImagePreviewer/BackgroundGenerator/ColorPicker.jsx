import React, { useState } from 'react'
import { SketchPicker } from 'react-color';

const ColorPicker = ({currentColor, currentPos, i, colors, setColors, pos, setPos}) => {

    const [displayColorPicker, setDisplayColorPicker] = useState(false)
    const colorIndex = i;

    const handleColorChange = (color, event) => {
        const newColors = [...colors];
        newColors[colorIndex] = color.hex;
        setColors(newColors)
    }

    const handleStopChange = (e) => {
        const newPos = [...pos];
        newPos[colorIndex] = e.target.value;
        setPos(newPos);
    }

    const styles = {
            color: {
                width: '40px',
                height: '100%',
                borderRadius: '2px',
                background: `${currentColor}`,
                boxShadow: '0 0 5px 1px rgba(0,0,0, .2)',
                boxSizing: 'border-box'
            },
            swatch: {
                padding: '5px',
                background: '#fff',
                borderRadius: '1px',
                display: 'inline-block',
                cursor: 'pointer',
                height: '100%'
            },
            popover: {
                position: 'absolute',
                zIndex: '2',
            },
            cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
        }

    return (
        <div className="picker" >
            <div style={ styles.swatch } onClick={ () => setDisplayColorPicker(true) }>
                <div style={ styles.color } />
            </div>
            { displayColorPicker ? <div style={ styles.popover }>
            <div style={ styles.cover } onClick={ () => setDisplayColorPicker(false) }/>
                <SketchPicker color={ currentColor } onChangeComplete={ handleColorChange } />
            </div> : null }
            <input min='0' type="number" value={currentPos} onChange={handleStopChange}/>
        </div>
    )
}

export default ColorPicker