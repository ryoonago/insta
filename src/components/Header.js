import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import {  faHouse } from "@fortawesome/free-solid-svg-icons"
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { styled } from "styled-components";

const HeaderContainer = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 18px 0;
    border-bottom: 1px solid black;
`;

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 630px;
    font-size: 15px;
`;

const Icon = styled.span`
    margin-left: 5px;
    
`;



const Column = styled.div`
    width: 130px;
    display: flex;
    justify-content: space-between;

`;

const Button = styled.input`
 border: 2px solid black;
 border-radius: 5px;
 width: 60px;  
`;


function Header() {
    return (
        <HeaderContainer>
            <Wrapper>
                <Column>
                <FontAwesomeIcon size="2x" icon={faInstagram}/>
                </Column>
                <Column>
                <FontAwesomeIcon icon={faHouse}/>
                <FontAwesomeIcon icon={faPaperPlane}/>
                <FontAwesomeIcon icon={faUser}/>
                <Button></Button>
                </Column>
            </Wrapper>
        </HeaderContainer>

    );
}

export default Header;