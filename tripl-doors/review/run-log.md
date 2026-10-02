# Run-log — Сталь-Плюс (входные двери, Липецк)

Проект: витрина «Входные двери», завод-входных-дверей.рф. Рынок Google+Яндекс/РФ, регион Липецк.
Старт блока 1 (сбор): 2026-09-17.

## Решения оператора
- 2026-09-17: dver-lipetsk.ru = **конкурент** (не наш домен). Идёт в реверс.

## Журнал этапов
| Время | Этап | Агент | Статус | Ключевые числа |
|---|---|---|---|---|
| 2026-09-17 | Ингест | — | OK | design-system → brand.md+assets; serp → input/serp/ (1 pass, 4 запроса, Google+Яндекс); CLAUDE.md параметры заполнены |
| 2026-09-17 | 0 · EXPAND | serp-prep | OK → ⛔ВОРОТА-0 | 4 seed; 46 related/PAA→39 фраз; output/to-parse.txt = 13 фраз (10 ГЕО-КОММ + 3 ИНФО); исключено: межкомнатные 11, чужой гео 5, бренды 2. Google AI-обзор по «двери входные металлические» отсутствует; Яндекс AI-обзор есть. seed4 «купить двери цены» = межкомнатные (др. продукт). Ждём решения оператора по дозагрузке pass-2 |
| 2026-09-17 | ⛔ВОРОТА-0 | оператор | РЕШЕНО | Фетчить ВСЕ 13 фраз (pass-2). Охват = ТОЛЬКО витрина «Входные двери» — фасеты/инфо-гайды НЕ отдельные страницы, идут контекстом в триплеты. Ждём pass-2 в input/serp/ |
| 2026-09-17 | pass-2 | оператор | OK | serp-extra-22.xlsx: 5 запросов из 13 (позиционирование «завод» ×2 + инфо ×3: как выбрать/рейтинг/цена). 95 Топ, 7 AI-обзор, 18 PAA, 40 related. Продуктовые фасеты и «отзывы» не догружены |
| 2026-09-17 | 1 · parse | serp-parser | запуск | вход input/serp/ = pass-1(4q)+pass-2(5q) |
| 2026-09-17 | 1 · parse | serp-parser | OK | 4 кластера, K=3 (домен+путь). Y: 01=52(витрина-цель)/02=18(как выбрать)/03=16(рейтинг)/04=27(межкомн.-ОТБРАКОВКА). Все Y≥7. Пар ≥70%: нет. Brand: Яндекс#1/Google#8 «завод…липецк», Яндекс#3 «от производителя»; генерик — нет. Citation-gap: в Google AI Mode нас нет/бренд без ссылки, доминирует lipetsk.zsdoor.ru (ЗСД) |
| 2026-09-17 | 1.5 · domains | domain-inventory | запуск | классификация competitor/placement |
| 2026-09-17 | 1.5 · domains | domain-inventory | OK → ⛔ВОРОТА-1 | Кластер 01: competitor 43 (23 липецких/20 иногородних), placement 3, спорных «?» 5 (DIY-сети). Лидер = lipetsk.zsdoor.ru (ЗСД). 12 липецких ВЫСОКИЙ приоритет реверса. Вопросов клиенту 12 + 4 расхождения NAP/scope. Red flags 6 (сертификаты-картинки, Lorem ipsum на /o-nas/, ценовой артефакт ₽66 99999). Кандидатов в незаменимый узел 7 (все статус «заявлено», не подтв. документом) |
| 2026-09-17 | ⛔ВОРОТА-1 | оператор | РЕШЕНО | DIY-сети (Лемана ПРО/Добрострой/Стройландия) → placement, НЕ реверс. Глубина = 12 липецких ядро + липецк.пождверь.рф. Ответы на 12 вопросов клиенту — позже, спорные факты → to-check. Scope реверса = кластер 01 |
| 2026-09-17 | 2.0 · fetch | fetch_pages | OK | 13/15 ok (87%), 2 blocked 403 (dverimagnat, valbergsafe — антибот, повтор не помог → на WebFetch triplet-collector). Кэш cache/pages/ |
| 2026-09-17 | 2 · сбор | entity-mapper ∥ niche-expert(р1) ∥ triplet-collector(кл.01) | запуск | параллельный блок |
| 2026-09-17 | 2 · скилл | niche-expert(р1) | OK | skill project-stal-plus создан. 4 сегмента ЦА (А квартира/Б дом/В «от завода»=наша сила/Г противопожарные-B2B), словарь 18 терминов, топ-3 точки отказа (терморазрыв не нужен/кривой замер/дешёвый китай). Ниша погранич. YMYL, ФЗ-38 блокеры. Противопожарн. сертиф = to-check |
| 2026-09-17 | 2 · сущности | entity-mapper | OK | data/entities.md: 18 сущностей, 6 с Wikidata Q (Липецк Q3490, противопож.дверь Q898284, МДФ, порошк.покраска…), 12 без Q. sameAs бренда из company.md (Я.Карты/2ГИС/VK/TG/РБК/Avito). КОРРЕКЦИЯ: ГОСТ Р 57327-2016=противопожарные двери (не «защитные»); взломостойкие=ГОСТ Р 51072-2005. Противопож.сертиф=to-check |
| 2026-09-17 | 2 · триплеты | triplet-collector(кл.01) | OK | 9/13 доменов прочитано (69%). 4 непрочит.: dverimagnat/valbergsafe 403, metaldveri пустой, железная-мебель капча. 48 триплетов (31 comp/11 own/6 точки отказа). ОБЯЗ 9/ПРОМЕЖ 8/ОТСТРОЙКА 14. 5 незаменимых узлов (завод/противопож.to-check/прайс/индив.размеры to-check/NAP). to-check 9. JSON-LD у 3; Offer/Product НЕТ даже у ЗСД → извлекаемость пустая ниша. РИСКИ: гарантия 12мес слабее рынка (2-7 лет); «завод с 2005» vs ОГРН-2019 |
| 2026-09-17 | 2.5 · merge | triplet-collector --merge | запуск | 1 часть (кл.01) |
| 2026-09-17 | 2.5 · merge | triplet-collector --merge | OK | data/triplets.md канон: 48 триплетов (31 comp/11 own/6 точки отказа). ОБЯЗ 9/ПРОМЕЖ 8/ОТСТР 14. 3 семейства предикатов схлопнуто. 5 незаменимых узлов (стоп НЕ сработал). Подтем: 4 обяз/4 промеж/5 отстр, 5 пустот под отстройку. Конфликтов фактов 4, to-check 9 |
| 2026-09-17 | 3 · скилл-р2 | niche-expert(р2) | запуск | обогащение + authorities.md |
| 2026-09-17 | 3 · скилл-р2 | niche-expert(р2) | OK → ⛔ВОРОТА-2 | Скилл обогащён + data/authorities.md (5 позиций: 3 verified — ГОСТ 31173-2016/57327-2016/ЕГРЮЛ; 2 to-check без URL — ГОСТ Р 51072-2005, число замков). Гипотез: 3 подтв./2 опроверг./3 осталось. 6 точек отказа синхронизированы. КОНФЛИКТ ГОСТ исправлен: взломостойкость=51072-2005 (не 52582/57327). Дыра: класс взломостойкости к on-site-ссылке пока НЕ готов |
| 2026-09-17 | — | ОРКЕСТРАТОР | БЛОК 1 ГОТОВ | ⛔ВОРОТА-2 — ждём проверки оператора перед /tripl-tz |
| 2026-09-18 | Governance | оператор+Claude | OK | Сертификаты (5 шт., EI60/S15, ТР ЕАЭС 043/2017 + ГОСТ 31173/57327/31174) → `input/certificates.md`; O4/O9/T21/T22/R5 verified. sameAs: 2ГИС verified по ИНН, Wikidata «не найдено», директории ЕГРЮЛ. «₽66 99999» = баг |
| 2026-09-20 | Governance | оператор+Claude | OK | Ответы клиента (`input/client-answers-2026-09-20.docx`): состав цены; «с 2005» подтверждён цепочкой юрлиц (O2 verified); производство 1000 м²/10–20 чел/9 станков/100–300 в мес; объём ≈25 000 («120+ тыс.» выдумка — не публиковать); индив. размеры от 2 суток (O6 verified); персона есть. РЕШЕНО: цены/монтаж числом на витрине НЕ публикуем |
| 2026-09-20 | 4 · ТЗ | tz-writer | OK | `data/tz/tz-01.md` — чертёж витрины: незаменимый узел (завод+противопож.EI60+индив.размеры), citation target под промпт №10 и gap «заводы Липецка», H1/паспорт/TL;DR/6 вопросных H2/2 HTML-таблицы/FAQ, мосты, мета, план разметки (AggregateRating НЕ ставить). 7 задач клиенту (спека двери/гарантия/персона — не блокируют черновик). `data/interlinks.md` обновлён |
| 2026-09-20 | 5 · текст | copywriter | OK | `drafts/page-01.md` — текст витрины. Заглушки спеки/гарантии/персоны переформулированы без чисел (данных не будет — решение оператора). Гомоглифы 0 |
| 2026-09-20 | 7 · кластер | cluster-inspector | OK | `review/cluster-inspection-01.md` — архитектура состоятельна (single-page); 2 точечные правки применены (убран дубль-FAQ терморазрыв, выровнен анкор /o-nas) |
| 2026-09-20 | 8 · разметка+инфогр.+hero | schema-markup ∥ infographic-maker ∥ hero-maker | OK | `drafts/page-01.jsonld` (8 узлов, валиден, без AggregateRating/фейк-цен), `drafts/page-01-infographics.html` (3 SVG), `drafts/page-01-hero-brief.md`. Гомоглифы 0 |
| 2026-09-20 | 9 · вёрстка | page-builder | OK | `preview/page-01.html` — hero-банд + интро + слот каталога + SEO-блоки с SVG + FAQ + контакты + футер + JSON-LD. Адаптив. Гомоглифы 0 |
| 2026-09-20 | 10 · инспекция | final-inspector | OK (итер. 1) | `review/final-inspection-01.md` — правило 4/мета/ФЗ-38/NAP чисто; 2 точечные правки применены (мета 198→141 симв.; срок сертификата в видимый текст). Готово к техчеку (шаг 12); delivery — по RELEASE |
| 2026-09-20 | 11 · упаковка | page-builder | OK (RELEASE) | Оператор дал RELEASE. `delivery/`: vhodnye-dveri-lipetsk.html (самодостаточная), .jsonld, -infographics.html, meta.txt, README-handoff.md |
| 2026-09-20 | 12 · техчек | homoglyph-checker | OK | delivery/ (5 файлов) + preview/ — 0 проблем, 0 невидимых. JSON-LD валиден. ВИТРИНА 01 СОБРАНА |
| 2026-09-21 | — | ОРКЕСТРАТОР | СТРАНИЦА 2 | Новый кластер 02 «двери для частного дома/улица», URL /product-category/dveri-dlya-doma-ili-kvartiry/. Клиент/регион те же |
| 2026-09-21 | 1 · parse | serp-parser | OK | serp-extra-27 (Яндекс-Топ, 3 запроса×20). Ось: улица+терморазрыв+производитель. Brand поз.8/19. `data/serp-parsed-02.md` |
| 2026-09-21 | 1.5 · domains | domain-inventory | OK → ВОРОТА-1 | `data/domain-inventory-02.md`. Оператор: реверс cache-only (без фетчей); alfamart24/znaki154 — конкуренты; маркетплейсы — placement |
| 2026-09-21 | 2 · сущности/триплеты | entity-mapper ∥ triplet-collector | OK | `data/entities-02.md` (дельта: терморазрыв в ядро, частный дом/морозостойкость); `data/triplets-02.md` (D01-D11/DO1-DO7/DR1-DR3, узел = уличные с терморазрывом) |
| 2026-09-21 | 3 · скилл-р2 | niche-expert | OK | скилл §9 (дом/улица): сегмент Б, разведение 01↔02, DR1-DR3, citation-target; authorities +ГОСТ 15150 (to-check) |
| 2026-09-21 | 4 · ТЗ | tz-writer | OK | `data/tz/tz-02.md`; interlinks — двусторонний мост 01↔02 |
| 2026-09-21 | 5 · текст | copywriter (+gist-auditor оператора) | OK | `drafts/page-02.md`; NAP-регрессия к 398026 исправлена на 398056 (ЕГРЮЛ) |
| 2026-09-21 | 7 · кластер | cluster-inspector | OK | `review/cluster-inspection-02.md` — серия 01↔02 состоятельна; правки витрины 01: ужат дубль терморазрыва + добавлен мост 01→02 |
| 2026-09-21 | 8 · разметка+инфогр.+hero | schema-markup ∥ infographic-maker ∥ hero-maker | OK | `page-02.jsonld` (8 узлов, без противопож.сертификата — не в тексте), `page-02-infographics.html` (2 SVG: дерево + как работает терморазрыв), `page-02-hero-brief.md` |
| 2026-09-21 | 9 · вёрстка | page-builder | OK | `preview/page-02.html` — макет строго по образцу витрины 01. JSON валиден, секции 9/9, SVG 2/2 |
| 2026-09-21 | 10 · инспекция | final-inspector | OK | `review/final-inspection-02.md` — правило 4/мета/ФЗ-38/NAP/консистентность с в.01 чисто. Правок не требуется. Готово к техчеку/RELEASE |

