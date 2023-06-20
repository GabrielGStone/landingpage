import { useEffect, useState } from "react";
import Button from "../../Button/Button";
import { Text, Text2, TextContainer } from "../style";
import Slider from "./Slider";
import { text } from "./constants";
import { UpperArc, BottomArc, Container, Arc, Wrap } from "./style";

const FirstContent = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Container>
      <Wrap>
        <TextContainer style={{ marginTop: "48px" }}>
          <Text>{text.text1}</Text>
          <Text2>{text.text2}</Text2>
          {screenWidth > 1000 && (
            <Button mb="80px" noMargin>
              {text.buttonText1}
            </Button>
          )}
        </TextContainer>
        <Arc>
          <UpperArc />
          <BottomArc />
        </Arc>
      </Wrap>
      <Slider />
      {screenWidth <= 1000 && (
        <Button mb="80px" noMargin>
          {text.buttonText1}
        </Button>
      )}
    </Container>
  );
};

export default FirstContent;
