import React from "react";
import ClearIcon from "@mui/icons-material/Clear";
function ModalHistory({ onClose }) {
  return (
    <div className="setting-model">
      <div className="modal">
        <div className="modal-header">
          <h2>In progress...</h2>
          <button className="button" onClick={onClose}>
            <ClearIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
export default ModalHistory;
