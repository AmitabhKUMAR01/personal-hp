'use client';

import { CareerDetailsModal } from '@/components';
import React, { useState } from 'react';

const JobList = () => {
  const [selectedJobId, setSelectedJobId] = useState<string | undefined>(
    undefined
  );
  const [showModal, setShowModal] = useState(false);

  const handleShowDetails = (jobId: string) => {
    setSelectedJobId(jobId);
    setShowModal(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
    setSelectedJobId(undefined);
  };

  return (
    <div>
      <ul>
        <li>
          <button onClick={() => handleShowDetails('1')}>PHP Developer</button>
        </li>
        <li>
          <button onClick={() => handleShowDetails('3')}>UpWork Bidder</button>
        </li>
        <li>
          <button onClick={() => handleShowDetails('4')}>
            Lead Generation Intern
          </button>
        </li>
        <li>
          <button onClick={() => handleShowDetails('5')}>SEO Fresher</button>
        </li>
      </ul>

      <CareerDetailsModal
        show={showModal}
        onHide={handleHideModal}
        jobId={selectedJobId}
      />
    </div>
  );
};

export default JobList;
