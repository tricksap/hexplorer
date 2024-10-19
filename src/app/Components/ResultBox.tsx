"use client";

export function ResultBox({
  hexcolor,
  value,
}: {
  hexcolor: string;
  value: string;
}) {
  return (
    <div
      className={`flex items-center justify-center rounded-xl border-2 border-black p-3 font-bold text-white sm:h-14 sm:w-14`}
      style={{ backgroundColor: hexcolor }}
    >
      {value}
    </div>
  );
}
