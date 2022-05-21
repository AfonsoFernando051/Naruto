import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import naruto from "../../images/naruto.png"
import { Quotes } from "../../components/"
import { getQuote } from "../../services"
import jutsoSound from "../../sounds/src_sounds_jutso.mp3"

const audio = new Audio(jutsoSound)

export function App() {
  const isMounted = useRef(true);
  const [quoteState, setQuoteState] = useState({
    quote: "Loading quote...",
    speaker: "Loading speaker"
  })

  const onUpdate = async () => {
    const quote = await getQuote();


    audio.play();
    setQuoteState(quote);

  };

  useEffect(() => {
    onUpdate();
    return () => {
      isMounted.current = false;
    }
  }, [])

  return (
    <Content>
      <Quotes quote={quoteState.quote} speaker={quoteState.speaker} onUpdate={onUpdate} />
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
