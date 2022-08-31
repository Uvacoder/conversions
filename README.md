# Тест задание для Digital Security

## [Демонстрация на Vercel](https://currency-converter-ds.vercel.app/)

---

## Инструкция

```console
git clone https://github.com/ilyasudakov/conversion-test-task-DS.git

cd conversion-test-task-DS

npm i

npm run dev
```

## Стек

- React

- Typescript / Javascript

- React Router

- Vite - _Как сборщик для быстрой разработки, но также в других проектах использовал Webpack_

- Tailwind - _Библиотека классов-утилит_

## Заметки

- Использовал фрактальнуя файловую структура, так как мне кажется, она хорошо будет скейлиться в будущем

- Решил не использовать менеджеры состояний типа Redux или Zustand, потому что мне кажется для такого маленького проекта он необязателен, но если проект сложный - то обязательно что-то подобное необходимо использовать.

- Валюта вычисляется из локали браузера

- Для предотвращения нескольких одновременных запросов при введении суммы для конвертации, использую свой useDebouncer хук

- Используемый API:
  - https://apilayer.com/marketplace/currency_data-api,
  - https://rapidapi.com/apininjas/api/currency-converter-by-api-ninjas/
