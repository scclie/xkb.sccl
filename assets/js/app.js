(function () {
  "use strict";

  var MAX_LAYERS = 8;

  var MAIN_KEYBOARD = [
    [
      "TLDE",
      "AE01",
      "AE02",
      "AE03",
      "AE04",
      "AE05",
      "AE06",
      "AE07",
      "AE08",
      "AE09",
      "AE10",
      "AE11",
      "AE12",
      "BSPC",
    ],
    [
      "TAB",
      "AD01",
      "AD02",
      "AD03",
      "AD04",
      "AD05",
      "AD06",
      "AD07",
      "AD08",
      "AD09",
      "AD10",
      "AD11",
      "AD12",
      "BKSL",
    ],
    [
      "CAPS",
      "AC01",
      "AC02",
      "AC03",
      "AC04",
      "AC05",
      "AC06",
      "AC07",
      "AC08",
      "AC09",
      "AC10",
      "AC11",
      "AC12",
      "RTRN",
    ],
    [
      "LSFT",
      "AB01",
      "AB02",
      "AB03",
      "AB04",
      "AB05",
      "AB06",
      "AB07",
      "AB08",
      "AB09",
      "AB10",
      "AB11",
      "AB12",
      "RSFT",
    ],
    ["LCTL", "LWIN", "LALT", "SPCE", "RALT", "RWIN", "RCTL"],
  ];

  var EXTRA_KEYBOARD = [
    [
      "ESC",
      "FK01",
      "FK02",
      "FK03",
      "FK04",
      "FK05",
      "FK06",
      "FK07",
      "FK08",
      "FK09",
      "FK10",
      "FK11",
      "FK12",
    ],
    [
      "",
      "FK13",
      "FK14",
      "FK15",
      "FK16",
      "FK17",
      "FK18",
      "FK19",
      "FK20",
      "FK21",
      "FK22",
      "FK23",
      "FK24",
    ],
    [
      "INS",
      "HM",
      "PGU",
      "DEL",
      "END",
      "PGD",
      "",
      "NLK",
      "KP7",
      "KP8",
      "KP9",
      "KPSU",
    ],
    ["UP", "", "LEFT", "DOWN", "RGHT", "", "KPAD", "KP4", "KP5", "KP6", "KPPL"],
    [
      "VOLU",
      "MUTE",
      "VOLD",
      "",
      "",
      "",
      "KP00",
      "KP0",
      "KP1",
      "KP2",
      "KP3",
      "KPEN",
    ],
  ];

  var KEY_LABELS = {
    ESC: "Esc",
    FK01: "F1",
    FK02: "F2",
    FK03: "F3",
    FK04: "F4",
    FK05: "F5",
    FK06: "F6",
    FK07: "F7",
    FK08: "F8",
    FK09: "F9",
    FK10: "F10",
    FK11: "F11",
    FK12: "F12",
    FK13: "F13",
    FK14: "F14",
    FK15: "F15",
    FK16: "F16",
    FK17: "F17",
    FK18: "F18",
    FK19: "F19",
    FK20: "F20",
    FK21: "F21",
    FK22: "F22",
    FK23: "F23",
    FK24: "F24",
    TLDE: "`~",
    AE01: "1!",
    AE02: "2@",
    AE03: "3#",
    AE04: "4$",
    AE05: "5%",
    AE06: "6^",
    AE07: "7&",
    AE08: "8*",
    AE09: "9(",
    AE10: "0)",
    AE11: "-_",
    AE12: "=+",
    TAB: "Tab",
    AD01: "qQ",
    AD02: "wW",
    AD03: "eE",
    AD04: "rR",
    AD05: "tT",
    AD06: "yY",
    AD07: "uU",
    AD08: "iI",
    AD09: "oO",
    AD10: "pP",
    AD11: "[{",
    AD12: "]}",
    BKSL: "\\|",
    CAPS: "Caps",
    AC01: "aA",
    AC02: "sS",
    AC03: "dD",
    AC04: "fF",
    AC05: "gG",
    AC06: "hH",
    AC07: "jJ",
    AC08: "kK",
    AC09: "lL",
    AC10: ";:",
    AC11: "'\"",
    AC12: "`~",
    RTRN: "Enter",
    LSFT: "Shift",
    AB01: "zZ",
    AB02: "xX",
    AB03: "cC",
    AB04: "vV",
    AB05: "bB",
    AB06: "nN",
    AB07: "mM",
    AB08: ",<",
    AB09: ".>",
    AB10: "/?",
    AB11: "Shift",
    AB12: "Shift",
    RSFT: "Shift",
    LCTL: "Ctrl",
    LWIN: "Win",
    LALT: "Alt",
    SPCE: "Space",
    RALT: "AltGr",
    RWIN: "Win",
    RCTL: "Ctrl",
    BSPC: "Bksp",
    INS: "Ins",
    HM: "Home",
    PGU: "PgUp",
    DEL: "Del",
    END: "End",
    PGD: "PgDn",
    NLK: "NumLk",
    SLK: "ScrLk",
    KPSU: "KP-",
    KPPL: "KP.",
    KPAD: "KP+",
    KPEN: "KPEnt",
    KP0: "KP0",
    KP1: "KP1",
    KP2: "KP2",
    KP3: "KP3",
    KP4: "KP4",
    KP5: "KP5",
    KP6: "KP6",
    KP7: "KP7",
    KP8: "KP8",
    KP9: "KP9",
    KPDL: "KP.",
    KP00: "KP00",
    KPSP: "KPSP",
    UP: "↑",
    DOWN: "↓",
    LEFT: "←",
    RGHT: "→",
    MUTE: "Mute",
    VOLD: "Vol-",
    VOLU: "Vol+",
  };

  var KEY_WIDTHS = {
    TLDE: 1,
    AE01: 1,
    AE02: 1,
    AE03: 1,
    AE04: 1,
    AE05: 1,
    AE06: 1,
    AE07: 1,
    AE08: 1,
    AE09: 1,
    AE10: 1,
    AE11: 1,
    AE12: 1,
    TAB: 1,
    AD01: 1,
    AD02: 1,
    AD03: 1,
    AD04: 1,
    AD05: 1,
    AD06: 1,
    AD07: 1,
    AD08: 1,
    AD09: 1,
    AD10: 1,
    AD11: 1,
    AD12: 1,
    BKSL: 1.5,
    CAPS: 1.75,
    AC01: 1,
    AC02: 1,
    AC03: 1,
    AC04: 1,
    AC05: 1,
    AC06: 1,
    AC07: 1,
    AC08: 1,
    AC09: 1,
    AC10: 1,
    AC11: 1,
    AC12: 1,
    RTRN: 2.25,
    LSFT: 2.25,
    AB01: 1,
    AB02: 1,
    AB03: 1,
    AB04: 1,
    AB05: 1,
    AB06: 1,
    AB07: 1,
    AB08: 1,
    AB09: 1,
    AB10: 1,
    AB11: 1,
    AB12: 1,
    RSFT: 2.75,
    LCTL: 1.25,
    LWIN: 1.25,
    LALT: 1.25,
    SPCE: 6.25,
    RALT: 1.25,
    RWIN: 1.25,
    RCTL: 1.25,
    BSPC: 2,
    ESC: 1,
    FK01: 1,
    FK02: 1,
    FK03: 1,
    FK04: 1,
    FK05: 1,
    FK06: 1,
    FK07: 1,
    FK08: 1,
    FK09: 1,
    FK10: 1,
    FK11: 1,
    FK12: 1,
    FK13: 1,
    FK14: 1,
    FK15: 1,
    FK16: 1,
    FK17: 1,
    FK18: 1,
    FK19: 1,
    FK20: 1,
    FK21: 1,
    FK22: 1,
    FK23: 1,
    FK24: 1,
    INS: 1,
    HM: 1,
    PGU: 1,
    DEL: 1,
    END: 1,
    PGD: 1,
    NLK: 1,
    KPSU: 1,
    KPAD: 1,
    KPPL: 1,
    KPEN: 1,
    KP0: 1,
    KP1: 1,
    KP2: 1,
    KP3: 1,
    KP4: 1,
    KP5: 1,
    KP6: 1,
    KP7: 1,
    KP8: 1,
    KP9: 1,
    KPDL: 1,
    KP00: 1,
    KPSP: 1,
    UP: 1,
    DOWN: 1,
    LEFT: 1,
    RGHT: 1,
    MUTE: 1,
    VOLD: 1,
    VOLU: 1,
  };

  var ALL_SYMBOLS = [
    "ISO_Group_Shift",
    "Mode_switch",
    "script_switch",
    "Num_Lock",
    "Shift_L",
    "Shift_R",
    "Control_L",
    "Control_R",
    "Caps_Lock",
    "Shift_Lock",
    "Meta_L",
    "Meta_R",
    "Alt_L",
    "Alt_R",
    "Super_L",
    "Super_R",
    "Hyper_L",
    "Hyper_R",
    "ISO_Level3_Shift",
    "ISO_Level5_Shift",
    "kana_switch",
    "Arabic_switch",
    "Greek_switch",
    "Hebrew_switch",
    "Hangul_switch",
    "KP_F1",
    "KP_F2",
    "KP_F3",
    "KP_F4",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "F13",
    "F14",
    "F15",
    "F16",
    "F17",
    "F18",
    "F19",
    "F20",
    "F21",
    "F22",
    "F23",
    "F24",
    "F25",
    "F26",
    "F27",
    "F28",
    "F29",
    "F30",
    "F31",
    "F32",
    "F33",
    "F34",
    "F35",
    "dead_grave",
    "dead_acute",
    "dead_circumflex",
    "dead_tilde",
    "dead_perispomeni",
    "dead_macron",
    "dead_breve",
    "dead_abovedot",
    "dead_diaeresis",
    "dead_abovering",
    "dead_doubleacute",
    "dead_caron",
    "dead_cedilla",
    "dead_ogonek",
    "dead_iota",
    "dead_voiced_sound",
    "dead_semivoiced_sound",
    "dead_belowdot",
    "dead_hook",
    "dead_horn",
    "dead_stroke",
    "dead_abovecomma",
    "dead_psili",
    "dead_abovereversedcomma",
    "dead_dasia",
    "dead_doublegrave",
    "dead_belowring",
    "dead_belowmacron",
    "dead_belowcircumflex",
    "dead_belowtilde",
    "dead_belowbreve",
    "dead_belowdiaeresis",
    "dead_invertedbreve",
    "dead_belowcomma",
    "dead_currency",
    "dead_lowline",
    "dead_aboveverticalline",
    "dead_belowverticalline",
    "dead_longsolidusoverlay",
    "dead_a",
    "dead_A",
    "dead_e",
    "dead_E",
    "dead_i",
    "dead_I",
    "dead_o",
    "dead_O",
    "dead_u",
    "dead_U",
    "dead_schwa",
    "dead_SCHWA",
    "dead_greek",
    "dead_hamza",
    "dead_apostrophe",
    "Hangul_Kiyeog",
    "Hangul_SsangKiyeog",
    "Hangul_Nieun",
    "Hangul_SsangNieun",
    "Hangul_Dikeud",
    "Hangul_SsangDikeud",
    "Hangul_Rieul",
    "Hangul_SsangRieul",
    "Hangul_Mieum",
    "Hangul_Pieup",
    "Hangul_SsangPieup",
    "Hangul_Siot",
    "Hangul_SsangSiot",
    "Hangul_Ieung",
    "Hangul_Jieuj",
    "Hangul_SsangJieuj",
    "Hangul_Cieuc",
    "Hangul_Khieuq",
    "Hangul_Tieut",
    "Hangul_Phieuf",
    "Hangul_SsangPhieuf",
    "Hangul_Hieuh",
    "Hangul_Kiyeog_Sios",
    "Hangul_Nieun_Jieuj",
    "Hangul_Nieun_Hieuh",
    "Hangul_Nieun_Tikeut",
    "Hangul_Rieul_Kiyeog",
    "Hangul_Rieul_Mieum",
    "Hangul_Rieul_Pieup",
    "Hangul_Rieul_Siot",
    "Hangul_Rieul_Tieut",
    "Hangul_Rieul_Phieuf",
    "Hangul_Rieul_Hieuh",
    "Hangul_Mieum_Pieup",
    "Hangul_Pieup_Sios",
    "Hangul_Pieup_BanPieup",
    "Hangul_Pieup_Sios_Kiyeog",
    "Hangul_Pieup_Sios_Tikeut",
    "Hangul_Pieup_Sios_Pieup",
    "Hangul_Pieup_Sios_Hieuh",
    "Hangul_Start",
    "Hangul_End",
    "Hangul_Noun",
    "Hangul_Value",
    "Hangul_J_SsangKiyeog",
    "Hangul_J_Nieun",
    "Hangul_J_Dikeud",
    "Hangul_J_Rieul",
    "Hangul_J_Mieum",
    "Hangul_J_Pieup",
    "Hangul_J_Siot",
    "Hangul_J_Ieung",
    "Hangul_J_Jieuj",
    "Hangul_J_Cieuc",
    "Hangul_J_Khieuq",
    "Hangul_J_Tieut",
    "Hangul_J_Phieuf",
    "Hangul_J_Hieuh",
    "Hangul_Rieul_Hieuh_Hieuh",
    "Hangul_Rieul_Tieut_Tieut",
    "Hangul_Rieul_Phieuf_Phieuf",
    "Hangul_Rieul_Pieup_Pieup",
    "Hangul_J_Pieup_Phieuf",
    "Hangul_J_Pieup_Sios_Pieup",
    "Hangul_J_Pieup_Sios_BanPieup",
    "Hangul_J_Pieup_Sios_Sios",
    "Hangul_J_Pieup_Sios_Cieuc",
    "Hangul_J_Pieup_Sios_Jieuj",
    "Hangul_J_Pieup_Sios_Tikeut",
    "Hangul_J_Pieup_Sios_Hieuh",
    "Hangul_J_Pieup_Hieuh",
    "Hangul_Pieup_Sios_Pieup",
    "Hangul_Pieup_BanPieup_BanPieup",
    "Hangul_SsangPieup_Pieup",
    "Hangul_Rieul_Pieup_Hieuh",
    "Hangul_Rieul_Khieuq_Hieuh",
    "Hangul_Rieul_Tieut_Nieun",
    "Hangul_Rieul_Cieuc_Hieuh",
    "Hangul_Rieul_Phieuf_Hieuh",
    "Hangul_Rieul_Mieum_Hieuh",
    "Hangul_Rieul_Mieum_Pieup_Hieuh",
    "Hangul_Start_BanPieup",
    "Hangul_Start_Dikeud",
    "Hangul_Start_Rieul",
    "Hangul_Start_Mieum",
    "Hangul_Start_Pieup",
    "Hangul_Start_Siot",
    "Hangul_Start_Ieung",
    "Hangul_Start_Jieuj",
    "Hangul_Start_Cieuc",
    "Hangul_Start_Khieuq",
    "Hangul_Start_Tieut",
    "Hangul_Start_Phieuf",
    "Hangul_Start_Hieuh",
    "space",
    "nobreakspace",
    "exclamdown",
    "cent",
    "sterling",
    "currency",
    "yen",
    "brokenbar",
    "section",
    "diaeresis",
    "copyright",
    "ordfeminine",
    "guillemetleft",
    "notsign",
    "hyphen",
    "registered",
    "macron",
    "degree",
    "plusminus",
    "twosuperior",
    "threesuperior",
    "acute",
    "mu",
    "paragraph",
    "periodcentered",
    "cedilla",
    "onesuperior",
    "masculine",
    "guillemetright",
    "onequarter",
    "onehalf",
    "threequarters",
    "questiondown",
    "Agrave",
    "Aacute",
    "Acircumflex",
    "Atilde",
    "Adiaeresis",
    "Aring",
    "AE",
    "Ccedilla",
    "Egrave",
    "Eacute",
    "Ecircumflex",
    "Ediaeresis",
    "Igrave",
    "Iacute",
    "Icircumflex",
    "Idiaeresis",
    "ETH",
    "Ntilde",
    "Ograve",
    "Oacute",
    "Ocircumflex",
    "Otilde",
    "Odiaeresis",
    "multiply",
    "Oslash",
    "Ugrave",
    "Uacute",
    "Ucircumflex",
    "Udiaeresis",
    "Yacute",
    "THORN",
    "ssharp",
    "agrave",
    "aacute",
    "acircumflex",
    "atilde",
    "adiaeresis",
    "aring",
    "ae",
    "ccedilla",
    "egrave",
    "eacute",
    "ecircumflex",
    "ediaeresis",
    "igrave",
    "iacute",
    "icircumflex",
    "idiaeresis",
    "eth",
    "ntilde",
    "ograve",
    "oacute",
    "ocircumflex",
    "otilde",
    "odiaeresis",
    "division",
    "oslash",
    "ugrave",
    "uacute",
    "ucircumflex",
    "udiaeresis",
    "yacute",
    "thorn",
    "ydiaeresis",
    "Cyrillic_GHE_upturn",
    "Cyrillic_ghe_upturn",
    "Cyrillic_io",
    "Cyrillic_IO",
    "Cyrillic_dje",
    "Cyrillic_DJE",
    "Cyrillic_gje",
    "Cyrillic_GJE",
    "Cyrillic_ie",
    "Cyrillic_IE",
    "Cyrillic_yi",
    "Cyrillic_YI",
    "Cyrillic_je",
    "Cyrillic_JE",
    "Cyrillic_lje",
    "Cyrillic_LJE",
    "Cyrillic_nje",
    "Cyrillic_NJE",
    "Cyrillic_tshe",
    "Cyrillic_TSHE",
    "Cyrillic_kje",
    "Cyrillic_KJE",
    "Cyrillic_shortu",
    "Cyrillic_SHORTU",
    "Cyrillic_dze",
    "Cyrillic_DZE",
    "Cyrillic_a",
    "Cyrillic_A",
    "Cyrillic_be",
    "Cyrillic_BE",
    "Cyrillic_ce",
    "Cyrillic_CE",
    "Cyrillic_che",
    "Cyrillic_CHE",
    "Cyrillic_de",
    "Cyrillic_DE",
    "Cyrillic_el",
    "Cyrillic_EL",
    "Cyrillic_em",
    "Cyrillic_EM",
    "Cyrillic_en",
    "Cyrillic_EN",
    "Cyrillic_e",
    "Cyrillic_E",
    "Cyrillic_er",
    "Cyrillic_ER",
    "Cyrillic_es",
    "Cyrillic_ES",
    "Cyrillic_ef",
    "Cyrillic_EF",
    "Cyrillic_ghe",
    "Cyrillic_GHE",
    "Cyrillic_ha",
    "Cyrillic_HA",
    "Cyrillic_hardsign",
    "Cyrillic_HARDSIGN",
    "Cyrillic_i",
    "Cyrillic_I",
    "Cyrillic_ka",
    "Cyrillic_KA",
    "Cyrillic_o",
    "Cyrillic_O",
    "Cyrillic_pe",
    "Cyrillic_PE",
    "Cyrillic_sha",
    "Cyrillic_SHA",
    "Cyrillic_shcha",
    "Cyrillic_SHCHA",
    "Cyrillic_shorti",
    "Cyrillic_SHORTI",
    "Cyrillic_softsign",
    "Cyrillic_SOFTSIGN",
    "Cyrillic_te",
    "Cyrillic_TE",
    "Cyrillic_tse",
    "Cyrillic_TSE",
    "Cyrillic_u",
    "Cyrillic_U",
    "Cyrillic_ve",
    "Cyrillic_VE",
    "Cyrillic_ya",
    "Cyrillic_YA",
    "Cyrillic_yeru",
    "Cyrillic_YERU",
    "Cyrillic_yu",
    "Cyrillic_YU",
    "Cyrillic_ze",
    "Cyrillic_ZE",
    "Cyrillic_zhe",
    "Cyrillic_ZHE",
    "Cyrillic_dzhe",
    "Cyrillic_DZHE",
    "Greek_alpha",
    "Greek_BETA",
    "Greek_gamma",
    "Greek_GAMMA",
    "Greek_delta",
    "Greek_DELTA",
    "Greek_epsilon",
    "Greek_EPSILON",
    "Greek_zeta",
    "Greek_ZETA",
    "Greek_eta",
    "Greek_ETA",
    "Greek_theta",
    "Greek_THETA",
    "Greek_iota",
    "Greek_IOTA",
    "Greek_kappa",
    "Greek_KAPPA",
    "Greek_lamda",
    "Greek_LAMDA",
    "Greek_lambda",
    "Greek_LAMBDA",
    "Greek_mu",
    "Greek_MU",
    "Greek_nu",
    "Greek_NU",
    "Greek_xi",
    "Greek_XI",
    "Greek_omicron",
    "Greek_OMICRON",
    "Greek_pi",
    "Greek_PI",
    "Greek_rho",
    "Greek_RHO",
    "Greek_sigma",
    "Greek_SIGMA",
    "Greek_tau",
    "Greek_TAU",
    "Greek_upsilon",
    "Greek_UPSILON",
    "Greek_phi",
    "Greek_PHI",
    "Greek_chi",
    "Greek_CHI",
    "Greek_psi",
    "Greek_PSI",
    "Greek_omega",
    "Greek_OMEGA",
    "Arabic_comma",
    "Arabic_semicolon",
    "Arabic_question_mark",
    "Arabic_hamza",
    "Arabic_madda_on_alef",
    "Arabic_hamza_on_alef",
    "Arabic_hamza_on_waw",
    "Arabic_hamza_under_alef",
    "Arabic_alef",
    "Arabic_beh",
    "Arabic_tehmarbuta",
    "Arabic_teh",
    "Arabic_theh",
    "Arabic_jeem",
    "Arabic_hah",
    "Arabic_khah",
    "Arabic_dal",
    "Arabic_thal",
    "Arabic_ra",
    "Arabic_zain",
    "Arabic_seen",
    "Arabic_sheen",
    "Arabic_sad",
    "Arabic_dad",
    "Arabic_tah",
    "Arabic_zah",
    "Arabic_ain",
    "Arabic_ghain",
    "Arabic_feh",
    "Arabic_qaf",
    "Arabic_kaf",
    "Arabic_lam",
    "Arabic_meem",
    "Arabic_noon",
    "Arabic_heh",
    "Arabic_waw",
    "Arabic_alef_maksura",
    "Arabic_yeh",
    "Arabic_fathatan",
    "Arabic_dammatan",
    "Arabic_kasratan",
    "Arabic_fatha",
    "Arabic_damma",
    "Arabic_kasra",
    "Arabic_shadda",
    "Arabic_sukun",
    "Arabic_hamza_above",
    "Arabic_ligature_lam_alef",
    "Arabic_ligature_lam_alef_hamza_above",
    "Arabic_ligature_lam_alef_hamza_below",
    "Arabic_ligature_ligature_lam_alef",
    "hebrewAleph",
    "hebrewBet",
    "hebrewGimel",
    "hebrewDalet",
    "hebrewHe",
    "hebrewWaw",
    "hebrewZayin",
    "hebrewHet",
    "hebrewTet",
    "hebrewYod",
    "hebrewKaph",
    "hebrewLamed",
    "hebrewMem",
    "hebrewNun",
    "hebrewSamekh",
    "hebrewAyin",
    "hebrewPe",
    "hebrewZade",
    "hebrewQoph",
    "hebrewResh",
    "hebrewShin",
    "hebrewTaw",
    "Thai_kokai",
    "Thai_khokhai",
    "Thai_khokhuat",
    "Thai_khokhwai",
    "Thai_khokhon",
    "Thai_khorakhang",
    "Thai_ngongu",
    "Thai_chochan",
    "Thai_choching",
    "Thai_chochang",
    "Thai_soso",
    "Thai_chochoe",
    "Thai_yoying",
    "Thai_dochada",
    "Thai_topatak",
    "Thai_thothung",
    "Thai_thothahan",
    "Thai_thothong",
    "Thai_nonu",
    "Thai_bobaimai",
    "Thai_poplak",
    "Thai_phophung",
    "Thai_fofa",
    "Thai_phophan",
    "Thai_fofan",
    "Thai_phosamphao",
    "Thai_moma",
    "Thai_yoyak",
    "Thai_yoyal",
    "Thai_ruRU",
    "Thai_luLU",
    "Thai_lalala",
    "Thai_wuaEN",
    "Thai_saraLE",
    "Thai_saraAE",
    "Thai_saraAA",
    "Thai_saraAAM",
    "Thai_saraI",
    "Thai_saraII",
    "Thai_saraUE",
    "Thai_saraUEE",
    "Thai_saraE",
    "Thai_saraAE",
    "Thai_maiyamok",
    "Thai_maitaikhu",
    "Thai_maiek",
    "Thai_maitri",
    "Thai_maichattawa",
    "Thai_thanthakhat",
    "Thai_nikhahit",
    "Thai_yamakkan",
    "Thai_fonang",
    "Thai_fonan",
    "Thai_phinthu",
    "Thai_saraaa",
    "BackSpace",
    "Tab",
    "Linefeed",
    "Clear",
    "Return",
    "Pause",
    "Scroll_Lock",
    "Sys_Req",
    "Escape",
    "Delete",
    "Multi_key",
    "Codeinput",
    "SingleCandidate",
    "MultipleCandidate",
    "PreviousCandidate",
    "Kanji",
    "Muhenkan",
    "Henkan_Mode",
    "Henkan",
    "Romaji",
    "Hiragana",
    "Katakana",
    "Hiragana_Katakana",
    "Zenkaku",
    "Hankaku",
    "Zenkaku_Hankaku",
    "Touroku",
    "Massyo",
    "Kana_Lock",
    "Kana_Shift",
    "Eisu_Shift",
    "Eisu_toggle",
    "Kanji_Bangou",
    "Zen_Koho",
    "Mae_Koho",
    "Home",
    "Left",
    "Up",
    "Right",
    "Down",
    "Prior",
    "Page_Up",
    "Next",
    "Page_Down",
    "End",
    "Begin",
    "Select",
    "Print",
    "Execute",
    "Insert",
    "Undo",
    "Redo",
    "Menu",
    "Find",
    "Cancel",
    "Help",
    "Break",
    "KP_Space",
    "KP_Tab",
    "KP_Enter",
    "KP_Home",
    "KP_Left",
    "KP_Up",
    "KP_Right",
    "KP_Down",
    "KP_Prior",
    "KP_Page_Up",
    "KP_Next",
    "KP_Page_Down",
    "KP_End",
    "KP_Begin",
    "KP_Insert",
    "KP_Delete",
    "KP_Equal",
    "KP_Multiply",
    "KP_Add",
    "KP_Separator",
    "KP_Subtract",
    "KP_Decimal",
    "KP_Divide",
    "KP_0",
    "KP_1",
    "KP_2",
    "KP_3",
    "KP_4",
    "KP_5",
    "KP_6",
    "KP_7",
    "KP_8",
    "KP_9",
    "ISO_Lock",
    "ISO_Level2_Latch",
    "ISO_Level3_Latch",
    "ISO_Level3_Lock",
    "ISO_Level5_Latch",
    "ISO_Level5_Lock",
    "ISO_Group_Latch",
    "ISO_Group_Lock",
    "ISO_Next_Group",
    "ISO_Next_Group_Lock",
    "ISO_Prev_Group",
    "ISO_Prev_Group_Lock",
    "ISO_First_Group",
    "ISO_First_Group_Lock",
    "ISO_Last_Group",
    "ISO_Last_Group_Lock",
    "ISO_Left_Tab",
    "ISO_Move_Line_Up",
    "ISO_Move_Line_Down",
    "ISO_Partial_Line_Up",
    "ISO_Partial_Line_Down",
    "ISO_Partial_Space_Left",
    "ISO_Partial_Space_Right",
    "ISO_Set_Margin_Left",
    "ISO_Set_Margin_Right",
    "ISO_Release_Margin_Left",
    "ISO_Release_Margin_Right",
    "ISO_Release_Both_Margins",
    "ISO_Fast_Cursor_Left",
    "ISO_Fast_Cursor_Right",
    "ISO_Fast_Cursor_Up",
    "ISO_Fast_Cursor_Down",
    "ISO_Continuous_Underline",
    "ISO_Discontinuous_Underline",
    "ISO_Emphasize",
    "ISO_Center_Object",
    "ISO_Enter",
    "Pointer_Left",
    "Pointer_Right",
    "Pointer_Up",
    "Pointer_Down",
    "Pointer_UpLeft",
    "Pointer_UpRight",
    "Pointer_DownLeft",
    "Pointer_DownRight",
    "Pointer_Button_Dflt",
    "Pointer_Button1",
    "Pointer_Button2",
    "Pointer_Button3",
    "Pointer_Button4",
    "Pointer_Button5",
    "Pointer_DblClick_Dflt",
    "Pointer_DblClick1",
    "Pointer_DblClick2",
    "Pointer_DblClick3",
    "Pointer_DblClick4",
    "Pointer_DblClick5",
    "Pointer_Drag_Dflt",
    "Pointer_Drag1",
    "Pointer_Drag2",
    "Pointer_Drag3",
    "Pointer_Drag4",
    "Pointer_Drag5",
    "Pointer_EnableKeys",
    "Pointer_Accelerate",
    "Pointer_DfltBtnNext",
    "Pointer_DfltBtnPrev",
    "ch",
    "Ch",
    "CH",
    "c_h",
    "C_h",
    "C_H",
    "3270_Duplicate",
    "3270_FieldMark",
    "3270_Right2",
    "3270_Left2",
    "3270_BackTab",
    "3270_EraseEOF",
    "3270_EraseInput",
    "3270_Reset",
    "3270_Quit",
    "3270_PA1",
    "3270_PA2",
    "3270_PA3",
    "3270_Test",
    "3270_Attn",
    "3270_CursorBlink",
    "3270_AltCursor",
    "3270_KeyClick",
    "3270_Jump",
    "3270_Ident",
    "3270_Rule",
    "3270_Copy",
    "3270_Play",
    "3270_Setup",
    "3270_Record",
    "3270_ChangeScreen",
    "3270_DeleteWord",
    "3270_ExSelect",
    "3270_CursorSelect",
    "3270_PrintScreen",
    "3270_Enter",
    "XF86AudioMute",
    "XF86AudioLowerVolume",
    "XF86AudioRaiseVolume",
    "XF86AudioPlay",
    "XF86AudioStop",
    "XF86AudioPrev",
    "XF86AudioNext",
    "osfActivate",
    "osfPrimaryPaste",
    "osfQuickPaste",
    "osfPaste",
    "osfBackSpace",
    "osfClear",
    "osfUndo",
    "osfAgain",
    "osfErPCopy",
    "osfErCut",
    "osfErDeselect",
    "osfErReselect",
    "osfErInsert",
    "osfBackTab",
    "osfToolBar",
    "osfBKDLineBeg",
    "osfBKDLineEnd",
    "osfBegField",
    "osfEndField",
    "osfNextField",
    "osfPrevField",
    "osfRestore",
    "osfMenuBar",
    "osfMenuBarGrace",
    "osfPrior",
    "osfNext",
    "osfPageUp",
    "osfPageDown",
    "osfRestoreUp",
    "osfRestoreDown",
    "osfMenu",
    "osfCancel",
    "osfHelp",
    "osfSelectAll",
    "osfDeselectAll",
    "osfReselect",
    "osfExtend",
    "osfDelete",
  ];

  var STORAGE_KEY = "xkb-config";
  var currentLayer = 0;
  var layers = [];
  var activeKey = null;

  var SHIFT_LABELS = {
    TLDE: ["`", "~"],
    AE01: ["1", "!"],
    AE02: ["2", "@"],
    AE03: ["3", "#"],
    AE04: ["4", "$"],
    AE05: ["5", "%"],
    AE06: ["6", "^"],
    AE07: ["7", "&"],
    AE08: ["8", "*"],
    AE09: ["9", "("],
    AE10: ["0", ")"],
    AE11: ["-", "_"],
    AE12: ["=", "+"],
    AD01: ["q", "Q"],
    AD02: ["w", "W"],
    AD03: ["e", "E"],
    AD04: ["r", "R"],
    AD05: ["t", "T"],
    AD06: ["y", "Y"],
    AD07: ["u", "U"],
    AD08: ["i", "I"],
    AD09: ["o", "O"],
    AD10: ["p", "P"],
    AD11: ["[", "{"],
    AD12: ["]", "}"],
    BKSL: ["\\", "|"],
    AC01: ["a", "A"],
    AC02: ["s", "S"],
    AC03: ["d", "D"],
    AC04: ["f", "F"],
    AC05: ["g", "G"],
    AC06: ["h", "H"],
    AC07: ["j", "J"],
    AC08: ["k", "K"],
    AC09: ["l", "L"],
    AC10: [";", ":"],
    AC11: ["'", '"'],
    AC12: ["`", "~"],
    AB01: ["z", "Z"],
    AB02: ["x", "X"],
    AB03: ["c", "C"],
    AB04: ["v", "V"],
    AB05: ["b", "B"],
    AB06: ["n", "N"],
    AB07: ["m", "M"],
    AB08: [",", "<"],
    AB09: [".", ">"],
    AB10: ["/", "?"],
  };

  function loadManifest() {
    var ids = typeof PRESET_IDS !== "undefined" ? PRESET_IDS : [];
    var sel = document.getElementById("layout-select");
    ids.forEach(function (id) {
      var opt = document.createElement("option");
      opt.value = id;
      opt.textContent = PRESETS[id].name || id;
      sel.appendChild(opt);
    });
    return Promise.resolve();
  }

  function loadPreset(id) {
    if (typeof PRESETS !== "undefined" && PRESETS[id]) {
      return Promise.resolve(PRESETS[id]);
    }
    return Promise.reject(new Error("Preset not found: " + id));
  }

  function saveState() {
    try {
      var data = {
        layers: layers,
        currentLayer: currentLayer,
        layoutName: document.getElementById("layout-name").value,
        layoutDesc: document.getElementById("layout-desc").value,
        includeOpt: document.getElementById("opt-include").checked,
        layoutSelect: document.getElementById("layout-select").value,
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {}
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (e) {
      return null;
    }
  }

  function refresh() {
    renderLayerTabs();
    renderKeyboard();
    generateXKB();
    saveState();
  }

  function init() {
    setupEventListeners();
    loadManifest().then(function () {
      var saved = loadState();
      if (saved && saved.layers && saved.layers.length) {
        layers = saved.layers;
        currentLayer = saved.currentLayer || 0;
        document.getElementById("layout-name").value =
          saved.layoutName || "my layout";
        document.getElementById("layout-desc").value = saved.layoutDesc || "";
        document.getElementById("opt-include").checked =
          saved.includeOpt !== false;
        document.getElementById("layout-select").value =
          saved.layoutSelect || "clear";
        refresh();
      } else {
        layers = [
          { name: "Base", keys: {} },
          { name: "Shift", keys: {} },
          { name: "AltGr", keys: {} },
          { name: "AltGr+Shift", keys: {} },
        ];
        loadLayout("qwerty");
        document.getElementById("layout-select").value = "qwerty";
      }
    });
  }

  function renderLayerTabs() {
    var container = document.querySelector(".layer-tabs");
    container.innerHTML = "";
    layers.forEach(function (layer, i) {
      var wrap = document.createElement("span");
      wrap.className = "layer-tab-wrap";

      var btn = document.createElement("button");
      btn.className = "layer-tab" + (i === currentLayer ? " active" : "");
      btn.textContent = layer.name;
      btn.dataset.layer = i;
      btn.addEventListener("click", function () {
        currentLayer = i;
        refresh();
      });
      wrap.appendChild(btn);

      if (i >= 4 && layers.length > 1) {
        var del = document.createElement("button");
        del.className = "layer-del";
        del.textContent = "×";
        del.title = "Delete layer";
        del.addEventListener("click", function (e) {
          e.stopPropagation();
          layers.splice(i, 1);
          if (currentLayer >= layers.length) currentLayer = layers.length - 1;
          refresh();
        });
        wrap.appendChild(del);
      }

      container.appendChild(wrap);
    });

    if (layers.length < MAX_LAYERS) {
      var addBtn = document.createElement("button");
      addBtn.className = "add-layer";
      addBtn.textContent = "+";
      addBtn.title = "Add layer (" + layers.length + "/" + MAX_LAYERS + ")";
      addBtn.addEventListener("click", function () {
        if (layers.length >= MAX_LAYERS) return;
        layers.push({ name: "Layer " + layers.length, keys: {} });
        currentLayer = layers.length - 1;
        refresh();
      });
      container.appendChild(addBtn);
    }
  }

  function renderRow(container, row, isExtra) {
    var rowDiv = document.createElement("div");
    rowDiv.className = "keyboard-row";

    row.forEach(function (symbol) {
      if (!symbol) {
        var spacer = document.createElement("div");
        spacer.className = "key-spacer";
        rowDiv.appendChild(spacer);
        return;
      }

      var keyDiv = document.createElement("div");
      var width = KEY_WIDTHS[symbol] || 1;
      keyDiv.className = "key";
      if (width > 1)
        keyDiv.classList.add("w" + width.toString().replace(".", ""));

      var code = document.createElement("div");
      code.className = "key-code";
      code.textContent = symbol;

      var sl = SHIFT_LABELS[symbol];

      if (sl) {
        var shift = document.createElement("div");
        shift.className = "key-shift";
        shift.textContent = currentLayer === 1 ? sl[0] : sl[1];
        keyDiv.appendChild(code);
        keyDiv.appendChild(shift);
      } else {
        var label = document.createElement("div");
        label.className = "key-label";
        label.textContent = KEY_LABELS[symbol] || symbol;
        keyDiv.appendChild(code);
        keyDiv.appendChild(label);
      }

      var sub = document.createElement("div");
      sub.className = "key-sub";
      var currentKey =
        layers[currentLayer] && layers[currentLayer].keys[symbol];
      sub.textContent = currentKey || "";

      if (currentKey) {
        keyDiv.classList.add("active");
        if (currentKey.length > 10) {
          sub.style.fontSize = ".5rem";
        }
      }

      keyDiv.appendChild(sub);
      keyDiv.title = symbol;
      keyDiv.addEventListener("click", function () {
        openKeyPicker(symbol);
      });
      rowDiv.appendChild(keyDiv);
    });

    container.appendChild(rowDiv);
  }

  function renderKeyboard() {
    var container = document.getElementById("keyboard");
    container.innerHTML = "";

    MAIN_KEYBOARD.forEach(function (row) {
      renderRow(container, row, false);
    });

    var extraDiv = document.createElement("div");
    extraDiv.className = "extra-keys";
    EXTRA_KEYBOARD.forEach(function (row) {
      renderRow(extraDiv, row, true);
    });
    container.appendChild(extraDiv);
  }

  function openKeyPicker(symbol) {
    activeKey = symbol;
    var modal = document.getElementById("key-picker");
    var search = document.getElementById("key-search");
    document.getElementById("key-picker-code").textContent = symbol;
    modal.hidden = false;
    search.value = "";
    search.focus();
    renderKeyList("");
  }

  function renderKeyList(filter) {
    var list = document.getElementById("key-list");
    list.innerHTML = "";
    var f = filter.toLowerCase();

    var clearBtn = document.createElement("button");
    clearBtn.textContent = "— clear —";
    clearBtn.className = "clear-btn";
    clearBtn.addEventListener("click", function () {
      assignKey(activeKey, "");
      document.getElementById("key-picker").hidden = true;
    });
    list.appendChild(clearBtn);

    if (f.length > 0) {
      var btn = document.createElement("button");
      btn.textContent = "\u2192 " + filter;
      btn.className = "custom-btn";
      btn.addEventListener("click", function () {
        assignKey(activeKey, filter);
        document.getElementById("key-picker").hidden = true;
      });
      list.appendChild(btn);
    }

    ALL_SYMBOLS.forEach(function (sym) {
      if (f.length > 0 && sym.toLowerCase().indexOf(f) < 0) return;
      var btn = document.createElement("button");
      btn.textContent = sym;
      btn.title = sym;
      btn.addEventListener("click", function () {
        assignKey(activeKey, sym);
        document.getElementById("key-picker").hidden = true;
      });
      list.appendChild(btn);
    });
  }

  function assignKey(symbol, keyName) {
    if (!keyName) {
      delete layers[currentLayer].keys[symbol];
    } else {
      layers[currentLayer].keys[symbol] = keyName;
    }
    refresh();
  }

  function loadLayout(name) {
    layers.forEach(function (layer) {
      layer.keys = {};
    });

    if (name === "clear") {
      document.getElementById("layout-name").value = "my layout";
      document.getElementById("layout-desc").value = "";
      currentLayer = 0;
      refresh();
      return;
    }

    loadPreset(name)
      .then(function (data) {
        document.getElementById("layout-name").value = data.name || name;
        document.getElementById("layout-desc").value = data.desc || "";
        if (data.layers) {
          data.layers.forEach(function (src, i) {
            if (i < layers.length) {
              layers[i].keys = src.keys || {};
            }
          });
        }
        currentLayer = 0;
        refresh();
        saveState();
      })
      .catch(function () {
        console.error("Failed to load preset:", name);
      });
  }

  function generateXKB() {
    var name = document.getElementById("layout-name").value || "my layout";
    var desc = document.getElementById("layout-desc").value || "";
    var lines = [];

    lines.push("default partial alphanumeric_keys");
    lines.push(
      '  xkb_symbols "' +
        name.toLowerCase().replace(/[^a-z0-9]+/g, "_") +
        '" {',
    );
    lines.push("");
    lines.push(
      '    name[Group1]= "' + name + (desc ? " - " + desc : "") + '";',
    );
    lines.push("");

    var allSymbols = {};
    layers.forEach(function (layer, layerIndex) {
      Object.keys(layer.keys).forEach(function (symbol) {
        if (!allSymbols[symbol]) allSymbols[symbol] = [];
        allSymbols[symbol][layerIndex] = layer.keys[symbol];
      });
    });

    var hasContent = false;
    Object.keys(allSymbols).forEach(function (symbol) {
      var levels = allSymbols[symbol];
      var nonEmpty = levels.filter(function (v) {
        return !!v;
      });
      if (nonEmpty.length === 0) return;
      hasContent = true;

      var parts = [];
      for (var i = 0; i < layers.length; i++) {
        parts.push(levels[i] || "NoSymbol");
      }

      while (parts.length > 1 && parts[parts.length - 1] === "NoSymbol") {
        parts.pop();
      }

      lines.push(
        "    key <" +
          symbol.toLowerCase() +
          "> { [ " +
          parts.join(", ") +
          " ] };",
      );
    });

    if (!hasContent) {
      lines.push("    // No keys assigned");
    }

    lines.push("");
    if (document.getElementById("opt-include").checked) {
      lines.push('    include "level3(ralt_switch)"');
    }
    lines.push("};");

    document.getElementById("xkb-output").textContent = lines.join("\n");
  }

  function copyToClipboard() {
    var text = document.getElementById("xkb-output").textContent;
    navigator.clipboard.writeText(text).then(function () {
      var btn = document.getElementById("btn-copy");
      var orig = btn.textContent;
      btn.textContent = "[ copied! ]";
      setTimeout(function () {
        btn.textContent = orig;
      }, 2000);
    });
  }

  function downloadXKB() {
    var text = document.getElementById("xkb-output").textContent;
    var name = document.getElementById("layout-name").value || "layout";
    var filename = name.toLowerCase().replace(/[^a-z0-9]+/g, "_") + ".xkb";
    var blob = new Blob([text], { type: "text/plain" });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
    URL.revokeObjectURL(url);
  }

  function resetAll() {
    layers.forEach(function (layer) {
      layer.keys = {};
    });
    document.getElementById("layout-name").value = "my layout";
    document.getElementById("layout-desc").value = "";
    currentLayer = 0;
    refresh();
  }

  function exportLayout() {
    var data = {
      version: 1,
      name: document.getElementById("layout-name").value,
      desc: document.getElementById("layout-desc").value,
      layers: layers,
    };
    var blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    var url = URL.createObjectURL(blob);
    var a = document.createElement("a");
    a.href = url;
    a.download = "xkb-layout.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  function importLayout(file) {
    var reader = new FileReader();
    reader.onload = function (e) {
      try {
        var data = JSON.parse(e.target.result);
        if (data.layers) layers = data.layers;
        if (data.name) document.getElementById("layout-name").value = data.name;
        if (data.desc) document.getElementById("layout-desc").value = data.desc;
        currentLayer = 0;
        refresh();
      } catch (err) {
        console.error("Invalid layout file");
      }
    };
    reader.readAsText(file);
  }

  function setupEventListeners() {
    document
      .getElementById("btn-copy")
      .addEventListener("click", copyToClipboard);
    document
      .getElementById("btn-download")
      .addEventListener("click", downloadXKB);
    document.getElementById("btn-reset").addEventListener("click", resetAll);
    document
      .getElementById("btn-export")
      .addEventListener("click", exportLayout);
    document
      .getElementById("btn-import")
      .addEventListener("click", function () {
        document.getElementById("file-import").click();
      });
    document
      .getElementById("file-import")
      .addEventListener("change", function (e) {
        if (e.target.files[0]) importLayout(e.target.files[0]);
      });
    document
      .getElementById("key-picker-cancel")
      .addEventListener("click", function () {
        document.getElementById("key-picker").hidden = true;
      });

    document
      .getElementById("layout-name")
      .addEventListener("input", function () {
        generateXKB();
        saveState();
      });
    document
      .getElementById("layout-desc")
      .addEventListener("input", function () {
        generateXKB();
        saveState();
      });
    document
      .getElementById("opt-include")
      .addEventListener("change", function () {
        generateXKB();
        saveState();
      });

    document
      .getElementById("key-search")
      .addEventListener("input", function () {
        renderKeyList(this.value);
      });
    document
      .getElementById("key-search")
      .addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          var val = this.value.trim();
          if (val) {
            assignKey(activeKey, val);
            document.getElementById("key-picker").hidden = true;
          }
        }
      });

    document
      .getElementById("layout-select")
      .addEventListener("change", function () {
        loadLayout(this.value);
      });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        document.getElementById("key-picker").hidden = true;
      }
    });

    document
      .getElementById("key-picker")
      .addEventListener("click", function (e) {
        if (e.target === this) this.hidden = true;
      });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
