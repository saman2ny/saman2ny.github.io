import React, { useState } from "react";
import "./ResumeModal.css";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  resumeUrl: string;
  fileName: string;
}

export default function ResumeModal({
  isOpen,
  onClose,
  resumeUrl,
  fileName,
}: ResumeModalProps) {
  if (!isOpen) return null;

  return (
    <div className="resume-modal-overlay" onClick={onClose}>
      <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="resume-modal-close" onClick={onClose}>
          ✕
        </button>
        <h2>{fileName}</h2>
        <iframe
          src={resumeUrl}
          title="Resume PDF"
          className="resume-modal-iframe"
        ></iframe>
        <a
          href={resumeUrl}
          download
          className="resume-modal-download"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
