import { FC } from "react";
import { Box, Link, Section, Title, BlankSpace } from "./style";
import { Text5 } from "../style";

interface CardProps {
  title: string;
  text: string;
  image: string;
}

const Card: FC<CardProps> = ({ title, text, image }) => {
  return (
    <Box background={image}>
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
