import { ResultBox } from "./Components/ResultBox";
import { IAnswer } from "./Interface/IAnswer";

export default function Result({ answersArr }: { answersArr: IAnswer[][] }) {
  return (
    <div className="min-w-[200px]  rounded-md border-2  border-black bg-white px-12 pb-12 text-center">
      <h1 className="mb-2 text-center text-3xl font-bold">Guesses</h1>
      {answersArr.map((answer: IAnswer[], index) => {
        return (
          <div
            className="mb-2 flex flex-row items-center justify-center gap-4"
            key={index}
          >
            <span className="text-xl font-extrabold">#</span>
            {answer.map((item, index) => {
              let boxColor = "#3a3a3c";
              if (item.status === "correct") {
                boxColor = "#538d4e";
              }
              if (item.status === "partial") {
                boxColor = "#b59f3b";
              }
              return (
                <ResultBox hexcolor={boxColor} value={item.char} key={index} />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
