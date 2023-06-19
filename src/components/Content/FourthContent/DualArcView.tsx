import { FC } from "react";
import { ArcView, Box, Caps, RightImages } from "./style";
import { images, text } from "./constants";
import { Text, Text3, TextContainer } from "../style";

interface arcProps {
  right?: boolean;
}

const DualArcView: FC<arcProps> = ({ right }) => {
  const rigthImages = [images.selo, images.vegan, images.organico];
  return (
    <ArcView>
      <Box right={right}>
        {right ? (
          rigthImages.map((data) => {
            return <RightImages src={data} alt={data} />;
          })
        ) : (
          <TextContainer width="800px">
            <Text size="16px">{text.lorem1}</Text>
            <Text3 size="15px" weight="300">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
              erat, sed diam voluptua.
              <Caps>dolores et ea rebum. Stet clita kasd gubergren,</Caps> no
              sea takimata At vero eos et accusam et justo duo sanctus est Lorem
              ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
              <Caps>
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam
              </Caps>
              voluptua. At vero eos et accusam et.
            </Text3>
          </TextContainer>
        )}
      </Box>
    </ArcView>
  );
};

export default DualArcView;
