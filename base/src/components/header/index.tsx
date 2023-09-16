import "./style.css";
import Logo from "../../assets/logo.svg";
import arrow from "../../assets/arrow-back.svg";
import { useNavigate } from "react-router-dom";

type Props = {
  showBack?: boolean;
};

export default function Header({ showBack }: Props) {
  const navigate = useNavigate();

  return (
    <header>
      {showBack && (
        <img
          src={arrow}
          alt="arrow back"
          className="arrow-img"
          onClick={() => {
            navigate(-1);
          }}
        />
      )}
      <img src={Logo} alt="logo" className="logo-img" />
    </header>
  );
}
