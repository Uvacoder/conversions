export default function Footer() {
  return (
    <footer className="mt-auto bg-white px-4 py-4 shadow-2xl">
      <div className="container flex flex-col justify-between sm:flex-row gap-2 items-start mx-auto max-w-[900px] ">
        <div className="flex flex-col gap-2">
          <div className="text-stone-700">Илья Судаков - @ilyasudakov</div>
          <div className="text-stone-500 bg-stone-100 px-4 py-2 rounded-lg">
            React разработчик, Санкт-Петербург
          </div>
        </div>
        <div className="flex gap-4 text-blue-700 underline text-center">
          <a href="https://github.com/ilyasudakov">Github↗️</a>
          <a href="https://ilyasudakov.vercel.app">Портфолио↗️</a>
        </div>
      </div>
    </footer>
  );
}
