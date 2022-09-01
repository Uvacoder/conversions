# Тест задание для Digital Security

## [Демонстрация на Vercel](https://currency-converter-ds.vercel.app/)

---

## Инструкция

```console
git clone https://github.com/ilyasudakov/conversion-test-task-DS.git

cd conversion-test-task-DS

npm i
```

Создать файл `.env` со следующим содержанием:

```
VITE_RAPIDAPI_API_KEY=ВАШ_RAPID_API_КЛЮЧ
VITE_RAPIDAPI_API_NINJAS_HOST=currency-converter-by-api-ninjas.p.rapidapi.com
VITE_RAPIDAPI_API_CURRENCYSCOOP_HOST=currencyscoop.p.rapidapi.com
```

Затем выполнить:

```console
npm run dev
```

## Стек

- React

- Typescript / Javascript

- React Router

- Jest/RTL/RTL-Hooks

- Vite - _Как сборщик для быстрой разработки, но также в других проектах использовал Webpack_

- Tailwind - _Библиотека классов-утилит_

## Заметки

- Использовал фрактальнуя файловую структура, так как мне кажется, она хорошо будет скейлиться в будущем

- Решил не использовать менеджеры состояний типа Redux или Zustand, потому что мне кажется для такого маленького проекта он необязателен, но если проект сложный - то обязательно что-то подобное необходимо использовать.

- Валюта вычисляется из локали браузера

- Для предотвращения нескольких одновременных запросов при введении суммы для конвертации, использую свой useDebouncer хук

- Базовые тесты с Jest, RTL, RTL-Hooks

- Используемый API:
  - https://apilayer.com/marketplace/currency_data-api,
  - https://rapidapi.com/apininjas/api/currency-converter-by-api-ninjas/
