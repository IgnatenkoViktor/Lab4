import React from 'react';
import './SideBar.css';

function SideBar(props) {
  return (
    <div className="sidebar">
      {props.title}
    </div>
  );
}

export default SideBar;