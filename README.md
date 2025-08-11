#  One HealthLine Connect

**One HealthLine Connect** is a modern healthcare platform that enables patients in Rwanda to access medical services through online teleconsultations, appointment scheduling, AI assistance, pharmacy orders, and emergency care. The platform connects users with hospitals, clinics, doctors, and pharmacies seamlessly.

---

##  Key Features

###  User Accounts
- Sign up and sign in securely.
- Role-based access: Admin, Doctor, Seller (Pharmacy), and Patient.

###  Teleconsultation Booking
- Select hospitals or clinics from a curated list.
- Choose general or specialist consultation (e.g., Cardiology, Gynecology, Mental Health).
- Select insurance or pay out-of-pocket.
- Register patient details and confirm consultation via mobile payment.
- Attend via secure in-app video call or phone.
- Receive prescriptions or follow-up care.
- View past consultations and prescriptions.

###  Appointment System
- Book in-clinic or follow-up appointments.
- Choose preferred time and hospital.
- Fill in patient info, select medical category, and pay online.
- Confirmation via SMS/email with reminders.
- Cancel or reschedule appointments.

###  Pharmacy Module
- Browse available partner pharmacies based on location.
- Upload e-prescriptions or enter medication manually.
- Choose pickup or delivery.
- Pay via mobile money or use insurance.
- Track order status and view medication history.

###  Emergency Care
- Request quick assistance: ambulance, doctor/nurse call, or emergency delivery.
- Share GPS or manually input location.
- Describe emergency and receive real-time response.
- View status: Help on the way, nearest facility, contact info.

###  AI Assistant
- Symptom checker and health education.
- Help booking appointments.
- Understand prescriptions and medical advice.
- Referral to appropriate facilities.
- All data is encrypted and GDPR-compliant (Rwanda Data Protection Law).

###  Department Directory
- Access departments like Cardiology, Ophthalmology, Dentistry, Mental Health, etc.
- View specialist profiles and book consultations.

---

##  Admin Responsibilities

Admins have access to:
- Manage clinics, hospitals, and departments.
- Add and verify doctors/specialists.
- Approve or reject sellers and pharmacies.
- Monitor bookings, teleconsultations, prescriptions, and emergency services.
- Control insurance providers and service availability.
- Oversee AI responses and user safety.

---

##  Tech Stack

### Frontend
- Next + TypeScript
- Tailwind CSS
- Next Router
- Next Query
- Lucide Icons

### Backend
- Next.js + Express
- JWT Authentication with role-based authorization
- Controllers for categories, products, appointments, users, etc.

---

##  Role-Based Access Control

| Role   | Access To |
|--------|-----------|
| Admin  | All features, approval, and data control |
| Doctor | View bookings, respond to consultations |
| Seller | Manage pharmacy products and orders |
| Patient| Book services, view history, manage profile |

---

##  How to Run the Project

### Backend
```bash
cd server
npm install
npm run dev
```
### Deployment link

