import {
  Globe, Smartphone, Search, Database, Users, Code, Film, Calendar, Ticket, BarChart, 
  BookOpen, Monitor, Server, Cloud, Video, Music, PenTool, Activity, PieChart, 
  Layout, ShoppingBag, Award, TrendingUp, Mail, MapPin, Briefcase, GraduationCap,
  ExternalLink, Github, FolderOpen, Send, Linkedin, Menu, X, ArrowDown,
  // Additional icons for new projects
  Library, Building, Clock, User, Film as FilmIcon, Theater, Armchair, 
  TicketCheck, ChartBar, School, BookMarked, FileText, Table, Database as DatabaseIcon,
  Cpu, BarChart3, LineChart, PieChart as PieChartIcon, AreaChart
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  youtubeUrl?: string;      // ✅ Add YouTube link
  instagramUrl?: string; 
  category: string;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  description: string[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
}

export interface SkillCategory {
  name: string;
  icon: LucideIcon;
  skills: string[];
}

// ─── Personal Info ────────────────────────────────────────────────────────────

export const personalInfo = {
  name: 'Tilasmi Subedi',
  title: 'Computing Student | SEO Analyst Intern | Web Developer | Content Creator',
  email: 'tilasmisubedi@gmail.com',
  phone: '+9779864428389',
  location: 'Pokhara, Nepal',
  linkedin: 'https://linkedin.com/in/tilasmi-subedi',
  github: 'https://github.com/Tilasmiape',
  about: `I am a BSc (Hons) Computing student with an 8-month internship in SEO analysis, video editing, and YouTube content writing. I have hands-on experience building web applications using React, TypeScript, Next.js, and MongoDB, along with desktop development in C# and .NET MAUI. In addition, I have completed SQL coursework, an AI-based movie recommendation website, and smart data coursework. I am passionate about creating elegant digital solutions and constantly expanding my technical skillset.`,
  heroIntro: `A passionate Computing student crafting modern web experiences and digital solutions. With hands-on experience in full-stack development, SEO analysis, and content creation, I bring ideas to life through clean code and creative thinking.`,
};

// ─── Projects ─────────────────────────────────────────────────────────────────

export const projects: Project[] = [
  // ===== SEO INTERNSHIP PROJECTS =====
  {
    id: 'daily-health-supplement',
    title: 'Daily Health Supplement - SEO Content Strategy',
    description:
      'Wrote and published SEO-optimized articles on supplement reviews. Conducted keyword research using Google Trends and Semrush, optimized content with proper heading structure, meta descriptions, internal linking, and image alt text. Achieved first-page rankings on Bing for multiple articles.',
    technologies: ['WordPress', 'Rank Math SEO', 'Google Trends', 'Semrush', 'Bing Search Console'],
    githubUrl: '#',
    category: 'SEO & Content Marketing',
  },
  {
    id: 'tales-of-the-dead',
    title: 'Tales of the Dead - YouTube Content Strategy',
    description:
      'Managed YouTube channel focused on history content. Wrote scripts with engaging hooks, edited videos using Adobe After Effects, generated voiceovers via Eleven Labs, and optimized metadata for YouTube SEO. Improved audience retention through strategic 5-second intros.',
    technologies: ['Adobe After Effects', 'Canva', 'Eleven Labs', 'IX Browser', 'YouTube Studio'],
    githubUrl: '#',
    category: 'Video Production & YouTube SEO',
  },
  {
    id: 'wait-what-youtube',
    title: 'Wait What - YouTube Content Management & A/B Testing',
    description:
      'Managed crime-content YouTube channel. Created video scripts, edited clips, designed thumbnails, implemented YouTube SEO strategies, and conducted A/B testing on posting times (morning vs evening) to optimize engagement metrics.',
    technologies: ['Adobe After Effects', 'Canva', 'YouTube Studio', 'Analytics', 'A/B Testing'],
    githubUrl: '#',
    category: 'Video Production & YouTube SEO',
  },
  {
    id: 'seo-analytics-tracking',
    title: 'SEO Performance Analytics & Content Optimization',
    description:
      'Tracked article performance using Bing Search Console and Clarity. Monitored impressions, CTR, average position, and audience retention. Used data insights to update underperforming articles, improve meta titles, and optimize content structure for better rankings.',
    technologies: ['Bing Search Console', 'Clarity', 'Data Analytics', 'Spreadsheets'],
    githubUrl: '#',
    category: 'Data Analytics & SEO',
  },
  {
    id: 'meta-title-analysis',
    title: 'Competitor Meta Title & CTR Analysis',
    description:
      'Analyzed competitor meta titles to identify high-CTR styles and strategies. Compared article rankings and meta descriptions to improve own content performance and click-through rates.',
    technologies: ['SEO Analytics', 'Competitor Research', 'CTR Optimization'],
    githubUrl: '#',
    category: 'SEO Strategy & Competitor Analysis',
  },
  {
    id: 'proxy-configuration',
    title: 'Technical SEO - Proxy & Browser Management',
    description:
      'Configured IX Browser with US proxy settings for secure YouTube account management. Set up multiple browser profiles with different proxies to access geo-restricted content and manage accounts safely.',
    technologies: ['IX Browser', 'Proxy Configuration', 'Technical SEO'],
    githubUrl: '#',
    category: 'Technical SEO',
  },

  // ===== AI MOVIE RECOMMENDATION =====
  {
    id: 'movie-recommendation-ai',
    title: 'AI-Powered Movie Recommendation System',
    description:
      'Built a content-based movie recommendation system using unsupervised machine learning with TF-IDF vectorization and cosine similarity. Integrated IMDb movie, actor, and character datasets to create rich movie profiles. Implemented K-Means clustering (optimal K=5) with silhouette analysis for cluster-aware hybrid recommendations. Features an interactive recommendation loop with fuzzy title matching and comprehensive visualizations including cluster distribution, genre heatmaps, and similarity matrices.',
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'NLTK', 'Matplotlib', 'Seaborn', 'Jupyter'],
    githubUrl: 'https://github.com/Tilasmiape/MovieRecommendation',
    liveUrl: '#',
    category: 'AI & Machine Learning',
  },

  // ===== STEP OUT STUDIO =====
  {
    id: 'step-out-studio',
    title: 'Step Out Studio - Choreographer Booking Platform',
    description:
      'A full-stack choreographer booking platform connecting clients with dance professionals. Features role-based authentication, real-time availability calendars, custom date reservations requiring choreographer approval, available slot instant booking, Stripe payment integration with 88/12 revenue split, automated notifications, attendance tracking, performance scoring, two-way messaging, admin dashboard with approval workflows and analytics, and light/dark mode.',
    technologies: ['React.js', 'Next.js', 'TypeScript', 'MongoDB', 'Stripe API', 'JWT', 'Tailwind CSS', 'Node.js'],
    githubUrl: 'https://github.com/Tilasmiape/fyp',
    liveUrl: '#',
    category: 'Full-Stack Web Development',
  },

  // ===== REFLEKTHYBRIDJOURNAL =====
  {
    id: 'reflekt-hybrid-journal',
    title: 'ReflektHybridJournal - Cross-Platform Journal & Mood Tracker',
    description:
      'A cross-platform digital journal and mood-tracking app built with .NET MAUI Blazor Hybrid, running on Android, iOS, macOS, and Windows. Features include rich text/Markdown journal entry creation, primary/secondary mood tracking with emoji indicators, tag-based categorization with custom tags, calendar navigation with mood indicators, paginated journal entries, search and filter functionality, streak tracking to encourage daily journaling habits, analytics dashboard with mood distribution charts and word count trends, theme customization (light/dark), PIN/password security with auto-lock, and PDF export functionality. Data is stored locally using SQLite for an offline-first experience.',
    technologies: ['.NET MAUI', 'Blazor Hybrid', 'C#', 'SQLite', 'Bcrypt', 'Razor Pages', 'XAML', 'MVVM'],
    githubUrl: 'https://github.com/Tilasmiape/ReflektJournal',
    liveUrl: '#',
    category: 'Mobile & Desktop Development',
  },

  // ===== NYC 311 DATA ANALYSIS =====
  {
    id: 'nyc-311-analysis',
    title: 'NYC 311 Service Request Analysis',
    description:
      'A comprehensive data analysis project examining over 300,000 customer service requests from New York City\'s 311 system. Performed data cleaning, preprocessing, and statistical analysis to uncover patterns in public service complaints across NYC boroughs. Created visualizations including bar charts, pie charts, heatmaps, and line graphs. Conducted ANOVA testing (F-statistic: 514.18, p-value: 0.0) confirming significant differences in response times across complaint types, and Chi-Square testing (chi2: 1.64M, p-value: 0.0) confirming significant relationship between complaint type and location. Identified that Blocked Driveway and Illegal Parking are the most frequent complaints, with Brooklyn and Queens receiving the highest volume of service requests.',
    technologies: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'SciPy', 'Jupyter Notebook'],
    githubUrl: '#',
    liveUrl: '#',
    category: 'Data Analysis & Visualization',
  },

  // ===== E-CLASSROOM DATABASE =====
  {
  id: 'e-classroom-database',
  title: 'E-Classroom Platform - College Management Database',
  description:
    'A comprehensive database system for an online college management platform. Manages students, teachers, programs, modules, assessments, resources, and results. Normalized to Third Normal Form (3NF) with 13 interconnected tables. Features student enrollment tracking, module management, teacher assignments, assessment management with deadlines and weightage, result tracking with grade monitoring, resource management, and announcement capabilities. Includes information queries and transaction queries for student performance analysis.',
  technologies: ['Oracle SQL', 'SQL Developer', 'ERD', 'Normalization', '3NF'],
  githubUrl: 'https://github.com/Tilasmiape/database',
  liveUrl: '#',
  category: 'Database Design & Development',
},

  // ===== KUMARI CINEMAS =====
  {
    id: 'kumari-cinemas',
    title: 'Kumari Cinemas - Cinema Booking System',
    description:
      'A complete database-driven web application for a cinema enterprise in Nepal. Manages movies, theaters, halls, show times, users, bookings, and show schedules. Normalized to Third Normal Form (3NF) with 7 interconnected tables. Features full CRUD operations, complex query reports (User Ticket/Booking, Theater City Hall Movie, Top 3 Occupancy Performer), and an interactive dashboard with live statistics and charts from the Oracle database. Built with ASP.NET Web Forms and Oracle as the backend.',
    technologies: ['ASP.NET Web Forms', 'Oracle SQL', 'SQL Developer', 'HTML', 'CSS', 'ERD', '3NF'],
    githubUrl: 'https://github.com/Tilasmiape/WebApplication1',
    liveUrl: '#',
    category: 'Database Design & Web Development',
  },
  {
  id: 'video-editing-showreel',
  title: 'Video Editing Showreel',
  description: 'Professional video editing work using Adobe After Effects for YouTube channels and social media content.',
  technologies: ['Adobe After Effects', 'Premiere Pro', 'Eleven Labs', 'Canva'],
  githubUrl: '#',
  liveUrl: '#',
  youtubeUrl: 'https://www.youtube.com/@WaitWhatSocial/shorts',
  instagramUrl: 'https://www.instagram.com/folurhubby/',
  category: 'Video Production & Editing',
}
];

