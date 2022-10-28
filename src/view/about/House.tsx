import Wallpaper from '../../component/Wallpaper'
import HouseImg from '../../assets/Planet/Terra/House/House.gif'
import HouseImgGif from '../../assets/Planet/Terra/House/HouseFlora.gif'
import NubeBot from '../../assets/nubes.png'
import NubesTop from '../../assets/nubesTop.png'
import lightAuto from '../../assets/Planet/Terra/House/LuzHover.gif'
import lightHover from '../../assets/Planet/Terra/House/LuzHover.gif'
import lightEffect from '../../assets/Planet/Terra/House/LuzEffectHover.gif'
const House = () => {



    return (
        <Wallpaper
            image={HouseImg}
            imageGif={HouseImgGif}
            nubebot={NubeBot}
            nubetop={NubesTop}
            nube_bg={'nube_terra_bg'}
        >
            <div className='view_grid'>
                <div className='view_item view_me'>
                    <img src={lightEffect} alt="" />
                </div>
            </div>
        </Wallpaper>
    )
}

export default House