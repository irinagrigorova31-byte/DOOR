The benefit card behind "Почему нас выбирают" — a white, bordered, softly raised panel with a blue line icon, a bold title and a muted supporting line. Lay three or four across on `surface-muted`.

Consumer provides an `icon` (inline SVG that inherits `blue` via currentColor), a `title`, and the supporting copy as children. The card fills `white`, is set apart from the section by `border` and `shadow-card`, and keeps square corners.

Icons must ship in `blue` (or as an inline SVG using currentColor as here) — a single-ink icon delivered as an `<img>` can't be recoloured. Title is `ink` (`h3`); body is `text-muted` and should stay to a short phrase, since `text-muted` is a caption weight, not reading text. Don't add a coloured left border — separation here is the card edge and shadow, not an accent stripe.
