import { Project, Service, Differentiator, CorePillar, AdCreative, VideoShowcaseItem, FAQItem, WorkflowStep, ToolItem } from '../types';

export const CONTACT_INFO = {
  email: "museerailyas0@gmail.com",
  whatsappNumber: "923322575484",
  whatsappDisplay: "+92 332 2575484",
  whatsappMessage: "Hello! I visited your portfolio and I'm interested in your services. Can we discuss my project?",
  get whatsappUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent(this.whatsappMessage)}`;
  },
  get websiteDemoUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent("Hello! I visited your portfolio and I'd like to request a FREE website demo.")}`;
  },
  get adDemoUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent("Hello! I visited your portfolio and I'd like to see your AI advertisement samples.")}`;
  },
  get videoDemoUrl() {
    return `https://wa.me/${this.whatsappNumber}?text=${encodeURIComponent("Hello! I visited your portfolio and I'd love to see your AI video portfolio.")}`;
  },
  formSubmitUrl: "https://formsubmit.co/museerailyas0@gmail.com"
};

export const HERO_DATA = {
  eyebrow: "— AI-POWERED CREATIVE STUDIO",
  headline: "Where Artificial Intelligence Meets Timeless Design.",
  subheadline: "We craft responsive luxury websites in 48 hours, high-converting AI advertising campaigns, and cinematic video edits for content creators and growing brands.",
  stats: [
    { label: "Delivery Speed", value: "48 Hours" },
    { label: "Risk-Free Trial", value: "Free Demo" },
    { label: "Quality Focus", value: "Premium" }
  ]
};

export const FREE_DEMO_DATA = {
  eyebrow: "— RISK-FREE PREVIEW GUARANTEE",
  title: "Experience Your Website Before You Spend a Single Cent.",
  description: "First, a custom free demo website will be built according to your exact requirements. After you review and approve the demo, the full website will be finalized as a paid project in 48 hours.",
  steps: [
    { number: "01", title: "Submit Brief", desc: "Share your business needs, preferences, and color guidelines." },
    { number: "02", title: "Review Free Demo", desc: "We craft a live, interactive demo website for your review." },
    { number: "03", title: "Approve & Go Live", desc: "After approval, we polish, connect forms, and launch in 48 hours." }
  ]
};

export const ABOUT_DATA = {
  eyebrow: "— THE CREATIVE BEHIND THE WORK",
  title: "Bespoke digital artistry guided by human judgment & artificial precision.",
  narrative1: "We operate at the intersection of modern web development, generative AI tools, and precision digital architecture.",
  narrative2: "Every website, ad creative, and video edit is built with obsessive attention to speed, visual elegance, and conversion performance. Our 48-hour delivery guarantee and free demo model ensure complete peace of mind.",
  quote: "AI grants us velocity and infinite creative power — but human judgment and client satisfaction dictate our work.",
  badge: "Web & AI Design Specialist",
  portraitUrl: "/src/assets/images/studio_portrait_1784974829927.jpg"
};

