"""Regenerate PNG icons from the brand bolt artwork (img/logo-bolt.png).

Outputs into public/:
    apple-touch-icon.png  180x180 (solid --bg)
    favicon-32.png         32x32  (transparent)
    icon-192.png          192x192 (transparent)
    icon-512.png          512x512 (transparent)

Run from the repo root:
    uv run --with pillow python scripts/make_icons.py
"""

from pathlib import Path

from PIL import Image

BG = (10, 10, 18, 255)  # #0A0A12

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public"
BOLT = ROOT / "public" / "img" / "logo-bolt.png"


def content_bbox(img: Image.Image) -> Image.Image:
    """Crop to non-transparent content with a small margin."""
    alpha = img.getchannel("A")
    bbox = alpha.getbbox()
    return img.crop(bbox) if bbox else img


def make_icon(bolt: Image.Image, size: int, solid_bg: bool) -> Image.Image:
    canvas = Image.new("RGBA", (size, size), BG if solid_bg else (0, 0, 0, 0))
    inner = int(size * 0.78)
    b = bolt.copy()
    b.thumbnail((inner, inner), Image.LANCZOS)
    canvas.paste(b, ((size - b.width) // 2, (size - b.height) // 2), b)
    return canvas


def main() -> None:
    bolt = content_bbox(Image.open(BOLT).convert("RGBA"))
    for name, size, solid in [
        ("apple-touch-icon.png", 180, True),
        ("favicon-32.png", 32, False),
        ("icon-192.png", 192, False),
        ("icon-512.png", 512, False),
    ]:
        img = make_icon(bolt, size, solid)
        path = OUT / name
        img.save(path, "PNG")
        print(f"saved {path} ({path.stat().st_size} bytes)")


if __name__ == "__main__":
    main()
