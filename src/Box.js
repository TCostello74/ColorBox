// Box.js
import React from 'react';

function Box({ id, width, height, color, removeBox }) {
  return (
    <div style={{ width: `${width}px`, height: `${height}px`, backgroundColor: color }}>
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  );
}

export default Box;
