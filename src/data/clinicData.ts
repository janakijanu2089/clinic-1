export interface ServiceItem {
  id: string;
  title: string;
  category: 'mood' | 'anxiety' | 'specialized' | 'lifestyle';
  shortDesc: string;
  fullDesc: string;
  symptoms: string[];
  approach: string;
  duration: string;
  badge?: string;
}

export interface PracticeLocation {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  address: string;
  landmark: string;
  pincode: string;
  city: string;
  phone: string;
  timings: {
    days: string;
    morning?: string;
    evening?: string;
    note?: string;
  };
  mapsUrl: string;
  facilities: string[];
}

export interface TestimonialItem {
  id: string;
  initials: string;
  patientName: string;
  concern: string;
  review: string;
  rating: number;
  duration: string;
  location: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'consultation' | 'medication' | 'confidentiality' | 'logistics';
}

export const CLINIC_INFO = {
  name: "DR.RAJINI MD",
  subtitle: "DR.RAJINI MD · Psychiatry & Behavioral Health Hospital",
  doctor: {
    fullName: "Dr. M. Ragini",
    degrees: "M.B.B.S., M.D. (Psychiatry)",
    title: "Consultant Psychiatrist & Behavioral Health Specialist",
    experienceYears: "10+",
    education: [
      {
        degree: "M.D. in Psychiatry",
        institution: "Kaloji Narayana Rao University of Health Sciences, Telangana",
        year: "2020",
        detail: "Advanced clinical specialization in mood, psychotic, cognitive, and adult behavioral health disorders."
      },
      {
        degree: "M.B.B.S.",
        institution: "Kathmandu University",
        year: "2005",
        detail: "Comprehensive foundational medical & surgical clinical education."
      }
    ],
    philosophies: [
      "Evidence-based, personalized psychiatric treatment plans tailored to each patient's biology, psychology, and social context.",
      "Strict clinical confidentiality and safe, stigma-free communication for individuals and families.",
      "Judicious, conservative pharmacotherapy balanced with supportive psychotherapy and lifestyle modifications."
    ]
  },
  contact: {
    phone: "9980204013",
    displayPhone: "+91 9980204013",
    whatsappLink: "https://wa.me/919980204013?text=Hello%20Dr.%20Ragini%20MD%2C%20I%20would%20like%20to%20book%20a%20psychiatric%20consultation.",
    emergencyHelpline: "14416 (Tele-MANAS) / 112 National Emergency"
  },
  hashtags: [
    "#DrRaginiMD",
    "#DrRaginiMDPsychiatry",
    "#DrRajiniMDHospital",
    "#HyderabadPsychiatrist",
    "#KachigudaMentalHealth",
    "#CaringDoctor",
    "#ExpertCare",
    "#TrustedDoctor",
    "#ChampapetPsychiatry",
    "#MentalHealthAwareness",
    "#MindWellnessHyderabad"
  ]
};

