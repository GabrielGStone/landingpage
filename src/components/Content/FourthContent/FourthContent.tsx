import Button from "../../Button/Button";
import { Text, Text3, Wrap } from "../style";
import Arc from "./Arc";

import DualArcView from "./DualArcView";
import { text } from "./constants";
import { Input, Wrap3 } from "./style";

const FourthContent = () => {
  return (
    <>
      <Arc />
      <Wrap>
        <DualArcView />
        <DualArcView right />
      </Wrap>
      <Wrap3 justify="space-around" center padding="45px 0 0 0">
        <Wrap column padding="0 112px 0 5vw">
          <Text>{text.text1}</Text>
          <Text3 size="20px" color="#0089BC">
            {text.text2}
          </Text3>
        </Wrap>
        <Wrap column>
          <Input placeholder={text.name} />
          <Input placeholder={text.email} />
          <Button mt="21px" padding="13px 24px">
            {text.buttonText}
          </Button>
        </Wrap>
      </Wrap3>
    </>
  );
};

export default FourthContent;
