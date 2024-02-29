function Gobblet() {
  const onDragStart = (e, gobblet) => {
    e.dataTransfer.setData("gobblet", gobblet);
    console.log("onDragStart");
  };

  return (
    <div className="gobblet-container">
      <div
        draggable={true}
        onDragStart={(e) => onDragStart(e, "Gobblet Small")}
        onDragEnd={(e) => console.log("onDragEnd")}
      >
        Gobblet Small
      </div>
      <div
        draggable={true}
        onDragStart={(e) => onDragStart(e, "Gobblet Large")}
        onDragEnd={(e) => console.log("onDragEnd")}
      >
        Gobblet Large
      </div>
    </div>
  );
}
export default Gobblet;
