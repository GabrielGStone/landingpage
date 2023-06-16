import { images } from "./constants";
import { LateralScroll, Products } from "./style";

const HorizontalScroll = () => {
  let products = [
    { text: "SITES", image: images.laptop },
    { text: "E-COMMERCE", image: images.phone },
    { text: "REDES", image: images.shop },
  ];

  for (let i = 0; i < 4; i++) products = [...products, ...products];

  return (
    <LateralScroll>
      {products.map((link: { text: string; image: string }, index: number) => {
        return (
          <Products key={index}>
            <img src={link.image} alt={link.text} />
            {link.text}
          </Products>
        );
      })}
    </LateralScroll>
  );
};

export default HorizontalScroll;
