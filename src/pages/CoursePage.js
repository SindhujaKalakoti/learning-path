import React from 'react';
import TopicList from '../components/TopicList';
import { topics } from '../utils/topicsData';
import '../styles/Dashboard.css';

function CoursePage() {
  const handleTopicSelect = (topic) => {
    alert(`Selected Topic: ${topic}`);
  };

  return (
    <div className="course-page">
      <h2>Course Details</h2>
      <TopicList topics={topics} onSelect={handleTopicSelect} />
    </div>
  );
}

export default CoursePage;
