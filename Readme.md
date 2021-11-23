# Тестовый проект Foodie для верстки HTML5 + CSS3

* Студент: [Дмитрий Ижойкин](https://github.com/dizhoykin).

---

**Папка с исходными файлами — `source/`.**

----------------------------------------------- Общий порядок разработки проекта:------------------------------------

-3. Подбор подходящего макета в FIGMA и его модификация (если надо)

-2. Создание проекта в GITHUB (клонирование из этого проекта на GitHub), инициализация проекта в локальной репе, связь удаленного и локального репов (git clone origin master), настройка npm, gulp, json, команды git

Собственно разработка:

-1. Mobile first - определение размеров переходов между mobile, tablet, desktop

0. DOCTYPE, html -> lang, head -> meta, title

1. Выделяем крупные смысловые блоки на каждой странице сайта
	-  header, main, footer

2. Размечаем в блоках крупные смысловые разделы
	- nav, section, article, aside

3. Выделяем заголовок всего документа и заголовки смысловых разделов
	- h1 (единственный на странице), h2, h3 - на блоках
	- шрифты

4. Размечаем мелкие элементы в смысловых разделах
	- div, span,
	- списки -ul(ol) -> li, dl -> dt -> dd
	- таблицы - table -> th, tr -> td
	- иллюстрации - figure -> figcaption, img
	- параграфы, переносы -  p, br
	- формы - form (action, method), fieldset, legend -> input, label, textarea, button
	- цитаты - blockquote, cite, q
	- контакты - address, tel, email
	- прогресс - progress, meter
	- шрифты

5. Фразовые элементы
	- img (src, alt, title)
	- a (href)
	- button (type)
	- video (poster, width, height, controls, preload) -> source (src, type)
	- time (datetime)
	- b, i, strong, em, span, s, ins, del
	- шрифты

6. SASS (CSS)
	- компиляция SASS в CSS
	- БЭМ
	- import
	- normalize
	- глобальные переменные
	- сетки и микросетки (grid, flex)
	- стилизация (отступы, шрифты, цвета)
	- медиазапросы
	- поведение (hover, active)
	- анимация

7. Оптимизация
	- сжатие картинок
	- оптимизация под retina
	- SVG
	- спрайты
	- minimize

6. JavaScript
	- БЭМ
	- подключение скрипта (main.js) в html (type = module)
	- в main.js -> import {functionName} from './moduleName.js' -> вызов functionName
	- разделение кода на api.js, data.js, utils.js, popup.js, form.js
	- кодинг

7. Тестирование
	- совпадение с макетом (+ поведение)
	- работа интерактивных элементов
	- валидность (w3.org)
	- переполнение
	- кроссбраузерность
	- работа скриптов (+ ошибки в консоли)
	- контент, заголовки
	- шрифты
	- favicon
	- интерактивный курсор
	- Локализация (RU-EN, date, LTR-RTL, шрифты)
	- Включение AdBlock
	- формы (подписи полей, запись данных, localStorage, верификация, обратная связь)
	- верные ссылки
	- уборка мусора (неиспользуемый код, ненужные комментарии)