export const LOCATIONS: PracticeLocation[] = [
  {
    id: "kachiguda-center",
    name: "DR.RAJINI MD (Kachiguda Hospital / Clinic)",
    badge: "Primary Outpatient & Consultation Center",
    tagline: "Dedicated mental health, counseling, and psychiatric consultation center in Kachiguda.",
    address: "# 3-3-67/6, DR.RAJINI MD Hospital, Chapal Bazaar, Kachiguda",
    landmark: "Behind SVS Hospital, Chappal Bazar",
    city: "Hyderabad, Telangana",
    pincode: "500027",
    phone: "+91 9980204013",
    timings: {
      days: "Monday – Saturday",
      morning: "10:00 AM – 1:00 PM",
      evening: "5:30 PM – 8:30 PM",
      note: "Walk-ins accepted; prior appointment recommended to avoid wait time."
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=3-3-67/6+DR.RAJINI+MD+Behind+SVS+Hospital+Chapal+Bazaar+Kachiguda+Hyderabad+500027",
    facilities: [
      "Quiet, sound-damped consultation suites",
      "Private waiting lounge ensuring patient discretion",
      "Direct landmark access behind SVS Hospital, Chapal Bazaar",
      "Digital prescription & follow-up tracking"
    ]
  },
  {
    id: "champapet-center",
    name: "DR.RAJINI MD (Champapet Hospital Center)",
    badge: "Specialist Care & Consultation Center",
    tagline: "Comprehensive psychiatric stabilization, consultation, and interdisciplinary behavioral care.",
    address: "DR.RAJINI MD Center, Champapet, Sagar Ring Road",
    landmark: "Champapet Junction",
    city: "Hyderabad, Telangana",
    pincode: "500079",
    phone: "+91 9980204013",
    timings: {
      days: "Monday – Saturday",
      morning: "2:00 PM – 4:30 PM",
      evening: "Emergency & On-call consultations",
      note: "Prior appointment required for afternoon consultation slots."
    },
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=DR.RAJINI+MD+Champapet+Hyderabad",
    facilities: [
      "Comprehensive diagnostic laboratory & neuro-imaging support",
      "Inpatient mental health observation & crisis intervention",
      "Interdisciplinary consultations (Neurology, Internal Medicine, Cardiology)",
      "24/7 emergency medical support"
    ]
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "depression-mood",
    title: "Depression & Mood Disorders",
    category: "mood",
    shortDesc: "Comprehensive diagnosis and compassionate treatment for Major Depressive Disorder, Dysthymia, and Bipolar Mood conditions.",
    fullDesc: "Depression is a neurobiological condition, not a personal weakness. Dr. Ragini provides in-depth assessment of biological, psychological, and situational contributors, prescribing modern, well-tolerated medications when indicated along with supportive cognitive counseling.",
    symptoms: [
      "Persistent low mood, emptiness, or tearfulness",
      "Loss of interest in previously enjoyed activities (anhedonia)",
      "Fatigue, low energy, and sluggishness",
      "Feelings of worthlessness, guilt, or hopelessness",
      "Significant changes in appetite or sleep patterns"
    ],
    approach: "Neurotransmitter balancing, safety assessment, behavioral activation, and periodic recovery reviews.",
    duration: "45–60 min first consult · 20–30 min follow-up",
    badge: "Most Common"
  },
  {
    id: "anxiety-panic-ocd",
    title: "Anxiety, Panic & OCD",
    category: "anxiety",
    shortDesc: "Targeted strategies for Generalized Anxiety, Social Phobia, Panic Attacks, and Obsessive-Compulsive cycles.",
    fullDesc: "Excessive worry, physical palpitations, hyperventilation, and obsessive thoughts can severely paralyze daily function. Dr. Ragini provides gentle psychoeducation, anxiolytic therapies with strict anti-dependence protocols, and systematic desensitization guidance.",
    symptoms: [
      "Restlessness, feeling on edge, or muscle tension",
      "Sudden episodes of intense terror or racing heartbeat (panic attacks)",
      "Persistent irrational dread or anticipatory catastrophic thinking",
      "Intrusive recurring thoughts and compulsive repetitive rituals (OCD)",
      "Avoidance of social gatherings, meetings, or public spaces"
    ],
    approach: "Symptom stabilization, autonomic nervous system soothing, cognitive restructuring, and relapse prevention.",
    duration: "45 min initial · 25 min follow-up"
  },
  {
    id: "womens-mental-health",
    title: "Women's Mental Health & Perinatal Care",
    category: "specialized",
    shortDesc: "Empathetic, specialized psychiatric care for postpartum depression, PMDD, peri-menopause, and fertility stress.",
    fullDesc: "Women experience unique biological and hormonal transitions that profoundly affect emotional balance. Dr. Ragini offers specialized support for postpartum blues, antenatal anxiety, premenstrual dysphoric disorder (PMDD), and hormonal mood shifts with pregnancy-safe protocols.",
    symptoms: [
      "Severe mood swings or irritability preceding menstrual cycles",
      "Postpartum overwhelming sadness, anxiety, or bonding difficulty",
      "Sleep disturbances and emotional volatility during menopause",
      "Emotional toll of fertility treatments or pregnancy loss"
    ],
    approach: "Hormone-aware psychiatric evaluation, lactational/fetal drug safety profiling, and empathetic family counseling.",
    duration: "50 min initial · 30 min follow-up",
    badge: "Specialized Expertise"
  },
  {
    id: "sleep-stress-burnout",
    title: "Insomnia, Sleep & Professional Burnout",
    category: "lifestyle",
    shortDesc: "Restorative sleep therapies and clinical burnout management for working professionals, students, and caregivers.",
    fullDesc: "Chronic insomnia and workplace burnout degrade memory, immunity, and emotional regulation. Our clinic provides thorough sleep architecture reviews, sleep hygiene reconditioning, and non-habit-forming medical treatments to restore restorative sleep cycles.",
    symptoms: [
      "Difficulty falling asleep, frequent nighttime awakenings, or early waking",
      "Daytime brain fog, exhaustion, and cognitive fatigue",
      "High stress reactivity, cynicism, and loss of professional drive",
      "Tension headaches, gastrointestinal upset linked to stress"
    ],
    approach: "Circadian rhythm stabilization, sleep hygiene protocol, cognitive strategies, and targeted sleep medicine.",
    duration: "40 min initial · 20 min follow-up"
  },
  {
    id: "psychotherapy-counseling",
    title: "Supportive Counseling & Psychotherapy",
    category: "anxiety",
    shortDesc: "Confidential, one-on-one therapeutic sessions for interpersonal conflict, grief, relationship distress, and life transitions.",
    fullDesc: "Sometimes you need a compassionate, objective clinical mind to help unpack emotional knots. Dr. Ragini conducts supportive psychotherapy focusing on problem-solving, grief resolution, and emotional resilience building.",
    symptoms: [
      "Recent bereavement, sudden loss, or major life transition",
      "Marital or family conflicts causing emotional distress",
      "Difficulty managing anger, frustration, or communication",
      "Chronic low self-esteem and pervasive self-doubt"
    ],
    approach: "Empathetic listening, active coping strategies, boundary setting, and cognitive reframing.",
    duration: "45–50 min focused session"
  },
  {
    id: "deaddiction-guidance",
    title: "De-Addiction & Habit Rehabilitation",
    category: "specialized",
    shortDesc: "Medical detoxification supervision, craving management, and relapse prevention for alcohol, nicotine, and substance use.",
    fullDesc: "Substance dependence is a chronic medical condition with neural rewiring. Dr. Ragini provides medically assisted withdrawal support, anti-craving medications, dual-diagnosis management (addressing underlying anxiety/depression), and patient-family recovery roadmaps.",
    symptoms: [
      "Inability to cut down on alcohol, tobacco, or sedative use",
      "Tremors, sweating, or restlessness when attempting to stop",
      "Compromised work, health, or familial commitments",
      "Using substances as self-medication for stress or sleeplessness"
    ],
    approach: "Safe outpatient medical detox, craving reduction pharmacotherapy, motivational interviewing, and family guidance.",
    duration: "50 min initial · 30 min follow-up",
    badge: "Medical Management"
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    initials: "S.R.",
    patientName: "S. Ramesh",
    concern: "Severe Anxiety & Panic Attacks",
    review: "I had visited multiple general physicians for my sudden chest tightness and palpitations before someone recommended Dr. Ragini at DR.RAJINI MD Kachiguda. She listened with utmost patience without rushing. Her clear diagnosis and medication brought me back to normalcy within 4 weeks. Truly a caring doctor.",
    rating: 5,
    duration: "Treated for 6 months",
    location: "Kachiguda, Hyderabad"
  },
  {
    id: "t2",
    initials: "P.K.",
    patientName: "P. Kalyani",
    concern: "Postpartum Emotional Distress",
    review: "Following childbirth, I felt constantly overwhelmed and tearful. Dr. Ragini explained postpartum mood changes with immense compassion, debunked my fears about psychiatric medicines, and selected baby-safe treatments. The DR.RAJINI MD clinic environment is so discreet and welcoming.",
    rating: 5,
    duration: "Treated for 4 months",
    location: "Champapet, Hyderabad"
  },
  {
    id: "t3",
    initials: "A.V.",
    patientName: "A. Venkat",
    concern: "Chronic Insomnia & IT Work Burnout",
    review: "Working night shifts in Hitec City wrecked my sleep cycle. Dr. Ragini didn't just write sleeping pills; she analyzed my circadian habits, prescribed short-term corrective medicine, and taught me sleep discipline. Now I sleep naturally without any dependency.",
    rating: 5,
    duration: "Treated for 3 months",
    location: "Dilsukhnagar, Hyderabad"
  },
  {
    id: "t4",
    initials: "M.J.",
    patientName: "M. Jaya",
    concern: "Major Depressive Episode",
    review: "Dr. Ragini’s dual centers at DR.RAJINI MD Kachiguda and Champapet made consultations extremely accessible. She is gentle, scientifically rigorous, and always explains why a specific medicine is chosen. I regained my confidence and joy in life.",
    rating: 5,
    duration: "Treated for 8 months",
    location: "Chapal Bazar, Hyderabad"
  }
];

export const FAQS: FaqItem[] = [
  {
    question: "What is the consultation fee for appointments?",
    answer: "The consultation fee is transparently set at a nominal ₹300/- for outpatient visits at DR.RAJINI MD. Dr. Ragini firmly believes expert psychiatric assessment and emotional health support should be accessible and affordable to everyone without financial burden.",
    category: "logistics"
  },
  {
    question: "What should I expect during my first psychiatric consultation?",
    answer: "Your initial consultation is a warm, confidential conversation lasting 40–50 minutes. Dr. Ragini will listen to your current struggles, medical history, family background, sleep patterns, and daily stressors. There are no tests you can 'fail'—it is a collaborative space to understand what your mind and body are going through.",
    category: "consultation"
  },
  {
    question: "Are psychiatric medicines addictive or life-long?",
    answer: "This is the most common misconception. Most modern psychiatric medications (such as SSRIs, SNRIs, and mood stabilizers) are non-addictive and act by restoring chemical balances in neural pathways. Dr. Ragini practices conservative, evidence-based prescribing—medicines are used as temporary stepping stones to stabilize your brain, and are gradually tapered off once sustained recovery is achieved.",
    category: "medication"
  },
  {
    question: "Is my consultation strictly confidential?",
    answer: "Yes, 100%. Under psychiatric clinical ethics and medical privacy laws, all information discussed, prescriptions, and session records are strictly protected. DR.RAJINI MD has a discreet consultation setting right beside SVS Hospital in Kachiguda to ensure your comfort and privacy.",
    category: "confidentiality"
  },
  {
    question: "Where should I visit: Kachiguda or Champapet center?",
    answer: "For regular outpatient appointments, counseling, and routine psychiatric consultations, DR.RAJINI MD in Kachiguda (Chapal Bazar, Sai Nanditha Enclave) is ideal with morning (10 AM - 1 PM) and evening (5:30 PM - 8:30 PM) slots. For afternoon consultations (2 PM - 4:30 PM) or specialized multidisciplinary sessions, appointments at DR.RAJINI MD Champapet center can be scheduled.",
    category: "logistics"
  },
  {
    question: "Do you offer online video consultations for patients unable to visit?",
    answer: "Yes. For patients who live outside Hyderabad, are traveling, or have mobility limitations, secure tele-psychiatry video consultations are available by prior appointment. Follow-up digital prescriptions are shared securely.",
    category: "logistics"
  },
  {
    question: "What is the difference between a Psychiatrist and a Psychologist?",
    answer: "A Psychiatrist (like Dr. Ragini, M.D. Psychiatry) is a licensed medical doctor who diagnoses mental illnesses, evaluates biological and neurochemical factors, orders medical tests, and is legally authorized to prescribe medications along with counseling. A Psychologist provides non-medical psychotherapy and behavioral assessments.",
    category: "consultation"
  }
];

export const SCREENER_QUESTIONS = [
  {
    id: "q1",
    text: "Over the last 2 weeks, how often have you felt nervous, anxious, or on edge?",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ]
  },
  {
    id: "q2",
    text: "Over the last 2 weeks, how often have you been unable to stop or control worrying?",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ]
  },
  {
    id: "q3",
    text: "Over the last 2 weeks, how often have you had little interest or pleasure in doing things?",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ]
  },
  {
    id: "q4",
    text: "Over the last 2 weeks, how often have you felt down, depressed, or hopeless?",
    options: [
      { text: "Not at all", score: 0 },
      { text: "Several days", score: 1 },
      { text: "More than half the days", score: 2 },
      { text: "Nearly every day", score: 3 }
    ]
  }
];
