"""Generate public/og-image.png (1200x630) for vibecoders.community.

Run from the repo root:
    uv run --with pillow python scripts/make_og_image.py
"""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter, ImageFont

WIDTH, HEIGHT = 1200, 630
BG = (11, 14, 20)  # #0b0e14
ACCENT = (124, 92, 255)  # #7c5cff
ACCENT2 = (0, 212, 255)  # #00d4ff
TEXT = (230, 233, 240)  # #e6e9f0
MUTED = (154, 164, 184)  # #9aa4b8

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "og-image.png"
FONT_BOLD = "C:/Windows/Fonts/arialbd.ttf"
FONT_REG = "C:/Windows/Fonts/arial.ttf"


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


def main() -> None:
    base = Image.new("RGBA", (WIDTH, HEIGHT), BG + (255,))
    base = Image.alpha_composite(base, radial_glow((WIDTH, HEIGHT), (WIDTH * 0.22, HEIGHT * 0.28), 420, ACCENT, 90))
    base = Image.alpha_composite(base, radial_glow((WIDTH, HEIGHT), (WIDTH * 0.80, HEIGHT * 0.80), 460, ACCENT2, 70))
    img = base.convert("RGB")

    draw = ImageDraw.Draw(img)

    # logo
    icon = lightning(140)
    img.paste(icon, (90, 90), icon)

    # texts
    title_font = ImageFont.truetype(FONT_BOLD, 120)
    sub_font = ImageFont.truetype(FONT_REG, 44)
    tag_font = ImageFont.truetype(FONT_BOLD, 30)

    draw.text((260, 108), "VibeCoders", font=title_font, fill=TEXT)
    draw.text((262, 260), "Code with good vibes", font=sub_font, fill=MUTED)

    # bottom tag
    draw.text((92, HEIGHT - 110), "vibecoders.community", font=tag_font, fill=ACCENT2)

    # gradient underline accent
    for x in range(92, 452):
        p = (x - 92) / 359
        color = tuple(int(ACCENT[i] + (ACCENT2[i] - ACCENT[i]) * p) for i in range(3))
        draw.line([(x, 336), (x, 344)], fill=color)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    img.save(OUT, "PNG")
    print(f"saved {OUT} ({OUT.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
