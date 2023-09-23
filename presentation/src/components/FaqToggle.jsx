import { useState } from "react";
import { motion } from "framer-motion";
// pass the children and titgle
const FaqToggle = ({ children, title }) => {
  // create state with value false to hide all the children (question) from default
  const [toggle, setToggle] = useState(false);
  return (
    // on click change the value of toggle with the oposite !true = false
    // render the title with line and if the toggle is true show the children (question)
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </motion.div>
  );
};

export default FaqToggle;
