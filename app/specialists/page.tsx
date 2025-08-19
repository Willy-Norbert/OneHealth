import { User, Star, MapPin, Calendar, MessageCircle, Heart, Search, Filter } from "lucide-react";
import HealthCard from "@/components/common/HealthCard";

const specialists = [
  {
    id: 1,
    name: "Dr. Jean Mugabo",
    specialty: "Cardiology",
    hospital: "King Faisal Hospital",
    experience: "15 years",
    rating: 4.9,
    reviews: 127,
    languages: ["English", "Kinyarwanda", "French"],
    availability: "Available Today",
    services: ["Heart Surgery", "Cardiac Catheterization", "Echocardiography"],
    education: "MD from University of Rwanda, Fellowship in Cardiology",
    image: "/images/user/user-01.jpg"
  },
  {
    id: 2,
    name: "Dr. Grace Mukamana",
    specialty: "Gynecology",
    hospital: "Rwanda Military Hospital",
    experience: "12 years",
    rating: 4.8,
    reviews: 98,
    languages: ["English", "Kinyarwanda"],
    availability: "Available Tomorrow",
    services: ["Prenatal Care", "Family Planning", "Gynecological Surgery"],
    education: "MD from Makerere University, Specialization in Obstetrics & Gynecology",
    image: "/images/user/user-02.jpg"
  },
  {
    id: 3,
    name: "Dr. Eric Ndahiro",
    specialty: "Mental Health",
    hospital: "University Teaching Hospital",
    experience: "10 years",
    rating: 4.7,
    reviews: 156,
    languages: ["English", "Kinyarwanda", "Swahili"],
    availability: "Available Now",
    services: ["Therapy Sessions", "Depression Treatment", "Anxiety Management"],
    education: "MD in Psychiatry from University of Cape Town",
    image: "/images/user/user-03.jpg"
  },
  {
    id: 4,
    name: "Dr. Paul Uwimana",
    specialty: "Pediatrics",
    hospital: "Kibagabaga Hospital",
    experience: "8 years",
    rating: 4.9,
    reviews: 203,
    languages: ["English", "Kinyarwanda"],
    availability: "Available Today",
    services: ["Child Development", "Vaccinations", "Pediatric Surgery"],
    education: "MD from University of Rwanda, Pediatrics Residency",
    image: "/images/user/user-04.jpg"
  },
  {
    id: 5,
    name: "Dr. Alice Uwimana",
    specialty: "Dermatology",
    hospital: "King Faisal Hospital",
    experience: "9 years",
    rating: 4.6,
    reviews: 89,
    languages: ["English", "French", "Kinyarwanda"],
    availability: "Available Tomorrow",
    services: ["Skin Cancer Treatment", "Cosmetic Dermatology", "Acne Treatment"],
    education: "MD in Dermatology from University of Witwatersrand",
    image: "/images/user/user-05.jpg"
  },
  {
    id: 6,
    name: "Dr. David Rurangwa",
    specialty: "Orthopedics",
    hospital: "University Teaching Hospital",
    experience: "14 years",
    rating: 4.8,
    reviews: 134,
    languages: ["English", "Kinyarwanda"],
    availability: "Available Today",
    services: ["Joint Replacement", "Sports Medicine", "Fracture Treatment"],
    education: "MD in Orthopedic Surgery from University of Nairobi",
    image: "/images/user/user-06.jpg"
  }
];

