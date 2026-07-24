# Contributing a Layout

Want to add your keyboard layout to xkb.sccl? Here's how.

## Quick Start

1. Create your layout on [xkb.sccl.cc](https://xkb.sccl.cc)
2. Click **export layout** to download the JSON file
3. Fork this repo and add your JSON to `assets/presets/`
   - Filename becomes the preset id: `my-layout.json` → id `my-layout`
4. [Open a PR](https://github.com/scclie/xkb.sccl/pulls)

That's it. The build script runs automatically on deploy.

## JSON Format

Same format as the export. Minimal example:

```json
{
  "name": "My Layout",
  "desc": "A short description",
  "layers": [
    {
      "keys": {
        "TLDE": "grave",
        "AE01": "1", "AE02": "2", "AE03": "3", "AE04": "4", "AE05": "5",
        "AE06": "6", "AE07": "7", "AE08": "8", "AE09": "9", "AE10": "0",
        "AE11": "minus", "AE12": "equal",
        "AD01": "q", "AD02": "w", "AD03": "e", "AD04": "r", "AD05": "t",
        "AD06": "y", "AD07": "u", "AD08": "i", "AD09": "o", "AD10": "p",
        "AD11": "bracketleft", "AD12": "bracketright",
        "BKSL": "backslash",
        "AC01": "a", "AC02": "s", "AC03": "d", "AC04": "f",
        "AC05": "g", "AC06": "h", "AC07": "j", "AC08": "k", "AC09": "l",
        "AC10": "semicolon", "AC11": "apostrophe",
        "AB01": "z", "AB02": "x", "AB03": "c", "AB04": "v", "AB05": "b",
        "AB06": "n", "AB07": "m", "AB08": "comma", "AB09": "period", "AB10": "slash",
        "SPCE": "space"
      }
    },
    {
      "keys": {
        "TLDE": "asciitilde",
        "AE01": "exclam", "AE02": "at", "AE03": "numbersign", "AE04": "dollar", "AE05": "percent",
        "AE06": "asciicircum", "AE07": "ampersand", "AE08": "asterisk", "AE09": "parenleft", "AE10": "parenright",
        "AE11": "underscore", "AE12": "plus",
        "AD01": "Q", "AD02": "W", "AD03": "E", "AD04": "R", "AD05": "T",
        "AD06": "Y", "AD07": "U", "AD08": "I", "AD09": "O", "AD10": "P",
        "AD11": "braceleft", "AD12": "braceright",
        "BKSL": "bar",
        "AC01": "A", "AC02": "S", "AC03": "D", "AC04": "F",
        "AC05": "G", "AC06": "H", "AC07": "J", "AC08": "K", "AC09": "L",
        "AC10": "colon", "AC11": "quotedbl",
        "AB01": "Z", "AB02": "X", "AB03": "C", "AB04": "V", "AB05": "B",
        "AB06": "N", "AB07": "M", "AB08": "less", "AB09": "greater", "AB10": "question"
      }
    }
  ]
}
```

Only bind the keys you need. Unbound keys are left empty.

## Key Codes

Physical key positions (ANSI layout):

```
TLDE                                          (backtick/tilde)
AE01 AE02 AE03 AE04 AE05 AE06 AE07 AE08 AE09 AE10 AE11 AE12  (number row)
AD01 AD02 AD03 AD04 AD05 AD06 AD07 AD08 AD09 AD10 AD11 AD12  (top letter row)
AC01 AC02 AC03 AC04 AC05 AC06 AC07 AC08 AC09 AC10 AC11        (home row)
AB01 AB02 AB03 AB04 AB05 AB06 AB07 AB08 AB09 AB10            (bottom row)
BKSL                                                          (backslash)
SPCE                                                          (spacebar)
```

## Symbol Names

Use [XKB keysym names](https://xkbcommon.org/doc/current/group__keysyms.html) (without the `XKB_KEY_` prefix).

### Common Keys

| Category | Examples |
|---|---|
| Letters | `a`–`z`, `A`–`Z` |
| Numbers | `0`–`9` |
| Punctuation | `minus`, `equal`, `bracketleft`, `bracketright`, `semicolon`, `apostrophe`, `grave`, `comma`, `period`, `slash`, `backslash` |
| Shifted | `exclam`, `at`, `numbersign`, `dollar`, `percent`, `asciicircum`, `ampersand`, `asterisk`, `parenleft`, `parenright`, `underscore`, `plus`, `braceleft`, `braceright`, `colon`, `quotedbl`, `tilde`, `less`, `greater`, `question`, `bar` |
| Cyrillic | `Cyrillic_a`, `Cyrillic_A`, `Cyrillic_be`, `Cyrillic_BE`, `Cyrillic_shorti`, `Cyrillic_SHORTI`, ... |
| Greek | `Greek_alpha`, `Greek_ALPHA`, `Greek_beta`, `Greek_BETA`, ... |
| Arabic | `Arabic_alef`, `Arabic_beh`, `Arabic_teh`, ... |
| Hebrew | `hebrewAleph`, `hebrewBet`, `hebrewGimel`, ... |
| Thai | `Thai_kokai`, `Thai_khokhai`, ... |
| Dead keys | `dead_grave`, `dead_acute`, `dead_circumflex`, `dead_tilde`, `dead_diaeresis`, ... |
| Function | `F1`–`F35` |
| Special | `space`, `BackSpace`, `Tab`, `Return`, `Escape`, `Delete` |

Use the search box on the site to find any keysym by name.

## Layers

| Index | Modifier |
|---|---|
| `layers[0]` | Base (no modifier) |
| `layers[1]` | Shift |
| `layers[2]` | AltGr |
| `layers[3]` | AltGr+Shift |

You can add more layers (up to 8). Each layer is independent — bind only the keys that change.

## Testing Locally

```sh
# Install deps (first time only)
npm install

# Start dev server
npm run dev

# Open http://localhost:8080 and select your layout from the dropdown
```

## Pull Request Checklist

- [ ] JSON is valid (paste into [jsonlint.com](https://jsonlint.com) to check)
- [ ] File is in `assets/presets/` with a lowercase filename (e.g. `workman.json`)
- [ ] `name` and `desc` are set in the JSON
