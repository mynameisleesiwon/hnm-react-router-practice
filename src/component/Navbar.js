import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authenticate, setAuthenticate }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M Home",
    "Sale",
    "지속가능성",
  ];

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };
  const search = (e) => {
    // Enter키에만 반응
    if (e.key === "Enter") {
      // 입력한 검색어를 읽어와서
      let keyword = e.target.value;
      // url을 바꿔준다.
      navigate(`/?q=${keyword}`);
    }
  };

  const logout = () => {
    setAuthenticate(false);
  };
  return (
    <div>
      <div>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          {authenticate === false ? (
            <div onClick={goToLogin}>로그인</div>
          ) : (
            <div onClick={logout}>로그아웃</div>
          )}
        </div>
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/e/e5/HM-Logo.png"
        />
      </div>

      <ul className="menu-list">
        {menuList.map((menu) => (
          <li>{menu}</li>
        ))}
      </ul>
      <div className="menu-search">
        <FontAwesomeIcon icon={faSearch} />
        <input type="text" onKeyPress={search} />
      </div>
    </div>
  );
};

export default Navbar;