// ─── Experience ───────────────────────────────────────────────────────────────

export const experiences: Experience[] = [
  {
    id: 'seo-intern',
    role: 'SEO Analyst Intern | Video Editor | YouTube Content Writer',
    company: 'Fishtail Infosolutions',
    duration: '8 Months',
    description: [
      'Conducted SEO analysis to improve search visibility and content performance across multiple platforms',
      'Assisted with on-page SEO tasks such as title tags, meta descriptions, and keyword research',
      'Edited videos for digital content and YouTube channels, ensuring high production quality',
      'Wrote and optimized YouTube content for better engagement and search rankings',
      'Supported content strategy and performance analysis using analytics tools',
    ],
  },
];

// ─── Education ────────────────────────────────────────────────────────────────

export const education: Education[] = [
  {
    id: 'bsc-computing',
    degree: 'BSc (Hons) Computing',
    institution: 'Informatics College Pokhara',
    year: '2023 — Present',
  },
  {
    id: 'higher-secondary',
    degree: 'Higher Secondary Education',
    institution: 'Sagarmatha Secondary School',
    year: '2021',
  },
  {
    id: 'secondary',
    degree: 'Secondary Education',
    institution: 'Triveni Public School',
    year: '2019',
  },
];

// ─── Skills ───────────────────────────────────────────────────────────────────

