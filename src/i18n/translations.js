// Todos los textos del sitio en español e inglés.
// Para editar el contenido, cambiá los textos acá: los componentes solo los leen.

export const translations = {
  es: {
    nav: {
      about: 'Sobre mí',
      experience: 'Experiencia',
      skills: 'Skills',
      education: 'Formación',
      contact: 'Contacto',
    },
    hero: {
      greeting: 'Hola, soy',
      role: 'Técnico en Sistemas · Desarrollador Front-End',
      tagline:
        'Desarrollo soluciones prácticas pensadas para el usuario final: interfaces web modernas, soporte IT y sistemas que aportan valor y eficiencia a los procesos.',
      location: 'Monte Grande, Buenos Aires',
      available: 'Abierto a nuevas oportunidades',
      ctaContact: 'Contactame',
      ctaCv: 'Descargar CV',
    },
    about: {
      title: 'Sobre mí',
      p1: 'Soy especialista en sistemas con orientación al cliente y alta capacidad de adaptación. Me enfoco en el desarrollo de soluciones prácticas que satisfacen las necesidades del usuario final, aportando valor y eficiencia a los procesos.',
      p2: 'Me destaco por generar soluciones y establecer comunicaciones efectivas que optimizan la productividad y mejoran el rendimiento. Combino experiencia en desarrollo web, soporte técnico y atención a clientes corporativos.',
      p3: 'Busco incorporarme a una empresa moderna y consolidada donde pueda aplicar y seguir desarrollando mis conocimientos.',
      stats: [
        { value: '+6', label: 'años de experiencia laboral' },
        { value: '+4', label: 'años en IT y desarrollo' },
        { value: '6', label: 'personas coordinadas' },
      ],
      cv: 'Descargar CV',
      contact: 'Contactame',
    },
    experience: {
      title: 'Experiencia',
      subtitle: 'Mi recorrido profesional',
      present: 'Actualidad',
      jobs: [
        {
          company: 'La Mantovana',
          role: 'Auxiliar de Supervisor',
          period: '2026 – Actualidad',
          location: '',
          points: [
            'Administrativo de operaciones de limpieza.',
            'Prácticas de supervisión: acompañamiento y formación en el rol de supervisor.',
          ],
          tags: ['Administración', 'Operaciones', 'Supervisión'],
        },
        {
          company: 'Telecom',
          role: 'Ejecutivo de ventas especializadas corporativas',
          period: '02/2025 – 05/2026',
          location: 'CABA, Buenos Aires',
          points: [
            'Asesoramiento a clientes corporativos sobre productos y servicios, gestionando negociaciones comerciales.',
            'Evaluación de necesidades para recomendar soluciones adecuadas a cada cliente.',
            'Identificación de oportunidades de venta y cierre de acuerdos comerciales.',
            'Coordinación de un equipo de 6 personas y apoyo al líder en la organización y seguimiento de tareas.',
          ],
          tags: ['Salesforce CRM', 'Negociación', 'Liderazgo'],
        },
        {
          company: 'Freelance',
          role: 'Soporte Técnico y Consultoría IT',
          period: '01/2022 – Actualidad',
          location: 'Monte Grande, Buenos Aires',
          points: [
            'Diagnóstico, armado y reparación integral de equipamiento informático para clientes particulares y comerciales.',
            'Administración autónoma de cronogramas, presupuestos y plazos de entrega con estándares de calidad.',
            'Asesoramiento personalizado en actualización de componentes y optimización de sistemas.',
          ],
          tags: ['Hardware', 'Instalación de software', 'Gestión de proyectos'],
        },
        {
          company: 'Chempo Company',
          role: 'Programador Web',
          period: '02/2023 – 11/2024',
          location: 'Monte Grande, Buenos Aires',
          points: [
            'Diseño y maquetación de interfaces responsivas con HTML5, CSS3 y JavaScript para una experiencia fluida y moderna.',
            'Evaluación técnica de requerimientos Front-End, asegurando escalabilidad y rendimiento.',
            'Resolución de incidencias técnicas de usuarios finales, optimizando tiempos de respuesta.',
          ],
          tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
        },
        {
          company: 'Stilo Cerramientos',
          role: 'Asistente de Atención al Cliente y Operaciones',
          period: '09/2019 – 12/2023',
          location: 'Ezeiza, Buenos Aires',
          points: [
            'Atención y asesoramiento técnico omnicanal: presencial, telefónico y digital.',
            'Colaboración interdepartamental en tareas críticas y flujos de trabajo internos.',
            'Gestión de consultas y reclamos con comunicación asertiva.',
          ],
          tags: ['Atención al cliente', 'Operaciones'],
        },
      ],
    },
    skills: {
      title: 'Skills',
      subtitle: 'Tecnologías y herramientas con las que trabajo',
      groups: {
        frontend: 'Front-End',
        backend: 'Back-End y datos',
        tools: 'Herramientas',
        soft: 'Habilidades',
      },
      soft: [
        'Resolución efectiva de problemas',
        'Análisis de sistemas',
        'Asesoramiento a clientes',
        'Instalación de equipos y programas',
        'Trabajo en equipo y coordinación',
        'Comunicación asertiva',
      ],
    },
    education: {
      title: 'Formación',
      subtitle: 'Estudios y cursos',
      inProgress: 'En curso',
      items: [
        { title: 'Técnico Programador', place: 'Facultad de Lomas de Zamora', period: '2022 – Actualidad', desc: 'Tecnicatura en Programación.', current: true },
        { title: 'Python', place: 'Curso', period: '11/2024 – 12/2024', desc: 'Fundamentos básicos e intermedios de Python.' },
        { title: 'React JS', place: 'Curso', period: '02/2024 – 04/2024', desc: 'Librería de JavaScript para construir interfaces de usuario.' },
        { title: 'JavaScript', place: 'Curso', period: '10/2023 – 12/2023', desc: 'Fundamentos intermedios de JavaScript.' },
        { title: 'Desarrollador Front-End', place: 'Curso', period: '11/2021 – 02/2022', desc: 'Creación de la parte visual e interactiva de sitios web con HTML, CSS y JavaScript.' },
        { title: 'Bachiller en Ciencias Naturales', place: 'Senderos Azules, Monte Grande', period: '2011 – 2016', desc: 'Título secundario.' },
      ],
    },
    contact: {
      title: 'Contacto',
      subtitle: '¿Tenés una propuesta o un proyecto? Escribime.',
      phone: 'Celular',
    },
    footer: {
      rights: 'Todos los derechos reservados.',
    },
  },

  en: {
    nav: {
      about: 'About',
      experience: 'Experience',
      skills: 'Skills',
      education: 'Education',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      role: 'Systems Technician · Front-End Developer',
      tagline:
        'I build practical, user-focused solutions: modern web interfaces, IT support and systems that bring value and efficiency to business processes.',
      location: 'Monte Grande, Buenos Aires, Argentina',
      available: 'Open to new opportunities',
      ctaContact: 'Get in touch',
      ctaCv: 'Download CV',
    },
    about: {
      title: 'About me',
      p1: "I'm a customer-oriented systems specialist with a strong ability to adapt. I focus on building practical solutions that meet end-user needs, bringing value and efficiency to processes.",
      p2: 'I stand out for finding solutions and communicating effectively to boost productivity and performance. I combine experience in web development, IT support and corporate client services.',
      p3: "I'm looking to join a modern, established company where I can apply and keep growing my skills.",
      stats: [
        { value: '6+', label: 'years of work experience' },
        { value: '4+', label: 'years in IT & development' },
        { value: '6', label: 'people coordinated' },
      ],
      cv: 'Download CV',
      contact: 'Get in touch',
    },
    experience: {
      title: 'Experience',
      subtitle: 'My professional journey',
      present: 'Present',
      jobs: [
        {
          company: 'La Mantovana',
          role: 'Assistant Supervisor',
          period: '2026 – Present',
          location: '',
          points: [
            'Cleaning operations administrative assistant.',
            'Supervisor training: shadowing and hands-on practice in the supervisor role.',
          ],
          tags: ['Administration', 'Operations', 'Supervision'],
        },
        {
          company: 'Telecom',
          role: 'Corporate Specialized Sales Executive',
          period: '02/2025 – 05/2026',
          location: 'Buenos Aires City',
          points: [
            'Advising corporate clients on products and services and managing commercial negotiations.',
            'Assessing client needs to recommend the right solutions.',
            'Identifying sales opportunities and closing deals.',
            'Coordinating a team of 6 people and supporting the team lead in organizing and tracking tasks.',
          ],
          tags: ['Salesforce CRM', 'Negotiation', 'Leadership'],
        },
        {
          company: 'Freelance',
          role: 'Technical Support & IT Consulting',
          period: '01/2022 – Present',
          location: 'Monte Grande, Buenos Aires',
          points: [
            'Diagnosis, assembly and full repair of computer equipment for individual and business clients.',
            'Independent management of schedules, budgets and deadlines while meeting quality standards.',
            'Personalized advice on hardware upgrades and system optimization.',
          ],
          tags: ['Hardware', 'Software installation', 'Project management'],
        },
        {
          company: 'Chempo Company',
          role: 'Web Developer',
          period: '02/2023 – 11/2024',
          location: 'Monte Grande, Buenos Aires',
          points: [
            'Designed and built responsive interfaces with HTML5, CSS3 and JavaScript for a smooth, modern UX.',
            'Technical assessment of Front-End requirements to ensure scalability and performance.',
            'Resolved end-user technical issues, improving response times.',
          ],
          tags: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
        },
        {
          company: 'Stilo Cerramientos',
          role: 'Customer Service & Operations Assistant',
          period: '09/2019 – 12/2023',
          location: 'Ezeiza, Buenos Aires',
          points: [
            'Omnichannel customer service and technical advice: in person, by phone and online.',
            'Cross-department collaboration on critical tasks and internal workflows.',
            'Handled inquiries and complaints with assertive communication.',
          ],
          tags: ['Customer service', 'Operations'],
        },
      ],
    },
    skills: {
      title: 'Skills',
      subtitle: 'Technologies and tools I work with',
      groups: {
        frontend: 'Front-End',
        backend: 'Back-End & data',
        tools: 'Tools',
        soft: 'Strengths',
      },
      soft: [
        'Effective problem solving',
        'Systems analysis',
        'Client advisory',
        'Hardware & software installation',
        'Teamwork & coordination',
        'Assertive communication',
      ],
    },
    education: {
      title: 'Education',
      subtitle: 'Studies and courses',
      inProgress: 'In progress',
      items: [
        { title: 'Programming Technician', place: 'Facultad de Lomas de Zamora', period: '2022 – Present', desc: 'Technical degree in Programming.', current: true },
        { title: 'Python', place: 'Course', period: '11/2024 – 12/2024', desc: 'Basic and intermediate Python fundamentals.' },
        { title: 'React JS', place: 'Course', period: '02/2024 – 04/2024', desc: 'JavaScript library for building user interfaces.' },
        { title: 'JavaScript', place: 'Course', period: '10/2023 – 12/2023', desc: 'Intermediate JavaScript fundamentals.' },
        { title: 'Front-End Developer', place: 'Course', period: '11/2021 – 02/2022', desc: 'Building the visual and interactive side of websites with HTML, CSS and JavaScript.' },
        { title: 'High School Diploma in Natural Sciences', place: 'Senderos Azules, Monte Grande', period: '2011 – 2016', desc: 'Secondary education.' },
      ],
    },
    contact: {
      title: 'Contact',
      subtitle: 'Have an opportunity or a project in mind? Drop me a line.',
      phone: 'Phone',
    },
    footer: {
      rights: 'All rights reserved.',
    },
  },
};
