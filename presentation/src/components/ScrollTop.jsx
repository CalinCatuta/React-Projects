import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// create this and run it when we change the page to make the web page to start from top
const ScrollTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
    });
  }, [pathname]);
  return null;
};

export default ScrollTop;
