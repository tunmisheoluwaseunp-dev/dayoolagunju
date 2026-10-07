export const caseStudies = [
  {title: 'Venue Booking Marketplace for Private Events', tags: ['Softr', 'Airtable', 'Marketplace']},
  {title: 'Donation Tracker & Fundraising Campaign Portal', tags: ['Softr', 'Airtable', 'Portal']},
  {title: 'Real Estate Listing Portal & Agent Dashboard', tags: ['Softr', 'Airtable', 'Access control']},
  {title: 'Client Onboarding Portal with document uploads', tags: ['Softr', 'Airtable', 'Automation']},
].map((item, id) => ({...item, id, challenge: '[PLACEHOLDER]', solution: '[PLACEHOLDER]', result: '[PLACEHOLDER] [PLACEHOLDER METRIC]', imageUrl: '', liveDemoUrl: ''}));
export type CaseStudy = (typeof caseStudies)[number];