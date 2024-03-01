function Gobblet({ gobbletSize }) {
  const onDragStart = (e, gobblet) => {
    e.dataTransfer.setData("gobblet", gobblet);
  };

  return (
    <div
      className="gobblet-item"
      draggable={true}
      onDragStart={(e) => onDragStart(e, gobbletSize)}
      onDragEnd={(e) => console.log("onDragEnd")}
    >
      <img className="item-img" src={`./${gobbletSize}.png`} />
    </div>
  );
}
export default Gobblet;
