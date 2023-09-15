import React from "react";

function TitleComponent({title,introPara}) {
  return (
    <div>
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="Features-text">
        <p>
            {introPara}
          {/* Our aim is to make it quick and easy for you to access your favourite
          websites. Your bookmarks sync between your devices so you can access
          them on the go. */}
        </p>
      </div>
    </div>
  );
}

export default TitleComponent;
