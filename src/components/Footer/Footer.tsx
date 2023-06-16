import { Wrap } from "../Content/style";
import { images, text, text2 } from "./constants";
import { Box, Container, Link, SiteLogo, Title } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Box style={{ justifyContent: "space-between" }} row>
        <SiteLogo>
          <img src={images.logo2} alt="logo" />
        </SiteLogo>
        <Wrap>
          {text.map(({ title, text1, text2, text3, text4, text5 }) => {
            return (
              <Box>
                <Title>{title}</Title>
                <Link>{text1}</Link>
                <Link>{text2}</Link>
                <Link>{text3}</Link>
                {text4 && <Link>{text4}</Link>}
                {text5 && <Link text5>{text5}</Link>}
              </Box>
            );
          })}
        </Wrap>
      </Box>
      <Box
        style={{
          padding: 0,
          borderTop: "2px solid #E1E1E1",
          justifyContent: "space-between",
        }}
        row
      >
        <Box>{text2.hosting}</Box>
        <Box>{text2.networks}</Box>
      </Box>
    </Container>
  );
};

export default Footer;
