function Square({ value, handleOnDrop, handleDragOver }) {
  return (
    <div className="square" onDrop={handleOnDrop} onDragOver={handleDragOver}>
      {value ? <img src={`./${value}.png`} alt={value} /> : null}
    </div>
  );
}
export default Square;