export const PROJECTS: Project[] = [
  {
    id: "cafe-snug",
    title: "Cafe Snug",
    client: "Cafe Snug Artisanal Eatery",
    category: "Cafe & Restaurant Website",
    year: "2026",
    tagline: "A modern, aesthetic restaurant & cafe website featuring immersive food galleries, interactive menu highlights, and direct location contact.",
    coverImage: "/src/assets/images/project_cafesnug_1784975909957.jpg",
    galleryImages: [
      "/src/assets/images/project_cafesnug_1784975909957.jpg",
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://cafe-snug-web-z4xe.vercel.app/",
    role: "UI/UX Design & Full Website Development",
    industry: "Food, Hospitality & Dining",
    timeline: "48 Hours",
    challenge: "Cafe Snug needed an online digital presence that reflected their warm, cozy atmosphere and showcased their artisanal food & beverage menu to draw local foot traffic.",
    solution: "Developed a sleek, modern landing page with rich food imagery galleries, quick contact options, menu categorization, and full mobile optimization in 48 hours.",
    featureHighlights: [
      { title: "Premium Landing Page", desc: "High-impact visual hero banner and editorial menu display.", iconName: "Utensils" },
      { title: "Interactive Food Gallery", desc: "Responsive high-resolution grid showcasing signature coffee and dishes.", iconName: "Camera" },
      { title: "Contact & Location Section", desc: "One-touch click-to-call and integrated location maps.", iconName: "MapPin" },
      { title: "Mobile Responsive", desc: "Lighting-fast loading speeds for hungry guests browsing on mobile.", iconName: "Smartphone" }
    ],
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    impactStats: [
      { value: "48 Hrs", label: "Turnaround Time" },
      { value: "Sub-1s", label: "Page Load Speed" },
      { value: "100%", label: "Mobile Responsive" }
    ]
  },
  {
    id: "tafheem-ul-islam",
    title: "Tafheem-ul-Islam Academy Lil Banat",
    client: "Tafheem-ul-Islam Academy",
    category: "Educational / Female Online Academy",
    year: "2026",
    tagline: "A responsive, high-converting Islamic educational platform featuring English & Urdu support, WhatsApp integration, and automated registration.",
    coverImage: "/src/assets/images/project_tafheem_1784975889041.jpg",
    galleryImages: [
      "/src/assets/images/project_tafheem_1784975889041.jpg",
      "https://images.unsplash.com/photo-1584282679159-732165f10665?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://tafheem-ul-islam-academy-lil-banat-528273318797.asia-southeast1.run.app/",
    role: "Full-Stack Web Design & System Integration",
    industry: "Online Education & Islamic Studies",
    timeline: "48 Hours",
    challenge: "Creating an accessible, elegant, and trustworthy online learning environment specifically tailored for female students globally, with seamless multi-language support and frictionless registration.",
    solution: "Designed a responsive, high-converting Islamic educational platform featuring bilingual English & Urdu interface toggle, direct WhatsApp consultation relay, Google Sheets registration integration, and clean course curriculum showcases.",
    featureHighlights: [
      { title: "Bilingual English & Urdu", desc: "Seamless right-to-left and left-to-right typography and language switching.", iconName: "Globe" },
      { title: "WhatsApp Integration", desc: "Instant one-click direct chat connection with academy administration.", iconName: "MessageCircle" },
      { title: "Online Registration Form", desc: "Streamlined student enrollment synced directly with Google Sheets.", iconName: "FileText" },
      { title: "Female Online Academy", desc: "Dedicated, respectful, and secure online environment tailored for sisters.", iconName: "GraduationCap" }
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript", "Google Sheets API", "WhatsApp Integration"],
    impactStats: [
      { value: "48 Hrs", label: "Turnaround Time" },
      { value: "Bilingual", label: "English & Urdu Supported" },
      { value: "100%", label: "Mobile Responsive" }
    ]
  },
  {
    id: "greenlife-landscaping",
    title: "GreenLife Garden & Lawn Landscapers",
    client: "GreenLife Landscaping Co.",
    category: "Professional Landscaping Business",
    year: "2026",
    tagline: "A high-converting business website for professional lawn care and garden architecture with Google Maps integration and online quote requests.",
    coverImage: "/src/assets/images/project_greenlife_1784975930255.jpg",
    galleryImages: [
      "/src/assets/images/project_greenlife_1784975930255.jpg",
      "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1592417817098-8f3d6ef23a81?q=80&w=1200&auto=format&fit=crop"
    ],
    liveUrl: "https://lawn-lover-connect.vercel.app/#projects",
    role: "Full Website Architecture & Brand Presence",
    industry: "Residential & Commercial Landscaping",
    timeline: "48 Hours",
    challenge: "Standing out in a competitive local service market with a trustworthy, modern website that allows homeowners to easily request quotes and view past project transformations.",
    solution: "Created a vibrant, clean landscaping website featuring structured service offerings, interactive quote estimation forms, Google Maps location targeting, and before/after project highlights.",
    featureHighlights: [
      { title: "Services Catalog", desc: "Detailed breakdown of lawn maintenance, hardscaping, and garden design.", iconName: "Trees" },
      { title: "Online Booking / Contact Form", desc: "Instant quote request form with quick service selection.", iconName: "Calendar" },
      { title: "Google Maps Integration", desc: "Embedded interactive map highlighting service radius coverage.", iconName: "Map" },
      { title: "Mobile First Design", desc: "Flawless touch controls for homeowners requesting service on the go.", iconName: "CheckCircle" }
    ],
    technologies: ["React", "Tailwind CSS", "Google Maps API", "TypeScript"],
    impactStats: [
      { value: "48 Hrs", label: "Turnaround Time" },
      { value: "Google Maps", label: "Interactive Radius Map" },
      { value: "100%", label: "Mobile Responsive" }
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "web-design",
    number: "01",
    title: "Website Design & Development (48h Turnaround)",
    description: "Modern, responsive, ultra-fast websites built using advanced AI workflows & React. Includes free demo website preview before paid completion.",
    icon: "Layout",
    deliverables: ["Free Demo Website First", "Guaranteed 48-Hour Delivery", "Responsive Mobile First", "WhatsApp & Forms Integration"]
  },
  {
    id: "ai-ads",
    number: "02",
    title: "AI Ads & High-Converting Marketing Creatives",
    description: "Scroll-stopping ad creatives for social media, products, promotions, business brands, and search campaigns across all industries.",
    icon: "Sparkles",
    deliverables: ["Social Media & Product Ads", "Promotional & Brand Creatives", "AI Image & Prompt Architecture", "A/B Concept Variations"]
  },
  {
    id: "ai-video",
    number: "03",
    title: "AI Video Editing for Content Creators & Brands",
    description: "High-impact video editing for YouTube Shorts, Instagram Reels, TikTok promos, creator brand content, and AI video animations.",
    icon: "Film",
    deliverables: ["Reels, Shorts & TikTok Edits", "Content Creator Video Production", "Aesthetic AI Video Effects", "Engaging Captions & Audio Mix"]
  }
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    number: "01",
    title: "Free Demo Website First",
    description: "We build an interactive live demo website based on your requirements. You review and approve before paying anything."
  },
  {
    number: "02",
    title: "48-Hour Turnaround Guarantee",
    description: "Once approved, your full responsive website with integrated forms is finalized and deployed live within 48 hours."
  },
  {
    number: "03",
    title: "All-in-One AI Creative Suite",
    description: "From custom websites to viral social media ads and content creator video editing — all handled under one roof."
  },
  {
    number: "04",
    title: "Real Client Integration",
    description: "Multi-language English/Urdu toggles, instant WhatsApp chat relays, and automatic Google Sheets lead sync."
  }
];

export const WEBSITE_SERVICE_DETAILS = {
  title: "Website Design & Development",
  badge: "48-HOUR GUARANTEED TURNAROUND",
  subtitle: "First, a free demo website will be created according to your requirements. After you review and approve the demo, the full website will be developed as a paid project within 48 hours.",
  features: [
    "Custom responsive design (Mobile, Tablet & Desktop)",
    "Bilingual support (English, Urdu, or any language)",
    "WhatsApp chat integration & custom lead forms",
    "Google Sheets auto-sync for inquiries & enrollments",
    "Google Maps location embed & SEO structure",
    "Sub-second page load times & modern animations"
  ]
};

export const ADS_SERVICE_DETAILS = {
  title: "AI Ads & Advertisement Design",
  badge: "ALL INDUSTRIES & CAMPAIGN TYPES",
  subtitle: "High-converting ad graphics, product promotions, and social media campaigns engineered with state-of-the-art AI tools.",
  categories: [
    { title: "Social Media Ads", desc: "Eye-catching Instagram, Facebook, and TikTok ad graphics." },
    { title: "Product & E-Commerce Ads", desc: "Studio-quality product showcases and promotional offers." },
    { title: "Promotional & Offer Ads", desc: "Special discounts, launches, and seasonal campaign banners." },
    { title: "Brand & Business Ads", desc: "Authority-building corporate and local business commercials." }
  ]
};

export const VIDEO_SERVICE_DETAILS = {
  title: "AI Video Editing for Content Creators",
  badge: "SHORT-FORM & LONG-FORM EDITS",
  subtitle: "Aesthetic, fast-paced, and engaging AI-enhanced video editing tailored for influencers, YouTubers, TikTokers, and business brands.",
  categories: [
    { title: "Instagram Reels & Shorts", desc: "Dynamic pacing, auto-subtitles, sound effects, and viral hook framing." },
    { title: "Promos & Launch Teasers", desc: "High-energy commercial trailers for apps, restaurants, and academies." },
    { title: "Content Creator Edits", desc: "Talking-head polish, B-roll overlays, color grading, and audio cleaning." },
    { title: "AI-Enhanced Animations", desc: "Generative video clips, 3D motion graphics, and cinematic transitions." }
  ]
};

export const CORE_PILLARS: CorePillar[] = [
  {
    title: "Premium Quality",
    description: "Bespoke digital craftsmanship, refined typography, and meticulous attention to visual details.",
    badge: "Craftsmanship",
    iconName: "Award"
  },
  {
    title: "AI-Powered Workflow",
    description: "Harnessing cutting-edge AI design and generative tools for maximum creative velocity.",
    badge: "Next-Gen Tech",
    iconName: "Sparkles"
  },
  {
    title: "Modern Design",
    description: "Sophisticated aesthetics, balanced negative space, and intuitive user experiences.",
    badge: "Visual Excellence",
    iconName: "Palette"
  },
  {
    title: "Responsive Development",
    description: "Sub-second page load times and flawless mobile, tablet, and desktop responsiveness.",
    badge: "Performance",
    iconName: "Smartphone"
  },
  {
    title: "Client-Focused Approach",
    description: "Free demo website previews before payment, direct WhatsApp communication, and zero financial risk.",
    badge: "Risk-Free Guarantee",
    iconName: "HeartHandshake"
  }
];

export const AD_CREATIVES: AdCreative[] = [
  {
    id: "ad-1",
    title: "Tafheem Academy Online Launch Ad",
    brand: "Tafheem-ul-Islam Academy",
    type: "Educational & Cultural Social Ad",
    image: "/src/assets/images/project_tafheem_1784975889041.jpg",
    promptSnippet: "Elegant Islamic educational academy banner with gold geometric accents, English & Urdu typography, online enrollment callout...",
    toolsUsed: ["Midjourney v6", "Photoshop AI", "Lightroom"]
  },
  {
    id: "ad-2",
    title: "Cafe Snug Gourmet Dining Promo",
    brand: "Cafe Snug",
    type: "Food & Restaurant Product Ad",
    image: "/src/assets/images/project_cafesnug_1784975909957.jpg",
    promptSnippet: "Artisanal espresso and gourmet brunch spread, cozy mood lighting, special weekend menu promotion ad...",
    toolsUsed: ["Midjourney v6", "ComfyUI", "Magnific AI"]
  },
  {
    id: "ad-3",
    title: "GreenLife Lawn Care Promo Banner",
    brand: "GreenLife Landscaping",
    type: "Local Business Lead Gen Ad",
    image: "/src/assets/images/project_greenlife_1784975930255.jpg",
    promptSnippet: "Lush green manicured lawn estate, free estimate call-to-action banner, professional landscaping visual...",
    toolsUsed: ["Midjourney v6", "Runway Gen-3"]
  },
  {
    id: "ad-4",
    title: "AURA 48-Hour Website Launch Ad",
    brand: "AURA Studio",
    type: "Digital Service Marketing Ad",
    image: "/src/assets/images/studio_hero_art_1784974814701.jpg",
    promptSnippet: "Minimalist gold and dark mode glass interface on laptop screen, 48-hour delivery badge, free demo offer...",
    toolsUsed: ["Midjourney v6", "Photoshop AI"]
  }
];

export const VIDEO_SHOWCASE_ITEMS: VideoShowcaseItem[] = [
  {
    id: "video-1",
    title: "AURA Studio 48-Hour Web & AI Showreel",
    client: "AURA Creative Studio",
    duration: "1:15",
    thumbnail: "/src/assets/images/studio_hero_art_1784974814701.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    category: "Showreel"
  },
  {
    id: "video-2",
    title: "Tafheem-ul-Islam - Academy Promo Reel",
    client: "Tafheem-ul-Islam Academy",
    duration: "0:45",
    thumbnail: "/src/assets/images/project_tafheem_1784975889041.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    category: "Educational Reel"
  },
  {
    id: "video-3",
    title: "GreenLife Landscaping - Before & After Short",
    client: "GreenLife Landscaping",
    duration: "0:30",
    thumbnail: "/src/assets/images/project_greenlife_1784975930255.jpg",
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    category: "Creator Short"
  }
];

export const SKILLS_LIST = [
  "48-Hour Web Development",
  "Free Demo Prototyping",
  "AI Prompt Engineering",
  "Social Media Ad Design",
  "Reels & Shorts Video Editing",
  "Content Creator Edits",
  "WhatsApp & Google Sheets API",
  "Bilingual Web Design (English/Urdu)",
  "Responsive Mobile UI",
  "High-Converting Landing Pages",
  "Brand Identity",
  "Fast Performance & SEO"
];

export const TOOLS_LIST: ToolItem[] = [
  { name: "Figma", category: "Design & Wireframes", icon: "Figma", level: "Expert" },
  { name: "Midjourney v6", category: "AI Image & Ad Gen", icon: "Sparkles", level: "Master" },
  { name: "Runway & CapCut", category: "AI Video Editing", icon: "Film", level: "Expert" },
  { name: "React & Vite", category: "Frontend Web Dev", icon: "Code", level: "Advanced" },
  { name: "Tailwind CSS", category: "Responsive Styling", icon: "Layers", level: "Expert" },
  { name: "Framer Motion", category: "Smooth Animations", icon: "Zap", level: "Master" },
  { name: "ChatGPT & Gemini", category: "Copy & AI Logic", icon: "Bot", level: "Expert" },
  { name: "Photoshop & Premiere", category: "Video & Visual Polish", icon: "Cpu", level: "Advanced" }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    step: "01",
    title: "Submit Brief & Requirements",
    description: "Tell us about your business, website goals, language needs, or ad/video brief.",
    duration: "Hour 0"
  },
  {
    step: "02",
    title: "Free Demo Website Preview",
    description: "We build and share an interactive live demo website according to your requirements for review.",
    duration: "Hour 12 – 24"
  },
  {
    step: "03",
    title: "Review & Approval",
    description: "You review the free demo. Once approved, we move forward to finalize the paid project.",
    duration: "Hour 24 – 30"
  },
  {
    step: "04",
    title: "Final Build & Form Integrations",
    description: "We add WhatsApp chat, Google Sheets registration, mobile polish, and custom features.",
    duration: "Hour 30 – 42"
  },
  {
    step: "05",
    title: "Live Launch in 48 Hours",
    description: "Your full website goes live with sub-second speeds, domain setup, and full mobile responsiveness.",
    duration: "Hour 48"
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "How does the Free Demo Website option work?",
    answer: "First, a free custom demo website will be created according to your requirements. After you review and approve the demo, the full website will be developed and launched as a paid project in 48 hours. No upfront payment required to see your demo!"
  },
  {
    question: "Is the 48-hour delivery timeline guaranteed?",
    answer: "Yes! Once you review and approve the free demo website, we complete and deliver the full, responsive, form-integrated website within 48 hours."
  },
  {
    question: "Can you build websites with English and Urdu language options?",
    answer: "Yes! We specialize in bilingual websites with smooth language toggles, right-to-left layout alignment, and beautiful typography for both English and Urdu."
  },
  {
    question: "What types of AI ads can you create?",
    answer: "We create all types of ads using advanced AI tools: social media ads (Instagram, Facebook, TikTok), product ads, promotional banners, brand ads, and local business marketing creatives across any industry."
  },
  {
    question: "What is included in your AI Video Editing service for content creators?",
    answer: "We edit Instagram Reels, YouTube Shorts, TikToks, promo videos, and content creator vlogs with fast pacing, auto-captions, sound design, color grading, and aesthetic AI visual effects."
  }
];
