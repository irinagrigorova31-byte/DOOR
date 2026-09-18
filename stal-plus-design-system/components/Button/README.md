The primary call to action — a solid dark rectangle with an uppercase label, straight from the storefront's "ВЫЗВАТЬ ЗАМЕРЩИКА" / "НАПИСАТЬ В WHATSAPP" band.

Use `variant="solid"` (`ink` fill, white label) for the main action on a page; it darkens to `navy` on hover. Use `variant="outline"` for a secondary action on a light surface — it inverts to the solid style on hover. Corners stay square (`radius-square`); do not round them. Set one solid button per decision point and pair it with at most one outline.

Consumer provides the label as children, an optional leading `icon` (inline SVG, inherits the label colour), and either an `onClick` handler or an `href` (which renders an `<a>`). `block` makes it full-width for narrow columns and cart panels. The focus ring is a 3px `blue` outline.

Avoid a blue-filled button: a 15px bold label on `blue` sits below the 4.5:1 text floor. Keep actions on `ink`, and spend `blue` on headings, icons and stats instead.
