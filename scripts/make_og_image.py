"""Generate public/og-image.png (1200x630) for vibecoders.community.

Style: AI vibe coding identity — near-black base, aurora glows
(violet/cyan/magenta), a glassmorphism panel and a terminal-motif line.

Run from the repo root:
    uv run --with pillow python scripts/make_og_image.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

WIDTH, HEIGHT = 1200, 630
BG = (5, 6, 10)  # #05060a
ACCENT = (124, 92, 255)  # #7c5cff
ACCENT2 = (0, 212, 255)  # #00d4ff
ACCENT3 = (255, 92, 168)  # #ff5ca8
TEXT = (230, 233, 240)  # #e6e9f0
MUTED = (168, 178, 199)  # #a8b2c7

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og-image.png"
FONT_BOLD = "C:/Windows/Fonts/arialbd.ttf"
FONT_REG = "C:/Windows/Fonts/arial.ttf"
FONT_MONO = "C:/Windows/Fonts/consola.ttf"


def radial_glow(size: tuple[int, int], center: tuple[float, float], radius: float, color: tuple[int, int, int], alpha: int) -> Image.Image:
    """Soft radial glow on a transparent layer."""
    layer = Image.new("RGBA", size, (0, 0, 0, 0))
    draw = ImageDraw.Draw(layer)
    steps = 48
    for i in range(steps, 0, -1):
        r = radius * i / steps
        a = int(alpha * (1 - i / steps) ** 2)
        draw.ellipse(
            [center[0] - r, center[1] - r, center[0] + r, center[1] + r],
            fill=(*color, a),
        )
    return layer.filter(ImageFilter.GaussianBlur(40))


def lightning(size: int) -> Image.Image:
    """Lightning bolt in a rounded square with accent gradient."""
    icon = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    # vertical gradient
    grad = Image.new("RGBA", (1, size))
    for y in range(size):
        p = y / (size - 1)
        grad.putpixel((0, y), tuple(int(ACCENT[i] + (ACCENT2[i] - ACCENT[i]) * p) for i in range(3)) + (255,))
    grad = grad.resize((size, size))
    mask = Image.new("L", (size, size), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, size - 1, size - 1], radius=int(size * 0.26), fill=255)
    icon.paste(grad, (0, 0), mask)
    # bolt
    bolt = ImageDraw.Draw(icon)
    pts = [
        (0.585, 0.14), (0.30, 0.56), (0.47, 0.56),
        (0.40, 0.86), (0.71, 0.42), (0.53, 0.42),
    ]
    bolt.polygon([(x * size, y * size) for x, y in pts], fill=BG + (255,))
    return icon


def glass_panel(box: tuple[int, int, int, int], radius: int) -> Image.Image:
    """Frosted-glass rounded panel with a subtle light border."""
    panel = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(panel)
    draw.rounded_rectangle(box, radius=radius, fill=(255, 255, 255, 12))
    draw.rounded_rectangle(box, radius=radius, outline=(255, 255, 255, 34), width=2)
    return panel


def gradient_line(draw: ImageDraw.ImageDraw, x0: int, x1: int, y0: int, y1: int) -> None:
    """Horizontal 3-stop gradient accent line (violet -> cyan -> magenta)."""
    for x in range(x0, x1):
        p = (x - x0) / max(x1 - x0 - 1, 1)
        if p < 0.5:
            q = p * 2
            color = tuple(int(ACCENT[i] + (ACCENT2[i] - ACCENT[i]) * q) for i in range(3))
        else:
            q = (p - 0.5) * 2
            color = tuple(int(ACCENT2[i] + (ACCENT3[i] - ACCENT2[i]) * q) for i in range(3))
        draw.line([(x, y0), (x, y1)], fill=color)


def main() -> None:
    base = Image.new("RGBA", (WIDTH, HEIGHT), BG + (255,))
    # aurora glows
    base = Image.alpha_composite(base, radial_glow((WIDTH, HEIGHT), (WIDTH * 0.16, HEIGHT * 0.10), 480, ACCENT, 110))
    base = Image.alpha_composite(base, radial_glow((WIDTH, HEIGHT), (WIDTH * 0.88, HEIGHT * 0.55), 460, ACCENT2, 80))
    base = Image.alpha_composite(base, radial_glow((WIDTH, HEIGHT), (WIDTH * 0.45, HEIGHT * 1.05), 520, ACCENT3, 70))
    # glass panel
    base = Image.alpha_composite(base, glass_panel((110, 150, 1090, 480), 28))
    img = base.convert("RGB")

    draw = ImageDraw.Draw(img)

    # logo
    icon = lightning(110)
    img.paste(icon, (160, 205), icon)

    # texts
    title_font = ImageFont.truetype(FONT_BOLD, 96)
    sub_font = ImageFont.truetype(FONT_REG, 42)
    mono_font = ImageFont.truetype(FONT_MONO, 30)
    tag_font = ImageFont.truetype(FONT_BOLD, 30)

    draw.text((300, 200), "VibeCoders", font=title_font, fill=TEXT)
    draw.text((302, 322), "AI vibe coding community", font=sub_font, fill=MUTED)
    draw.text((302, 392), "$ pixie create app   ->  done in 4.2s", font=mono_font, fill=ACCENT2)

    # gradient underline accent
    gradient_line(draw, 302, 662, 374, 380)

    # bottom tag
    draw.text((112, HEIGHT - 104), "vibecoders.community", font=tag_font, fill=ACCENT2)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG")
    print(f"saved {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
