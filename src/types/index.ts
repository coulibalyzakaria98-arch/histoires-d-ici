export interface CulturalSignificance {
  title: string;
  content: string;
  icon: string;
}

export interface KeyPoint {
  icon: string;
  text: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  icon: string;
}

export interface PracticalInfo {
  icon: string;
  label: string;
  value: string;
}

export interface Site {
  id: string;
  name: string;
  location: string;
  description: string;
  tagline: string;
  imageUrl: string;
  themeColor: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  galleryImages?: string[];
  legend?: {
    title: string;
    narrator: string;
    content: string;
  };
  practicalInfo?: PracticalInfo[];
  quote?: string;
  timeline?: TimelineItem[];
  keyPoints?: KeyPoint[];
  stats?: { label: string; value: string }[];
  culturalSignificance?: CulturalSignificance[];
}

export interface Story {
  id: string;
  siteId: string;
  title: string;
  excerpt: string;
  content: string;
  audioUrl?: string;
  duration?: string;
  author: string;
  imageUrl?: string;
}
