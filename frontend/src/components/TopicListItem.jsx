import React from "react";
import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const { label } = props;

  return (
    <div className="topic-list__item">
        <span>Photo topic : {label}</span>
    </div>
  );
};

export default TopicListItem;
