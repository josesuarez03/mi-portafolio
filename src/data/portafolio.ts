export const personalInfo = {
  name: "José Suarez Barreto",
  role: "Desarrollador FullStack",
  location: "Madrid, España",
  email: "josysuarez2003@gmail.com",
  github: "https://github.com/josesuarez03",
  linkedin: "https://www.linkedin.com/in/josé-suárez-barreto"
};

export const about = {
  title: "Sobre mí",
  description: `Ingeniero Informático con experiencia full stack, especializado en DevOps, automatización e infraestructura. Mi enfoque se centra en optimizar procesos, automatizar flujos de trabajo y diseñar soluciones escalables tanto en frontend como backend.

Trabajo con tecnologías de contenedorización como Docker y plataformas cloud, principalmente AWS, para garantizar deployments robustos y arquitecturas ágiles. Mi experiencia abarca el desarrollo completo de aplicaciones, desde la interfaz de usuario hasta la infraestructura de servidor.

Mi compromiso con el aprendizaje continuo me permite mantenerme actualizado en un ecosistema tecnológico en constante evolución, aplicando las mejores prácticas en desarrollo full stack e infraestructura moderna.`
};

export const experiences = [
  {
    id: "1",
    title: "Becario en Monitorización y Automatización",
    subtitle: "MASORANGE",
    description: "Apoyo en tareas de observabilidad del sistema, creación de scripts en Python y Bash para automatizar flujos de trabajo y mejora de la infraestructura bajo entornos Linux. Colaboración con equipos de DevOps para mantener la disponibilidad de servicios críticos.",
    period: "2025 - 2025 (7 meses)",
    icon: "🛠️",
    technologies: ["Python", "Bash", "Linux", "Elasticsearch", "Grafana", "Prometheus", "Kibana"]
  }
  // Agrega más experiencias aquí cuando las tengas
];

export const projects = [
  {
    id: "1",
    title: "Portfolio Personal",
    subtitle: "Sitio web personal",
    description: "Un portafolio para mostrar mis proyectos y habilidades.",
    technologies: ["Astro", "Tailwind CSS", "TypeScript", "Shadcn UI", "Vercel"],
    image: "",
    githubUrl: "",
    icon: "💼"
  },
  {
    id: "2",
    title: "Gestor de Tareas",
    subtitle: "Aplicación web de productividad",
    description: "Una aplicación para gestionar tareas y proyectos. Se alojó en AWS utilizando ECS y Fargate.",
    technologies: ["React", "Flask", "MariaDB", "Docker", "Nginx", "GitHub Actions", "Terraform", "AWS", "ECS"],
    image: "",
    githubUrl: "https://github.com/josesuarez03/proyecto-final-automatizacion",
    icon: "✅"
  },
  {
    id: "3",
    title: "Dedicatoria",
    subtitle: "Página web de dedicatorias para San Valentín",
    description: "Una página web para enviar dedicatorias personalizadas en San Valentín.",
    technologies: ["React", "Vite", "Tailwind", "Framer Motion", "P5.js", "Vercel"],
    image: "",
    githubUrl: "https://github.com/josesuarez03/corazon-react",
    icon: "💝"
  },
  {
    id: "4",
    title: "Salud y Bienestar",
    subtitle: "E-commerce para supermercado",
    description: "Aplicación colaborativa para realizar un E-commerce ficticio para un supermercado. Aunque fue un trabajo en equipo, lideré varias fases del proyecto como el backend y frontend, incluyendo la implementación de la arquitectura de microservicios y la integración de herramientas de monitoreo y logging.",
    technologies: ["Python", "Flask", "HTML", "CSS", "Docker", "MariaDB", "Grafana", "Prometheus", "ELK Stack", "AWS", "EC2"],
    image: "",
    githubUrl: "https://github.com/HectorCRZBQ/salud_y_bienestar",
    icon: "🛒"
  },
  {
    id: "5",
    title: "Medicheck (TFG)",
    subtitle: "Asistente virtual para triaje médico",
    description: "Proyecto de TFG en desarrollo: asistente de triaje médico automatizado con IA. La aplicación interpreta síntomas y ayuda a priorizar la atención en entornos educativos y laborales. Arquitectura basada en microservicios e integra APIs de AWS y OAuth2. En fase privada por motivos de propiedad intelectual.",
    technologies: ["Python", "Django", "Flask", "Next.js", "Tailwind CSS", "Shadcn UI", "TypeScript", "Claude", "Comprehend Medical", "MongoDB", "PostgreSQL", "JWT", "Redis", "Docker", "Nginx", "OAuth2", "AWS"],
    image: "",
    githubUrl: "",
    icon: "🏥"
  },
   {
    "id": "6",
    "title": "OCR Images - Extractor y Traductor",
    "subtitle": "Herramienta de procesamiento de documentos",
    "description": "Aplicación Python para extracción de texto desde imágenes y PDFs con traducción automática al español. Utiliza Tesseract OCR y modelos de IA para mejorar el contexto y la precisión de las traducciones. Procesa documentos por lotes y genera salidas estructuradas.",
    "technologies": ["Python", "Tesseract OCR", "Pillow", "PyPDF2", "AI/ML", "APIs de traducción"],
    "image": "",
    "githubUrl": "https://github.com/josesuarez03/ocr_images",
    "icon": "🔍"
  }
];

export const technologies = [
  // Frontend
  { name: "React", color: "bg-blue-600" },
  { name: "TypeScript", color: "bg-blue-700" },
  { name: "Next.js", color: "bg-blue-800" },
  { name: "Tailwind CSS", color: "bg-blue-500" },

  // Backend
  { name: "Python", color: "bg-blue-600" },
  { name: "Django", color: "bg-blue-700" },
  { name: "Flask", color: "bg-blue-800" },
  { name: "Node.js", color: "bg-blue-500" },
  { name: "Express", color: "bg-blue-600" },

  // Bases de Datos
  { name: "PostgreSQL", color: "bg-indigo-600" },
  { name: "MySQL", color: "bg-indigo-700" },
  { name: "MongoDB", color: "bg-indigo-800" },
  { name: "Redis", color: "bg-indigo-500" },

  // DevOps & Cloud
  { name: "Docker", color: "bg-cyan-600" },
  { name: "AWS", color: "bg-cyan-700" },
  { name: "Terraform", color: "bg-cyan-800" },
  { name: "GitHub Actions", color: "bg-cyan-500" },

  // Scripting & Tools
  { name: "Bash", color: "bg-slate-600" },
  { name: "Python Scripts", color: "bg-slate-700" },
  { name: "Makefile", color: "bg-slate-800" },
  { name: "Git", color: "bg-slate-500" },
];