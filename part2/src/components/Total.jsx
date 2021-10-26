
const Total = ({ course }) => {
  let sum = 0;
  for (let i = 0; i < course.parts.length; i++) {
    sum += course.parts[i].exercises;
  }
  // const sum =
  //   course.parts[0].exercises +
  //   course.parts[1].exercises +
  //   course.parts[2].exercises;

  //   var reduceSum = 0;

  //  course.parts.forEach(item => {
  //     reduceSum += item.exercises
  // })
  // console.log(reduceSum);

  return <h2>Number of exercises {sum}</h2>;
};

export default Total;