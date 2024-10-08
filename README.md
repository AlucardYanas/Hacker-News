# Hacker News Interface

Простое веб-приложение для просмотра последних новостей с сайта Hacker News.

## Описание
Приложение позволяет пользователям просматривать последние 100 новостей, а также читать комментарии. Интерфейс выполнен с использованием Material UI и поддерживает автообновление новостей и комментариев.

## Используемые технологии
- React v18.2.0
- RTK Query
- React Router v6
- Material UI v5
- TypeScript v4

## Требования
- Node.js >= 14.0.0
- npm >= 6.0.0

## Установка и запуск
1. Клонируйте репозиторий:
   ```bash
   git clone https://github.com/username/repository-name.git
   ```
2. Перейдите в папку проекта:
   ```bash
   cd repository-name
   ```
3. Установите зависимости:
   ```bash
   npm install
   ```
4. Запустите проект в режиме разработки:
   ```bash
   npm run dev
   ```
5. Откройте в браузере:
   ```
   http://localhost:3000
   ```

## Скрипты
- `npm run dev` - Запускает проект в режиме разработки.
- `npm run build` - Создает оптимизированную сборку проекта.
- `npm run lint` - Проверяет проект с помощью ESLint.

## Структура проекта
Проект структурирован с использованием FSD (Feature-Sliced Design):

```
src/
├── app/
│   ├── providers/
│   ├── store/
├── pages/
│   ├── NewsListPage/
│   ├── NewsDetailPage/
│   └── NotFoundPage/
├── entities/
│   ├── news/
│   └── comment/
├── shared/
│   └── api/

```



