export default function Footer() {
  return (
    <footer className="mt-auto bg-white px-4 py-2 shadow-lg">
      <div className="container flex flex-col gap-2 items-start mx-auto max-w-[900px] ">
        <div className="text-stone-700">Илья Судаков - @ilyasudakov</div>
        <div className="flex gap-4 text-blue-700 underline text-center">
          <a href="https://github.com/ilyasudakov">Github↗️</a>
          <a href="https://ilyasudakov.vercel.app">Портфолио↗️</a>
        </div>
      </div>
    </footer>
  );
}
