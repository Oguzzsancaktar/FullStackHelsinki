import React from "react";

const PersonForm = ( { onChange , onClick, newName, newPhone }) => {
  return (
    <form>
    <div>
      name:{" "}
      <input id="nameInput" value={newName} onChange={onChange} />
    </div>
    <div>
      number:{" "}
      <input
        id="phoneInput"
        value={newPhone}
        onChange={onChange}
        type="tel"
      />{" "}
    </div>
    <div>
      <button onClick={onClick} type="submit">
        add
      </button>
    </div>
  </form>
  );
};

export default PersonForm;
