import React from 'react';
import '../styles/TopicList.css';

function TopicList({ topics, onSelect }) {
  return (
    <div className="topic-list">
      {topics.map((topic, index) => (
        <div key={index} className="topic-item" onClick={() => onSelect(topic)}>
          {topic}
        </div>
      ))}
    </div>
  );
}

export default TopicList;