export const skillCategories: SkillCategory[] = [
  {
    name: 'Web Development',
    icon: Globe,
    skills: ['React', 'TypeScript', 'Next.js', 'MongoDB', 'Tailwind CSS', 'Node.js'],
  },
  {
    name: 'Desktop / Mobile',
    icon: Smartphone,
    skills: ['C#', '.NET MAUI', 'Blazor Hybrid'],
  },
  {
    name: 'SEO & Content',
    icon: Search,
    skills: ['SEO Analysis', 'Keyword Research', 'Video Editing', 'YouTube Content Writing'],
  },
  {
    name: 'Data & Database',
    icon: Database,
    skills: ['SQL', 'Database Design', 'Data Analysis', 'Oracle SQL', 'ERD'],
  },
  {
    name: 'AI & Machine Learning',
    icon: Cpu,
    skills: ['Python', 'Scikit-learn', 'TF-IDF', 'Cosine Similarity', 'K-Means Clustering', 'NLTK'],
  },
  {
    name: 'Data Visualization',
    icon: BarChart,
    skills: ['Matplotlib', 'Seaborn', 'Pandas', 'NumPy', 'SciPy', 'Jupyter Notebook'],
  },
  {
    name: 'Soft Skills',
    icon: Users,
    skills: ['Problem Solving', 'Creativity', 'Teamwork', 'Communication', 'Leadership'],
  },
];

// ─── Navigation ───────────────────────────────────────────────────────────────

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Showreel', href: '#showreel' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];