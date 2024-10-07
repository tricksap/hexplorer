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
      className={`flex h-14 w-14 items-center justify-center rounded-xl border-2 border-black font-bold text-white`}
      style={{ backgroundColor: hexcolor }}
    >
      {value}
    </div>
  );
}
