export interface Project {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  solution: string;
  techDecisions: string[];
  stack: string[];
  repoLink?: string;
  liveLink?: string;
}
