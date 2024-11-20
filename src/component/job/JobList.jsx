import React from "react";
import JobForm from "./JobForm";

const JobList = ({ jobs, editingIndex, onEdit, onDelete, onSave }) => {
  return (
    <ul className="space-y-4">
      {jobs.map((job, index) => (
        <li key={index} className="border p-2 rounded">
          {editingIndex === index ? (
            <JobForm
              initialData={job}
              onSave={(updatedJob) => onSave(updatedJob, index)}
              onCancel={() => onEdit(null)}
            />
          ) : (
            <>
              <h3 className="font-semibold">{job.positionName}</h3>
              <p><strong>Description:</strong> {job.jobDes.join(", ")}</p>
              <p><strong>Requirements:</strong> {job.requirement.join(", ")}</p>
              <button
                className="text-blue-500 mr-2"
                onClick={() => onEdit(index)}
              >
                Edit
              </button>
              <button
                className="text-red-500"
                onClick={() => onDelete(index)}
              >
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default JobList;
