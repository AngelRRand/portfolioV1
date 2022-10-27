import { motion } from "framer-motion";
import './Wallpaper.css'
const ContainerView = () => {
  return (
    <main className='wallpaper_container'>

      <div className='wallpaper_bg'>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 4.5, type: "tween" },
          }}
        >
          <img src="" alt="" className="wallpaper_img bg" />
        </motion.div>

        <img src="" alt="" className="wallpaper_img bg_gif"/>
      </div>

    </main>
  )
}

export default ContainerView