import React from 'react'

const History = ({allClicks})=> {

    if (allClicks.length === 0)  {
      return(
        <div>
          The app is used by pressing the buttons.
        </div>
      )
    }



    return (
      <div>
        Button press history : {allClicks.join('')}
      </div>
      )
}


export default History;