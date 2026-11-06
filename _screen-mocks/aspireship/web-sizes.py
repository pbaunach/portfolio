"""Make display-sized WebP copies of the polished Aspireship screens.

The polished PNGs are 2x renders (about 2,700px wide) that the page shows at
roughly 530 to 880 CSS px. Letting the browser shrink them 3 to 5 times makes
small text crunchy, so the page loads these pre-shrunk copies through srcset
instead. The full PNG stays as the img src, which is what the lightbox opens.

Run from the repo root after re-rendering a screen:
    python _screen-mocks/aspireship/web-sizes.py
"""
from pathlib import Path
from PIL import Image, ImageFilter

SRC = Path('assets/img/aspireship-screens')
OUT = SRC / 'web'
WIDTHS = (640, 1080, 1600)

OUT.mkdir(exist_ok=True)
for png in sorted(SRC.glob('*-polished.png')):
    im = Image.open(png).convert('RGB')
    for w in WIDTHS:
        if w >= im.width:
            continue
        h = round(im.height * w / im.width)
        small = im.resize((w, h), Image.LANCZOS)
        # A light unsharp mask restores the edge contrast the shrink softens.
        small = small.filter(ImageFilter.UnsharpMask(radius=0.8, percent=55, threshold=1))
        dest = OUT / f'{png.stem}-{w}.webp'
        small.save(dest, 'WEBP', quality=90, method=6)
        print(f'{dest}  {w}x{h}  {dest.stat().st_size // 1024} KB')
