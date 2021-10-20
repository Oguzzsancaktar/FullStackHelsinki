import Text from "./Text"

const Statistics = (props)=>{

  if (props.statistics.all > 0) {
    return (
      <table>
        <tbody>
      <Text text="Good" value={props.statistics.good} />
      <Text text="Neutral" value={props.statistics.neutral} />
      <Text text="Bad" value={props.statistics.bad} />
      <Text text="All" value={props.statistics.all} />
      <Text text="Avarage" value={props.statistics.avarage} />
      <Text text="Positive"  value={Math.abs(props.statistics.positive).toString() + "%"} />
      </tbody>
      </table>
    )  
  }

  return <h4>No data</h4>
  
}

export default Statistics