import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import Card from '../components/Card';
import { courses } from '../utils/coursesData';
import '../styles/Dashboard.css';

function DashboardPage() {
  const [filteredCourses, setFilteredCourses] = useState(courses);

  const handleSearch = (term) => {
    const filtered = courses.filter((course) =>
      course.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div className="dashboard-page">
      <h2>Dashboard</h2>
      <SearchBar onSearch={handleSearch} />
      <div className="course-list">
        {filteredCourses.map((course) => (
          <Card
            key={course.id}
            title={course.title}
            description={course.description}
          />
        ))}
      </div>
    </div>
  );
}

export default DashboardPage;
