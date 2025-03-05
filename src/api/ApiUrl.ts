const ApiUrl = {
  letsTalkform: '/hpapi',
  contactForm: '/hpapi',
  estimateCalculatorForm: '/request_api',
  careerForm: '/career_form',
  jobOpenings: '/career_list?endpoint=job_openings',
  jobDescription: '/career_list?endpoint=job_descriptions',
} as const;

export default ApiUrl;
