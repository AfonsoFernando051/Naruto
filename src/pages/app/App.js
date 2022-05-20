import styled from 'styled-components';
import naruto from "../../images/naruto.png"
import { Quotes } from "../../components/"

function App() {
  return (
    <Content>
      <Quotes quote={"ok"} speaker={"speaker"} />
      <Naruto src={naruto} alt="Naruto with a kunai" />
    </Content>
  );
}

const Content = styled.div`
 height: 100vh;
 padding: 0 50px;
 display: flex;
 justify-content: center;
 align-items: center;
`;

const Naruto = styled.img`
max-width: 50vw;
align-self: flex-end;
`
export default App;
