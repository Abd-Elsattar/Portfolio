import { Injectable, signal } from '@angular/core';
import { Project } from '../models/project.interface';
import { SkillGroup } from '../models/skill.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  readonly profile = signal({
    name: 'Mohamd Abd-Elsattar',
    role: 'Junior Full Stack .NET Engineer',
    headline: 'Learning fast, building real projects, and mastering the fundamentals.',
    subHeadline: 'Clean code, solid architecture, and relentless curiosity in Angular & .NET.',
    location: 'Cairo, Egypt',
    email: 'mohamd.abdelsattar.hamed@gmail.com',
    linkedin: 'https://www.linkedin.com/in/abd-elsattar/',
    github: 'https://github.com/Abd-Elsattar',
  });

  readonly projects = signal<Project[]>([
    {
      id: 'talaqi',
      title: 'Talāqi Platform',
      subtitle: 'Full Stack AI-Driven Lost & Found Platform',
      problem:
        'Lost items and missing persons cases suffer from slow reporting and lack of centralized matching, leading to low recovery rates.',
      solution:
        'Architected a centralized platform using ASP.NET Core and SQL Server. Integrated external AI APIs for image recognition to automate matching, reducing manual search time by 40%.',
      techDecisions: [
        'Repository Pattern: Used to decouple business logic from data access, ensuring testability.',
        'AI Integration: Leveraged image recognition to match lost items with found reports automatically.',
        'Optimized Queries: Used EF Core with careful indexing to handle geolocation data efficiently.',
      ],
      stack: ['ASP.NET Core', 'Angular', 'SQL Server', 'EF Core', 'Azure AI', 'Bootstrap'],
      repoLink: 'https://github.com/Abd-Elsattar/Talaqi-Platform',
    },
    {
      id: 'epayment',
      title: 'Secure E-Payment System',
      subtitle: 'Blockchain-Based Contactless Payment',
      problem:
        'Traditional payment systems often face security vulnerabilities and lack transparency in transaction history.',
      solution:
        'Built a secure contactless payment system using a Java Spring Boot backend integrated with a Blockchain validation layer. Achieved 95% real-time payment accuracy.',
      techDecisions: [
        'Blockchain Validation: Implemented a validation layer to ensure transaction immutability and trust.',
        'Microservices Approach: Decoupled the backend (Java) from the validation layer for independent scaling.',
        'Secure APIs: Implemented strict authentication protocols for all financial transactions.',
      ],
      stack: ['Java Spring Boot', 'Vue.js', 'Blockchain APIs', 'MySQL', 'Flutter'],
      repoLink: 'https://github.com/Abd-Elsattar',
    },
    {
      id: 'address-book',
      title: 'Address Book System',
      subtitle: 'Full-Stack Contact Management Solution',
      problem:
        'Organizations often struggle with scattered contact information, lacking centralized management, advanced search capabilities, and data export features.',
      solution:
        'Engineered a scalable Address Book using Onion Architecture with ASP.NET Core and Angular. Implemented advanced search, Excel export, and dynamic administration for job titles and departments.',
      techDecisions: [
        'Onion Architecture: Enforced strict separation of concerns to ensure maintainability and testability.',
        'Code-First Database: Utilized EF Core Code-First approach for agile database schema evolution.',
        'Lazy Loading: Implemented on both frontend and backend to optimize data retrieval performance.',
      ],
      stack: ['Angular', 'ASP.NET Core', 'SQL Server', 'EF Core', 'TypeScript', 'Onion Architecture'],
      repoLink: 'https://github.com/Abd-Elsattar/Address-Book',
    },
  ]);

  readonly skills = signal<SkillGroup[]>([
    {
      category: 'Backend',
      skills: [
        'ASP.NET Core',
        'MVC',
        'C#',
        'Entity Framework Core',
        'SQL Server',
        'LINQ',
        'Web API',
      ],
    },
    {
      category: 'Frontend',
      skills: [
        'Angular',
        'TypeScript',
        'JavaScript (ES6+)',
        'CSS3',
        'HTML5/CSS3',
        'Bootstrap',
        'Signals',
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: ['Azure', 'Jira', 'Docker', 'Git & GitHub', 'CI/CD Pipelines', 'Swagger', 'Postman'],
    },
    {
      category: 'Architecture & Practices',
      skills: ['OOP', 'SOLID Principles', 'Design Patterns', 'Repository Pattern', 'Agile/Scrum'],
    },
  ]);
}
