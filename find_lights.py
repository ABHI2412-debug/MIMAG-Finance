import sys

try:
    from PIL import Image
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pillow"])
    from PIL import Image

img = Image.open(r"d:\MIMAG-Finance\assets\journey-mountain.png")
rgb_img = img.convert('RGB')
pixels = rgb_img.load()
width, height = img.size

# Find bright pixels (luminance > 240, mostly yellow/white)
lights = []
for y in range(height):
    for x in range(width):
        r, g, b = pixels[x, y]
        lum = 0.2126*r + 0.7152*g + 0.0722*b
        if lum > 240 and r > 240 and g > 230:
            lights.append((x, y, lum))

# Group nearby bright pixels into clusters
clusters = []
for x, y, lum in lights:
    found_cluster = False
    for cluster in clusters:
        cx, cy, _, count = cluster
        if abs(x - cx) < 20 and abs(y - cy) < 20:
            cluster[0] = (cx * count + x) / (count + 1)
            cluster[1] = (cy * count + y) / (count + 1)
            cluster[2] = max(cluster[2], lum)
            cluster[3] += 1
            found_cluster = True
            break
    if not found_cluster:
        clusters.append([x, y, lum, 1])

clusters.sort(key=lambda c: c[3], reverse=True)
for i, c in enumerate(clusters[:10]):
    print(f"Cluster {i+1}: X={c[0]:.1f}, Y={c[1]:.1f}, Size={c[3]}")
