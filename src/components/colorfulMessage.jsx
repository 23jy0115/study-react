export const ColorfulMassage = (props) => {
  console.log(props);
  const contentStyleA = {
    color: props.color,
    fontSize: "18px",
    fontFamily: "'Dela Gothic One', sans-serif",
    marginLeft: 100,
  };
  return <p style={contentStyleA}>{props.massage}</p>;
};
