# xkb.sccl

XKB config generator for Linux. Create and customize keyboard layouts visually, then export valid XKB configuration.

[xkb.sccl.cc](https://xkb.sccl.cc)

## Features

- Full keyboard visualization with all XKB-supported keys
- Multiple layers: Base, Shift, AltGr, AltGr+Shift (up to 8)
- Any XKB keysym name: Latin, Cyrillic, Greek, Arabic, Hebrew, Thai, dead keys, function keys, and more
- Pre-built layouts: QWERTY, Colemak, Colemak-DH, Dvorak, Workman,ЙЦУКЕН
- Export/import layout as JSON
- Copy XKB config to clipboard or download as .xkb file
- Works with xmodmap and xkbcomp

## Quick Start

1. Select a layout from the dropdown or start from scratch
2. Click any key on the keyboard to bind it
3. Use the search box to find XKB symbols
4. Switch between layers with the tabs
5. Click **copy xkb config** or **download .xkb**

## Using the Generated Config

The generator produces XKB symbol definitions. To apply:

```sh
xkbcomp my-layout.xkb $XKB_SYMS_DIR/my-layout
```

For persistent setup, add to your `/etc/X11/xkb/symbols/` or use your desktop environment's keyboard settings.

## Links

- [Source code](https://github.com/scclie/xkb.sccl)
- [XKB keymap format docs](https://xkbcommon.org/doc/current/keymap-text-format-v1-v2.html)
- [XKB keysym reference](https://xkbcommon.org/doc/current/group__keysyms.html)
