import ExternalLink from '@components/common/ExternalLink';

export default function Footer() {
  return (
    <footer className="mt-auto bg-white px-4 py-4 shadow-2xl">
      <div
        className="container flex flex-col justify-between sm:flex-row gap-2 items-start
        md:items-center mx-auto max-w-[900px] "
      >
        <div className="flex flex-col md:flex-row gap-2 md:items-center">
          <div className="text-stone-700">Илья Судаков - @ilyasudakov</div>
          <div className="text-stone-500 bg-stone-100 px-4 py-2 rounded-lg text-sm">
            React разработчик, Санкт-Петербург
          </div>
        </div>
        <div className="flex gap-4 ">
          <ExternalLink href="https://github.com/ilyasudakov/conversion-test-task-DS">
            Github
          </ExternalLink>
          <ExternalLink href="https://ilyasudakov.vercel.app">
            Портфолио
          </ExternalLink>
        </div>
      </div>
    </footer>
  );
}
