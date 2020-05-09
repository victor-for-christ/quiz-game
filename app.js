const QuestionCtrl = (() => {
  //Private
  const questions = [{
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    }
  ];
  return {
    getQuestions: () => {
      return questions;
    }
  }
})();

const LogicCtrl = (() => {
  //Private
  return {

  }
})();

const UICtrl = (() => {
  //Private
  const selectors = {
    quiz: "#quiz"
  };

  return {

  }
})();

const App = ((QuestionCtrl, LogicCtrl, UICtrl) => {
  //Private
  const questions = QuestionCtrl.getQuestions();
  console.log(questions);

  return {
    init: () => {

    }
  }
})(QuestionCtrl, LogicCtrl, UICtrl);


//Start App
App.init();