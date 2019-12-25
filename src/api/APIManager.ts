import data from "./data.json";

export interface ProjectJSON {
  title: string;
  description: string;
  year: number;
  image: string;
  url: string;
  tools: string[];
}

export interface WorkJSON {
  role: string;
  link: string;
  url: string;

  employer: string;
  date: {
    start: string;
    end?: string;
  };
  description: string;
}

class APIManager {
  static getAllProjects(): ProjectJSON[] {
    return data.projects;
  }

  static getAllWorks(): WorkJSON[] {
    return data.works;
  }
}

export default APIManager;
