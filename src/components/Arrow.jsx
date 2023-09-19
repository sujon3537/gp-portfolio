export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: "93%",
        top: "110%",
      }}
      onClick={onClick}
    />
  );
}
export function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right: "10px",
        top: "110%",
      }}
      onClick={onClick}
    />
  );
}
