import { images } from "./constants";
import { Container, Glass, Input } from "./styles";

const CustomInput = () => {
  return (
    <Container>
      <Input placeholder="Digite sua pesquisa" />
      <Glass src={images.glass} alt="glass" />
    </Container>
  );
};

export default CustomInput;
