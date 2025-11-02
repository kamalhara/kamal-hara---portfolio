function Quotes() {
  return (
    <div className="hidden md:flex flex-col items-center my-10 px-4">
      <p className="text-(--white) border-2 border-(--white) px-4 py-6 text-lg md:text-xl font-semibold mx-0 md:mx-10 text-center">
        Any fool can write code that a computer can understand. Good programmers
        write code that humans can understand.
      </p>
      <div className="mt-4 flex justify-end w-full">
        <p className="text-(--white) border-2 text-lg md:text-xl font-semibold border-(--white) px-8 md:px-12 py-3 mx-0 md:mx-[100px]">
          Martin<span>Fowler</span>
        </p>
      </div>
    </div>
  );
}

export default Quotes;
