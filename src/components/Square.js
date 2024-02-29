function Square({ value, handleOnDrop, handleDragOver }) {
  return (
    <div className="square" onDrop={handleOnDrop} onDragOver={handleDragOver}>
      {value}
    </div>
  );
}
export default Square;
