import styled from "styled-components";
import Button from "../components/Button";
import NumberMarker from "../components/NumberMarker";
import {
  TextPreset2,
  TextPreset4,
  TextPreset5,
} from "../components/Typography/Typography";
import { theme } from "../theme/theme";
import FooterImg from "../assets/desktop/image-footer.jpg";
import FooterImgTab from "../assets/tablet/image-footer.jpg";
import FooterImgMob from "../assets/mobile/image-footer.jpg";

const Footer = () => {
  return (
    <div style={{ position: "relative",  width: '100%', height: '100%', paddingTop: '110px', display: 'flex', justifyContent: 'center'}}>       
      <div style={{ position: "absolute", top: "0"}}>
        <NumberMarker>
          <TextPreset5 color="slate-600">02</TextPreset5>
        </NumberMarker>
      </div>
      <FooterContainer>
        <FooterContent>
          {/* <div style={{ maxWidth: '45ch'}}> */}
          <div style={{textAlign: 'center'}}>
            <TextPreset2 color="white">Experience more together</TextPreset2>
          </div>
          {/* </div> */}
          <Text>
            <TextPreset4 color="white">
              Stay connected with reliable HD meetings and unlimited one-on-one
              and group video sessions.
            </TextPreset4>
          </Text>
          <div>
            <Button background="purple-600" hoverBackground="hover-purple">
              <TextPreset5 color="white">
                Download{" "}
                <span style={{ color: theme.colors["purple-300"] }}>v1.3</span>
              </TextPreset5>
            </Button>
          </div>
        </FooterContent>
      </FooterContainer>
    </div>
  );
};

export default Footer;

const FooterContainer = styled.div`
  width: 100%;
  padding: 112px 80px;
  background-image: linear-gradient(
      rgba(0 120 150 / 0.6),
      rgba(0 120 150 / 0.6)
    ),
    linear-gradient(
      rgba(255 255 255 / 0.6),
      rgba(255 255 255 / 0.6)
    ),
    url(${FooterImg});
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 480px) and (max-width: 769px) {
    padding: 64px 32px;

    background-image: linear-gradient(
      rgba(0 120 150 / 0.6),
      rgba(0 120 150 / 0.6)
    ),
    
    linear-gradient(
      rgba(255 255 255 / 0.6),
      rgba(255 255 255 / 0.6)
    ),
    url(${FooterImgTab});
  background-repeat: no-repeat;
  background-size: cover;
  }

  @media (max-width: 480px) {
    padding: 64px 32px;

    background-image: linear-gradient(
      rgba(0 120 150 / 0.6),
      rgba(0 120 150 / 0.6)
    ),
    
    linear-gradient(
      rgba(255 255 255 / 0.6),
      rgba(255 255 255 / 0.6)
    ),
    url(${FooterImgMob});
  background-repeat: no-repeat;
  background-size: cover;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 769px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const Text = styled.div`
  max-width: 45ch;

  @media (max-width: 769px) {
    max-width: 66ch;
    text-align: center;
  }
`;
