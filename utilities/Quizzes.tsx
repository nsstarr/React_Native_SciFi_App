import { questionsData } from "./QuizTemplate"
import * as Starwars from "./StarWars"
import * as Matrix from "./TheMatrix"


export const quizzes = [
    Starwars,
]




interface Questions {
    name: string,
    image: any,
    description: string,
    question: string,
    answers: {
        id: string,
        value: string,
        label: string,
        name: string
        color?:string
        labelStyle?: any
        containerStyle?: any
    }[]
  }

interface ResultsData {
    name:string 
    image: any 
    description: string
}

export interface QuizzesType {
    questionsData: Array<Questions>
    quizCardData: {
        name: string
        image: any
    }
    answerKey: {
        question1: string
        question2: string
        question3: string
        question4: string
        question5: string
        question6: string
        question7: string
        question8: string
        question9: string
        question10: string
        question11: string
        question12: string
        question13: string
        question14: string
        question15: string 
    }
    resultsData: Array<ResultsData>
}