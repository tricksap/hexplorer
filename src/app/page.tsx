"use client";
import { ColoredSquare } from "./Components/ColoredSquare";
import { SendHorizontal } from "lucide-react";
import Result from "./Result";
import { CheckGuess } from "./Helper/CheckGuess";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { GenerateHexCode } from "./Helper/GenerateHexcode";
import { Modal } from "./Components/Modal";
export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [answersArr, setAnswersArr] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("#000000");
  const [answer, setAnswer] = useState("");
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWinner, setIsWinner] = useState(false);
  const [attempt, setAttempt] = useState(6);

  useEffect(() => {
    setAnswer(GenerateHexCode());
  }, []);

  /// to track how many attempt
  useEffect(() => {
    if (attempt === 0) {
      setIsGameOver(true);
    }
  }, [attempt]);

  console.log(answer, "answer");
  const submitHandle = (data) => {
    const guess = "#" + data.hexCode;
    const result = CheckGuess(guess, answer);
    setCurrentGuess(guess);
    setAttempt(attempt - 1);
    setAnswersArr([...answersArr, result]);
    const isCorrect = result.every((obj) => obj.status === "correct");

    // show modal when the guess is correct
    if (isCorrect) {
      setIsGameOver(true);
      setIsWinner(true);
    }
  };
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center justify-center">
        <div className="border-b-1 mb-2 mt-10  items-center rounded-md border-2 border-black bg-white p-12">
          <div className="flex space-x-6 ">
            <div className="flex flex-col items-center">
              <p>target</p>
              <ColoredSquare hexcolor={answer} />
            </div>
            <div className=" flex flex-col items-center">
              <p>your guess</p>
              <ColoredSquare hexcolor={currentGuess} />
            </div>
          </div>
          <form
            className="mx-auto mt-4 flex w-2/3 items-center"
            onSubmit={handleSubmit(submitHandle)} // handleSubmit ensures validation
          >
            <div className="flex flex-col">
              <div className="flex flex-row items-center">
                <span className="mr-1">#</span>
                {/* <div className="flex flex-col"> */}
                <input
                  type="text"
                  id="hexCode-guess"
                  {...register("hexCode", {
                    required: "This field is required", // Custom error message for required field
                    pattern: {
                      value: /^#?([A-Fa-f0-9]{6})$/, // Regex for exactly 6-character hex codes
                      message:
                        "Please enter a valid 6-character hex code (e.g., #FFFFFF)", // Custom error message for pattern
                    },
                  })}
                  className={`block w-full rounded-lg border-2 p-1.5 text-sm focus:border-blue-500 focus:ring-blue-500 ${
                    errors.hexCode ? "border-red-500" : "border-black"
                  }`}
                  placeholder="Enter 6-character hex code (e.g., #FFFFFF)"
                />

                {/* </div> */}
                <button
                  type="submit"
                  className="ms-2 rounded-lg border border-blue-700 bg-blue-700 p-1.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <SendHorizontal />
                </button>
              </div>
              <div>
                {/* Error Messages */}
                {errors.hexCode && (
                  <span className="ml-2 text-sm text-red-600">
                    {errors.hexCode.message}
                  </span>
                )}
              </div>
            </div>
          </form>
        </div>
        <Result answersArr={answersArr} />
      </div>
      {isGameOver && <Modal isWinner={isWinner} answer={answer} />}
    </div>
  );
}
