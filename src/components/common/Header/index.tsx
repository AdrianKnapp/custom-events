import { OpenModalButton } from "../OpenModalButton";

export const Header = () => {
  return (
    <header className="w-full h-[100px] bg-blue-100 flex justify-center items-center flex-col gap-2">
      <p>Header</p>
      <OpenModalButton />
    </header>
  );
};
