import React from 'react'
import { HuePicker } from 'react-color';

const ColorPicker = ({currentColor, currentPos, i, colors, setColors, pos, setPos}) => {

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


    return (
        <div>
            {/* <input type="color" value={currentColor} onChange={handleColorChange}/> */}
            <HuePicker color={ currentColor } onChangeComplete={handleColorChange}></HuePicker>
            <input min='0' type="number" value={currentPos} onChange={handleStopChange}/>
        </div>
    )
}

export default ColorPicker