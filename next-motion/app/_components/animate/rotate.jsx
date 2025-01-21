import * as motion from "motion/react-client";
//import { MotionWrapper } from "../motion/MotionWrapper";

const Rotate = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 3 }}
      className="w-[200px] h-[200px] bg-purple-300 border border-purple-700 rounded m-2"
    >
      <h2 className="text-center p-4 text-3xl text-purple-900">Glad to See You!</h2>
    </motion.div>
  );
};

export default Rotate;
