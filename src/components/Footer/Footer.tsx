import { Text3, Wrap } from "../Content/style";
import { images, networks, text, text2 } from "./constants";
import { Box, Container, Icon, Link, SiteLogo, Title } from "./styles";

const Footer = () => {
  return (
    <Container>
      <Box style={{ justifyContent: "space-between" }} width="100%" row>
        <SiteLogo>
          <img src={images.logo2} alt="logo" />
        </SiteLogo>
        <Wrap width="auto">
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
          padding: "20px 0 46px",
          borderTop: "2px solid #E1E1E1",
          justifyContent: "space-between",
        }}
        row
      >
        <Box row style={{ width: "auto" }}>
          <Text3 color="#E1E1E1" size="14px" style={{ marginTop: "0" }}>
            {text2.hosting}
          </Text3>
        </Box>
        <Box style={{ width: "auto" }}>
          <Text3 color="#71D8FF" size="20px" style={{ marginTop: "0" }}>
            {text2.networks}
          </Text3>
          <div>
            {networks.map((data) => {
              return <Icon src={data} />;
            })}
          </div>
        </Box>
      </Box>
    </Container>
  );
};

export default Footer;
