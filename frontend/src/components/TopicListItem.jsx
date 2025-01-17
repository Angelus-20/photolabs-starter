import React from "react";
import "../styles/TopicListItem.scss";


const TopicListItem = (props) => {
  const { label } = props;

  return (
    <div className="topic-list__item" onClick={()=> props.fetchPhotosByTopic(props.id)}>      
        <span>{label}</span>
    </div>
  );
};

export default TopicListItem;
