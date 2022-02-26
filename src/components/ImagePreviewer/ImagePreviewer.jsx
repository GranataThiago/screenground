import html2canvas from 'html2canvas'
import React, { useCallback, useEffect, useState } from 'react'
import ColorPicker from './BackgroundGenerator/GradientPicker'

const ImagePreviewer = ({image}) => {

    const styles = {
        backgroundImage: `linear-gradient(
            45deg,
            hsl(240deg 100% 20%) 0%,
            hsl(289deg 100% 21%) 11%,
            hsl(315deg 100% 27%) 22%,
            hsl(329deg 100% 36%) 33%,
            hsl(337deg 100% 43%) 44%,
            hsl(357deg 91% 59%) 56%,
            hsl(17deg 100% 59%) 67%,
            hsl(34deg 100% 53%) 78%,
            hsl(45deg 100% 50%) 89%,
            hsl(55deg 100% 50%) 100%
        )`,
        width: '1200px',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 10px',
    }

    const stylesA = {
        maxWidth: '1000px',
        borderRadius: '10px',
        boxShadow: '0px 20px 20px 1px rgba(0, 0, 0, .5)'
    }

    // const [colors, setColors] = useState(['#020024', '#090979', '#00d4ff'])
    // const [pos, setPos] = useState([0, 50, 100])
    // const [canvas, setCanvas] = useState({
    //     width: 1024,
    //     height: 400
    // })
    
    // const [margin, setMargin] = useState(10)

    // const [angles, setAngles] = useState({
    //     x0: 0,
    //     x1: 120,
    //     y0: 0,
    //     y1: 360
    // })

    // const createGradient = useCallback((canvas, ctx) => {
    //     const backgroundGradient = ctx.createLinearGradient(angles.x0, angles.y0, angles.x1, angles.y1);

    //     colors.forEach((color, index) => {
    //         backgroundGradient.addColorStop((parseInt(pos[index]) / 100), color)
    //     })
        
    //     ctx.fillStyle = backgroundGradient;
    //     ctx.fillRect(0, 0, canvas.width, canvas.height);
    // }, [colors, pos, angles])

    // useEffect(() => {
    //     const canvas = document.getElementById('canvas');
    //     const ctx = canvas.getContext('2d');
    //     createGradient(canvas, ctx);

    //     const pic = new Image();
    //     pic.src = image;

    //     pic.onload = () => {

    //             const calculateAspectRatioFit = (picWidth, picHeight, maxWidth, maxHeight) => {
    //                 const ratio =  Math.min(maxWidth / picWidth, maxHeight / picHeight);
    //                 return { width: picWidth * ratio, height: picHeight * ratio };
    //             }

    //             const newSize = calculateAspectRatioFit(pic.width, pic.height, 1200, 1200)
    //             canvas.width = newSize.width;
    //             canvas.height = newSize.height;
    //             createGradient(canvas, ctx);

    //             if (pic.width + margin > canvas.width) {
    //                         console.log('Entra al if del width')

    //                 let newWidth = canvas.width - (margin * 2);
                    
    //                 pic.height = Math.round(((pic.height / pic.width) * newWidth)) ;
    //                 canvas.height += margin / 2;
    //                                 createGradient(canvas, ctx);
    //                 pic.width = newWidth;
                    
    //             }else if (pic.height + margin > canvas.height) {

    //                 let newHeight = canvas.height - (margin * 2);
                    
    //                 pic.width = Math.round((pic.width / pic.height) * newHeight);
                    
    //                 pic.height = newHeight;
                
    //             }
            
    //         ctx.drawImage(pic, canvas.width / 2 - pic.width / 2, canvas.height / 2 - pic.height / 2, pic.width, pic.height);
    //     }

    // }, [image, createGradient, margin]);
    

    // const downloadImage = function(){
    //     const link = document.createElement('a');
    //     link.download = 'filename.png';
    //     link.href = document.getElementById('canvas').toDataURL()
    //     link.click();
    // }

    const downloadTest = () => {
        html2canvas(document.querySelector("#canvasTest")).then(canvas => {
            // document.body.appendChild(canvas)
            const link = document.createElement('a');
            link.download = 'filename.png';
            link.href = canvas.toDataURL();
            link.click();
        });
    }

    return (
        <div>
            <h1>This is how your image is looking</h1>

            {/* <ColorPicker colors={colors} setColors={setColors} pos={pos} setPos={setPos} /> */}

        <div id="canvasTest" style={styles}>
            <img src={image} alt="" style={stylesA}/>
        </div>

        <button onClick={downloadTest}>test</button>

{/* 
            <canvas id="canvas" width={canvas.width} height={canvas.height}>
            </canvas>
            <button onClick={downloadImage}>Download</button>

            <div>
                margin
                <input type="number"  value={margin} onChange={(e) => setMargin(e.target.value)}/>
            </div>

            <div>
                angle
                <input type="number"  value={angles.x0} onChange={(e) => setAngles({...angles, x0: e.target.value})}/>
                <input type="number"  value={angles.x1} onChange={(e) => setAngles({...angles, x1: e.target.value})}/>
                <input type="number"  value={angles.y0} onChange={(e) => setAngles({...angles, y0: e.target.value})}/>
                <input type="number"  value={angles.y1} onChange={(e) => setAngles({...angles, y1: e.target.value})}/>
            </div> */}
        </div>
    )
}

export default ImagePreviewer