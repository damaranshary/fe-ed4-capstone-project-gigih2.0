import { Container } from "@chakra-ui/react";
import { useState } from "react";
import "./quiz.css";

const Quiz = () => {
  const questions = [
    {
      questionText: "Siapa pengarang buku yang berjudul Kepiting untuk Makan Malam?",
      answerOptions: [
        { answerText: "Yuniventaria Hasugian", isCorrect: true },
        { answerText: "Damar Galih Anshary", isCorrect: false },
        { answerText: "Shalsa Bila Inez Putri", isCorrect: false },
        { answerText: "Pratiwi Sibarani", isCorrect: false },
      ],
    },
    {
      questionText: "Pada cerita Cahaya kecil, Apa yang Thida lakukan saat berlibur ke rumah kakeknya di pedesaan ?",
      answerOptions: [
        { answerText: "Bermain Layangan", isCorrect: true },
        { answerText: "Menonton Tv", isCorrect: false },
        { answerText: "Memasak", isCorrect: false },
        { answerText: "Tidur", isCorrect: false },
      ],
    },
    {
      questionText: "Dibawah ini yang termasuk cerita petualangan, kecuali?",
      answerOptions: [
        { answerText: "Cahaya Kecil", isCorrect: false },
        { answerText: "Gigitan Siapa", isCorrect: false },
        { answerText: "Pergi Ke pasar", isCorrect: false },
        { answerText: "Bulan dan Topi", isCorrect: true },
      ],
    },
    {
      questionText: "Pada Buku yang Berjudul Ikan Tipis, Ikan apa yang ada di dalam Cerita tersebut?",
      answerOptions: [
        { answerText: "Ikan Tongkol", isCorrect: false },
        { answerText: "Ikan Salmon", isCorrect: false },
        { answerText: "Ikan Hiu ", isCorrect: false },
        { answerText: "Ikan Pepija", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <Container minH='85vh' maxW='100vh' mt={24} centerContent>
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">{questions[currentQuestion].questionText}</div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button className="btn" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                  {answerOption.answerText}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </Container>
  );
};

export default Quiz;
