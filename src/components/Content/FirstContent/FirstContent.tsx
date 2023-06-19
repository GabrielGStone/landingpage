import Button from "../../Button/Button";
import { Text, Text2, TextContainer } from "../style";
import Slider from "./Slider";
import { text } from "./constants";
import { UpperArc, BottomArc, Container, Arc } from "./style";

const FirstContent = () => {
  return (
    <Container>
      {/* <TextContainer style={{ marginTop: "48px" }}>
        <Text>{text.text1}</Text>
        <Text2>{text.text2}</Text2>
        <Button mb="80px">{text.buttonText1}</Button>
      </TextContainer>
      <Arc>
        <UpperArc />
        <BottomArc />
      </Arc> */}
      <Slider />
    </Container>
  );
};

export default FirstContent;
