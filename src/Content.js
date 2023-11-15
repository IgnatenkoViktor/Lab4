import React from 'react';
import './Content.css';

function Content(props) {
  return (
    <div className="content">
      {props.title}
    </div>
  );
}

export default Content;