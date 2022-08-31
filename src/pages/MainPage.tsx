import ConversionForm from '../components/conversion/ConversionForm';

export default function MainPage() {
  return (
    <div
      className="flex flex-col h-full container
       mx-auto pt-4 xs:pt-10 gap-4 max-w-[900px] px-2"
    >
      <h1 className="xs:text-3xl text-2xl text-center text-white">
        Конвертация валют
      </h1>
      <div className="text-center text-stone-200">
        Тестовое задание для Digital Security
      </div>
      <ConversionForm />
    </div>
  );
}
