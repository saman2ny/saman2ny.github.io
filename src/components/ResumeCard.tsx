import React, { useState } from "react";
import ResumeModal from "./ResumeModal";
import "./ResumeCard.css";

interface ResumeCardProps {
  fileName: string;
  uploadDate: string;
  resumeUrl: string;
}

export default function ResumeCard({
  fileName,
  uploadDate,
  resumeUrl,
}: ResumeCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="resume-card" onClick={() => setIsModalOpen(true)}>
        <div className="resume-card-content">
          <h3 className="resume-card-title">{fileName}</h3>
          <p className="resume-card-date">Uploaded on {uploadDate}</p>
        </div>
        <button className="resume-card-cta" type="button" aria-label="View resume">
          <span>View Resume</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 1V15M8 15L13 10M8 15L3 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      <ResumeModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        resumeUrl={resumeUrl}
        fileName={fileName}
      />
    </>
  );
}
