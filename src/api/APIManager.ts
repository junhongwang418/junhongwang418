import data from "./data.json";

export interface ProjectJSON {
  id: string;
  title: string;
  description: string;
  year: number;
  image: string;
  url: string;
  tools: string[];
}

export interface WorkJSON {
  id?: string;
  role: string;
  link: string;
  url?: string;

  employer: string;
  date: {
    start: string;
    end?: string;
  };
  description: string;
  image: string;
  tools: string[];
}

export interface PublicationJSON {
  id: string;
  title: string;
  description: string;
  episodes: Array<{
    title: string,
    link: string
  }>;
}

export interface MusicJSON {
  id: string;
  lyrics: string[];
}

class APIManager {
  static getAllProjects(): ProjectJSON[] {
    return data.projects;
  }

  static getAllWorks(): WorkJSON[] {
    return data.works;
  }

  static getAllPublications(): PublicationJSON[] {
    return data.publications;
  }

  static getAllMusic(): MusicJSON[] {
    return data.music;
  }
}

export default APIManager;
