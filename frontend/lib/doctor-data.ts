// This is a mock data file that would normally be replaced with API calls to a backend

export interface Doctor {
  id: string
  name: string
  specialty: string
  subspecialties?: string[]
  hospital: string
  image: string
  rating: number
  reviewCount: number
  experience: string
  experienceYears: number
  education: {
    degree: string
    institution: string
    year: string
  }[]
  training: {
    program: string
    institution: string
    year: string
  }[]
  certifications: string[]
  languages: string[]
  bio: string
  expertise: string[]
  awards: {
    title: string
    year: string
  }[]
  publications?: {
    title: string
    journal: string
    year: string
    url?: string
  }[]
  professionalMemberships: string[]
  consultationFee: string
  availableToday: boolean
  nextAvailable: string
  workingHours: {
    day: string
    hours: string
    available: boolean
  }[]
  locations: {
    name: string
    address: string
    city: string
    mapUrl: string
  }[]
  insuranceAccepted: string[]
  reviews: {
    id: string
    patientName: string
    patientImage?: string
    date: string
    rating: number
    comment: string
    verified: boolean
    categories?: {
      name: string
      rating: number
    }[]
  }[]
}

const doctorsData: Doctor[] = [
  {
    id: "dr-jean-mugabo",
    name: "Dr. Jean Mugabo",
    specialty: "Cardiology",
    subspecialties: ["Interventional Cardiology", "Heart Failure"],
    hospital: "Kigali University Hospital",
    image: "/placeholder.svg?height=400&width=300&text=Dr.+Mugabo",
    rating: 4.9,
    reviewCount: 124,
    experience: "15+ years",
    experienceYears: 15,
    education: [
      {
        degree: "Doctor of Medicine (MD)",
        institution: "University of Rwanda",
        year: "2005",
      },
      {
        degree: "Bachelor of Science in Biology",
        institution: "University of Rwanda",
        year: "2001",
      },
    ],
    training: [
      {
        program: "Cardiology Fellowship",
        institution: "Groote Schuur Hospital, Cape Town",
        year: "2008-2011",
      },
      {
        program: "Internal Medicine Residency",
        institution: "Kigali University Hospital",
        year: "2005-2008",
      },
    ],
    certifications: [
      "Board Certified in Cardiology",
      "Advanced Cardiac Life Support (ACLS)",
      "Certified in Echocardiography",
    ],
    languages: ["English", "Kinyarwanda", "French"],
    bio: "Dr. Jean Mugabo is a highly experienced cardiologist with over 15 years of practice in diagnosing and treating heart conditions. He specializes in interventional cardiology and heart failure management. Dr. Mugabo is known for his patient-centered approach and commitment to providing comprehensive cardiac care. He has performed over 1,000 cardiac procedures and is dedicated to improving cardiovascular health outcomes in Rwanda.",
    expertise: [
      "Coronary Artery Disease",
      "Heart Failure Management",
      "Cardiac Catheterization",
      "Echocardiography",
      "Hypertension Management",
      "Preventive Cardiology",
      "Valvular Heart Disease",
    ],
    awards: [
      {
        title: "Excellence in Cardiology Award, Rwanda Medical Association",
        year: "2019",
      },
      {
        title: "Outstanding Physician Award, Kigali University Hospital",
        year: "2016",
      },
    ],
    publications: [
      {
        title: "Prevalence of Hypertension in Rural Rwanda: A Cross-Sectional Study",
        journal: "East African Medical Journal",
        year: "2018",
      },
      {
        title: "Outcomes of Percutaneous Coronary Intervention in Rwanda: A Five-Year Review",
        journal: "Cardiovascular Journal of Africa",
        year: "2020",
      },
    ],
    professionalMemberships: [
      "Rwanda Medical Association",
      "Pan-African Society of Cardiology",
      "American College of Cardiology (International Associate)",
    ],
    consultationFee: "30,000 RWF",
    availableToday: true,
    nextAvailable: "Today at 2:00 PM",
    workingHours: [
      { day: "Monday", hours: "9:00 AM - 5:00 PM", available: true },
      { day: "Tuesday", hours: "9:00 AM - 5:00 PM", available: true },
      { day: "Wednesday", hours: "9:00 AM - 1:00 PM", available: true },
      { day: "Thursday", hours: "9:00 AM - 5:00 PM", available: true },
      { day: "Friday", hours: "9:00 AM - 5:00 PM", available: true },
      { day: "Saturday", hours: "10:00 AM - 2:00 PM", available: true },
      { day: "Sunday", hours: "Closed", available: false },
    ],
    locations: [
      {
        name: "Kigali University Hospital",
        address: "KG 123 St, Kigali",
        city: "Kigali",
        mapUrl: "https://maps.google.com",
      },
      {
        name: "Heart Care Clinic",
        address: "KN 5 Ave, Kigali",
        city: "Kigali",
        mapUrl: "https://maps.google.com",
      },
    ],
    insuranceAccepted: ["RSSB", "MMI", "Radiant", "SORAS", "UAP"],
    reviews: [
      {
        id: "rev1",
        patientName: "Claudine Niyonzima",
        patientImage: "/placeholder.svg?height=100&width=100&text=CN",
        date: "May 10, 2025",
        rating: 5,
        comment:
          "Dr. Mugabo is an exceptional cardiologist. He took the time to explain my condition in detail and made me feel at ease throughout my treatment. His expertise and compassionate care have significantly improved my heart health.",
        verified: true,
        categories: [
          { name: "Knowledge", rating: 5 },
          { name: "Bedside Manner", rating: 5 },
          { name: "Wait Time", rating: 4 },
          { name: "Office Environment", rating: 5 },
        ],
      },
      {
        id: "rev2",
        patientName: "Emmanuel Habimana",
        patientImage: "/placeholder.svg?height=100&width=100&text=EH",
        date: "April 28, 2025",
        rating: 5,
        comment:
          "I've been seeing Dr. Mugabo for my heart condition for over 3 years. He is thorough, knowledgeable, and always takes the time to answer all my questions. The treatment plan he developed has helped me manage my condition effectively.",
        verified: true,
        categories: [
          { name: "Knowledge", rating: 5 },
          { name: "Bedside Manner", rating: 5 },
          { name: "Wait Time", rating: 5 },
          { name: "Office Environment", rating: 4 },
        ],
      },
      {
        id: "rev3",
        patientName: "Marie Uwimana",
        patientImage: "/placeholder.svg?height=100&width=100&text=MU",
        date: "April 15, 2025",
        rating: 4,
        comment:
          "Dr. Mugabo is very professional and knowledgeable. He explained my heart condition clearly and provided effective treatment. The only downside was the long wait time at the hospital, but the quality of care was worth it.",
        verified: true,
        categories: [
          { name: "Knowledge", rating: 5 },
          { name: "Bedside Manner", rating: 4 },
          { name: "Wait Time", rating: 3 },
          { name: "Office Environment", rating: 4 },
        ],
      },
      {
        id: "rev4",
        patientName: "Jean-Paul Mugisha",
        patientImage: "/placeholder.svg?height=100&width=100&text=JM",
        date: "March 22, 2025",
        rating: 5,
        comment:
          "After experiencing chest pain, I was referred to Dr. Mugabo. His quick diagnosis and intervention potentially saved my life. He's not only highly skilled but also compassionate and patient-focused. I highly recommend him to anyone with heart issues.",
        verified: true,
        categories: [
          { name: "Knowledge", rating: 5 },
          { name: "Bedside Manner", rating: 5 },
          { name: "Wait Time", rating: 4 },
          { name: "Office Environment", rating: 5 },
        ],
      },
      {
        id: "rev5",
        patientName: "Alice Mukamana",
        patientImage: "/placeholder.svg?height=100&width=100&text=AM",
        date: "March 5, 2025",
        rating: 5,
        comment:
          "Dr. Mugabo has been managing my hypertension for years. His approach is holistic, considering lifestyle changes alongside medication. He's always up-to-date with the latest treatments and genuinely cares about his patients' well-being.",
        verified: true,
        categories: [
          { name: "Knowledge", rating: 5 },
          { name: "Bedside Manner", rating: 5 },
          { name: "Wait Time", rating: 4 },
          { name: "Office Environment", rating: 5 },
        ],
      },
    ],
  },
  {
    id: "dr-marie-uwase",
    name: "Dr. Marie Uwase",
    specialty: "Pediatrics",
    subspecialties: ["Neonatology", "Pediatric Infectious Diseases"],
    hospital: "Rwanda Children's Hospital",
    image: "/placeholder.svg?height=400&width=300&text=Dr.+Uwase",
    rating: 4.8,
    reviewCount: 98,
    experience: "12+ years",
    experienceYears: 12,
    education: [
      {
        degree: "Doctor of Medicine (MD)",
        institution: "University of Nairobi",
        year: "2010",
      },
      {
        degree: "Bachelor of Science in Biochemistry",
        institution: "University of Rwanda",
        year: "2006",
      },
    ],
    training: [
      {
        program: "Pediatrics Fellowship",
        institution: "Red Cross Children's Hospital, Cape Town",
        year: "2013-2015",
      },
      {
        program: "Pediatrics Residency",
        institution: "Rwanda Children's Hospital",
        year: "2010-2013",
      },
    ],
    certifications: [
      "Board Certified in Pediatrics",
      "Neonatal Resuscitation Program (NRP)",
      "Pediatric Advanced Life Support (PALS)",
    ],
    languages: ["English", "Kinyarwanda"],
    bio: "Dr. Marie Uwase is a dedicated pediatrician with 12+ years of experience in caring for children from newborns to adolescents. She specializes in neonatology and pediatric infectious diseases. Known for her gentle approach and ability to connect with young patients, Dr. Uwase is committed to providing comprehensive pediatric care. She has a particular interest in preventive healthcare and childhood immunizations.",
    expertise: [
      "Well-Child Care",
      "Newborn Care",
      "Childhood Immunizations",
      "Pediatric Infectious Diseases",
      "Growth and Development Assessment",
      "Adolescent Medicine",
      "Pediatric Nutrition",
    ],
    awards: [
      {
        title: "Pediatrician of the Year, Rwanda Pediatric Association",
        year: "2020",
      },
      {
        title: "Excellence in Child Healthcare Award",
        year: "2018",
      },
    ],
    professionalMemberships: [
      "Rwanda Pediatric Association",
      "African Pediatric Society",
      "International Pediatric Association",
    ],
    consultationFee: "25,000 RWF",
    availableToday: true,
    nextAvailable: "Today at 3:30 PM",
    workingHours: [
      { day: "Monday", hours: "8:00 AM - 4:00 PM", available: true },
      { day: "Tuesday", hours: "8:00 AM - 4:00 PM", available: true },
      { day: "Wednesday", hours: "8:00 AM - 4:00 PM", available: true },
      { day: "Thursday", hours: "8:00 AM - 4:00 PM", available: true },
      { day: "Friday", hours: "8:00 AM - 4:00 PM", available: true },
      { day: "Saturday", hours: "9:00 AM - 1:00 PM", available: true },
      { day: "Sunday", hours: "Closed", available: false },
    ],
    locations: [
      {
        name: "Rwanda Children's Hospital",
        address: "KG 456 St, Kigali",
        city: "Kigali",
        mapUrl: "https://maps.google.com",
      },
    ],
    insuranceAccepted: ["RSSB", "MMI", "Radiant", "SORAS", "UAP", "BRITAM"],
    reviews: [
      {
        id: "rev1",
        patientName: "Jean Nshimiyimana",
        patientImage: "/placeholder.svg?height=100&width=100&text=JN",
        date: "May 5, 2025",
        rating: 5,
        comment:
          "Dr. Uwase has been our family pediatrician for 5 years. She is amazing with children and has a special way of making them comfortable during examinations. Her diagnoses are accurate and she explains everything clearly to parents.",
        verified: true,
        categories: [
          { name: "Knowledge", rating: 5 },
          { name: "Bedside Manner", rating: 5 },
          { name: "Wait Time", rating: 4 },
          { name: "Office Environment", rating: 5 },
        ],
      },
      {
        id: "rev2",
        patientName: "Claudette Mukamana",
        patientImage: "/placeholder.svg?height=100&width=100&text=CM",
        date: "April 20, 2025",
        rating: 5,
        comment:
          "As a first-time mother, I was very anxious about my baby's health. Dr. Uwase has been incredibly supportive, providing guidance and reassurance. She is patient, thorough, and genuinely cares about her little patients.",
        verified: true,
        categories: [
          { name: "Knowledge", rating: 5 },
          { name: "Bedside Manner", rating: 5 },
          { name: "Wait Time", rating: 4 },
          { name: "Office Environment", rating: 5 },
        ],
      },
      {
        id: "rev3",
        patientName: "Patrick Habimana",
        patientImage: "/placeholder.svg?height=100&width=100&text=PH",
        date: "April 2, 2025",
        rating: 4,
        comment:
          "Dr. Uwase is excellent with children. My son, who is usually afraid of doctors, actually looks forward to his appointments with her. She is knowledgeable and takes time to address all concerns. The only issue is sometimes the wait can be long.",
        verified: true,
        categories: [
          { name: "Knowledge", rating: 5 },
          { name: "Bedside Manner", rating: 5 },
          { name: "Wait Time", rating: 3 },
          { name: "Office Environment", rating: 4 },
        ],
      },
    ],
  },
  {
    id: "dr-eric-ndayishimiye",
    name: "Dr. Eric Ndayishimiye",
    specialty: "Neurology",
    subspecialties: ["Headache Medicine", "Neuro-immunology"],
    hospital: "Butaro Hospital",
    image: "/placeholder.svg?height=400&width=300&text=Dr.+Ndayishimiye",
    rating: 4.7,
    reviewCount: 86,
    experience: "10+ years",
    experienceYears: 10,
    education: [
      {
        degree: "Doctor of Medicine (MD)",
        institution: "University of Rwanda",
        year: "2012",
      },
      {
        degree: "Bachelor of Science in Human Physiology",
        institution: "University of Rwanda",
        year: "2008",
      },
    ],
    training: [
      {
        program: "Neurology Fellowship",
        institution: "Groote Schuur Hospital, Cape Town",
        year: "2015-2018",
      },
      {
        program: "Internal Medicine Residency",
        institution: "Kigali University Hospital",
        year: "2012-2015",
      },
    ],
    certifications: [
      "Board Certified in Neurology",
      "Certified in Electroencephalography (EEG)",
      "Certified in Headache Medicine",
    ],
    languages: ["English", "Kinyarwanda", "French"],
    bio: "Dr. Eric Ndayishimiye is a skilled neurologist with 10+ years of experience in diagnosing and treating disorders of the nervous system. He specializes in headache medicine and neuro-immunology. Dr. Ndayishimiye is known for his methodical approach to neurological diagnosis and his commitment to improving quality of life for patients with neurological conditions.",
    expertise: [
      "Headache Disorders",
      "Multiple Sclerosis",
      "Epilepsy",
      "Stroke Management",
      "Movement Disorders",
      "Neuromuscular Disorders",
      "Neurological Infections",
    ],
    awards: [
      {
        title: "Neurological Research Excellence Award",
        year: "2019",
      },
      {
        title: "Young Neurologist Award, African Neurological Association",
        year: "2017",
      },
    ],
    professionalMemberships: [
      "Rwanda Medical Association",
      "African Academy of Neurology",
      "World Federation of Neurology",
    ],
    consultationFee: "35,000 RWF",
    availableToday: false,
    nextAvailable: "Tomorrow at 10:00 AM",
    workingHours: [
      { day: "Monday", hours: "9:00 AM - 5:00 PM", available: true },
      { day: "Tuesday", hours: "9:00 AM - 5:00 PM", available: true },
      { day: "Wednesday", hours: "9:00 AM - 5:00 PM", available: true },
      { day: "Thursday", hours: "9:00 AM - 5:00 PM", available: true },
      { day: "Friday", hours: "9:00 AM - 3:00 PM", available: true },
      { day: "Saturday", hours: "Closed", available: false },
      { day: "Sunday", hours: "Closed", available: false },
    ],
    locations: [
      {
        name: "Butaro Hospital",
        address: "Butaro, Burera District",
        city: "Northern Province",
        mapUrl: "https://maps.google.com",
      },
      {
        name: "Kigali Neurology Clinic",
        address: "KN 7 Ave, Kigali",
        city: "Kigali",
        mapUrl: "https://maps.google.com",
      },
    ],
    insuranceAccepted: ["RSSB", "MMI", "Radiant", "SORAS"],
    reviews: [
      {
        id: "rev1",
        patientName: "Diane Mukasine",
        patientImage: "/placeholder.svg?height=100&width=100&text=DM",
        date: "April 25, 2025",
        rating: 4,
        comment:
          "After suffering from migraines for years, Dr. Ndayishimiye finally helped me find relief. His thorough approach to diagnosis and treatment has made a tremendous difference in my quality of life.",
        verified: true,
        categories: [
          { name: "Knowledge", rating: 5 },
          { name: "Bedside Manner", rating: 4 },
          { name: "Wait Time", rating: 3 },
          { name: "Office Environment", rating: 4 },
        ],
      },
      {
        id: "rev2",
        patientName: "Joseph Mugisha",
        patientImage: "/placeholder.svg?height=100&width=100&text=JM",
        date: "April 10, 2025",
        rating: 5,
        comment:
          "Dr. Ndayishimiye is an excellent neurologist. After my stroke, his treatment plan and rehabilitation recommendations were crucial to my recovery. He explains complex neurological concepts in an understandable way.",
        verified: true,
        categories: [
          { name: "Knowledge", rating: 5 },
          { name: "Bedside Manner", rating: 5 },
          { name: "Wait Time", rating: 4 },
          { name: "Office Environment", rating: 5 },
        ],
      },
      {
        id: "rev3",
        patientName: "Christine Uwimana",
        patientImage: "/placeholder.svg?height=100&width=100&text=CU",
        date: "March 28, 2025",
        rating: 5,
        comment:
          "My experience with Dr. Ndayishimiye has been excellent. He diagnosed my epilepsy correctly after years of misdiagnosis elsewhere. His medication plan has significantly reduced my seizures. He is attentive and truly listens to his patients.",
        verified: true,
        categories: [
          { name: "Knowledge", rating: 5 },
          { name: "Bedside Manner", rating: 5 },
          { name: "Wait Time", rating: 4 },
          { name: "Office Environment", rating: 4 },
        ],
      },
    ],
  },
]

export function getDoctorData(id: string): Doctor | undefined {
  return doctorsData.find((doctor) => doctor.id === id)
}

export function getSimilarDoctors(specialty: string, currentDoctorId: string, limit = 3): Doctor[] {
  return doctorsData.filter((doctor) => doctor.specialty === specialty && doctor.id !== currentDoctorId).slice(0, limit)
}

export function getAllDoctors(): Doctor[] {
  return doctorsData
}
