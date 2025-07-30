export const professionalTexts = [
  "The modern workplace demands exceptional communication skills and technical proficiency. Professionals must adapt to rapidly evolving technologies while maintaining high standards of accuracy and efficiency in their written correspondence.",
  "Effective project management requires clear documentation, timely communication, and precise attention to detail. Each milestone must be carefully tracked and reported to ensure successful completion of deliverables.",
  "Data analysis involves systematic examination of complex datasets to identify meaningful patterns and trends. Statistical methods and visualization techniques help transform raw information into actionable business insights.",
  "Software development follows structured methodologies including requirements gathering, system design, implementation, testing, and deployment. Version control and collaborative workflows ensure code quality and maintainability.",
  "Financial reporting requires meticulous accuracy and compliance with regulatory standards. Quarterly statements must reflect true performance metrics while adhering to established accounting principles and procedures.",
  "Market research encompasses competitive analysis, consumer behavior studies, and trend identification. Strategic decision-making relies on comprehensive data collection and statistical interpretation of market dynamics.",
  "Quality assurance processes involve systematic testing protocols, defect tracking, and continuous improvement initiatives. Standardized procedures ensure consistent product reliability and customer satisfaction metrics.",
  "Corporate governance establishes frameworks for accountability, transparency, and ethical decision-making. Board oversight ensures strategic alignment with stakeholder interests and regulatory compliance requirements.",
  "Human resources management encompasses talent acquisition, performance evaluation, and employee development programs. Comprehensive benefits packages and career advancement opportunities enhance organizational retention rates.",
  "Strategic planning involves comprehensive market analysis, competitive positioning, and resource allocation. Long-term objectives require careful consideration of industry trends and economic forecasting methodologies.",
  "Customer relationship management systems integrate sales, marketing, and service functions. Data-driven insights enable personalized communication strategies and improved customer experience outcomes.",
  "Supply chain optimization requires coordination across multiple vendors, logistics providers, and distribution channels. Inventory management systems ensure adequate stock levels while minimizing carrying costs.",
  "Risk management frameworks identify potential threats and implement mitigation strategies. Comprehensive insurance coverage and contingency planning protect organizational assets and operational continuity.",
  "Change management initiatives require stakeholder engagement, communication planning, and training programs. Successful transformation depends on leadership commitment and employee buy-in throughout the organization.",
  "Performance metrics and key performance indicators provide measurable outcomes for business objectives. Regular monitoring and analysis enable data-driven adjustments to operational strategies and tactical approaches."
];

export const casualTexts = [
  "The sun was setting behind the mountains, painting the sky in brilliant shades of orange and pink. Birds were returning to their nests as the day came to a peaceful end.",
  "Coffee shops have become the modern meeting places where people gather to work, socialize, and enjoy their favorite beverages. The aroma of freshly brewed coffee fills the air.",
  "Technology has transformed the way we communicate with friends and family. Social media platforms connect us instantly with people around the world, sharing moments and memories.",
  "Gardening is a rewarding hobby that brings people closer to nature. Planting seeds, watching them grow, and harvesting fresh vegetables provides a sense of accomplishment.",
  "Reading a good book can transport you to different worlds and expand your imagination. Libraries remain treasured places where knowledge and stories are preserved for future generations.",
  "Weekend farmers markets offer fresh produce, artisanal crafts, and local delicacies. Families stroll through colorful stalls, sampling seasonal fruits and discovering unique handmade treasures.",
  "Beach vacations provide relaxation and adventure in equal measure. Warm sand between your toes, gentle waves lapping the shore, and the sound of seagulls create perfect summer memories.",
  "Cooking dinner with friends turns ordinary evenings into special occasions. Sharing recipes, trying new ingredients, and enjoying home-cooked meals together strengthens bonds and creates lasting friendships.",
  "Morning walks through the neighborhood reveal hidden gems and friendly faces. Local parks, interesting architecture, and community gardens make familiar streets feel like new discoveries.",
  "Music festivals bring together diverse artists and enthusiastic audiences. Dancing under starlit skies, discovering new bands, and singing along to favorite songs create unforgettable experiences.",
  "Pet ownership brings joy, responsibility, and unconditional love into daily life. Walking dogs, playing with cats, and caring for animal companions enriches our emotional well-being.",
  "Seasonal changes mark the passage of time with natural beauty. Spring flowers, summer sunshine, autumn leaves, and winter snow each bring their own special charm and wonder.",
  "Local bookstores serve as community hubs where readers gather to browse, discuss, and discover new authors. Cozy reading nooks and knowledgeable staff make every visit special.",
  "Hiking trails offer escape from city life and connection with wilderness. Fresh mountain air, scenic overlooks, and wildlife encounters reward those who venture into nature's playground.",
  "Family traditions create cherished memories and strengthen generational bonds. Holiday celebrations, birthday rituals, and weekly gatherings become the foundation of lasting family connections."
];

export const technicalTexts = [
  "JavaScript is a versatile programming language that enables dynamic web content. Object-oriented programming concepts include encapsulation, inheritance, and polymorphism for code organization.",
  "Database normalization reduces data redundancy and improves integrity. SQL queries utilize SELECT statements with JOIN operations to retrieve related information across multiple tables.",
  "Network protocols define communication standards between devices. TCP/IP stack includes application, transport, network, and data link layers for reliable data transmission.",
  "Machine learning algorithms process large datasets to identify patterns and make predictions. Supervised learning requires labeled training data to build accurate classification models.",
  "Cloud computing provides scalable infrastructure through virtualization technologies. Microservices architecture enables distributed systems with independent deployment and horizontal scaling capabilities.",
  "Cybersecurity frameworks implement multi-layered defense strategies against malicious attacks. Encryption protocols, access controls, and intrusion detection systems protect sensitive data and system integrity.",
  "API design principles emphasize RESTful architecture with proper HTTP methods and status codes. JSON data serialization enables seamless communication between client applications and server endpoints.",
  "Version control systems track code changes and enable collaborative development workflows. Git repositories support branching strategies, merge conflicts resolution, and distributed development team coordination.",
  "Docker containerization provides consistent deployment environments across development, staging, and production systems. Container orchestration platforms manage scaling, load balancing, and service discovery automatically.",
  "Blockchain technology utilizes cryptographic hashing and distributed ledger systems for secure transaction recording. Smart contracts execute automatically when predetermined conditions are met within the network.",
  "DevOps practices integrate development and operations teams through automated CI/CD pipelines. Infrastructure as code enables reproducible deployments and configuration management across multiple environments.",
  "Big data processing frameworks handle petabyte-scale datasets using distributed computing clusters. MapReduce algorithms and Apache Spark enable parallel processing for complex analytical workloads.",
  "Artificial intelligence models utilize neural networks with multiple hidden layers for deep learning applications. Gradient descent optimization algorithms minimize loss functions during training iterations.",
  "Quantum computing leverages quantum mechanical properties like superposition and entanglement for exponential computational speedup. Quantum algorithms solve certain mathematical problems faster than classical computers.",
  "Edge computing distributes processing power closer to data sources, reducing latency and bandwidth requirements. IoT devices benefit from local computation capabilities and real-time response systems."
];

export const getTextsByDifficulty = (difficulty) => {
  switch (difficulty) {
    case 'casual':
      return casualTexts;
    case 'technical':
      return technicalTexts;
    case 'professional':
    default:
      return professionalTexts;
  }
};