Сталь-Плюс is a Lipetsk door factory selling steel entry doors, shutters and gates direct from its own production. The identity is industrial and trust-first: a deep navy header, a single bright azure accent, near-black calls to action, and generous light-grey sections that let product photography carry the page. This system is built from the public storefront — the colours are sampled exactly; the type, spacing and radii are read from screenshots and are close approximations, not source CSS.

## Voice and content

Write in Russian, in the plain, confident register of the site: short declarative sentences ("Доставим и установим", "Цены от производителя"), formal-neutral «вы», no slang and no emoji. Lead with the concrete promise — delivery, own production, 12-month guarantee — then the reassurance. Headline labels and section titles are set in ALL CAPS ("ПОЧЕМУ НАС ВЫБИРАЮТ", "ВЫЗВАТЬ ЗАМЕРЩИКА"); sentence text is not. Numbers are the loudest thing on the page: state proof as a big figure plus a quiet caption ("120+ / ТЫСЯЧ ИЗДЕЛИЙ", "1.5мм / ТОЛЩИНА МЕТАЛЛА") rather than a sentence.

## Colour

Set page backgrounds in `white`, alternating full-width sections in `surface-muted`. The header and any dark statement band use `navy`; the footer and solid CTA buttons use `ink` (`footer-surface` is its alias). Body text is `ink` on light surfaces and `white` on dark ones; drop to `text-muted` only for captions and secondary lines.

`blue` is the one accent — spend it deliberately. It belongs on section headings (`h2`), the big statistics (`display`), line icons, active links and the 3px rule under the utility bar. It is 3.9:1 on white, which clears the 3:1 bar for 24px+ text and UI marks but not the 4.5:1 bar for body copy, so never set paragraph-size text in `blue`. `text-muted` and `link-on-dark` are likewise below 4.5:1 at the sizes the site uses them; both are kept at the brand's exact values and flagged in their token notes — reach for `ink` or `white` whenever a reader must actually read the words.

Separate white cards from `surface-muted` with `border` and `shadow-card`, never with a coloured left-border accent. `notify` (the cart-badge red) is approximate and is the only status colour the source shows; define a full status set before building alerts.

Only one theme, "Brand" (light), is defined — the storefront is light-mode throughout, the dark footer being a surface within it, not a second theme. A dark theme would need brand values that aren't in these files.

## Type

One family, `sans`, carries everything. The production typeface isn't identified in the screenshots and no font files were supplied, so the system substitutes **PT Sans** (a Cyrillic Google face close to the storefront's neutral grotesque) and loads it from Google Fonts in the previews — treat this as a placeholder to confirm. The display figures on the live site are heavier and slightly narrower than PT Sans 700; if the real face is heavier, wire it into `type.fonts` and the scale keeps working.

Use `display` only for hero statistics, `h1` for page titles, `h2` (uppercase, `blue`) for section headings, `h3` for card titles. Body copy is `body`; captions and the uppercase micro-labels under statistics are `label`. CTA labels are `button`, always uppercase.

## Layout, shape and elevation

Corners are square: `radius-square` (0) is the default for buttons, cards and product tiles, and it is a real brand trait — do not soften it. `radius-pill` is only for the search field; `radius-full` is for circular social chips and avatars. Space on the 4px scale (`space-1`…`space-10`); `space-4` is the base padding unit, `space-10` the rhythm between sections. Elevation is subtle — `shadow-card` at rest, `shadow-raised` for menus — over a mostly flat, border-defined surface.

## Iconography

The storefront uses thin single-stroke line icons (delivery truck, price tag, headset, phone) in `blue`, plus solid social glyphs (VK, Telegram, WhatsApp) in circular chips. No icon assets were provided, so the component previews draw simple inline-SVG stand-ins at ~1.6px stroke in `blue`; replace them with the brand's real icon set. Because single-ink SVGs shown through `<img>` can't inherit colour, export each icon already in `blue` (or as a set per surface).

## Logo

The mark is a metallic 3D "M" cube over the "СТАЛЬ-ПЛЮС" wordmark, shown on `navy`. The asset in **Logos** is a crop lifted straight from the storefront screenshot — a reference, not a production file. Get the original vector (SVG/AI) before using the logo anywhere real, and confirm clear-space and minimum-size rules. Until then, set the company name in `sans` 700 rather than redrawing the cube.
