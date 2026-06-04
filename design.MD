Color
Everything is monochrome. No green, no gradients-as-backgrounds, no color accents.

Background: pure black #000000
Foreground / text: white #FFFFFF, used at full and reduced opacity
Text opacity steps: white (full), white/90 (most body text and links), white/80 (kicker/labels)
Glass fills: near-invisible white — rgba(255,255,255,0.01) for subtle glass
Glass borders/highlights: white at low alpha — rgba(255,255,255,0.1) to 0.45, applied as inset highlights and gradient edges
Inverted elements: white background + black text (bg-white text-black) for primary pills/buttons and "New"-style chips

Typography
Two families only.

Headings — Instrument Serif, always used italic. Loaded with both upright and italic (ital@0;1) but italic in practice. Used for headlines, large stat numbers, partner/brand names.
Body — Barlow, weights 300, 400, 500, 600. Used for nav links, body copy, labels, tags, buttons.

Type treatment characteristics:

Headlines are very large (up to ~5.5–6rem) with tight tracking (tracking-[-3px] to -4px) and crushed line-height (leading-[0.8] to 0.9)
Body copy is light weight (font-light / 300), small (text-sm–text-base), with tight/snug leading
Kickers use a // Label prefix convention

Shape & radius

Global default radius is a pill: border-radius: 9999px set as the Tailwind DEFAULT, so any bare rounded becomes fully pill-shaped
Cards break from that with a soft rectangle: rounded-[1.25rem]
Nested icon tiles inside cards: smaller rounded-[0.75rem]
Net effect: pills for all chrome (nav, chips, buttons, tags), gently-rounded rectangles for content cards

The liquid-glass system
The signature material. Two tiers:
.liquid-glass (subtle) — for nav, chips, tags, cards

Fill: rgba(255,255,255,0.01) with background-blend-mode: luminosity
Blur: backdrop-filter: blur(4px)
No border; instead an inset top highlight inset 0 1px 1px rgba(255,255,255,0.1)
A ::before pseudo-element draws a 1.4px gradient edge — a vertical white gradient (bright at top/bottom ~0.45, fading to transparent in the middle) masked to show only the border via mask-composite: exclude
position: relative; overflow: hidden

.liquid-glass-strong (heavy) — for the primary CTA

Same recipe but blur(50px), a drop shadow added (4px 4px 4px rgba(0,0,0,0.05)), brighter inset highlight (0.15), and a more contrasted edge gradient (stops at 0.5 / 0.2 / 0)

The design intent: contrast comes from the glass chrome, not from overlays. Backgrounds sit full-bleed with no darkening layer; the frosted edges and inset highlights are what make text legible.
Motion language

Entrance: elements animate in from blur(10px), opacity: 0, y: 20, easing easeOut, staggered by delay (0.4s → 1.4s cascade)
Text reveal: word-by-word blur-in — each word travels blur(10px)→blur(5px)→blur(0), opacity 0→0.5→1, y: 50→-5→0, ~0.7s per word, staggered ~100ms
Video transitions: rAF-driven opacity crossfades only — no CSS transitions on media
Overall: soft, blur-led, deliberate — nothing snaps

One-line summary of the aesthetic
A pure black canvas, white-on-black monochrome, two-font pairing (italic Instrument Serif display + light Barlow body) with crushed tracking and leading, a pill-by-default shape language, and a frosted "liquid-glass" material whose gradient edges and inset highlights — not overlays — carry all the contrast. Motion is blur-led and staggered.

Here are the nav details extracted from the prompt, content stripped to the structural/style spec.
Navbar — structure & style
Container

fixed, offset top-4 from the top
Horizontal padding px-8, lg:px-16
z-50 (sits above everything)
Three-part layout: left / center / right

Left — logo

48×48 circle
.liquid-glass material
Holds a single lowercase italic serif character (Instrument Serif)

Center — nav cluster (desktop only)

A .liquid-glass pill containing the links, padding px-1.5 py-1.5
Inside: a row of text links, each px-3 py-2, text-sm, font-medium, text-white/90, font-body (Barlow)
Followed immediately by a primary pill button: bg-white text-black, whitespace-nowrap, label + ArrowUpRight icon
The button lives inside/attached to the same center cluster, after the links — not on the right

Right — spacer

48×48 invisible element
Exists purely to balance the left logo so the center cluster stays optically centered

Behavior / responsive

The center link cluster is desktop-only — hidden on smaller screens
Logo (left) and spacer (right) persist across breakpoints
Nav is fixed and overlays the hero video directly (no background bar, no overlay — contrast comes from the glass pill itself)

Icon used

ArrowUpRight — 24×24, paths M7 17L17 7 + M7 7h10v10, strokeWidth 2, round caps — on the primary button

