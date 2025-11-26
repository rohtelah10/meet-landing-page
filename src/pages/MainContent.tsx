import styled from "styled-components";
import NumberMarker from "../components/NumberMarker";
import {
  TextPreset2,
  TextPreset3,
  TextPreset4,
  TextPreset5,
} from "../components/Typography/Typography";
import ManTexting from "../assets/desktop/image-man-texting.jpg";
import ManMeeting from "../assets/desktop/image-men-in-meeting.jpg";
import WomanVideoCall from "../assets/desktop/image-woman-in-videocall.jpg";
import WomenVideoChat from "../assets/desktop/image-women-videochatting.jpg";

const MainContent = () => {
  return (
    <MainContentContainer>
      <MainContentBox>
        <NumberMarker>
          <TextPreset5 color="slate-600">01</TextPreset5>
        </NumberMarker>
        <ImageContainer>
          <Img src={WomanVideoCall} alt="image not loaded"></Img>
          <Img src={WomenVideoChat} alt="image not loaded"></Img>
          <Img src={ManMeeting} alt="image not loaded"></Img>
          <Img src={ManTexting} alt="image not loaded"></Img>
        </ImageContainer>
        <TextContainer>
          <Heading>
            <TextPreset3 color="cyan-600">Built for modern use</TextPreset3>
            <TextPreset2 color="slate-900">
              Smarter meetings, all in one place
            </TextPreset2>
          </Heading>
          <TextPreset4 color="slate-600">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </TextPreset4>
        </TextContainer>
      </MainContentBox>
    </MainContentContainer>
  );
};

export default MainContent;

const MainContentContainer = styled.div`
  
  padding-top: 56px;
  padding-bottom: 72px;
  display: flex;
  justify-content: center;

  @media (min-width: 480px) and (max-width: 769px) {
    padding-bottom: 64px;
  }

  @media (max-width: 480px) {
    padding: 32px;
  }
`;

const MainContentBox = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 64px;
`;

const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 16px;
  }
`;

const Img = styled.img`
  width: clamp(148px, 20vw, 256px);
  border-radius: 8px;

`;

const TextContainer = styled.div`
  width: 544px;
  height: 235px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  text-align: center;
  overflow-wrap: break-word;

  @media (min-width: 480px) and (max-width: 769px) {
    width: 504px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const Heading = styled.div`
  width: 445px;
  height: 122px;
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 769px) {
    width: 100%;
  }
`;
