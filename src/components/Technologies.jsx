import { DiRedis } from "react-icons/di";
import { RiReactjsLine } from "react-icons/ri";
import { BiLogoDjango } from "react-icons/bi";
import { DiPostgresql } from "react-icons/di";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from "framer-motion";

const iconVariants = {
  initial: { y: -10 }, // Fixed typo
  animate: {
    y: [10, -10],
    transition: {
      duration: 1.5, // Specify a duration (in seconds)
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const Technologies = () => {
  return (
    <div id="Technologies" className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {/* React.js Icon with Animation */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants}
          className="p-4"
        >
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </motion.div>

        {/* Redis Icon */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants}
          className="p-4"
        >
          <DiRedis className="text-7xl text-red-500" />
        </motion.div>

        {/* Django Icon */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants}
          className="p-4"
        >
          <BiLogoDjango className="text-7xl text-green-700" />
        </motion.div>

        {/* PostgreSQL Icon */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants}
          className="p-4"
        >
          <DiPostgresql className="text-7xl text-sky-700" />
        </motion.div>

        {/* HTML Icon */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants}
          className="p-4"
        >
          <TiHtml5 className="text-7xl text-orange-500" />
        </motion.div>

        {/* CSS Icon */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants}
          className="p-4"
        >
          <FaCss3Alt className="text-7xl text-blue-500" />
        </motion.div>

        {/* JS Icon */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants}
          className="p-4"
        >
          <IoLogoJavascript className="text-7xl text-yellow-500" />
        </motion.div>

        {/* Tailwind CSS Icon */}
        <motion.div
          initial="initial"
          animate="animate"
          variants={iconVariants}
          className="p-4"
        >
          <RiTailwindCssFill className="text-7xl text-cyan-500" />
        </motion.div>
      </div>
    </div>
  );
};

export default Technologies;
