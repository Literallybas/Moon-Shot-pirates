let questions = [
  {
    numb: 1,
    question: "What is the patient's age category?",
    options: [
      { text: "Under 30 years", score: 0 },
      { text: "30–49 years", score: 2 },
      { text: "50–69 years", score: 4 },
      { text: "70 years or older", score: 6 }
    ]
  },
  {
    numb: 2,
    question: "What is the serum creatinine level on admission?",
    options: [
      { text: "< 88 µmol/L (< 1.0 mg/dL)", score: 0 },
      { text: "88–114 µmol/L (1.0–1.3 mg/dL)", score: 2 },
      { text: "≥ 124 µmol/L (≥ 1.4 mg/dL)", score: 4 },
      { text: "Not available / not tested", score: 1 }
    ]
  },
  {
    numb: 3,
    question: "Which condition best describes the patient's infection status on admission?",
    options: [
      { text: "No signs of infection", score: 0 },
      { text: "Localized infection (non-systemic)", score: 1 },
      { text: "Suspected systemic infection", score: 2 },
      { text: "Confirmed sepsis (based on SOFA criteria)", score: 4 }
    ]
  },
  {
    numb: 4,
    question: "What was the patient's Glasgow Coma Scale (GCS) score on admission?",
    options: [
      { text: "15 (Normal consciousness)", score: 0 },
      { text: "9–14 (Mild to moderate impairment)", score: 2 },
      { text: "≤ 8 (Severe unconsciousness)", score: 4 },
      { text: "GCS not assessed", score: 1 }
    ]
  },
  {
    numb: 5,
    question: "What is the patient's serum calcium level?",
    options: [
      { text: "≥ 2.2 mmol/L (Normal)", score: 0 },
      { text: "2.12–2.19 mmol/L (Borderline)", score: 1 },
      { text: "< 2.12 mmol/L (Hypocalcemia)", score: 3 },
      { text: "Unknown / Not measured", score: 1 }
    ]
  },
  {
    numb: 6,
    question: "What is the patient's serum potassium level?",
    options: [
      { text: "< 3.5 mmol/L (Hypokalemia)", score: 2 },
      { text: "3.5–5.0 mmol/L (Normal range)", score: 0 },
      { text: "5.1–5.4 mmol/L (Mild hyperkalemia)", score: 2 },
      { text: "> 5.5 mmol/L (Severe hyperkalemia)", score: 4 }
    ]
  },
  {
    numb: 7,
    question: "What was the patient's peak creatine kinase (CK) level?",
    options: [
      { text: "< 5,000 U/L", score: 0 },
      { text: "5,000–19,999 U/L", score: 2 },
      { text: "20,000–39,999 U/L", score: 4 },
      { text: "≥ 40,000 U/L", score: 6 }
    ]
  },
  {
    numb: 8,
    question: "What best describes the patient's injury history?",
    options: [
      { text: "No history of trauma", score: 0 },
      { text: "Minor trauma (e.g. fall, soft tissue)", score: 1 },
      { text: "Major trauma (e.g. crush, vehicular)", score: 4 },
      { text: "Unknown trauma history", score: 1 }
    ]
  },
  {
    numb: 9,
    question: "Which best describes the compartment syndrome status?",
    options: [
      { text: "No signs of compartment syndrome", score: 0 },
      { text: "Suspected (under evaluation)", score: 2 },
      { text: "Confirmed by clinical diagnosis or imaging", score: 4 },
      { text: "Not assessed", score: 1 }
    ]
  },
  {
    numb: 10,
    question: "What is the patient's biological sex?",
    options: [
      { text: "Male", score: 2 },
      { text: "Female", score: 0 },
      { text: "Intersex / DSD", score: 1 },
      { text: "Prefer not to say", score: 1 }
    ]
  },
  {
    numb: 11,
    question: "Which best describes the patient's ethnic background?",
    options: [
      { text: "Black or African descent", score: 2 },
      { text: "Asian descent", score: 1 },
      { text: "White / Caucasian", score: 0 },
      { text: "Other / Prefer not to say", score: 1 }
    ]
  },
  {
    numb: 12,
    question: "What was the systolic blood pressure (SBP) on admission?",
    options: [
      { text: "≥ 120 mmHg (Normal)", score: 0 },
      { text: "90–119 mmHg (Low-normal)", score: 1 },
      { text: "< 90 mmHg (Hypotension)", score: 3 },
      { text: "Unknown", score: 1 }
    ]
  }
];
