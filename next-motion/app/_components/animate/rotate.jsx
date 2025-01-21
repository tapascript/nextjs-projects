import * as motion from "motion/react-client";
//import { MotionWrapper } from "../motion/MotionWrapper";

const Rotate = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 3 }}
      className="w-[200px] h-[200px] bg-yellow-600 rounded m-2"
    >
      <h2 className="text-center p-10 text-xl">I can Rotate</h2>
    </motion.div>
  );
};

export default Rotate;
