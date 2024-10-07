"use client";
export function ColoredSquare({ hexcolor }: { hexcolor: string }) {
  return (
    <>
      <div
        className={`h-32	w-32 rounded-2xl lg:h-48 lg:w-48`}
        style={{ backgroundColor: hexcolor }}
      ></div>
    </>
  );
}
