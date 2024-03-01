function Gobblet({ gobbletSize, player }) {
  const onDragStart = (e, gobblet) => {
    e.dataTransfer.setData("gobblet", JSON.stringify({ player, gobblet }));
  };

  return (
    <div
      className="gobblet-item"
      draggable={true}
      onDragStart={(e) => onDragStart(e, gobbletSize)}
    >
      <img className="item-img" src={`./${player}_${gobbletSize}.png`} />
    </div>
  );
}
export default Gobblet;
