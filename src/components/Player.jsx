import { useState } from "react";

function Player({ initialName, symbol, isActive, playerId,onNameChange }) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(editing => !editing);
  }

  function handleChange(event) {
    setName(event.target.value);
  }
  function handleSaveClick() {
    onNameChange(playerId, name); // Notify parent about name change
    setIsEditing(false); // Exit edit mode
  }
  return (
    <li className={isActive ? "active" : undefined}>
      <span className="player">
        {isEditing ? (
          <input type="text" required value={name} onChange={handleChange} autoFocus />
        ) : (
          <span className="player-name">{name}</span>
        )}
      </span>
      <span className="player-symbol">{symbol}</span>
      <button onClick={isEditing ?handleSaveClick: handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
    </li>
  );
}

export default Player;

