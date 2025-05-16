import Waves from "../blocks//Backgrounds/Waves/Waves"
import '../App.css'
import "./banner.css"

function Banner() {

  return (
    <div className='banner1'>
        <Waves
            lineColor="#aa4b6b"
            backgroundColor="rgba(231, 231, 231, 0.86)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
        />
    </div>
    
  )
}

export default Banner;