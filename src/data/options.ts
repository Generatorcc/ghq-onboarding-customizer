export const US_STATES = [
  'Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut',
  'Delaware','District Of Columbia','Florida','Georgia','Hawaii','Idaho','Illinois',
  'Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts',
  'Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada',
  'New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota',
  'Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina',
  'South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington',
  'West Virginia','Wisconsin','Wyoming',
]

export const CA_PROVINCES = [
  'Alberta','British Columbia','Manitoba','New Brunswick',
  'Newfoundland and Labrador','Nova Scotia','Ontario','Prince Edward Island',
  'Quebec','Saskatchewan','Northwest Territories','Nunavut','Yukon',
]

export const COUNTRIES = [
  'United States','Canada','United Kingdom','Australia','New Zealand','Ireland',
  'South Africa','Germany','Netherlands','France','Spain','Singapore',
  'United Arab Emirates','Sweden','Norway','Denmark','Finland','Belgium',
  'Switzerland','Mexico','Brazil','India','Philippines','Malaysia','Hong Kong',
  'Belize','Israel',
]

export const TIMEZONES: { group: string; options: string[] }[] = [
  {
    group: 'USA & Territories',
    options: [
      '(GMT-10:00) USA - Hawaii',
      '(GMT-09:00) USA - Alaska',
      '(GMT-08:00) USA - Pacific Time',
      '(GMT-07:00) USA - Mountain Time',
      '(GMT-06:00) USA - Central Time',
      '(GMT-05:00) USA - Eastern Time',
      '(GMT-11:00) USA - American Samoa',
      '(GMT+10:00) USA - Guam',
      '(GMT-04:00) USA - Puerto Rico',
    ],
  },
  {
    group: 'Canada',
    options: [
      '(GMT-08:00) Canada - Pacific Time',
      '(GMT-07:00) Canada - Mountain Time',
      '(GMT-06:00) Canada - Central Time',
      '(GMT-05:00) Canada - Eastern Time',
      '(GMT-04:00) Canada - Atlantic Time',
      '(GMT-03:30) Canada - Newfoundland Time',
    ],
  },
  {
    group: 'Europe',
    options: [
      '(GMT+00:00) United Kingdom',
      '(GMT+00:00) Ireland',
      '(GMT+01:00) Germany',
      '(GMT+01:00) France',
      '(GMT+01:00) Spain',
      '(GMT+01:00) Netherlands',
      '(GMT+01:00) Belgium',
      '(GMT+01:00) Switzerland',
      '(GMT+01:00) Sweden',
      '(GMT+01:00) Norway',
      '(GMT+01:00) Denmark',
      '(GMT+02:00) Finland',
    ],
  },
  {
    group: 'Australia & New Zealand',
    options: [
      '(GMT+08:00) Australia - Perth',
      '(GMT+09:30) Australia - Darwin',
      '(GMT+09:30) Australia - Adelaide',
      '(GMT+10:00) Australia - Sydney, Melbourne',
      '(GMT+10:00) Australia - Brisbane',
      '(GMT+12:00) New Zealand',
    ],
  },
  {
    group: 'Other Countries',
    options: [
      '(GMT+02:00) South Africa',
      '(GMT+08:00) Singapore',
      '(GMT+04:00) United Arab Emirates',
      '(GMT-06:00) Mexico',
      '(GMT-03:00) Brazil',
      '(GMT+05:30) India',
      '(GMT+08:00) Philippines',
      '(GMT+08:00) Malaysia',
      '(GMT+08:00) Hong Kong',
      '(GMT-06:00) Belize',
      '(GMT+02:00) Israel',
    ],
  },
]

export const INDUSTRIES = [
  'Accounting/Bookkeeping','Advertising/Marketing','Automotive','Beauty/Salon',
  'Business Coaching/Consulting','Chiropractic','Cleaning Services','Credit Repair',
  'Daycare','Dental','Education','E-commerce','Entertainment','Financial Services',
  'Fitness/Gym','Health & Wellness','Home Services','Insurance','IT Services',
  'Legal','Medical','Mortgage','Non-Profit','Pest Control','Pet Services',
  'Photography/Videography','Real Estate','Recruitment','Restaurant/Food Service',
  'Retail','Solar','Travel/Hospitality','Other',
]
