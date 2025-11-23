import styled from "styled-components";
import {
  TextPreset1,
  TextPreset4,
  TextPreset5,
} from "../components/Typography/Typography";
import imgLeft from "../assets/desktop/image-hero-left.png";
import imgRight from "../assets/desktop/image-hero-right.png";
import mobileImg from "../assets/tablet/image-hero.png";
import Button from "../components/Button";
import { theme } from "../theme/theme";

export default function Hero() {
  return (
    <HeroContainer>
      <MobileImg src={mobileImg} alt="Image not loaded"/>
      <DesktopImg>
        <Img src={imgLeft} alt="Left Image"></Img>
      </DesktopImg>
      <HeroContent>
        <TextPreset1>Group Chat for Everyone</TextPreset1>
        <TextPreset4>
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </TextPreset4>
        <Buttons>
          <Button background="cyan-600" hoverBackground="hover-cyan">
            {" "}
            <TextPreset5 color="white">
              Download{" "}
              <span style={{ color: theme.colors["cyan-300"] }}> v1.3</span>
            </TextPreset5>{" "}
          </Button>
          <Button background="purple-600" hoverBackground="hover-purple">
            {" "}
            <TextPreset5 color="white">What is it?</TextPreset5>{" "}
          </Button>
        </Buttons>
      </HeroContent>
      <DesktopImg>

      <Img src={imgRight} alt="Right Image"></Img>
      </DesktopImg>
    </HeroContainer>
  );
}


const MobileImg = styled.img`
    display: none;
    width: 680px;

    @media (min-width:480px) and (max-width: 800px) {
        display: block;
    }
`;

const DesktopImg = styled.div`
    display: block;

    @media (max-width: 768px) {
        display: none;
    }
`;

const HeroContainer = styled.div`
  width: 100%;
  padding: 64px 0;
  display: flex;
  justify-content: space-between;
  gap: 0;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    gap: 72px;
  }
`;

const Img = styled.img`
  /* width: 304px; */
`;

const HeroContent = styled.div`
  width: 448px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  @media (max-width: 769px) {
    gap: 24px;
    width: 100%;
    padding: 32px;
  }
`;

const Buttons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 16px;


  @media (max-width: 480px) {
    flex-direction: column;
  }
`;
