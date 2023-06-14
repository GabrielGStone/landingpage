import { images } from "./constants";
import { Container, Wrap, ContactIcon, Number } from "./styles";

const Footer = () => {
  return (
    <Container>
      Contact:
      <Number>number: (+55) 41 99926-1291</Number>
      <Number>email: anjogabriel986@gmail.com</Number>
      <Wrap>
        <a
          href=" https://www.linkedin.com/in/gabriel-rocha-3800b5239/"
          target="_blank"
          rel="noreferrer"
        >
          <ContactIcon src={images.linked} alt="linkedin" />
        </a>
        <a
          href="https://www.instagram.com/gabriel__stone/"
          target="_blank"
          rel="noreferrer"
        >
          <ContactIcon src={images.insta} alt="instagram" />
        </a>
      </Wrap>
    </Container>
  );
};

export default Footer;
