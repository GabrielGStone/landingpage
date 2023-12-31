import Button from "../../Button/Button";
import { Text, Text3, Text4, TextContainer, Wrap } from "../style";
import Card from "./Card";
import { images, text } from "./constants";
import { Cards, Wrap2 } from "./style";
import "../styles.css";

const ThirdContent = () => {
  const cardImages = [
    { title: text.text5, text: text.lorem, image: images.card1 },
    { title: text.text5, text: text.lorem, image: images.card2 },
    { title: text.text5, text: text.lorem, image: images.card3 },
  ];
  return (
    <>
      <Wrap center column>
        <Text mb="10px">{text.text1}</Text>
        <Text4 size="12px">{text.text2}</Text4>
        <Cards className="card">
          {cardImages.map(({ title, text, image }) => {
            return <Card title={title} text={text} image={image} />;
          })}
        </Cards>
      </Wrap>

      <Wrap2 column background={images.bg2} padding="71px 109px" bg>
        <TextContainer width="56%">
          <Text color="#fff">{text.text6}</Text>
          <Text3 color="#71D8FF" weight="300">
            {text.lorem2}
          </Text3>
        </TextContainer>
        <Button white>{text.buttonText1}</Button>
      </Wrap2>
    </>
  );
};

export default ThirdContent;
