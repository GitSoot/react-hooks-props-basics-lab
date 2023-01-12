import React from "react";

function Links(props) {
  return (
    <div id="links">
      <h2>Links</h2>
      <a href="https://github.com/liza">{props.gitHub}</a>
      <a href="https://www.linkedin.com/in/liza/">{props.linkedIn}</a>

    </div>
  );
}

export default Links;