export const profile = {
  name: "Syed Azmul Hasan",
  shortName: "S. A. Hasan",
  headline:
    "Data Analyst · Business Analyst · AI/ML Researcher · Finance & Operations Enthusiast",
  tagline:
    "Mathematics graduate applying rigorous, first-principles thinking to deep learning, computer vision, and data-driven decision making.",
  intro:
    "I'm a mathematics graduate working at the intersection of AI research and applied analytics. My background in formal proof and optimization shapes how I approach machine learning: I care as much about why a model works as whether it works. That mindset has led to benchmarking deep learning architectures for deepfake detection, applying physics-informed neural networks to drug delivery systems, and building analytics workflows that turn raw data into decisions. I'm currently preparing for graduate research in AI/ML and I'm looking for teams and programs that value depth over shortcuts.",
  email: "s.a.h.sabbir2001@gmail.com",
  linkedin: "https://www.linkedin.com/in/syed-azmul-hasan?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  github: "https://github.com/sabbir-just",
  portfolioLegacy: "https://syed-azmul-hasan-portfolio.vercel.app/",
  location: "Bangladesh",
  whatsapp: "+8801871610850",
  phonePrimary: "+8801871610850",
  phoneSecondary: "+8801518921449",
  facebook: "https://www.facebook.com/share/1BgZ8oVvY9/",
};

export const seoKeywords = [
  "AI Researcher",
  "Machine Learning",
  "Data Analyst",
  "Business Analyst",
  "Deep Learning",
  "Computer Vision",
  "Mathematics Graduate",
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Research", href: "#research" },
  { label: "Projects", href: "#projects" },
  { label: "Publications", href: "#publications" },
  { label: "Experience", href: "#experience" },
  { label: "Leadership", href: "#leadership" },
  { label: "Certifications", href: "#certifications" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export const skills = {
  Programming: ["Python", "SQL", "MATLAB", "C/C++", "Java", "R"],
  "AI & Data Science": [
    "Machine Learning",
    "Deep Learning",
    "Computer Vision",
    "Data Analytics",
    "Statistics",
  ],
  Frameworks: ["PyTorch", "TensorFlow", "Scikit-Learn", "OpenCV"],
  Tools: ["GitHub", "LaTeX", "Microsoft Office"],
};

export const research = {
  title: "Benchmarking Deep Learning Models for Robust Deepfake Video Detection",
  description:
    "A systematic evaluation of convolutional and transformer-based architectures for detecting manipulated video content, stress-tested across compression levels, resolutions, and manipulation methods to identify which model families generalize rather than memorize.",
  metrics: [
    { label: "AUC", value: "99.02%" },
    { label: "Best Model", value: "ViT-B/16" },
    { label: "Architectures Benchmarked", value: "8+" },
  ],
};

export const projects = [
  {
    id: "01",
    title: "Deepfake Detection",
    summary:
      "Benchmarked CNN and transformer architectures for deepfake video detection, isolating which inductive biases hold up under real-world compression and manipulation diversity.",
    tags: ["Computer Vision", "PyTorch", "ViT", "CNN"],
  },
  {
    id: "02",
    title: "Progressive Dual-Teacher Knowledge Distillation",
    summary:
      "Designed a domain-aware distillation pipeline using two teacher networks to train compact, deployable deepfake detectors without sacrificing generalization.",
    tags: ["Knowledge Distillation", "Model Compression", "Deep Learning"],
  },
  {
    id: "03",
    title: "PINNs for Drug Delivery Systems",
    summary:
      "Applied fractional physics-informed neural networks to reaction–diffusion equations governing drug delivery, analyzing performance across distinct physical regimes.",
    tags: ["PINNs", "Applied Mathematics", "Scientific ML"],
  },
];

export const publications = [
  {
    title:
      "Regime-Dependent Performance Analysis of Fractional Physics-Informed Neural Networks for Reaction–Diffusion Drug Delivery Systems",
    role: "First Author",
    venue: "Journal Submission",
    field: "Scientific ML · Applied Mathematics",
    status: "Under Review",
  },
  {
    title:
      "Deepfake Detection: A Comparative Analysis of CNN and Transformer-Based Methods",
    role: "First Author",
    venue: "Journal Submission",
    field: "Computer Vision",
    status: "Under Review",
  },
  {
    title:
      "Progressive Dual-Teacher Knowledge Distillation with Domain-Aware Training for Efficient and Generalizable DeepFake Detection",
    role: "First Author",
    venue: "Journal Submission",
    field: "Deep Learning · Model Compression",
    status: "Under Review",
  },
];

export const posters = [
  {
    year: "2024",
    title:
      "Image-Based Toxicity Classification Using Vision Transformers on 2D Molecular Structure Diagrams",
  },
  {
    year: "2024",
    title:
      "Bridging Cheminformatics and Computer Vision: Toxicity Prediction of 2D Molecular Structures Using Vision Transformers",
  },
  {
    year: "2023",
    title:
      "Global-Context Vision Transformers for Attention-Based Deepfake Detection from Video Frames",
  },
];

export const experience = [
  {
    role: "Private Tutor",
    duration: "4 Years",
    points: [
      "Delivered structured, one-on-one instruction in mathematics and science to secondary and higher-secondary students, translating abstract concepts into intuitive, exam-ready understanding.",
      "Designed individualized study plans based on diagnostic assessment, improving measurable performance across consecutive academic terms.",
      "Built long-term communication and mentorship skills through sustained, outcome-accountable relationships with students and guardians.",
      "Developed the ability to explain complex, technical material clearly and patiently — a skill directly transferable to research communication and cross-functional analyst work.",
    ],
  },
];

export const leadership = [
  {
    role: "Treasurer",
    org: "Dhaka Association, JUST",
    points: [
      "Managed budgeting, fund allocation, and financial reporting for association-wide events and initiatives, maintaining full transparency with members.",
      "Coordinated with a multi-member executive committee to plan and execute programs on time and within budget.",
      "Strengthened organizational and stakeholder-communication skills directly applicable to operations and business-analyst functions.",
    ],
  },
];

export const certifications = [
  "Advanced Computer Application Course",
  "Data Analysis with Python",
  "CS403: Introduction to Modern Database Systems",
  "Generative AI for Beginners",
  "Introduction to Basic Finance",
  "Project Management 101",
  "Introduction to MS Excel",
];