import styled from 'styled-components';
import { string } from "prop-types"


export const Quotes = ({ quotes, speaker }) => {
    return (
        <Wrapper>
            <Quote>quote={["teste"]}</Quote>
            <Speaker> - {speaker}</Speaker>
            <button>Quote No Jutsu</button>
        </Wrapper>
    )
}

Quotes.propTypes = {
    quote: string,
    speaker: string,
}

const Wrapper = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
`

const Quote = styled.p`
font-size  :2em ;
margin: 0;
`;

const Speaker = styled(Quotes)`
text-align: right;
margin-bottom: 50px;
`