| 2026-09-21 | 11 · упаковка | page-builder | OK (RELEASE) | Оператор дал RELEASE витрины 02. `delivery/`: dveri-dlya-doma-lipetsk.html/.jsonld/-infographics.html + meta-02.txt; README-handoff расширен на 2 витрины |
| 2026-09-21 | 12 · техчек | homoglyph-checker | OK | delivery/ (обе витрины) — 0 проблем, 0 невидимых. JSON-LD обеих валиден. ВИТРИНА 02 СОБРАНА |

---

## Витрина 03 «Гаражные ворота (металлические распашные)» — автоматический прогон (2026-09-27)

URL: `/product-category/garazhnye-vorota/`. Оператор: «работай автоматически по инструкции». Продукт = металлические
РАСПАШНЫЕ ворота (серт.2 ГОСТ 31174-2017 № ССГБ RU.СП01.Н00698); секционные/автоматические — честная развилка, НЕ товар.

- **serp-parser / domain-inventory / prompts:** `data/serp-parsed-03.md`, `data/domain-inventory-03.md`, `data/prompts-03.md`. Домен №1 по «металлические гаражные ворота». Ось: распашные (наш) vs секционные (не наш).
- **entity-mapper:** `data/entities-03.md` — гл. сущность «металлические распашные ворота»; калитка/утепление/проём; ГОСТ 31174-2017 (серт.2) — незаменимый узел; развилка распашные/секционные как определитель.
- **triplet-collector:** `data/triplets-03.md` — G01–G11 (ядро), GO1–GO7 (own), GR1–GR4 (точки отказа), незаменимый узел, пустоты.
- **niche-expert:** скилл §10 (сегмент «владелец гаража», governance-ось, точки отказа, citation-target).
- **tz-writer:** `data/tz/tz-03.md` — H1, паспорт, TL;DR, 6 вопросных H2, 2 HTML-таблицы, FAQ, мосты, governance, мета, план разметки.
- **copywriter:** `drafts/page-03.md` — видимый текст (ОКВЭД 25.11; соответствие ГОСТ через номер серт.; без цены/огнестойкости/°C).
- **cluster-inspector:** `review/cluster-inspection-03.md` — серия 3 витрин состоятельна; ворота не каннибализируют двери (разные ГОСТ/ОКПД2/пользователь); правок не требуется.
- **schema-markup:** `drafts/page-03.jsonld` — 8 узлов (LocalBusiness+hasCertification серт.2, CollectionPage, BreadcrumbList, 4×Service, FAQPage). Правило 4 сверено программно. Секционные/AggregateRating/огнестойкость — НЕ добавлены.
- **infographic-maker:** `drafts/page-03-infographics.html` — 2 inline-SVG (Рис.1 дерево «распашные vs секционные — кому что»; Рис.2 схема ворот с калиткой). Таблицы не дублируют.
- **hero-maker:** `drafts/page-03-hero-brief.md` — бриф hero/og (без секционных/автоматики/огнестойкости в кадре).
- **page-builder:** `preview/page-03.html` — по образцу витрин 01/02 (chrome/CSS/порядок Hero→сетка→текст→…→футер), 9 секций, 2 SVG, 2 таблицы, мост 03→01 «входные двери» + 03→/o-nas.
- **final-inspector:** `review/final-inspection-03.md` — Title 51, Descr 151 (сокращена с 178), правило 4 OK, governance чисто, AI-лексикон 0, гомоглифы 0. Вердикт: готово.
- **Упаковка:** `delivery/garazhnye-vorota-lipetsk.{html,jsonld,-infographics.html}` + `meta-03.txt`; README-handoff обновлён до 3 витрин.
- **Гомоглифы (все файлы витрины 03):** 0 критичных, 0 невидимых. Критичные в общем скане — только pre-existing (cache/*, input/pricing.md, CLAUDE.md, agent-пример), не в наших deliverables.

---

## Витрина 04 «Противопожарные двери (металлические)» — автоматический прогон (2026-09-28)

URL: `/product-category/dveri-protivopozharnye-metallicheskie/`. Сильнейший дифференциатор клиента (обязательный
сертификат ЕАЭС). **Первая витрина по новому правилу тире** (`methodology/dash-rule-ru.md`).

- **serp/domain/prompts:** `data/serp-parsed-04.md`, `domain-inventory-04.md`, `prompts-04.md`. Наш домен в Топ по всем 4 запросам (поз. 5–14). Доминанты: «от производителя» 16, EI 60, ДПМ 8.
- **entity-mapper:** `data/entities-04.md` — гл. сущность ДПМ (fire door Q898284); ТР ЕАЭС 043/2017 + ГОСТ Р 57327-2016 как незаменимый узел; EI60 — единственный verified предел.
- **triplet-collector:** `data/triplets-04.md` — P01–P11, PO1–PO8, PR1–PR4, незаменимый узел, пустоты.
- **niche-expert:** скилл §11.
- **tz-writer:** `data/tz/tz-04.md` — H1, паспорт, TL;DR, 6 H2, 2 таблицы, FAQ, hasCertification ×2, правило тире.
- **copywriter:** `drafts/page-04.md` — 970 слов, 1 тире (лимит 6.5), запрещённых конструкций 0; EI латиницей; реальные номера серт.
- **cluster-inspector:** `review/cluster-inspection-04.md` — серия 4 витрин состоятельна; выявлена каннибализация «противопожарные» 01↔04 → рекомендация оператору (ужать блок в в.01 + мост 01→04).
- **schema-markup:** `drafts/page-04.jsonld` — 8 узлов, hasCertification ×2 (ЕАЭС EI60/S15 + ГОСТ EI60), about fire door Q898284, citation ТР ЕАЭС + ГОСТ. Правило 4 сверено.
- **infographic-maker:** `drafts/page-04-infographics.html` — 2 inline-SVG (Рис.1 устройство ДПМ; Рис.2 определитель маркировки EI, прочие пределы серым/справочно). Таблицы не дублируют.
- **hero-maker:** `drafts/page-04-hero-brief.md`.
- **page-builder:** `preview/page-04.html` — по образцу витрин 01–03, 9 секций, 2 SVG, 2 таблицы, мост 04→01.
- **final-inspector:** `review/final-inspection-04.md` — Title 49, Descr 153, правило 4 OK, тире OK, governance чисто, AI-лексикон 0, гомоглифы 0.
- **Упаковка:** `delivery/dveri-protivopozharnye-lipetsk.{html,jsonld,-infographics.html}` + `meta-04.txt`; README-handoff обновлён до 4 витрин.

---

## Перевёрстка витрин 03 и 04 в формат Porto (2026-09-30)

Оператор прислал `methodology/style-landing-porto.md` (правила вёрстки под тему Porto + Elementor + Popup Maker,
по итогам ручной доработки витрины 02). Решения оператора: перевёрстка витрин 03 и 04; превью оставить;
JSON-LD внутри контент-блока.

- Спецификация сохранена: `methodology/style-landing-porto.md`. Пойнтеры добавлены в скилл §7 и README-handoff.
- Витрина 03 → `delivery/garazhnye-vorota-lipetsk-hero.html` + `-content.html` (два блока Elementor) + обновлённое превью `garazhnye-vorota-lipetsk.html`.
- Витрина 04 → `delivery/dveri-protivopozharnye-lipetsk-hero.html` + `-content.html` + обновлённое превью.
- Применено: скоуп-классы `.szp-hero`/`.szp-content`; шрифт Poppins (без своего link); CTA `href="#svyaz"`;
  ховер тёмной кнопки `#22252a`→`#0077b3`; full-bleed hero и `.section--muted`; фото hero `[cat_hero_image]`
  (aspect-ratio 4/3); JSON-LD инлайн внутри контент-блока (8 узлов, у 04 — hasCertification ×2); дата обновления
  скриптом (`#szp-update-date`, текущий месяц − 2). Каталог/шапка/крошки/подвал в блоки не включены.
- Контроль: JSON-LD валиден (8 узлов у каждой), структурных запретов нет (нет doctype/html/head/body/footer/
  header/hero-класса/крошек), правило тире для 04 соблюдено, гомоглыфы 0 во всех новых файлах и превью.
- Текст витрин 03/04 сохранён дословно (перевёрстка формата, не переписывание).

---

## Витрина 05 «Антивандальные ставни на окна» — автоматический прогон без SERP (2026-10-02)

URL: `/product-category/antivandalnye-stavni-na-okna/`. Оператор: «файла с SERP не будет, делаем по инструкции».
Сделано сразу в формате Porto (два блока) и по правилу тире.

- **Без SERP:** `data/serp-parsed-05.md` фиксирует отсутствие топа; частотность — по промптам + скилл + перенос из к.01–04.
- **prompts/domain/entities/triplets:** `data/prompts-05.md`, `domain-inventory-05.md`, `entities-05.md`, `triplets-05.md`.
- **niche-expert:** скилл §12.
- **tz-writer:** `data/tz/tz-05.md`.
- **copywriter:** `drafts/page-05.md` — 837 слов, 3 тире (лимит 5.6); governance: класс/сертификат на ставни числом не заявляем.
- **cluster-inspector:** `review/cluster-inspection-05.md` — серия из 5 витрин состоятельна, каннибализации нет.
- **page-builder:** два блока Porto `delivery/antivandalnye-stavni-lipetsk-hero.html` + `-content.html` (JSON-LD инлайн, 8 узлов, БЕЗ hasCertification; 2 inline-SVG: развилка + устройство ставни; прайс только доставка + «монтаж после замера») + превью `preview/page-05.html`.
- **final-inspector:** `review/final-inspection-05.md` — Title 51, Descr 153, правило 4 OK, тире OK, governance чисто, гомоглифы 0.
- **Упаковка:** `delivery/antivandalnye-stavni-lipetsk.{hero,content}.html` + превью + `meta-05.txt`; README обновлён до 5 витрин.
- **Governance-ось:** продукт — стальные ставни (заявлен оператором); сертификата/класса на ставни нет → не заявляем числом, hasCertification не ставим; роллетные — развилка, не товар; цена изделия — карточки; монтаж ставень — после замера.
- **Открытые вопросы оператору:** делаем ли роллетные; сертификат/класс на ставни; прайс монтажа ставень.

---

## Витрина 06 «Бронированные двери» — автоматический прогон без SERP (2026-10-02)

URL: `/product-category/bronirovannye-dveri/`. Оператор: SERP не будет, делаем по инструкции. Формат Porto + правило тире.

- **Без SERP:** `data/serp-parsed-06.md` (частотность по промптам + скилл + перенос из к.01–05).
- **prompts/domain/entities/triplets:** `data/prompts-06.md`, `domain-inventory-06.md`, `entities-06.md`, `triplets-06.md`.
- **niche-expert:** скилл §13.
- **tz-writer:** `data/tz/tz-06.md`.
- **copywriter:** `drafts/page-06.md` — 857 слов, 3 тире (лимит 5.7); governance: класс взломостойкости числом не заявляем.
- **cluster-inspector:** `review/cluster-inspection-06.md` — серия из 6 витрин состоятельна; близость 01↔06 (взлом/надёжность) → рекомендация оператору (ужать блок в 01 + мост 01→06).
- **page-builder:** два блока Porto `delivery/bronirovannye-dveri-lipetsk-hero.html` + `-content.html` (JSON-LD инлайн 8 узлов, hasCertification = серт.3 ГОСТ 31173-2016; 2 inline-SVG: обычная vs бронированная + устройство усиленной двери; прайс монтаж+доставка) + превью `preview/page-06.html`.
- **final-inspector:** `review/final-inspection-06.md` — Title 41, Descr 151, правило 4 OK (номер серт.3 + ГОСТ в тексте), тире OK, класс числом не заявлен, гомоглифы 0.
- **Упаковка:** `delivery/bronirovannye-dveri-lipetsk.{hero,content}.html` + превью + `meta-06.txt`; README до 6 витрин.
- **Governance-ось:** «бронированная» = усиленная стальная дверь; класс взломостойкости числом не заявляем (нет документа ГОСТ Р 51072); соответствие ГОСТ 31173-2016 через номер серт.3; «100% защита» нельзя; цена изделия — карточки; монтаж/доставка — прайс.
- **Открытые вопросы оператору:** документ на класс взломостойкости; спека брони числом; мост 01→06 и объём блока надёжности в витрине 01.

---

## Витрина 07 «Внутренние ставни на окна» — автоматический прогон без SERP (2026-10-02)

URL: `/product-category/vnutrennie-stavni-na-okna/`. Оператор: SERP не будет. Формат Porto + правило тире.

- **Без SERP:** `data/serp-parsed-07.md` (частотность по промптам + скилл + перенос из к.01–06).
- **prompts/domain/entities/triplets:** `data/prompts-07.md`, `domain-inventory-07.md`, `entities-07.md`, `triplets-07.md`.
- **niche-expert:** скилл §14.
- **tz-writer:** `data/tz/tz-07.md`.
- **copywriter:** `drafts/page-07.md` — 845 слов, 0 тире (лимит 5.6); назначение затемнение/интерьер, не взлом.
- **cluster-inspector:** `review/cluster-inspection-07.md` — серия из 7 витрин состоятельна; пара ставень 05 (наружные) / 07 (внутренние) разведена по назначению, каннибализации нет; мост 07→05 (рекомендация обратного 05→07).
- **page-builder:** два блока Porto `delivery/vnutrennie-stavni-lipetsk-hero.html` + `-content.html` (JSON-LD инлайн 8 узлов, БЕЗ hasCertification; 2 inline-SVG: типы ставень + жалюзийные светоконтроль; прайс доставка + «монтаж после замера») + превью `preview/page-07.html`.
- **final-inspector:** `review/final-inspection-07.md` — Title 47, Descr 143, правило 4 OK, тире 0, материал/тип не зафиксированы, гомоглифы 0.
- **Упаковка:** `delivery/vnutrennie-stavni-lipetsk.{hero,content}.html` + превью + `meta-07.txt`; README до 7 витрин.
- **Governance-ось:** назначение затемнение/приватность/интерьер (НЕ взлом → уведено на 05); материал/тип «в карточке / на замере» (to-confirm); hasCertification нет; цена изделия — карточки; монтаж внутренних ставень — после замера; доставка — прайс.
- **Открытые вопросы оператору:** материал/тип внутренних ставень; прайс монтажа внутренних ставень; обратный мост 05→07.

---

## Витрина 07 — правка материала (2026-10-02): металл, сплошное полотно
Оператор уточнил: материал = МЕТАЛЛ, сплошное (глухое) полотно, НЕ жалюзи. Витрина 07 переработана:
H1 «металлические, на заказ»; убраны жалюзийные/светорегуляция; типы по способу открывания (створчатые/складные);
Рис.1 створчатые/складные, Рис.2 «сплошное полотно = полное затемнение»; таблицы/FAQ/JSON-LD обновлены.
Обновлены: drafts/page-07.md, delivery/vnutrennie-stavni-lipetsk-{hero,content}.html, превью, meta-07.txt, скилл §14,
баннеры-правки в data/*-07. Контроль: тире 0, JSON-LD 8 узлов, hasCertification нет, гомоглифы 0. Материал снят из открытых вопросов.
