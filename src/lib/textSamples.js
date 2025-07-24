export const professionalTexts = [
  "The modern workplace demands exceptional communication skills and technical proficiency. Professionals must adapt to rapidly evolving technologies while maintaining high standards of accuracy and efficiency in their written correspondence.",
  "Effective project management requires clear documentation, timely communication, and precise attention to detail. Each milestone must be carefully tracked and reported to ensure successful completion of deliverables.",
  "Data analysis involves systematic examination of complex datasets to identify meaningful patterns and trends. Statistical methods and visualization techniques help transform raw information into actionable business insights.",
  "Software development follows structured methodologies including requirements gathering, system design, implementation, testing, and deployment. Version control and collaborative workflows ensure code quality and maintainability.",
  "Financial reporting requires meticulous accuracy and compliance with regulatory standards. Quarterly statements must reflect true performance metrics while adhering to established accounting principles and procedures.",
  "Market research encompasses competitive analysis, consumer behavior studies, and trend identification. Strategic decision-making relies on comprehensive data collection and statistical interpretation of market dynamics.",
  "Quality assurance processes involve systematic testing protocols, defect tracking, and continuous improvement initiatives. Standardized procedures ensure consistent product reliability and customer satisfaction metrics."
];

export const casualTexts = [
  "The sun was setting behind the mountains, painting the sky in brilliant shades of orange and pink. Birds were returning to their nests as the day came to a peaceful end.",
  "Coffee shops have become the modern meeting places where people gather to work, socialize, and enjoy their favorite beverages. The aroma of freshly brewed coffee fills the air.",
  "Technology has transformed the way we communicate with friends and family. Social media platforms connect us instantly with people around the world, sharing moments and memories.",
  "Gardening is a rewarding hobby that brings people closer to nature. Planting seeds, watching them grow, and harvesting fresh vegetables provides a sense of accomplishment.",
  "Reading a good book can transport you to different worlds and expand your imagination. Libraries remain treasured places where knowledge and stories are preserved for future generations."
];

export const technicalTexts = [
  "JavaScript is a versatile programming language that enables dynamic web content. Object-oriented programming concepts include encapsulation, inheritance, and polymorphism for code organization.",
  "Database normalization reduces data redundancy and improves integrity. SQL queries utilize SELECT statements with JOIN operations to retrieve related information across multiple tables.",
  "Network protocols define communication standards between devices. TCP/IP stack includes application, transport, network, and data link layers for reliable data transmission.",
  "Machine learning algorithms process large datasets to identify patterns and make predictions. Supervised learning requires labeled training data to build accurate classification models.",
  "Cloud computing provides scalable infrastructure through virtualization technologies. Microservices architecture enables distributed systems with independent deployment and horizontal scaling capabilities."
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