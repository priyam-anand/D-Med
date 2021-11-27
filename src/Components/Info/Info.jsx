import React,{useState,useEffect,useRef} from 'react'
import "./Info.css";
import CLOUDS from 'vanta/dist/vanta.clouds.min'

const Info = () => {

    const [vantaEffect, setVantaEffect] = useState(0)
    const myRef = useRef(null)
    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                CLOUDS({
                    el: myRef.current,
                    mouseControls: false,
                    touchControls: false,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00
                })
            )
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <>
            <div id="hero" ref={myRef} className="d-flex align-items-center">
                <div className="container">
                    <h1>Welcome to D-Med</h1>
                    <h2>The Future of medical records is BLOCKCHAIN</h2>
                </div>
            </div>
        </>
    )
}

export default Info
