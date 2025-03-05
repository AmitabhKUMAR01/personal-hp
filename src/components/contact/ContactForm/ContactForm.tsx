'use client';
import React, { useState } from 'react';
import styles from './ContactForm.module.scss';
import Button from '@/components/ui/Button';

type FormField =
  | 'name'
  | 'email'
  | 'phone'
  | 'skype'
  | 'subject'
  | 'interest'
  | 'message';

interface FormDataType {
  name: string;
  email: string;
  phone: number | undefined;
  skype: string;
  subject: string;
  interest: string;
  message: string;
  subscribe: boolean;
}

type ErrorType = Partial<Record<FormField, string>>;

const interestOptions = [
  'Website design',
  'App development',
  'CRM design',
  'Graphic design',
  'UI/UX design',
  'Other',
];

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormDataType>({
    name: '',
    email: '',
    phone: undefined,
    skype: '',
    subject: '',
    interest: '',
    message: '',
    subscribe: false,
  });

  const [errors, setErrors] = useState<ErrorType>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        name === 'phone'
          ? value === ''
            ? undefined
            : Number(value)
          : type === 'checkbox'
            ? (e.target as HTMLInputElement).checked
            : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: ErrorType = {};

    if (!formData.name) {
      newErrors.name = 'Required';
    } else if (formData.name.length > 15) {
      newErrors.name = 'Must be 15 characters or less';
    }

    if (!formData.email) {
      newErrors.email = 'Required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address';
    }

    if (!formData.phone) {
      newErrors.phone = 'Required';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <h2 className={styles.heading}>Share your idea or requirement.</h2>

        {/* Grid Layout */}
        <div className={styles.gridLayout}>
          {(['name', 'email', 'phone', 'skype', 'subject'] as FormField[]).map(
            (field) => (
              <div key={field} className={styles.inputGroup}>
                <input
                  type="text"
                  id={field}
                  name={field}
                  value={formData[field] || ''}
                  onChange={handleChange}
                  className={`${styles.input} ${errors[field] ? styles.errorBorder : ''}`}
                  placeholder=" "
                />
                <label htmlFor={field} className={styles.label}>
                  {field.replace(/^\w/, (c) => c.toUpperCase())}
                </label>
                {errors[field] && (
                  <p className={styles.error}>{errors[field]}</p>
                )}
              </div>
            )
          )}

          {/* Interest Dropdown */}
          <div className={styles.inputGroup}>
            <label htmlFor="interest" className={styles.label}>
              Interested in
            </label>
            <select
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className={`${styles.select} ${errors.interest ? styles.errorBorder : ''}`}
            >
              <option value="" disabled hidden></option>
              {interestOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>

            {errors.interest && (
              <p className={styles.error}>{errors.interest}</p>
            )}
          </div>
        </div>

        {/* Message */}
        <div className={styles.textareaGroup}>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`${styles.textarea} ${errors.message ? 'border-red-500' : ''}`}
            placeholder=" "
          />
          <label htmlFor="message" className={styles.label}>
            Message
          </label>
          {errors.message && <p className={styles.error}>{errors.message}</p>}
        </div>

        {/* Subscribe Checkbox */}
        <div className={styles.checkboxGroup}>
          <input
            type="checkbox"
            id="subscribe"
            name="subscribe"
            checked={formData.subscribe}
            onChange={handleChange}
            className={styles.checkbox}
          />
          <label htmlFor="subscribe" className={styles.label}>
            Subscribe to our Newsletter.
          </label>
        </div>

        {/* Submit Button */}
        <div className={styles.buttonContainer}>
          <Button
            title={<span>Send your inquiry →</span>}
            borderRadius="30px"
            size="lg"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
