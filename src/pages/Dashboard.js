import styled from "styled-components";

function Dashboard() {
  return (
    <Background>
      <WizetPlate></WizetPlate>
      <WizetPlate></WizetPlate>
      <WizetPlate></WizetPlate>
      <WizetPlate></WizetPlate>
      <WizetPlate></WizetPlate>
    </Background>
  );
}

export default Dashboard;

const Background = styled.div`
  display: flex;
  min-height: 100%;
  padding: 10px 10px 10px 0;
  margin: 0 10px;
  position: relative;
  overflow-x: auto;
  gap: 12px;
  scroll-snap-type: x mandatory;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const WizetPlate = styled.div`
  border: solid gray 1px;
  border-radius: 10px;
  padding: 5px;
  position: relative;
  height: 80%;
  min-width: 30%;
  background-color: none;
  scroll-snap-align: start;
`;
