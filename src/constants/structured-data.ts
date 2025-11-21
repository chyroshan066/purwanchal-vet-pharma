import { Description, Email, Name } from "@/types";

interface PostalAddress {
  "@type": "PostalAddress";
  streetAddress: string;
  addressLocality: string;
  addressRegion: string;
  postalCode: string;
  addressCountry: string;
}

interface AggregateRating {
  "@type": "AggregateRating";
  ratingValue: string;
  ratingCount: string;
}

interface GeoCoordinates {
  "@type": "GeoCoordinates";
  latitude: string;
  longitude: string;
}

interface EntryPoint {
  "@type": "EntryPoint";
  urlTemplate: string;
}

interface Appointment extends Name {
  "@type": "Appointment";
}

interface ScheduleAction {
  "@type": "ScheduleAction";
  target: EntryPoint;
  result: Appointment;
}

interface AnatomicalStructure extends Name {
  "@type": "AnatomicalStructure";
}

interface MedicalProcedure extends Name, Description {
  "@type": "MedicalProcedure";
  procedureType: string;
  bodyLocation: AnatomicalStructure;
}

interface MedicalSpecialty extends Name, Description {
  "@type": "MedicalSpecialty";
  includedServices: string[];
}

interface ListItem {
  "@type": "ListItem";
  position: number;
  item: MedicalSpecialty;
}

interface VeterinaryBusinessStructuredData extends Name, Description, Email {
  "@context": "https://schema.org";
  "@type": "VeterinaryCare";
  url: string | undefined;
  address: PostalAddress;
  telephone: string;
  openingHours: string[];
  medicalSpecialty: string[];
  priceRange: string;
  aggregateRating: AggregateRating;
  geo: GeoCoordinates;
  sameAs: string[];
  potentialAction: ScheduleAction;
}

interface VeterinaryServicesStructuredData extends Name, Description {
  "@context": "https://schema.org";
  "@type": "MedicalBusiness";
  availableService: MedicalProcedure[];
}

interface SpecialtiesStructuredData extends Name, Description {
  "@context": "https://schema.org";
  "@type": "ItemList";
  itemListElement: ListItem[];
}

export const veterinaryClinicStructuredData: VeterinaryBusinessStructuredData = {
  "@context": "https://schema.org",
  "@type": "VeterinaryCare",
  "name": "Purwanchal Vet Pharma", 
  "description": "Professional veterinary care and pharmaceutical services in Itahari, Sunsari. Comprehensive animal healthcare including routine checkups, vaccinations, surgery, grooming, emergency care, and veterinary products. Expert veterinarians, modern facilities, and compassionate care for pets and livestock.", 
  "url": `https://purwanchalvetpharma.com.np`,
  
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Purva Line",
    "addressLocality": "Itahari-04",
    "addressRegion": "Sunsari",
    "postalCode": "56705",
    "addressCountry": "NP"
  },
  
  "telephone": "+977-9822299946", 
  "email": "pvf.vet@gmail.com", 
  
  "openingHours": [
    "Su-Sa 07:00-19:00", 
  ],
  
  "medicalSpecialty": ["Veterinary Medicine", "Animal Surgery", "Pet Care", "Livestock Care"],
  "priceRange": "$$",
  
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "ratingCount": "1"
  },
  
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "26.66202", 
    "longitude": "87.28007"
  },
  
  "sameAs": [
    "https://www.facebook.com/purwanchal.vets/",
    "https://www.tiktok.com/@purwanchal.vet.ph?_r=1&_t=ZS-91TTYv9GitW",
    "https://wa.me/9779822299946"
  ],
  
  "potentialAction": {
    "@type": "ScheduleAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `https://purwanchalvetpharma.com/contact`
    },
    "result": {
      "@type": "Appointment",
      "name": "Veterinary Appointment"
    }
  }
};

