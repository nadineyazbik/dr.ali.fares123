export interface Translation {
  en: string;
  ar: string;
  fr?: string;
}

export interface Doctor {
  id: string;
  name: Translation;
  title: Translation;
  specialtyId: string;
  image: string;
  credentials: Translation[];
  experience: Translation;
  languages: Translation[];
  availability: {
    days: Translation;
    hours: string;
  };
  surgeryFocus: Translation[];
}

export interface Specialty {
  id: string;
  title: Translation;
  subtitle: Translation;
  description: Translation;
  longDescription: Translation;
  iconName: string;
  image?: string;
  procedures: Translation[];
  recoveryProtocol: {
    phase1: Translation;
    phase2: Translation;
    phase3: Translation;
  };
}

export interface DiagnosticCase {
  id: string;
  jointName: Translation;
  symptoms: {
    question: Translation;
    options: {
      id: string;
      text: Translation;
      severity: 'low' | 'medium' | 'high';
      recommendation: Translation;
      imagingRequired: Translation;
      estimatedRecovery: Translation;
    }[];
  }[];
}

export interface RecoveryMilestone {
  day: number;
  title: Translation;
  description: Translation;
  completed: boolean;
  exercises: {
    name: Translation;
    duration: Translation;
    reps: string;
    intensity: 'Mild' | 'Moderate' | 'Precise';
  }[];
}

export interface EducationalArticle {
  id: string;
  title: Translation;
  summary: Translation;
  author: Translation;
  readTime: Translation;
  sections: {
    heading: Translation;
    content: Translation;
  }[];
}
