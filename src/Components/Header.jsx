import React from "react";
import NotesIcon from "@material-ui/icons/Notes";

function Header() {
  return (
    <header>
      <h1>
        <NotesIcon />
        <span>Notes</span>
      </h1>
    </header>
  );
}

export default Header;
