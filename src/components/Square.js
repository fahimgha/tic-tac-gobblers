import React from "react";
function Square({ value, handleOnDrop, handleDragOver }) {
  const onDragStart = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className="square"
      onDrop={handleOnDrop}
      onDragStart={onDragStart}
      onDragOver={handleDragOver}
    >
      {value ? (
        <img src={`./${value.player}_${value.gobblet}.png`} alt={value} />
      ) : null}
    </div>
  );
}
export default Square;
