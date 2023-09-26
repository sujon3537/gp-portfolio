export function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: window.innerWidth <= 425 ? "85%" : "93%",
        top: "105%",
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
        top: "105%",
      }}
      onClick={onClick}
    />
  );
}
