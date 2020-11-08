import { QuestionData, PostQuestionData } from '../QuestionsData';
import { AnswerData, PostAnswerData } from '../AnswerData';

export const wait = (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
};

// some mock questions
const questions: QuestionData[] = [
    {
        questionId: 1,
        title: 'What should I do?',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu accumsan mauris, nec facilisis arcu. Aliquam euismod blandit efficitur. Fusce metus diam, bibendum vel consectetur id, porttitor eget erat. Sed vestibulum, nisi at condimentum commodo, mauris dolor mattis orci, at eleifend justo risus eget diam. Praesent ut luctus sem. Mauris ornare fermentum pharetra. Sed auctor at lorem id mollis. Cras condimentum eros lectus, sagittis congue mauris placerat nec. Aliquam pretium convallis ante vel mattis.',
        userName: 'Bob',
        created: new Date(),
        answers: [
            {
                answerId: 1,
                content:
                    'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Duis dictum turpis eu turpis luctus, ac faucibus dolor sodales. Quisque efficitur magna quis elit ultricies, vel egestas ipsum maximus. Aliquam viverra malesuada pretium. Pellentesque ut sem dolor.',
                userName: 'Jack',
                created: new Date(),
            },
            {
                answerId: 1,
                content: 'Pellentesque ut sem dolor.',
                userName: 'Peter',
                created: new Date(),
            },
        ],
    },
    {
        questionId: 2,
        title: 'This is a request for some advice...',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu accumsan mauris, nec facilisis arcu. Aliquam euismod blandit efficitur. Fusce metus diam, bibendum vel consectetur id, porttitor eget erat. Sed vestibulum, nisi at condimentum commodo, mauris dolor mattis orci, at eleifend justo risus eget diam. Praesent ut luctus sem. Mauris ornare fermentum pharetra. Sed auctor at lorem id mollis. Cras condimentum eros lectus, sagittis congue mauris placerat nec. Aliquam pretium convallis ante vel mattis.',
        userName: 'Bob',
        created: new Date(),
        answers: [],
    },
];

// Mock api call functions
export const getUnansweredQuestions = async (): Promise<QuestionData[]> => {
    await wait(300);
    return questions.filter((q) => q.answers.length === 0);
};

export const getQuestion = async (
    questionId: number,
): Promise<QuestionData | null> => {
    await wait(300);
    const results = questions.filter((q) => q.questionId === questionId);
    return results.length === 0 ? null : results[0];
};

export const searchQuestions = async (
    query: string,
): Promise<QuestionData[]> => {
    await wait(300);
    return questions.filter(
        (q) =>
            q.title.toLowerCase().indexOf(query.toLowerCase()) >= 0 ||
            q.content.toLowerCase().indexOf(query.toLowerCase()) >= 0,
    );
};

export const postQuestion = async (
    question: PostQuestionData,
): Promise<QuestionData | undefined> => {
    await wait(300);
    const questionId = Math.max(...questions.map((q) => q.questionId)) + 1;
    const newQuestion: QuestionData = {
        ...question,
        questionId,
        answers: [],
    };
    questions.push(newQuestion);
    return newQuestion;
};

export const postAnswer = async (
    answer: PostAnswerData,
): Promise<AnswerData | undefined> => {
    await wait(300);
    const question = questions.filter(
        (q) => q.questionId === answer.questionId,
    )[0];
    const answerInQuestion: AnswerData = {
        answerId: 99,
        ...answer,
    };
    question.answers.push(answerInQuestion);
    return answerInQuestion;
};
