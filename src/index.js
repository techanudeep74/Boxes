/* eslint-disable no-undef */
const Box = (props) => {
  return (
    <div className={`${props.className}`}>
      <p>{props.text}</p>
    </div>
  );
};

const element = (
  <div>
    <h1>Boxes</h1>
    <div className="boxContainer">
      <Box className="box box1" text="Small" />
      <Box className="box box2" text="Medium" />
      <Box className="box box3" text="Large" />
    </div>
  </div>
);
ReactDOM.render(element, document.getElementById("root"));
