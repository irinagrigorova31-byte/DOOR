# Citation-gap — роутер on-site / off-site

> Источник: `data/serp-parsed.md` (Neuro-слой + Brand-presence кластера 01) × `data/competitors.md` /
> `data/placements.md` (раздел 0 выше). Только кластеры с `ранжируемся = да` и `цитируемся = НЕТ`
> (частично или полностью) попадают в таблицу. Кластеры 02/03 — брендом не ранжируемся вообще
> («Органика: нет»), поэтому это не citation-gap, а просто off-site-возможность — в таблицу не
> включены (см. `data/placements.md`).

<table>
<tr><th>Кластер / запрос</th><th>Ранжируемся (поз./ПС)</th><th>Цитируемся (да/НЕТ)</th><th>Маршрут</th><th>Кто цитирует (домены-площадки — цели off-site)</th></tr>
<tr>
<td>01 — «завод входных дверей липецк»</td>
<td>Яндекс #1, Google #8</td>
<td>ЧАСТИЧНО: бренд «Сталь-Плюс» назван в тексте Google AI Mode, но процитирован источник — ЗСД, не наш домен</td>
<td><b>on-site (приоритет)</b></td>
<td>Cited-источник: <code>lipetsk.zsdoor.ru</code> (competitor, ключевой конкурент) — тип competitor доминирует → рычаг on-site: сделать свою страницу цитируемым источником (extractable fact + атрибуция «Сталь-Плюс», завод в Липецке, сертифицированные противопожарные двери)</td>
</tr>
<tr>
<td>01 — «входные двери от производителя липецк»</td>
<td>Яндекс #3</td>
<td>НЕТ (не упомянуты в Google AI Mode)</td>
<td>оба (приоритет on-site — тип competitor преобладает)</td>
<td>Цитируются: <code>lipetsk.zsdoor.ru</code> (competitor), Torex Липецк / <code>torexlipetsk.ru</code> (competitor), <code>lipetsk.dveri-tmk.ru</code> (competitor), <code>lipetsk.lemanapro.ru</code> (placement/«?» DIY-ритейлер) — 3 из 4 цитируемых доменов типа competitor</td>
</tr>
<tr>
<td>01 — «сколько стоит входная дверь с установкой в липецке»</td>
<td>НЕ ранжируемся</td>
<td>НЕТ</td>
<td>не citation-gap в строгом смысле (нет органического ранжирования по этому запросу) — рычаг: сначала закрыть ранжирование (прайс-блок с ценой+установкой на витрине), citation придёт следом; сейчас цитируют лидеров цены</td>
<td>Цитируются: <code>lipetsk.lemanapro.ru</code> (placement/«?»), <code>lipetsk.zsdoor.ru</code> (competitor), <code>lipetsk.dveri-tmk.ru</code> (competitor), <code>profi.ru</code> (placement, агрегатор услуг — цена монтажа)</td>
</tr>
<tr>
<td>01 — «двери входные металлические» (не гео-уточнено)</td>
<td>НЕ ранжируемся (нац. запрос без Липецка)</td>
<td>НЕТ</td>
<td>off-site (нац. AI-слой цитирует федеральных игроков и площадки, не локальный липецкий завод — своя страница витрины гео-заточена под Липецк, конкурировать за нац. AI-упоминание не её задача)</td>
<td>Google AI Mode цитирует: <code>zsdoor.ru</code> (competitor, федеральный хост бренда), <code>100-dverei.ru</code> (competitor), <code>svarnik.ru</code> (competitor), <code>torex.ru</code> (competitor). Яндекс AIO цитирует: <code>vseinstrumenti.ru</code> (placement/маркетплейс), <code>znaet.petrovich.ru</code> (placement) + neuro-only домены без органики: <code>dvermezhkom-service.ru</code>, <code>dveriklina.ru</code>, <code>dveri-zmk.ru</code>, <code>spacedoors.ru</code> (тип не классифицирован — не входят в топ serp-parsed.md, требуют отдельной проверки, вероятно площадки/конкуренты — пометить «?» при следующей сборке)</td>
</tr>
</table>

## Правило приоритета (по CLAUDE.md, смешанный случай)

Где маршрут «оба» — приоритет отдаётся тому рычагу, чей тип доменов преобладает среди
цитируемых. Для кластера 01 в трёх из четырёх запросов преобладает **competitor**-тип
(zsdoor, torex, dveri-tmk) → **on-site — главный рычаг** для этого кластера: citation target
(извлекаемый факт с атрибуцией бренда) должен войти в ТЗ витрины (`tz-writer`). Off-site
(`placement-strategist`) — вторичный, целится в `lemanapro.ru`/`vseinstrumenti.ru`/`profi.ru` и
в информационные площадки кластеров 02/03 (см. `data/placements.md`), где своя витрина в принципе
процитирована быть не может (другой интент — гайд/рейтинг, не карточка завода).

## Итог
- Gap-запросов внутри целевого кластера 01: **4** (все запросы кластера, кроме «купить входные
  двери в липецке» — по нему AI-обзора нет вообще ни в одной ПС, gap не определён).
- Маршрут on-site (приоритетный): 1 запрос чисто on-site + 2 «оба» с приоритетом on-site.
- Маршрут off-site (приоритетный): 1 запрос («двери входные металлические», нац., вне гео-фокуса витрины).
- Кластеры 02/03 — НЕ gap (нет органики), а чистая off-site-возможность, см. `data/placements.md`.
