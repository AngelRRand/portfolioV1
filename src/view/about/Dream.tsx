import Wallpaper from '../../component/Wallpaper';
import ArtImg from '../../assets/Planet/Terra/Dream/Moon.png';
import ArtGif from '../../assets/Planet/Terra/Dream/Moon.gif';
import NubeBot from '../../assets/nubes.png';
import NubesTop from '../../assets/nubesTop.png';
import Stars from '../../component/Stars';
import Container from '../../component/Container';

import { motion } from "framer-motion";

import './Dream.css'
import { useState } from 'react';
const Dream = () => {

  const [show, setShow] = useState(true)


  return (
    <Container styles='container_planet'>

      <Stars></Stars>

      <Wallpaper
        image={ArtImg}
        imageGif={ArtGif}
        nubebot={NubeBot}
        nubetop={NubesTop}
        nube_bg={'nube_terra_bg'}
      >
        <motion.div
          className='dream_container'
          initial={{ x: 1000 }}
          animate={{
            x: !show ? 1000 : 0,
            transition: !show ? { duration: 3, type: "ease" } : { duration: 2, type: "ease" },
          }}
        >
          <div className='dream_container_text'>
            <motion.p
              className='dream_text'
              initial={{ y: 10000 }}
              animate={{
                y: 0,
                transition: { duration: 5, type: "ease" },
              }}
            > I am a person who dreams :) </motion.p>
            <motion.p
              className='dream_text'
              initial={{ y: 10000 }}
              animate={{
                y: 0,
                transition: { duration: 7, type: "ease" },
              }}
            > I dream of traveling to Europe and Asia. </motion.p>
            <motion.p
              className='dream_text'
              initial={{ y: 10000 }}
              animate={{
                y: 0,
                transition: { duration: 8, type: "ease" },
              }}
            > I dream of being able to get married, have a family and a dog. </motion.p>
            <motion.p
              className='dream_text'
              initial={{ y: 10000 }}
              animate={{
                y: 0,
                transition: { duration: 9, type: "ease" },
              }}
            > I dream of having a house on a mountain. </motion.p>
            <motion.p
              className='dream_text'
              initial={{ y: 10000 }}
              animate={{
                y: 0,
                transition: { duration: 10, type: "ease" },
              }}
            > My ambitions and goals are the motivation that drive me every day beyond my limits!! :DD </motion.p>
          </div>
        </motion.div>
      </Wallpaper>
      <motion.div
        className='btn_container_dream pointer'
        onClick={() => setShow(!show)}
        initial={{ x: 1000 }}
        animate={{
          x: 0,
          transition: { duration: 5, type: "ease" },
        }}
      >
        <button className='btn_dream'>
          {!show ? 'Up' : 'Down'}
        </button>
      </motion.div>

    </Container>
  )
}

export default Dream