#!/bin/sh
# Generates assets/js/presets.js from all JSON files in assets/presets/
DIR="$(cd "$(dirname "$0")" && pwd)"
PRESETS_DIR="$DIR/assets/presets"
OUT="$DIR/assets/js/presets.js"

echo "// Auto-generated from assets/presets/*.json — do not edit" > "$OUT"
echo "var PRESETS = {" >> "$OUT"

first=1
for f in "$PRESETS_DIR"/*.json; do
  id=$(basename "$f" .json)
  if [ "$first" = "1" ]; then first=0; else printf ",\n" >> "$OUT"; fi
  printf '  "%s": %s' "$id" "$(cat "$f")" >> "$OUT"
done

printf '\n};\n' >> "$OUT"
echo "var PRESET_IDS = Object.keys(PRESETS);" >> "$OUT"

echo "Generated presets.js"
