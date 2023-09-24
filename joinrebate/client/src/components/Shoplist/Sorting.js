import React from 'react';

function Sorting() {
  return (
    <div className="hb_sorting">
      <select className="hb_select">
        <option value="0">Default Sorting</option>
        <option value="1">Ascending</option>
        <option value="2">Descending</option>
      </select>
    </div>
  );
}

export default Sorting;
