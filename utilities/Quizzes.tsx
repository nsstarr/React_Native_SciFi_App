import * as Starwars from "./StarWars";
import * as Matrix from "./TheMatrix";
// import * as Firefly from "./Firefly";

export const quizzes = [Starwars, Matrix];

interface Questions {
  name: string;
  image: any;
  description: string;
  question: string;
  answers: {
    id: string;
    value: string;
    label: string;
    name: string;
    color?: string;
    labelStyle?: any;
    containerStyle?: any;
  }[];
}

interface ResultsData {
  name: string;
  image: any;
  description: string;
}

export interface QuizzesType {
  questionsData: Array<Questions>;
  quizCardData: {
    name: string;
    image: any;
  };
  answerKey: {
    [question: string]: string;
  };
  resultsData: Array<ResultsData>;
}

