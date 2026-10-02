"""Assemble generated engineering diagrams. Never edits user attachments.
Usage: python3 scripts/assemble-preview.py <frames-dir> <output-dir>
Dependency: Pillow. Inkscape must have rendered each frame SVG to same-name PNG.
"""
import json
import sys
from pathlib import Path
from PIL import Image

frames_dir, output_dir = map(Path, sys.argv[1:3])
metadata = json.loads((frames_dir / "frames.json").read_text())
rgb_images = []
for frame in metadata:
    with Image.open(frames_dir / Path(frame["file"]).with_suffix(".png")) as img:
        rgb_images.append(img.convert("RGB"))
# A shared palette lets GIF encode only changed rectangles while keeping the
# Head/status colors stable. Disposal=1 retains unchanged diagram pixels.
palette_strip = Image.new("RGB", (300, 225 * 8))
for i in range(8):
    sample = rgb_images[round(i * (len(rgb_images) - 1) / 7)]
    palette_strip.paste(sample.resize((300, 225)), (0, i * 225))
adaptive = palette_strip.quantize(colors=128).getpalette()[:384]
critical_colors = ["f2f6f9", "f8fbfd", "f8fbfd", "f4f8fb", "e6eff5", "d8eee3",
                   "087f8c", "356ac3", "8254bc", "bc4f91", "a46b10", "c56539",
                   "157957", "39738d", "b44639", "829baa", "526b7b", "173449",
                   "29495c", "ffffff"]
fixed = [int(color[i:i+2], 16) for color in critical_colors for i in (0, 2, 4)]
palette = Image.new("P", (1, 1))
colors = fixed + adaptive
palette.putpalette(colors + [0] * (768 - len(colors)))
images = [img.quantize(palette=palette, dither=Image.Dither.NONE) for img in rgb_images]
output_dir.mkdir(parents=True, exist_ok=True)
images[0].save(output_dir / "Preview_4Glass_Sequential.gif", save_all=True,
               append_images=images[1:], duration=[f["delay"] for f in metadata],
               loop=0, disposal=1, optimize=True)
selected = next(f for f in metadata if f["glass"] == 2 and f["delay"] == 450)
with Image.open(frames_dir / Path(selected["file"]).with_suffix(".png")) as img:
    img.save(output_dir / "Preview_4Glass_Sequential.png")
with Image.open(frames_dir / "cell_detail.png") as img:
    img.save(output_dir / "Preview_Cell_Detail.png")
print(f"Created {len(images)} frames / {sum(f['delay'] for f in metadata) / 1000:.2f} s diagram animation.")
