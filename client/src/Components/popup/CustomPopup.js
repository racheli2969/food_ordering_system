import { useEffect, useState } from "react";
import popupStyles from "./PopUp.css";
//import PropTypes from "prop-types";

const CustomPopup = (props) => {
  const [show, setShow] = useState(false);

  const closeHandler = (e) => {
    setShow(false);
    props.onClose(false);
  };

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <div
      style={{
        display: show ? "block" : "none",
        opacity: show ? "1" : "0",
      }}
    >

      <div className={popupStyles.CustomPopup}>{props.children}</div>
    </div>
  );
};
export default CustomPopup;