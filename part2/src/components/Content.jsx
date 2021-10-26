import Part from "./Part";

const Content = ({ course }) => {
  const list = course.parts.map((item, index) => (
    <Part part={item} key={index} />
  ))
  return (
    <div>
      {list}
    </div>
  );
};

export default Content;