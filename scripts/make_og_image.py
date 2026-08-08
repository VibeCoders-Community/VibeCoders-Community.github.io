"""Generate public/og-image.png (1200x630) for vibecoders.community.

Style: neon-terminal identity — void background (#0A0A12), a sharp
1px terminal frame, green prompt lines and the VIBE CODERS wordmark
(white + violet) with a subtle violet glow.

Run from the repo root:
    uv run --with pillow python scripts/make_og_image.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

WIDTH, HEIGHT = 1200, 630
BG = (10, 10, 18)  # #0A0A12
PANEL = (12, 12, 22)  # terminal body
VIOLET = (139, 92, 246)  # #8B5CF6
GREEN = (74, 222, 128)  # #4ADE80
CYAN = (34, 211, 238)  # #22D3EE
TEXT = (232, 234, 242)  # near-white
MUTED = (156, 150, 184)  # #9C96B8

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og-image.png"
FONT_BOLD = "C:/Windows/Fonts/arialbd.ttf"
FONT_REG = "C:/Windows/Fonts/arial.ttf"
FONT_MONO = "C:/Windows/Fonts/consola.ttf"
FONT_MONO_BOLD = "C:/Windows/Fonts/consolab.ttf"


def glow_text(base: Image.Image, xy: tuple[int, int], text: str, font: ImageFont.FreeTypeFont, color: tuple[int, int, int], glow_alpha: int) -> None:
    """Text with a soft colored glow behind it."""
    layer = Image.new("RGBA", base.size, (0, 0, 0, 0))
    ImageDraw.Draw(layer).text(xy, text, font=font, fill=color + (glow_alpha,))
    layer = layer.filter(ImageFilter.GaussianBlur(18))
    base.alpha_composite(layer)
    ImageDraw.Draw(base).text(xy, text, font=font, fill=color + (255,))


def main() -> None:
    # hero-bg as the backdrop (center crop, dark veil for text contrast)
    art = Image.open(ROOT / "public" / "img" / "hero-bg.png").convert("RGB")
    scale = max(WIDTH / art.width, HEIGHT / art.height)
    art = art.resize((int(art.width * scale), int(art.height * scale)), Image.LANCZOS)
    left = (art.width - WIDTH) // 2
    top = (art.height - HEIGHT) // 2
    img = art.crop((left, top, left + WIDTH, top + HEIGHT)).convert("RGBA")
    veil = Image.new("RGBA", (WIDTH, HEIGHT), BG + (115,))
    img.alpha_composite(veil)
    draw = ImageDraw.Draw(img)

    # sharp terminal frame
    fx0, fy0, fx1, fy1 = 90, 90, WIDTH - 90, HEIGHT - 90
    draw.rectangle([fx0, fy0, fx1, fy1], fill=PANEL + (255,), outline=(255, 255, 255, 26), width=1)
    # terminal title bar
    draw.line([(fx0, fy0 + 52), (fx1, fy0 + 52)], fill=(255, 255, 255, 18), width=1)
    for i, c in enumerate([(255, 95, 87), (254, 188, 46), (40, 200, 64)]):
        cx = fx0 + 28 + i * 26
        cy = fy0 + 26
        draw.ellipse([cx - 5, cy - 5, cx + 5, cy + 5], fill=c + (255,))
    mono_small = ImageFont.truetype(FONT_MONO, 22)
    draw.text((fx0 + 100, fy0 + 16), "vibe — zsh", font=mono_small, fill=MUTED)

    title_font = ImageFont.truetype(FONT_BOLD, 128)
    sub_font = ImageFont.truetype(FONT_REG, 40)
    mono_font = ImageFont.truetype(FONT_MONO_BOLD, 30)
    tag_font = ImageFont.truetype(FONT_MONO, 26)

    # eyebrow
    draw.text((140, 190), "> AI VIBE CODING DISCORD COMMUNITY", font=tag_font, fill=GREEN)

    # wordmark
    draw.text((136, 230), "VIBE", font=title_font, fill=TEXT)
    glow_text(img, (136, 362), "CODERS", title_font, VIOLET, 120)
    draw = ImageDraw.Draw(img)

    # terminal lines
    draw.text((140, 528), "$ pixie greet --all", font=mono_font, fill=GREEN)
    draw.text((600, 528), "> good vibes loaded... 100%", font=mono_font, fill=CYAN)

    # url tag
    draw.text((WIDTH - 340, HEIGHT - 60), "vibecoders.community", font=tag_font, fill=MUTED)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.convert("RGB").save(OUT, "PNG")
    print(f"saved {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
