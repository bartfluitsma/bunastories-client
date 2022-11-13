import { Link } from "react-router-dom";

interface PropsButton {
  btnStyle: string
  onClick: any
  children: any
  link: string
}


const Button = (props: PropsButton) => {
  const handleOnClick = () => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <Link to={props.link}>
      <div onClick={handleOnClick} className={props.btnStyle}>
        {props.children}
      </div>
    </Link>
  );
};

export default Button;