export const veterinaryServicesStructuredData: VeterinaryServicesStructuredData = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "Veterinary Services",
  "description": "Comprehensive veterinary care services including preventive, diagnostic, surgical, and emergency treatments for pets and livestock",
  
  "availableService": [
    {
      "@type": "MedicalProcedure",
      "name": "Pet Health Checkup",
      "description": "Routine veterinary examination and wellness assessment to maintain healthy pets. Comprehensive physical examination including vital signs and health screening.",
      "procedureType": "Preventive Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Full Body"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Pet Vaccination",
      "description": "Essential vaccinations to protect pets from common diseases. Includes rabies, distemper, parvovirus, and other preventive immunizations.",
      "procedureType": "Preventive Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Subcutaneous/Intramuscular"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Veterinary Surgery",
      "description": "Surgical procedures for pets including spaying, neutering, tumor removal, and emergency surgeries. Advanced surgical care with anesthesia.",
      "procedureType": "Surgery",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Various"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Diagnostic Testing",
      "description": "Laboratory tests and diagnostic imaging including blood work, urinalysis, X-rays, and ultrasound for accurate diagnosis.",
      "procedureType": "Diagnostic",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Full Body"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Pet Grooming",
      "description": "Professional grooming services including bathing, hair trimming, nail clipping, and hygiene care for pets.",
      "procedureType": "Wellness Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Skin and Coat"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Deworming Treatment",
      "description": "Parasite control and deworming treatments to protect pets from internal parasites and maintain digestive health.",
      "procedureType": "Preventive Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Gastrointestinal System"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Emergency Veterinary Care",
      "description": "24/7 emergency treatment for critical conditions, accidents, poisoning, and urgent medical situations requiring immediate attention.",
      "procedureType": "Emergency Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Full Body"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Dental Care for Pets",
      "description": "Veterinary dental services including teeth cleaning, scaling, extractions, and oral health treatments for pets.",
      "procedureType": "Dental Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Oral Cavity"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Skin Disease Treatment",
      "description": "Diagnosis and treatment of skin conditions including allergies, infections, parasites, and dermatological issues in animals.",
      "procedureType": "Dermatology",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Skin"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Pet Microchipping",
      "description": "Permanent identification microchip implantation for pet safety and recovery in case of loss.",
      "procedureType": "Identification",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Subcutaneous"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Livestock Veterinary Care",
      "description": "Comprehensive healthcare for farm animals including cattle, goats, sheep, and poultry. Disease prevention and treatment.",
      "procedureType": "Farm Animal Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Full Body"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Pet Training Consultation",
      "description": "Behavioral consultation and training guidance for pet owners to address behavioral issues and improve pet-owner relationships.",
      "procedureType": "Behavioral Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Behavioral"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Home Veterinary Visit",
      "description": "Convenient at-home veterinary services for pet checkups, vaccinations, and treatments in the comfort of your home.",
      "procedureType": "Mobile Service",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Full Body"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Nutritional Consultation",
      "description": "Dietary guidance and nutrition planning for pets to maintain optimal health, weight management, and special dietary needs.",
      "procedureType": "Nutritional Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Digestive System"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "X-Ray and Imaging",
      "description": "Advanced diagnostic imaging including digital X-rays and ultrasound for accurate diagnosis of internal conditions.",
      "procedureType": "Diagnostic Imaging",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Internal Organs"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Wound Treatment",
      "description": "Professional wound care, dressing, and treatment for injuries, surgical sites, and infections in animals.",
      "procedureType": "Wound Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Skin and Tissue"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Reproductive Health Services",
      "description": "Breeding consultation, pregnancy care, artificial insemination, and reproductive health management for animals.",
      "procedureType": "Reproductive Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Reproductive System"
      }
    },
    {
      "@type": "MedicalProcedure",
      "name": "Senior Pet Care",
      "description": "Specialized healthcare for aging pets including geriatric screenings, chronic disease management, and quality of life care.",
      "procedureType": "Geriatric Care",
      "bodyLocation": {
        "@type": "AnatomicalStructure",
        "name": "Full Body"
      }
    }
  ]
};

export const veterinarySpecialtiesStructuredData: SpecialtiesStructuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Veterinary Specialties and Services",
  "description": "Comprehensive veterinary care organized by specialty areas",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Preventive Veterinary Care",
        "description": "Routine care to maintain animal health and prevent diseases",
        "includedServices": ["Health Checkup", "Vaccination", "Deworming", "Nutritional Consultation"]
      }
    },
    {
      "@type": "ListItem", 
      "position": 2,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Veterinary Surgery",
        "description": "Surgical procedures for pets and animals",
        "includedServices": ["Spaying/Neutering", "Tumor Removal", "Emergency Surgery", "Wound Treatment"]
      }
    },
    {
      "@type": "ListItem",
      "position": 3, 
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Diagnostic Services",
        "description": "Advanced testing and imaging for accurate diagnosis",
        "includedServices": ["Blood Tests", "X-Ray", "Ultrasound", "Laboratory Testing"]
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "MedicalSpecialty", 
        "name": "Emergency Veterinary Care",
        "description": "Urgent medical care for critical situations",
        "includedServices": ["24/7 Emergency", "Accident Care", "Poisoning Treatment", "Critical Care"]
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Pet Wellness Services", 
        "description": "Services to maintain overall pet health and happiness",
        "includedServices": ["Grooming", "Dental Care", "Microchipping", "Training Consultation"]
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Livestock Veterinary Care",
        "description": "Healthcare services for farm animals",
        "includedServices": ["Cattle Care", "Poultry Health", "Reproductive Services", "Disease Management"]
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Dermatology",
        "description": "Treatment of skin conditions and allergies in animals", 
        "includedServices": ["Skin Disease Treatment", "Allergy Management", "Parasite Control"]
      }
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "MedicalSpecialty",
        "name": "Geriatric Animal Care",
        "description": "Specialized care for aging pets and animals",
        "includedServices": ["Senior Pet Care", "Chronic Disease Management", "Quality of Life Care"]
      }
    }
  ]
};