export default function Specialists() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Find Specialists</h1>
        <p className="text-muted-foreground">Connect with qualified healthcare specialists across Rwanda</p>
      </div>

      {/* Search and Filter */}
      <HealthCard className="p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by doctor name, specialty, or hospital..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:border-healthcare-primary focus:outline-none"
            />
          </div>
          <div className="flex gap-2">
            <select className="px-4 py-2 border border-border rounded-lg">
              <option>All Specialties</option>
              <option>Cardiology</option>
              <option>Gynecology</option>
              <option>Mental Health</option>
              <option>Pediatrics</option>
              <option>Dermatology</option>
              <option>Orthopedics</option>
            </select>
            <select className="px-4 py-2 border border-border rounded-lg">
              <option>All Hospitals</option>
              <option>King Faisal Hospital</option>
              <option>Rwanda Military Hospital</option>
              <option>University Teaching Hospital</option>
              <option>Kibagabaga Hospital</option>
            </select>
            <select className="px-4 py-2 border border-border rounded-lg">
              <option>Availability</option>
              <option>Available Now</option>
              <option>Available Today</option>
              <option>Available Tomorrow</option>
            </select>
          </div>
        </div>
      </HealthCard>

      {/* Specialists Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialists.map((doctor) => (
          <HealthCard key={doctor.id} className="p-6 hover:shadow-theme-lg transition-shadow">
            <div className="text-center mb-4">
              <div className="w-20 h-20 bg-healthcare-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="h-10 w-10 text-healthcare-primary" />
              </div>
              <h3 className="text-lg font-semibold">{doctor.name}</h3>
              <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
              <div className="flex items-center justify-center mt-2">
                <Star className="h-4 w-4 text-yellow-500 mr-1" />
                <span className="text-sm font-medium">{doctor.rating}</span>
                <span className="text-sm text-muted-foreground ml-1">({doctor.reviews} reviews)</span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <MapPin className="h-4 w-4 text-muted-foreground mr-2" />
                <span>{doctor.hospital}</span>
              </div>

              <div>
                <p className="text-sm font-medium">Experience</p>
                <p className="text-sm text-muted-foreground">{doctor.experience}</p>
              </div>

              <div>
                <p className="text-sm font-medium">Languages</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {doctor.languages.map((lang, index) => (
                    <span key={index} className="px-2 py-1 bg-muted rounded text-xs">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-sm font-medium">Availability</p>
                <span className={`inline-block px-2 py-1 rounded text-xs ${
                  doctor.availability === 'Available Now' ? 'bg-success-100 text-success-700' :
                  doctor.availability === 'Available Today' ? 'bg-warning-100 text-warning-700' :
                  'bg-blue-light-100 text-blue-light-700'
                }`}>
                  {doctor.availability}
                </span>
              </div>

              <div>
                <p className="text-sm font-medium">Specializes in</p>
                <div className="flex flex-wrap gap-1 mt-1">
                  {doctor.services.slice(0, 2).map((service, index) => (
                    <span key={index} className="px-2 py-1 bg-healthcare-primary/10 text-healthcare-primary rounded text-xs">
                      {service}
                    </span>
                  ))}
                  {doctor.services.length > 2 && (
                    <span className="px-2 py-1 bg-muted rounded text-xs">
                      +{doctor.services.length - 2} more
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-6 pt-4 border-t border-border">
              <button className="flex-1 bg-healthcare-primary text-white py-2 rounded-lg text-sm flex items-center justify-center gap-1">
                <Calendar className="h-4 w-4" />
                Book
              </button>
              <button className="flex items-center justify-center px-3 py-2 border border-border rounded-lg text-sm hover:border-healthcare-primary">
                <MessageCircle className="h-4 w-4" />
              </button>
              <button className="flex items-center justify-center px-3 py-2 border border-border rounded-lg text-sm hover:border-healthcare-primary">
                <Star className="h-4 w-4" />
              </button>
              <button className="flex items-center justify-center px-3 py-2 border border-border rounded-lg text-sm hover:border-healthcare-primary">
                <Heart className="h-4 w-4" />
              </button>
            </div>
          </HealthCard>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <HealthCard className="p-6 text-center">
          <Calendar className="h-12 w-12 mx-auto mb-4 text-healthcare-primary" />
          <h3 className="font-semibold mb-2">Emergency Consultation</h3>
          <p className="text-sm text-muted-foreground mb-4">Need immediate medical attention?</p>
          <button className="bg-error-500 text-white px-6 py-2 rounded-lg">
            Emergency Booking
          </button>
        </HealthCard>

        <HealthCard className="p-6 text-center">
          <MessageCircle className="h-12 w-12 mx-auto mb-4 text-healthcare-primary" />
          <h3 className="font-semibold mb-2">Second Opinion</h3>
          <p className="text-sm text-muted-foreground mb-4">Get another specialist's perspective</p>
          <button className="bg-healthcare-primary text-white px-6 py-2 rounded-lg">
            Request Opinion
          </button>
        </HealthCard>

        <HealthCard className="p-6 text-center">
          <Star className="h-12 w-12 mx-auto mb-4 text-healthcare-primary" />
          <h3 className="font-semibold mb-2">Top Rated</h3>
          <p className="text-sm text-muted-foreground mb-4">Browse our highest-rated specialists</p>
          <button className="border border-border px-6 py-2 rounded-lg hover:border-healthcare-primary">
            View Top Doctors
          </button>
        </HealthCard>
      </div>

      {/* Pagination */}
      <div className="flex justify-center">
        <div className="flex items-center gap-2">
          <button className="px-3 py-2 border border-border rounded-lg hover:border-healthcare-primary">Previous</button>
          <span className="px-3 py-2">Page 1 of 1</span>
          <button className="px-3 py-2 border border-border rounded-lg hover:border-healthcare-primary">Next</button>
        </div>
      </div>
    </div>
  );
}