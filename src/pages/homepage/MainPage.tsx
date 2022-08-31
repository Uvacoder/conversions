import ConversionForm from './components/ConversionForm';

export default function MainPage() {
  return (
    <div
      className="flex flex-col h-full container
       mx-auto pt-4 xs:pt-10 gap-2 max-w-[900px] px-2"
    >
      <h1 className="xs:text-3xl text-2xl text-center">💱Конвертация валют</h1>
      <div className="text-center text-stone-600 mb-4">
        Тестовое задание для Digital Security
      </div>
      <ConversionForm />
    </div>
  );
}
