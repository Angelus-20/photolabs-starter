import React from "react";
import TopicListItem from "./TopicListItem";
import "../styles/TopicList.scss";


const TopicList = ({topics, fetchPhotosByTopic }) => { // Add onTopicClick as a prop
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic) => {
        // Pass the onTopicClick function to TopicListItem
        return <TopicListItem label={topic.title} key={topic.id} id={topic.id} fetchPhotosByTopic={fetchPhotosByTopic} />
      })}
    </div>
  );
};

export default TopicList;
