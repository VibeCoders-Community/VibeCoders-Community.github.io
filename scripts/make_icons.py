"""Generate PNG icons for vibecoders.community from the brand mark.

Pillow can't rasterize SVG, so the icon is drawn programmatically:
a full-bleed rounded square with the accent gradient (#7c5cff -> #00d4ff)
and a white lightning bolt.

Outputs into public/:
    apple-touch-icon.png  180x180
    favicon-32.png         32x32
    icon-192.png          192x192
    icon-512.png          512x512

Run from the repo root:
    uv run --with pillow python scripts/make_icons.py
"""

from pathlib import Path

from PIL import Image, ImageDraw

ACCENT = (124, 92, 255)  # #7c5cff
ACCENT2 = (0, 212, 255)  # #00d4ff
WHITE = (255, 255, 255)

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public"

# Draw at 4x and downscale for smooth edges.
SS = 4

# Same bolt silhouette as the site logo (relative coords).
BOLT = [
    (0.585, 0.14), (0.30, 0.56), (0.47, 0.56),
    (0.40, 0.86), (0.71, 0.42), (0.53, 0.42),
]


def make_icon(size: int) -> Image.Image:
    s = size * SS
    # diagonal gradient, computed at 1x and upscaled
    grad = Image.new("RGBA", (size, size))
    px = grad.load()
    for y in range(size):
        for x in range(size):
            p = (x + y) / (2 * (size - 1))
            px[x, y] = tuple(int(ACCENT[i] + (ACCENT2[i] - ACCENT[i]) * p) for i in range(3)) + (255,)
    grad = grad.resize((s, s), Image.BILINEAR)

    # rounded-square mask
    mask = Image.new("L", (s, s), 0)
    ImageDraw.Draw(mask).rounded_rectangle([0, 0, s - 1, s - 1], radius=int(s * 0.24), fill=255)

    icon = Image.new("RGBA", (s, s), (0, 0, 0, 0))
    icon.paste(grad, (0, 0), mask)

    # white bolt, slightly inset
    pad = s * 0.16
    inner = s - 2 * pad
    bolt = ImageDraw.Draw(icon)
    bolt.polygon([(pad + x * inner, pad + y * inner) for x, y in BOLT], fill=WHITE + (255,))

    return icon.resize((size, size), Image.LANCZOS)


def main() -> None:
    for name, size in [
        ("apple-touch-icon.png", 180),
        ("favicon-32.png", 32),
        ("icon-192.png", 192),
        ("icon-512.png", 512),
    ]:
        img = make_icon(size)
        path = OUT / name
        img.save(path, "PNG")
        print(f"saved {path} ({path.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
