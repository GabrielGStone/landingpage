import { BannerImage, Container } from "./styles";
import { images } from "./constants";

const Banner = () => {
  return (
    <Container>
      <BannerImage src={images.banner} alt="" />
    </Container>
  );
};

export default Banner;
