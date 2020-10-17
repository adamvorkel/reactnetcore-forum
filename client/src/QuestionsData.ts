import { AnswerData } from './AnswerData';

export interface QuestionData {
    questionId: number;
    title: string;
    content: string;
    userName: string;
    created: Date;
    answers: AnswerData[];
}

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
        questionId: 1,
        title: 'This is a request for some advice...',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu accumsan mauris, nec facilisis arcu. Aliquam euismod blandit efficitur. Fusce metus diam, bibendum vel consectetur id, porttitor eget erat. Sed vestibulum, nisi at condimentum commodo, mauris dolor mattis orci, at eleifend justo risus eget diam. Praesent ut luctus sem. Mauris ornare fermentum pharetra. Sed auctor at lorem id mollis. Cras condimentum eros lectus, sagittis congue mauris placerat nec. Aliquam pretium convallis ante vel mattis.',
        userName: 'Bob',
        created: new Date(),
        answers: [],
    },
];

export const getUnansweredQuestions = (): QuestionData[] => {
    return questions.filter((q) => q.answers.length === 0);
};
