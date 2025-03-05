'use client';

import React, { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import styles from './SubmitResume.module.scss';
import { Button, CareerDetailsModal, Dropdown } from '@/components/index';
import Image from 'next/image';
import { CareerDetailsImages } from '@/constants';
import { CarrerArrow } from '@/constants';

export const SubmitResume = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    file: 'File Upload',
    currentCTC: '',
    expectedCTC: '',
    jobType: '',
    jobOpening: '',
    noticePeriod: '',
    location: '',
    message: '',
    agreeTerms: false,
    subscribeNewsletter: false,
  });

  const [selectedJobId, setSelectedJobId] = useState<string | undefined>(
    undefined
  );
  const [showModal, setShowModal] = useState(false);
  const [isButtonVisible, setButtonVisible] = useState(false);

  const handleDropdownChange = (selectedValue: string) => {
    setSelectedJobId(selectedValue);
    setButtonVisible(true);
  };

  const handleHideModal = () => {
    setShowModal(false);
    setSelectedJobId(undefined);
  };

  const handleChange = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData(formData);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const noticePeriodList: string[] = [
    '15-days',
    '1-months',
    '2-months',
    'more than 2-months',
  ];

  const jobTypeList: string[] = ['Internship', 'Full Time'];

  const jobOpeningList = [
    { id: '1', name: 'PHP Developer' },
    { id: '3', name: 'Upwork Bidder' },
    { id: '4', name: 'Lead Generation Intern' },
    { id: '5', name: 'SEO Fresher' },
  ];

  return (
    <div className={styles.container}>
      <h2>Submit Resume</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.column}>
          <div className={styles.shiftGroup}>
            <input
              type="text"
              name="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              className={styles.shiftInput}
              required
            />
            <label className={styles.shiftLabel}>Name</label>
          </div>

          <div className={styles.shiftGroup}>
            <input
              type="number"
              name="contact"
              placeholder=" "
              required
              value={formData.contact}
              onChange={handleChange}
              className={styles.shiftInput}
            />
            <label className={styles.shiftLabel}>Contact No.</label>
          </div>

          <div className={styles.shiftGroup}>
            <input
              type="number"
              name="currentCTC"
              placeholder=" "
              required
              value={formData.currentCTC}
              onChange={handleChange}
              className={styles.shiftInput}
            />
            <label className={styles.shiftLabel}>Current CTC (In Lakhs)</label>
          </div>
          <Dropdown placeholder="Job Type" options={jobTypeList} />
          <Dropdown placeholder="Notice Period" options={noticePeriodList} />
        </div>

        <div className={styles.column}>
          <div className={styles.shiftGroup}>
            <input
              type="email"
              name="email"
              placeholder=" "
              required
              value={formData.email}
              onChange={handleChange}
              className={styles.shiftInput}
            />
            <label className={styles.shiftLabel}>Your email address</label>
          </div>

          <div className={styles.fileUpload}>
            <input
              type="file"
              id="fileInput"
              name="file"
              onChange={handleChange}
              className={styles.hiddenInput}
              required
            />
            <span>{formData.file}</span>
            <label htmlFor="fileInput">Select</label>
          </div>

          <div className={styles.shiftGroup}>
            <input
              type="number"
              name="expectedCTC"
              placeholder=" "
              required
              value={formData.expectedCTC}
              onChange={handleChange}
              className={styles.shiftInput}
            />
            <label className={styles.shiftLabel}>Expected CTC (In Lakhs)</label>
          </div>

          <div className={styles.shiftGroup}>
            <input
              type="text"
              name="location"
              placeholder=" "
              required
              value={formData.location}
              onChange={handleChange}
              className={styles.shiftInput}
            />
            <label className={styles.shiftLabel}>Current Location</label>
          </div>

          <div className={styles.column}>
            <div className={styles.modal}>
              <Dropdown
                placeholder="Select Job Opening"
                options={jobOpeningList.map((job) => job.name)}
                onChange={(selectedValue) => {
                  const job = jobOpeningList.find(
                    (j) => j.name === selectedValue
                  );
                  if (job) {
                    handleDropdownChange(job.id);
                  }
                }}
              />
              {isButtonVisible && (
                <div
                  className={styles.svgImg}
                  onClick={() => setShowModal(true)}
                >
                  <Image
                    src={
                      CareerDetailsImages.find(
                        (img) => img.name.toLowerCase() === 'description'
                      )?.imageUrl || ''
                    }
                    alt="Description Icon"
                    width={20}
                    height={20}
                    className={styles.desc}
                  />
                </div>
              )}
            </div>
            <CareerDetailsModal
              show={showModal}
              onHide={handleHideModal}
              jobId={selectedJobId}
            />
          </div>
        </div>

        <div className={styles.msg}>
          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>

        <div className={styles.checkboxes}>
          <div className={styles.checkboxesLabel}>
            <label>
              <input
                type="checkbox"
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleChange}
                required
                className="lg:h-4 lg:w-4 xl:h-[18px] xl:w-[18px] "
              />
              I agree to the Terms & Conditions of HangingPanda
            </label>

            <label>
              <input
                type="checkbox"
                name="subscribeNewsletter"
                checked={formData.subscribeNewsletter}
                onChange={handleChange}
                className="lg:h-4 lg:w-4 xl:h-[18px] xl:w-[18px] "
              />
              Subscribe to our Newsletter
            </label>
          </div>

          <div>
            <ReCAPTCHA sitekey="6LeGj7oqAAAAAHBQVW_k58r17rM3JSjYo2rj2edU" />
          </div>

          <div className={styles.btn}>
            <Button
              title={
                <span>
                  submit
                  <Image
                    src={
                      CarrerArrow.find(
                        (img) => img.name.toLowerCase() === 'arrow'
                      )?.imageUrl || ''
                    }
                    alt="Arrow"
                    width={24}
                    height={24}
                  />
                </span>
              }
              size="xl"
              borderRadius="70px"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
