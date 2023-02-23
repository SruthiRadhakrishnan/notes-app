import React, { useState } from "react";
import NoteAddIcon from "@material-ui/icons/NoteAdd";
import { Fab, Zoom } from "@material-ui/core";

function CreateArea(props) {
  const [formState, setFormState] = useState({ title: "", content: "" });
  const [isExpanded, setIsExpanded] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function handleClick(event) {
    event.preventDefault();
    props.addNote(formState);
    setFormState({ title: "", content: "" });
    setIsExpanded(false);
  }
  function expand() {
    setIsExpanded(true);
  }
  return (
    <div>
      <form class="create-note">
        {isExpanded && (
          <input
            onChange={handleChange}
            name="title"
            placeholder="Title"
            value={formState.title}
          />
        )}
        <textarea
          onClick={expand}
          onChange={handleChange}
          value={formState.content}
          name="content"
          placeholder="Take a note..."
          rows={isExpanded ? 3 : 1}
        />
        <Zoom in={formState.content ? true : false}>
          <Fab onClick={handleClick}>
            <NoteAddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
