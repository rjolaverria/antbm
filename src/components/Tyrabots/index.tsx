import tyrabots from "../../assets/stock/tyrabots.png";

const Tyrabots = ({ width, height }: { width?: number; height?: number }) => (
  <img
    className="tyrabots"
    src={tyrabots}
    alt="Tyra bots"
    style={{ width, height }}
  />
);

export default Tyrabots