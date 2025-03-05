export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  client: string;
  completionDate: Date;
}

export interface JobPosting {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract';
  description: string;
  requirements: string[];
  benefits: string[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface BoxesProps {
  img: string;
  num: number;
  text: string;
}

export interface ShowMoreProps {
  text: string;
  maxLength: number;
  leading?: string;
}
export interface ErrorType {
  name?: string;
  email?: string;
  phone_number?: string;
}

export interface DropdownProps {
  placeholder: string;
  options: string[];
  // eslint-disable-next-line no-unused-vars
  onChange?: (selectedValue: string) => void;
}

export interface CareerDetailModalProps {
  show: boolean;
  onHide: () => void;
  jobId?: string;
}

export interface JobDetails {
  experience?: string;
  pay?: string;
  opening_count?: string;
  description?: string;
  requirements?: string;
  responsibilities?: string;
}
