import styled from "styled-components";

function Dashboard() {
  return (
    <Background>
      <h1>Work Board</h1>
    </Background>
  );
}

export default Dashboard;

const Background = styled.div`
  padding: 10px;
  position: relative;
  overflow-x: hidden;
  box-sizing: border-box;
`;
