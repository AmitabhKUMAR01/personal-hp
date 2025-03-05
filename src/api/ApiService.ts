import fireAjax from './Api';
import ApiUrl from './ApiUrl';
import { AxiosResponse } from 'axios';

interface Payload {
  [key: string]: string | number | boolean | object | null;
}

export default {
  async letsTalkForm(payload: Payload): Promise<AxiosResponse> {
    return fireAjax({
      method: 'POST',
      URL: `${ApiUrl.letsTalkform}`,
      data: payload,
    });
  },
  async contactForm(payload: Payload): Promise<AxiosResponse> {
    return fireAjax({
      method: 'POST',
      URL: `${ApiUrl.contactForm}`,
      data: payload,
    });
  },
  async estimateCalculatorForm(payload: Payload): Promise<AxiosResponse> {
    return fireAjax({
      method: 'POST',
      URL: `${ApiUrl.estimateCalculatorForm}`,
      data: payload,
    });
  },
  async careerForm(payload: Payload): Promise<AxiosResponse> {
    return fireAjax({
      method: 'POST',
      URL: `${ApiUrl.careerForm}`,
      data: payload,
      header: {
        Authorization:
          'Bearer 2a38a63e263b90f9a2dd7b1aa01332b7a3869304cc0cf162d94837602686e1b8',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  },
  async getJobOpenings(): Promise<AxiosResponse> {
    return fireAjax({
      method: 'GET',
      URL: ApiUrl.jobOpenings,
      header: {
        Authorization:
          'Bearer 2a38a63e263b90f9a2dd7b1aa01332b7a3869304cc0cf162d94837602686e1b8',
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });
  },
  async getJobDescription(jobId: string | number): Promise<AxiosResponse> {
    return fireAjax({
      method: 'GET',
      URL: `${ApiUrl.jobDescription}&job_opening_id=${jobId}`,
      header: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer 2a38a63e263b90f9a2dd7b1aa01332b7a3869304cc0cf162d94837602686e1b8',
      },
    });
  },
};
