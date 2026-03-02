import React from "react";

const Icofont = ({ icon, className = "", ...props }) => (
  <i className={`icofont icofont-${icon} ${className}`.trim()} {...props} />
);

export default Icofont;
