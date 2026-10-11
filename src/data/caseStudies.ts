import signup from '@/assets/case-studies/talenta/01-signup.webp.asset.json';
import signupSmall from '@/assets/case-studies/talenta/01-signup-960w.webp.asset.json';
import chooseRole from '@/assets/case-studies/talenta/02-choose-role.webp.asset.json';
import chooseRoleSmall from '@/assets/case-studies/talenta/02-choose-role-960w.webp.asset.json';
import profileSetup from '@/assets/case-studies/talenta/03-profile-setup.webp.asset.json';
import profileSetupSmall from '@/assets/case-studies/talenta/03-profile-setup-960w.webp.asset.json';
import consent from '@/assets/case-studies/talenta/04-consent.webp.asset.json';
import consentSmall from '@/assets/case-studies/talenta/04-consent-960w.webp.asset.json';
import dashboard from '@/assets/case-studies/talenta/05-dashboard.webp.asset.json';
import dashboardSmall from '@/assets/case-studies/talenta/05-dashboard-960w.webp.asset.json';
import profile from '@/assets/case-studies/talenta/06-profile.webp.asset.json';
import profileSmall from '@/assets/case-studies/talenta/06-profile-960w.webp.asset.json';
import editProfile from '@/assets/case-studies/talenta/07-edit-profile.webp.asset.json';
import editProfileSmall from '@/assets/case-studies/talenta/07-edit-profile-960w.webp.asset.json';

export type CaseStudyScreenshot = {
  src: string;
  srcSet: string;
  width: number;
  height: number;
  caption: string;
  alt: string;
};

export type CaseStudy = {
  id: string | number;
  slug: string;
  published: boolean;
  featured: boolean;
  title: string;
  role: string;
  tags: string[];
  summary: string;
  overview: string;
  challenge: string;
  solution: string;
  result: string;
  imageUrl: string;
  liveDemoUrl: string;
  screenshots: CaseStudyScreenshot[];
  features: string[];
};

const talentaScreenshots: CaseStudyScreenshot[] = [
  { src: signup.url, srcSet: `${signupSmall.url} 960w, ${signup.url} 1920w`, width: 1920, height: 1001, caption: 'Step 1. Sign up', alt: 'Simple sign-up with email or SSO.' },
  { src: chooseRole.url, srcSet: `${chooseRoleSmall.url} 960w, ${chooseRole.url} 1920w`, width: 1920, height: 754, caption: 'Step 2. Choose a path', alt: 'Companies and workers get different onboarding.' },
  { src: profileSetup.url, srcSet: `${profileSetupSmall.url} 960w, ${profileSetup.url} 1920w`, width: 1920, height: 1238, caption: 'Step 3. Set up the profile', alt: 'Short guided form with required fields.' },
  { src: consent.url, srcSet: `${consentSmall.url} 960w, ${consent.url} 1920w`, width: 1920, height: 902, caption: 'Step 4. Consent', alt: 'Terms and GDPR consent captured before access.' },
  { src: dashboard.url, srcSet: `${dashboardSmall.url} 960w, ${dashboard.url} 1920w`, width: 1920, height: 957, caption: 'Step 5. Dashboard', alt: 'Counters, filters and navigation in one place.' },
  { src: profile.url, srcSet: `${profileSmall.url} 960w, ${profile.url} 1625w`, width: 1625, height: 1920, caption: 'Step 6. Profile', alt: 'Everything about the worker in one view.' },
  { src: editProfile.url, srcSet: `${editProfileSmall.url} 960w, ${editProfile.url} 1625w`, width: 1625, height: 1920, caption: 'Step 7. Edit details', alt: 'Edit in a modal without leaving the page.' },
];

const talenta: CaseStudy = {
  id: 'talenta-staffing-portal',
  slug: 'talenta-staffing-portal',
  published: true,
  featured: true,
  title: 'TALENTA: Staffing & Talent Marketplace Portal',
  role: 'Softr developer (design and build)',
  tags: ['Softr', 'Portal', 'Onboarding', 'GDPR', 'Role-based access'],
  summary: 'A two-sided staffing portal where workers onboard themselves, give GDPR consent and manage their profile, and companies find talent.',
  overview: 'TALENTA connects workers, freelancers and job seekers with companies looking for talent. It was built for the Swedish market, so the onboarding captures the details a staffing business needs up front, with consent handled before anyone gets access.',
  challenge: 'Staffing businesses spend a lot of time chasing people for the same details: contact information, identity documents, right to work, payment details and consent. Companies and workers also need different experiences from the first screen.',
  solution: 'A Softr portal with separate paths for companies and workers, a short guided onboarding, required Terms and GDPR consent, and a worker dashboard with a full profile, so the information is collected once, in one place.',
  result: '',
  imageUrl: dashboard.url,
  liveDemoUrl: '',
  screenshots: talentaScreenshots,
  features: [
    'Sign-up with email or SSO',
    'Role selection at onboarding: Customer / Company or Worker / Talent',
    'Guided multi-step profile setup covering contact details, roles and languages, designed to take about 2 minutes',
    'Required Terms and GDPR consent before the profile is completed',
    'Worker dashboard with counters (Upcoming Jobs, New Offers, Completed Jobs), filters (Booking, Workers, Role Assigned) and an empty state',
    'A dashboard greeting that adapts to the time of day',
    'Sidebar navigation: Dashboard, Profile, Available Jobs, My Jobs, Availability, Messages, Documents, Settings',
    'Profile management with photo, ID and CV uploads, work experience, bank details and right-to-work fields for the Swedish market',
    'Edit profile in a modal without leaving the page',
  ],
};

const unpublishedExamples: CaseStudy[] = [
  { title: 'Venue Booking Marketplace for Private Events', tags: ['Softr', 'Airtable', 'Marketplace'] },
  { title: 'Donation Tracker & Fundraising Campaign Portal', tags: ['Softr', 'Airtable', 'Portal'] },
  { title: 'Real Estate Listing Portal & Agent Dashboard', tags: ['Softr', 'Airtable', 'Access control'] },
  { title: 'Client Onboarding Portal with document uploads', tags: ['Softr', 'Airtable', 'Automation'] },
].map((item, id) => ({
  ...item,
  id: `unpublished-${id}`,
  slug: `unpublished-${id}`,
  published: false,
  featured: false,
  role: '',
  summary: '',
  overview: '',
  challenge: '[PLACEHOLDER]',
  solution: '[PLACEHOLDER]',
  result: '[PLACEHOLDER] [PLACEHOLDER METRIC]',
  imageUrl: '',
  liveDemoUrl: '',
  screenshots: [],
  features: [],
}));

export const caseStudies: CaseStudy[] = [talenta, ...unpublishedExamples];
export const publishedCaseStudies = caseStudies.filter((study) => study.published).sort((a, b) => Number(b.featured) - Number(a.featured));
export const talentaCaseStudy = talenta;