export interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tagline: string;
  coverImage: string;
  galleryImages: string[];
  liveUrl: string;
  role: string;
  industry: string;
  timeline: string;
  challenge: string;
  solution: string;
  featureHighlights: { title: string; desc: string; iconName: string }[];
  technologies: string[];
  impactStats: { value: string; label: string }[];
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  icon: string;
  deliverables: string[];
}

export interface Differentiator {
  number: string;
  title: string;
  description: string;
}

export interface CorePillar {
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface StatCounter {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface AdCreative {
  id: string;
  title: string;
  brand: string;
  type: string;
  image: string;
  promptSnippet: string;
  toolsUsed: string[];
}

export interface VideoShowcaseItem {
  id: string;
  title: string;
  client: string;
  duration: string;
  thumbnail: string;
  videoUrl: string;
  category: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export interface WorkflowStep {
  step: string;
  title: string;
  description: string;
  duration: string;
}

export interface ToolItem {
  name: string;
  category: string;
  icon: string;
  level: string;
}
