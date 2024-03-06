import React from "react";
import ClearIcon from "@mui/icons-material/Clear";

function ModalHelp({ onClose }) {
  return (
    <div className="setting-model">
      <div className="modal">
        <div className="modal-header">
          <h2>How to play ?</h2>

          <button className="button" onClick={onClose}>
            <ClearIcon />
          </button>
        </div>
        <p>
          Like Tic-Tac-Toe, you must be the first player to get 3 pieces in a
          row to win.
        </p>
        <p>
          Each player have a color. You don't have to start with your bigger
          pieces. Do not hesitate to gobble up your opponent's pieces.
        </p>
      </div>
    </div>
  );
}

export default ModalHelp;
