import PropTypes from "prop-types";

const Button = ({ color, text, click, toggle }) => {
  return (
    <button style={{ backgroundColor: color }} className="btn" onClick={toggle}>
      {text}
    </button>
  );
};

Button.defaultProps = {
  color: "steelblue",
};

Button.prototypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  click: PropTypes.func,
};

export default Button;
