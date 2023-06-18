import Button from "../../Button/Button";
import HorizontalScroll from "./HorizontalScroll";
import { images, text } from "./constants";
import { Text, Text2, Text3, TextContainer, Wrap } from "../style";

const SecContent = () => {
  return (
    <>
      <Wrap></Wrap>
      <Wrap column center>
        <TextContainer width="340px">
          <Text>{text.text3}</Text>
          <Text2>{text.text4}</Text2>
        </TextContainer>
        <HorizontalScroll />
        <Button mb="80px">{text.buttonText2}</Button>
      </Wrap>
      <Wrap
        background={images.bgbackground}
        padding="88px 112px "
        column
        mb="80px"
      >
        <TextContainer width="400px">
          <Text>{text.text5}</Text>
          <Text3 color="#005271">{text.text6}</Text3>
        </TextContainer>
        <Button mb="80">{text.buttonText3}</Button>
      </Wrap>
    </>
  );
};

export default SecContent;
