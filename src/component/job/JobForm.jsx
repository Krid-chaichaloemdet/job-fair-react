import React, { useState } from "react";

const JobForm = ({ initialData = {}, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    positionName: initialData.positionName || "",
    jobDes: initialData.jobDes || [""],
    requirement: initialData.requirement || [""],
  });

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <label>
        Position Name:
        <input
          type="text"
          value={formData.positionName}
          onChange={(e) => handleChange("positionName", e.target.value)}
          className="border p-1 w-full"
        />
      </label>
      <label>
        Job Description:
        <textarea
          value={formData.jobDes.join(", ")}
          onChange={(e) => handleChange("jobDes", e.target.value.split(", "))}
          className="border p-1 w-full"
        />
      </label>
      <label>
        Requirements:
        <textarea
          value={formData.requirement.join(", ")}
          onChange={(e) => handleChange("requirement", e.target.value.split(", "))}
          className="border p-1 w-full"
        />
      </label>
      <div className="flex space-x-2">
        <button type="submit" className="bg-green-500 text-white px-2 py-1">
          Save
        </button>
        <button
          type="button"
          className="bg-gray-500 text-white px-2 py-1"
          onClick={onCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default JobForm;
