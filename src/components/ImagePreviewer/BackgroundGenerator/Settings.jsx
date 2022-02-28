import React from 'react'

const Settings = ({settings, setSettings}) => {

    const handleChange = (e) => {
        let { name, value, type, checked } = e.target;

        if(type === 'checkbox') value = checked

        setSettings(prevSettings => ({
            ...prevSettings,
            [name]: value
        }))
    }

    return (
        <form className="settings">
            <label className="setting" htmlFor="paddingX">Padding X
                <input type="number" name="paddingX" value={settings.paddingX} onChange={handleChange}/>
            </label>

            <label className="setting" htmlFor="paddingX">Padding Y
                <input type="number" name="paddingY" value={settings.paddingY} onChange={handleChange}/>
            </label>

            <label className="setting" htmlFor="borderRadius">Border Radius
                <input type="number" name="borderRadius" value={settings.borderRadius} onChange={handleChange}/>
            </label>

            <label className="setting" htmlFor="gradientAngle">Gradient Angle
                <input type="number" name="gradientAngle" value={settings.gradientAngle} onChange={handleChange}/>
            </label>

            <label className="setting" htmlFor="shadow">Shadow
                <input type="checkbox" name="shadow" value={settings.shadow} onChange={handleChange}/>
            </label>
        </form>
    )
}

export default Settings