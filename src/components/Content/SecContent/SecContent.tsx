import Button from "../../Button/Button";
import Layout from "../../Layout/Layout";
import HorizontalScroll from "./HorizontalScroll";
import { text } from "./constants";
import { Text, Text2, TextContainer, Wrap } from "./style";

const SecContent = () => {
  return (
    <Layout>
      <Wrap>
        <TextContainer>
          <Text>{text.text1}</Text>
          <Text2>{text.text2}</Text2>
          <Button mb="80px">{text.buttonText1}</Button>
        </TextContainer>
      </Wrap>
      <Wrap column>
        <TextContainer style={{ width: 286 }}>
          <Text>{text.text3}</Text>
          <Text2>{text.text4}</Text2>
        </TextContainer>
        <HorizontalScroll />
        <Button mb="80px">{text.buttonText2}</Button>
      </Wrap>
    </Layout>
  );
};

export default SecContent;
