import projects from "../jsons/projects.json";
import works from "../jsons/works.json";

export interface ProjectJSON {
  title: string;
  description: string;
  year: number;
  image: string;
}

export interface WorkJSON {
  role: string;
  employer: string;
  date: WorkDateJSON;
  color: string;
}

export interface WorkDateJSON {
  start: string;
  end: string;
}

class APIManager {
  static getAllProjects(): ProjectJSON[] {
    // @ts-ignore
    return projects.projects;
  }

  static getAllWorks(): WorkJSON[] {
    // @ts-ignore
    return works.works;
  }
}

export default APIManager;
