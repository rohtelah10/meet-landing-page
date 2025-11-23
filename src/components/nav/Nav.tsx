import styled from 'styled-components';
import meet from '../../assets/logo.svg';

export const Nav = () => {
    return (
        <Navbar>
            <MeetLogo src={meet}></MeetLogo>
        </Navbar>
    )
}

const Navbar = styled.div`
    width: 100%;
    padding-top: 80px;
    text-align: center;
`;

const MeetLogo = styled.img`
    width: 118px;
    height: 28px;
`;