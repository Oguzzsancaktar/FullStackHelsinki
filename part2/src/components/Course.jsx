import Header from './Header'
import Content from './Content'
import Total from './Total';

const Course = ({ courses }) => {
  return (
    <div>
      <Header course={courses[0]} />
      <Content course={courses[0]} />
      <Total course={courses[0]} />

      <Header course={courses[1]} />
      <Content course={courses[1]} />
      <Total course={courses[1]} />
    </div>
  );
};

export default Course;
