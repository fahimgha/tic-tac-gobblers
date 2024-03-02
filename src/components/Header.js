import React from "react";
import { QuestionMark, History } from "@mui/icons-material";

function Header() {
  return (
    <div className="header">
      <div className="header-container">
        <div className="button-rule">
          <History />
        </div>
        <div className="title">
          <div>Tic-tac-G</div>
          <div>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="12" fill="#FF0000" />
            </svg>
          </div>
          <div>bblers</div>
        </div>
        <div className="button-rule">
          <QuestionMark />
        </div>
      </div>
    </div>
  );
}
export default Header;
