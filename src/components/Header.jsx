import React from "react";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate(process.env.PUBLIC_URL + "/");
  };

  return (
    <h1 className="text-3xl mb-8 cursor-pointer" onClick={handleLogoClick}>
      Вселенная Рик и Морти
    </h1>
  );
}
