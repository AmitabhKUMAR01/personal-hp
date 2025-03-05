'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import ApiService from '@/api/ApiService';
import { CareerDetailsImages } from '@/constants';
import styles from './careerDetails.module.scss';
import { CareerDetailModalProps, JobDetails } from '@/types';

const CareerDetailModal: React.FC<CareerDetailModalProps> = ({
  show,
  onHide,
  jobId,
}) => {
  const [jobDetails, setJobDetails] = useState<JobDetails | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchJobDetails = async () => {
      if (!jobId || !show) return;

      setLoading(true);
      setError(null);

      try {
        const response = await ApiService.getJobDescription(jobId);
        if (
          response?.data?.job_descriptions &&
          Array.isArray(response.data.job_descriptions) &&
          response.data.job_descriptions.length > 0
        ) {
          const jobData = response.data.job_descriptions[0];
          setJobDetails({ ...jobData });
        } else {
          console.error('Unexpected response format', response?.data);
          setError('Invalid API response');
        }
      } catch (error) {
        console.error('Error fetching job details:', error);
        setError('Failed to load job details');
      } finally {
        setLoading(false);
      }
    };
    fetchJobDetails();
  }, [jobId, show]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onHide();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onHide]);

  if (!show) return null;

  const shareUrl = `https://www.hangingpanda.com/careerDetails?id=${jobId}`;

  const handleShare = (platform: string) => {
    let url = '';

    switch (platform) {
      case 'copy':
        window.navigator.clipboard
          .writeText(shareUrl)
          .then(() => window.alert('URL copied to clipboard!'))
          .catch(() => window.alert('Failed to copy the URL'));
        return;
      case 'whatsapp':
        url = `https://wa.me/?text=${encodeURIComponent(shareUrl)}`;
        break;
      case 'facebook':
        url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      case 'linkedin':
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
          shareUrl
        )}`;
        break;
      case 'telegram':
        url = `https://t.me/share/url?url=${encodeURIComponent(
          shareUrl
        )}&text=Check this out!`;
        break;
      default:
        return;
    }
    window.open(url, '_blank');
  };

  const socialMedia = [
    { platform: 'copy', iconId: '43610' },
    { platform: 'whatsapp', iconId: '16713' },
    { platform: 'facebook', iconId: '118497' },
    { platform: 'linkedin', iconId: '13930' },
    { platform: 'telegram', iconId: '63306' },
  ];

  return (
    <div className={`${styles.modal} ${show ? 'visible' : 'hidden'}`}>
      <div className={styles.container} ref={modalRef}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {loading ? 'Loading...' : 'Job Details'}
          </h2>
          {jobDetails && (
            <div className={styles.social}>
              {socialMedia.map(({ platform, iconId }) => (
                <button
                  key={platform}
                  onClick={() => handleShare(platform)}
                  className={styles.button}
                >
                  <Image
                    src={`https://img.icons8.com/?size=100&id=${iconId}&format=png&color=000000`}
                    alt={platform}
                    width={30}
                    height={30}
                  />
                </button>
              ))}
            </div>
          )}
          <button onClick={onHide} className={styles.closeIcon}>
            &times;
          </button>
        </div>

        <div className={styles.content}>
          {loading ? (
            <div className={styles.loadingContainer}>
              <div className={styles.loadingSpin}>
                <Image
                  src={
                    CareerDetailsImages.find(
                      (img) => img.name.toLowerCase() === 'experience'
                    )?.imageUrl || ''
                  }
                  alt="Experience Icon"
                  width={20}
                  height={20}
                />
              </div>
              <p>Loading job details...</p>
            </div>
          ) : error ? (
            <p>{error}</p>
          ) : jobDetails ? (
            <div className={styles.details}>
              <div className={styles.header1}>
                {jobDetails.experience && (
                  <div className={styles.svgImg}>
                    <div>
                      <Image
                        src={
                          CareerDetailsImages.find(
                            (img) => img.name.toLowerCase() === 'experience'
                          )?.imageUrl || ''
                        }
                        alt="Experience Icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={styles.section}>
                      <h6>Experience Required</h6>
                      <p>{jobDetails.experience}</p>
                    </div>
                  </div>
                )}

                {jobDetails.pay && (
                  <div className={styles.svgImg}>
                    <div>
                      <Image
                        src={
                          CareerDetailsImages.find(
                            (img) => img.name.toLowerCase() === 'packages'
                          )?.imageUrl || ''
                        }
                        alt="Package Icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={styles.section}>
                      <h6>Package</h6>
                      <p>{jobDetails.pay}</p>
                    </div>
                  </div>
                )}
                {jobDetails.opening_count && (
                  <div className={styles.svgImg}>
                    <div>
                      <Image
                        src={
                          CareerDetailsImages.find(
                            (img) => img.name.toLowerCase() === 'opening'
                          )?.imageUrl || ''
                        }
                        alt="Opening Icon"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className={styles.section}>
                      <h6>Number of Openings </h6>
                      <p>{jobDetails.opening_count}</p>
                    </div>
                  </div>
                )}
              </div>

              <div>
                {jobDetails.description && (
                  <div>
                    <div className={styles.svgImg}>
                      <Image
                        src={
                          CareerDetailsImages.find(
                            (img) => img.name.toLowerCase() === 'description'
                          )?.imageUrl || ''
                        }
                        alt="Description Icon"
                        width={20}
                        height={20}
                      />
                      <h5>Job Description</h5>
                    </div>
                    <div className={styles.section}>
                      <ul>
                        {jobDetails.description
                          .split('\r\n')
                          .map((req, index) => {
                            const trimmedReq = req.replace('•', '').trim();
                            return trimmedReq ? (
                              <span key={index}>{trimmedReq}</span>
                            ) : null;
                          })
                          .filter(Boolean)}
                      </ul>
                    </div>
                  </div>
                )}

                {jobDetails.requirements && (
                  <div>
                    <div className={styles.svgImg}>
                      <Image
                        src={
                          CareerDetailsImages.find(
                            (img) => img.name.toLowerCase() === 'requirements'
                          )?.imageUrl || ''
                        }
                        alt="Requirements Icon"
                        width={20}
                        height={20}
                      />
                      <h5>Requirements</h5>
                    </div>
                    <div className={styles.section}>
                      <ol type="1">
                        {jobDetails.requirements
                          .split('\r\n')
                          .map((req, index) => {
                            const trimmedReq = req.replace('•', '').trim();
                            return trimmedReq ? (
                              <li key={index}>{trimmedReq}</li>
                            ) : null;
                          })
                          .filter(Boolean)}
                      </ol>
                    </div>
                  </div>
                )}

                {jobDetails.responsibilities && (
                  <div>
                    <div className={styles.svgImg}>
                      <Image
                        src={
                          CareerDetailsImages.find(
                            (img) => img.name.toLowerCase() === 'responsibility'
                          )?.imageUrl || ''
                        }
                        alt="Responsibility Icon"
                        width={20}
                        height={20}
                      />
                      <h5> Responsibilities </h5>
                    </div>
                    <div className={styles.section}>
                      <ul>
                        {jobDetails.responsibilities
                          .split('\r\n')
                          .map((req, index) => {
                            const trimmedReq = req.replace('•', '').trim();
                            return trimmedReq ? (
                              <li key={index}>{trimmedReq}</li>
                            ) : null;
                          })
                          .filter(Boolean)}
                      </ul>
                    </div>
                  </div>
                )}
              </div>

              {!jobDetails.description &&
                !jobDetails.requirements &&
                !jobDetails.responsibilities && (
                  <div className="py-4 text-center">
                    <p className="text-muted">
                      Detailed job description will be available soon.
                    </p>
                  </div>
                )}
            </div>
          ) : (
            <p>No job details available at the moment.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareerDetailModal;
