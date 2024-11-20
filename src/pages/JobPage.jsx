import React, { useState } from "react";
import JobList from "../component/job/JobList";
import jobsData from "../data/translations.json";

const JobPage = () => {
  const [jobs, setJobs] = useState(jobsData.en.positions);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleEditJob = (index) => {
    setEditingIndex(index);
  };

  const handleDeleteJob = (index) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
    if (index === editingIndex) setEditingIndex(null); // ยกเลิกการแก้ไขถ้าลบรายการที่กำลังแก้ไข
  };

  const handleSaveJob = (job, index) => {
    const updatedJobs = [...jobs];
    if (index !== null) {
      updatedJobs[index] = job;
    } else {
      updatedJobs.push(job);
    }
    setJobs(updatedJobs);
    setEditingIndex(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Job Management</h1>
      <JobList
        jobs={jobs}
        editingIndex={editingIndex}
        onEdit={handleEditJob}
        onDelete={handleDeleteJob}
        onSave={handleSaveJob}
      />
    </div>
  );
};

export default JobPage;
