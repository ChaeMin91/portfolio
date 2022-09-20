/*애니메이션 작성 - npm i framer-motion 모듈 설치
  모션을 import */



import {motion} from 'framer-motion'

const AboutMe = ()=>{
    return (
        /*
        <motion.div>으로 컴포넌트를 감싸준다.
        initial - 마운트될(화면에 나타나는 시점) 때
        animate - 마운트가 완료된 직후 
        exit - 언마운트될 때
        */
        <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
        <section>
            <img src="./images/aboutme.png" alt="#" />
        </section>
        </motion.div>
    );
}

export default AboutMe;