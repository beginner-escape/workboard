import { Link } from "react-router-dom";
import styled from "styled-components";

function NavBar() {
  return (
    <Bar>
      <Link to={"/"}>
        <NavBTN>워크보드</NavBTN>
      </Link>
    </Bar>
  );
}

export default NavBar;

const Bar = styled.div`
  width: 100%;
  height: 44px;
  background-color: #1f10d2;
  top: 0;
`;

const NavBTN = styled.div`
  width: 100px;
  height: 100%;
  color: white;
  background-color: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
