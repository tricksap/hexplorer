export function Modal({
  isWinner,
  answer,
}: {
  isWinner: boolean;
  answer?: string;
}) {
  return (
    <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
      <div className="max-h-full w-full max-w-xl overflow-y-auto bg-white sm:rounded-2xl">
        <div className="w-full">
          <div className="m-8 mx-auto my-20 max-w-[400px]">
            <div className="mb-8">
              <h1 className="mb-4 text-3xl font-extrabold">
                {isWinner ? "Splendid!" : "Better Luck Next Time!"}
              </h1>
              <p className="text-gray-600">
                {isWinner ? (
                  <span>You guessed the color correctly! 🏆</span>
                ) : (
                  <span>
                    The color was: <span className="font-bold">{answer}</span>
                  </span>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
