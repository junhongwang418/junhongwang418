import axios from "axios";

export interface ProjectJSON {
  _id: string;
  title: string;
  description: string;
  year: number;
}

export interface WorkJSON {
  _id: string;
  role: string;
  link: string;

  employer: string;
  date: {
    start: string;
    end?: string;
  };
  description: string;
}

class APIManager {
  static getAllProjects() {
    return axios.get('https://protected-woodland-58141.herokuapp.com/projects');
  }

  static getAllWorks() {
    return axios.get('https://protected-woodland-58141.herokuapp.com/works');
  }
}

export default APIManager;
