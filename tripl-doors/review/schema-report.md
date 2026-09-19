# Schema-report — page-01 (витрина «Входные двери»)

- **Дата:** 2026-09-19 · **Вход:** tz-01.md + drafts/page-01.md + entities.md
- **Выход:** блок `## РАЗМЕТКА` в `drafts/page-01.md` (JSON-LD, `<script type="application/ld+json">`) + `data/triplets.json`

## Внедрённые типы (@graph)
- **Organization + HomeGoodsStore** (`@id …#org`): name «ООО «Сталь-Плюс»», telephone, PostalAddress (398026, Липецк, ул. Баумана, 307Е, 2 этаж), areaServed City Липецк, openingHours Пн–Пт 09–18, sameAs (6 профилей из entities.md), hasCertification (ГОСТ 31173-2016 № …00697; ТР ЕАЭС 043/2017 № …00065/25).
- **CollectionPage** (`#webpage`): about→org, dateModified 2026-09-19, citation [ЕГРЮЛ, ГОСТ 31173-2016, ГОСТ Р 57327-2016, реестр Росаккредитации] — все 4 URL стоят ссылками в видимом тексте (правило 4/6б).
- **BreadcrumbList**: Каталог → Входные двери.
- **Product «Входная металлическая дверь»** + AggregateOffer lowPrice 24900 RUB, warranty 12 MON (на Offer), seller→org, hasCertification ГОСТ 31173-2016.
- **Service ×3**: замер (price 0), доставка, монтаж — areaServed Липецк.
- **FAQPage**: 6 Q&A — текст слово в слово из блока «Частые вопросы».

## Синхронность с текстом (правило 4)
Все значения найдены в `drafts/page-01.md`: name, телефон, адрес, часы, цена 24900, № сертификатов, EI 60/S15, FAQ. Расхождений «разметка↔текст» нет.

## Что НЕ внедрено и почему
- **AggregateRating** — НЕ добавлен (governance E-6: решение оператора по рейтингу Яндекс.Карт/2ГИС не принято; self-serving звёзд не даёт — правило 9/10).
- **EI 60/S15 как additionalProperty входной двери** — НЕ добавлен (это свойство противопожарных ДПМ, не обычных ДМ; точность).
- `instrument`/`warranty` — повешены корректно (warranty→Offer, не Service).

## Корректность свойств (cheatsheet)
- `warranty` → Offer ✓ (не Service). `sameAs` профилей-тождеств → на Organization ✓ (бренд-Q нет). `hasCertification` → Organization/Product ✓. Гео объектом (City/PostalAddress) ✓.

## Валидация (напоминание, разметка ≠ KPI)
Прогнать: validator.schema.org (полнота), Rich Results Test (Google), Яндекс.Вебмастер (микроразметка).
Цель — машиночитаемость и извлекаемость, НЕ «получить сниппет». Цены дополнительно — YML-фидом в Вебмастер (не разметкой): напоминание клиенту.

## triplets.json
`data/triplets.json` собран (31 competitor + 12 own + 6 точек отказа), валиден `json.loads`. Машиночитаемая копия матрицы для следующих прогонов.
