import styled from "styled-components";
import Rating from "./Rating";
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: hsl(216, 12%, 8%);
`;
function App() {
  return (
    <Wrapper>
      <Rating />
    </Wrapper>
  );
}

export default App;
