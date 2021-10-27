import React from "react";

const Filter = ({newFilter,onChange}) => {
  return (
      <form>
        <div>
          filter shown with:{" "}
          <input
            id="filterInput"
            value={newFilter}
            onChange={onChange}
          />
        </div>
    </form>
  );
};

export default Filter;
