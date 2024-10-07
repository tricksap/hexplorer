import { ResultBox } from "./Components/ResultBox";

export default function Result({ answersArr }) {
  return (
    <div className="flex w-full items-center justify-center">
      <div className="mb-2 w-1/2 items-center rounded-md border-2  border-black bg-white p-12">
        {answersArr.map((answer, index: string) => {
          return (
            <div
              className="mb-4 flex flex-row justify-center gap-4"
              key={index}
            >
              {answer.map((item: { char: string }, index: string) => {
                let boxColor = "#3a3a3c";
                if (item.status === "correct") {
                  boxColor = "#538d4e";
                }
                if (item.status === "partial") {
                  boxColor = "#b59f3b";
                }
                return (
                  <ResultBox
                    hexcolor={boxColor}
                    value={item.char}
                    key={index}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
