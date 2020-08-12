# Инструкция

## Для запуска

1. Необходимо склонировать репозиторий
2. Установить необходимые пакеты (npm install)
3. Запустить в dev режиме (npm run dev), либо в production (npm run build)
4. Перейти по адресу на котором запустится проект (по дефолту это http://localhost:3000/)

Данные для формы авторизации следующие:
	Логин: user
	Пароль: 1111
  
  
## Для запуска приложения внутри docker контейнера необходимо:

1. Cоздать Dockerfile в папке с проектом
2. Написать конфигурацию
3. Собрать образ docker build
4. Запустить, например локально docker run -p 3000:3000

