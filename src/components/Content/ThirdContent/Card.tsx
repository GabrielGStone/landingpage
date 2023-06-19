import { FC } from "react";
import { Box, Link, Section, Title, BlankSpace } from "./style";
import { Text5 } from "../style";
import "../styles.css";
interface CardProps {
  title: string;
  text: string;
  image: string;
}

const Card: FC<CardProps> = ({ title, text, image }) => {
  return (
    <Box background={image} className="card">
      <Section>
        <Title>{title}</Title>
        <Text5>{text}</Text5>
        <Link>CONHECER</Link>
      </Section>
      <BlankSpace />
    </Box>
  );
};

export default Card;
