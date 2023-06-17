import { Box, Container, Text, Title } from "./styles";
import { text } from "./constants";
import { useState } from "react";

const Sites = () => {
  const [active, setActive] = useState("");
  return (
    <Container>
      {text.map((data) => {
        return (
          <Box>
            <Title onClick={() => setActive(data.title)}>{data.title}</Title>
            {data.texts.map((text) => {
              return <Text active={active == data.title}>{text}</Text>;
            })}
          </Box>
        );
      })}
    </Container>
  );
};

export default Sites;
