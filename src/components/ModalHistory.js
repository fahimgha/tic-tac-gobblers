import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
function ModalHistory({ onClose }) {
  return (
    <div className="setting-model">
      <div className="modal">
        In progress
        <button className="button" onClick={onClose}>
          <ClearIcon />
        </button>
      </div>
    </div>
  );
}
export default ModalHistory;
