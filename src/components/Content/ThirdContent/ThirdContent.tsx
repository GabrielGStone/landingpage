import Layout from "../../Layout/Layout";
import { Text, Text4, Wrap } from "../style";
import Card from "./Card";
import { images, text } from "./constants";
import { Cards } from "./style";

const ThirdContent = () => {
  const cardImages = [
    { title: text.text5, text: text.lorem, image: images.card1 },
    { title: text.text5, text: text.lorem, image: images.card2 },
    { title: text.text5, text: text.lorem, image: images.card3 },
  ];
  return (
    <Layout>
      <Wrap center column>
        <Text mb="10px">{text.text1}</Text>
        <Text4>{text.text2}</Text4>
        <Cards>
          {cardImages.map(({ title, text, image }) => {
            return <Card title={title} text={text} image={image} />;
          })}
        </Cards>
      </Wrap>
    </Layout>
  );
};

export default ThirdContent;
