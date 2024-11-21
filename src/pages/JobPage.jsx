import React, { useState } from "react";
import JobList from "../component/job/JobList";
import JobForm from "../component/job/JobForm";
import jobsData from "../data/translations.json";

const JobPage = () => {
  const [language, setLanguage] = useState("en"); // ค่าเริ่มต้นเป็นภาษาอังกฤษ
  const [jobs, setJobs] = useState(jobsData[language].positions);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isAdding, setIsAdding] = useState(false);

  const switchLanguage = (lang) => {
    setLanguage(lang);
    setJobs(jobsData[lang].positions); // เปลี่ยนตำแหน่งงานให้ตรงกับภาษาที่เลือก
  };

  const handleAddJob = () => {
    setEditingIndex(null);
    setIsAdding(true);
  };

  const handleEditJob = (index) => {
    setEditingIndex(index);
    setIsAdding(false);
  };

  const handleDeleteJob = (index) => {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
    if (index === editingIndex) setEditingIndex(null);
  };

  const handleSaveJob = (job) => {
    const updatedJobs = [...jobs];
    if (editingIndex !== null) {
      updatedJobs[editingIndex] = job;
    } else {
      updatedJobs.push(job);
    }
    setJobs(updatedJobs);
    setEditingIndex(null);
    setIsAdding(false);
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">
        {language === "en" ? "Job Management" : "การจัดการงาน"}
      </h1>

      {/* สลับภาษา */}
      <div className="mb-4">
        <button
          className={`px-2 py-1 mr-2 ${language === "en" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => switchLanguage("en")}
        >
          English
        </button>
        <button
          className={`px-2 py-1 ${language === "th" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => switchLanguage("th")}
        >
          ภาษาไทย
        </button>
      </div>

      {/* ปุ่มเพิ่มงาน */}
      {!isAdding && editingIndex === null && (
        <button
          className="bg-green-500 text-white px-2 py-1 mb-4"
          onClick={handleAddJob}
        >
          {language === "en" ? "Add Job" : "เพิ่มตำแหน่งงาน"}
        </button>
      )}

      {/* ฟอร์มเพิ่มงาน */}
      {isAdding && (
        <JobForm
          onSave={handleSaveJob}
          initialData={{}}
          onCancel={() => setIsAdding(false)}
        />
      )}

      {/* รายการงาน */}
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
