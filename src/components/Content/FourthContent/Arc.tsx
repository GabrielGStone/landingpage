import { ArcContainer } from "./style";

const Arc = () => {
  return (
    <div style={{ display: "flex" }}>
      <ArcContainer />
      <ArcContainer right />
    </div>
  );
};

export default Arc;
