import html2canvas from 'html2canvas'
import React, { useState } from 'react'
import GradientPicker from './BackgroundGenerator/GradientPicker'
import Settings from './BackgroundGenerator/Settings'

const ImagePreviewer = ({image}) => {

    const [colors, setColors] = useState(['#fff', '#000'])
    const [pos, setPos] = useState([0, 100])

    const [settings, setSettings] = useState({
        paddingX: 10,
        paddingY: 20,
        borderRadius: 10,
        shadow: false,
        gradientAngle: 45
    })

    const getGradient = () => {
        return `linear-gradient(
            ${settings.gradientAngle}deg,
            ${colors.map((color, i) => {
                return `${color} ${pos[i]}%`
            })}
        )`
    }

    const styles = {
        background: {
            backgroundImage: getGradient(),
            width: '1200px',
            height: '400px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: `${settings.paddingY}px ${settings.paddingX}px`,
        },
        screenshot: {
            maxWidth: '1000px',
            maxHeight: '400px',
            borderRadius: `${settings.borderRadius}px`,
            boxShadow: (settings.shadow) ? '0px 20px 20px 1px rgba(0, 0, 0, .5)' : 'none'
        }
    }

    const download = () => {
        html2canvas(document.querySelector("#canvasTest")).then(canvas => {
            const link = document.createElement('a');
            link.download = 'filename.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    }

    return (
        <section className="generator">

            <GradientPicker colors={colors} setColors={setColors} pos={pos} setPos={setPos}/>
            <Settings settings={settings} setSettings={setSettings} />

            <div id="canvasTest" style={styles.background}>
                <img src={image} alt="" style={styles.screenshot}/>
            </div>

            <button className="btn btn-primary" onClick={download}>Download</button>

        </section>
    )
}

export default ImagePreviewer