export function CheckGuess(guess: string, answer: string) {
  const result = [];

  for (let i = 1; i < guess.length; i++) {
    if (guess[i] === answer[i]) {
      result.push({ char: guess[i], status: "correct" });
    } else if (answer.includes(guess[i])) {
      result.push({ char: guess[i], status: "partial" });
    } else {
      result.push({ char: guess[i], status: "incorrect" });
    }
  }

  return result;
}
