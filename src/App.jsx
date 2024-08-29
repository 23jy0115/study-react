import { ColorfulMassage } from "./components/colorfulMessage";

export const App = () => {
  const onclickButton = () => alert("hello");
  const contentStyleB = {
    color: "orange",
    fontSize: "18px",
    fontFamily: "'Dela Gothic One', sans-serif",
    marginLeft: 100,
    marginTop: 0,
    paddingTop: 0,
  };
  return (
    <>
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
      </style>
      <h1 style={{ color: "blue" }}>こんにちは</h1>
      <ColorfulMassage color="green"  massage="お元気ですか？" />
      <p style={contentStyleB}>元気です!</p>
      <button onClick={onclickButton}>ボタン</button>
    </>
  );
};
