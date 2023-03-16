const exercises1 = 10;
const exercises2 = 7;
const exercises3 = 14;

const Header = props => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  );
};

const Content = () => {
  const part1 = "Fundamentals of React";
  const part2 = "Using props to pass data";
  const part3 = "State of a component";
  return (
    <div>
      <Part part={part1} exercises={exercises1} />
      <Part part={part2} exercises={exercises2} />
      <Part part={part3} exercises={exercises3} />
    </div>
  );
};

const Total = props => {
  return (
    <div>
      <h3>Total number of exercise: {props.total}</h3>
    </div>
  );
};

const Part = props => {
  return (
    <div>
      <p>
        <strong>{props.part}</strong>
      </p>
      <p>number of exercise: {props.exercises}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  return (
    <div>
      <Header course={course} />
      <Content />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
