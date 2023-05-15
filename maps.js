const maps = [
    /* [       
        "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
        "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
        "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
        "ZZZZZZZZXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXZZZZZZZZ",
        "ZZZZZZZZX         XX              XX        XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX      XX      XX        XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX      XX      XX        XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX      XX      XX        XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX      XX      XX        XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX      X       XX        XX      XZZZZZZZZ",
        "ZZZZZZZZX         XXXXXXXXX XXXXXXXXXXX XXXXXXX XXXXXZZZZZZZZ",
        "ZZZZZZZZX         XXXXXXXXX XXXXXXXXXXX XXXXXXX XXXXXZZZZZZZZ",
        "ZZZZZZZZXXXXXXXX XXX      X                 XX      XZZZZZZZZ",
        "ZZZZZZZZXXXXXXXX XXX      XX      XX        XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX      XX      XX        XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX      XX      XX        XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX              XX                XZZZZZZZZ",
        "ZZZZZZZZX         XX      XX      XX        XX      XZZZZZZZZ",
        "ZZZZZZZZX         XXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXZZZZZZZZ",
        "ZZZZZZZZX         XXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXZZZZZZZZ",
        "ZZZZZZZZXXXX XXXXXXX       XX       XX      XX      XZZZZZZZZ",
        "ZZZZZZZZXXXX XXXXXXX       XX       XX      XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX       XX       XX      XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX                        XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX       XX       XX      XX      XZZZZZZZZ",
        "ZZZZZZZZX         XXXXXXXXXXXXXX XXXXXXXXXXXXXX XXXXXZZZZZZZZ",
        "ZZZZZZZZX         XXXXXXXXXXXXXX XXXXXXXXXXXXXX XXXXXZZZZZZZZ",
        "ZZZZZZZZXXXXXXXXX XX        XX      XX      XX      XZZZZZZZZ",
        "ZZZZZZZZXXXXXXXXX XX        XX      XX      XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX        XX      XX              XZZZZZZZZ",
        "ZZZZZZZZX         XX        XX              XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX                XX      XX      XZZZZZZZZ",
        "ZZZZZZZZX         XXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXZZZZZZZZ",
        "ZZZZZZZZX         XXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXZZZZZZZZ",
        "ZZZZZZZZX                            XX     XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX          XX            XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX          XX     XX     XX      XZZZZZZZZ",
        "ZZZZZZZZXXX XXXXXXXX          XX     XX     XX      XZZZZZZZZ",
        "ZZZZZZZZXXX XXXXXXXX          XX     XX     XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX          XX     XX     XX      XZZZZZZZZ",
        "ZZZZZZZZX         XXXXXXXXXXXXXXXXXXXXX XXXXXX XXXXXXZZZZZZZZ",
        "ZZZZZZZZX         XXXXXXXXXXXXXXXXXXXXX XXXXXX XXXXXXZZZZZZZZ",
        "ZZZZZZZZX         XX          XX     XX     XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX          XX     XX     XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX          XX     XX     XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX          XX     XX     XX      XZZZZZZZZ",
        "ZZZZZZZZX         XX                                XZZZZZZZZ",
        "ZZZZZZZZXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXZZZZZZZZZ",
        "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
        "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
        "ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ",
      ], */
      [
        "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "X       XX    XX     XX    XX    X",
        "X       XX                 XX    X",
        "X       XX    XX     XX    XX    X",
        "X       XX    XX     XX          X",
        "X       XXXXXXXXX XXXXXXXXXXXXXXXX",
        "X       XXXXXXXXX XXXXXXXXXXXXXXXX",
        "XXXXX XXXX     XX     XX         X",
        "XXXXX XXXX                  XX   X",
        "X       XX     XX     XX    XX   X",
        "X       XXXXXXXXXXXXXXXXXXXXXXX XX",
        "X       XXXXXXXXXXXXXXXXXXXXXXX XX",
        "X       XX    XX    XX    XX     X",
        "XXX XXXXXX    XX    XX    XX     X",
        "XXX XXXXXX          XX    XX     X",
        "X       XX    XX                 X",
        "X       XX    XX    XXXXXXXXXXX XX",
        "X       XX    XX    XXXXXXXXXXX XX",
        "X       XX    XX    XX    XX     X",
        "X       XX    XX    XX           X",
        "X       XXXXXXXXX XXXX    XX     X",
        "XXXX XXXXXXXXXXXX XXXX    XX     X",
        "XXXX XXXXX    XX    XX    XX     X",
        "X       XX    XX    XX    XX     X",
        "X       XX    XX    XX    XX     X",
        "X       XX          XXXX XXXXXXXXX",
        "X       XXXX XXX    XXXX XXXXXXXXX",
        "X       XXXX XXXX XXXX    XX     X",
        "X XXXXXXXX    XXX XXXX    XX     X",
        "X XXXXXXXX    XX    XX    XX     X",
        "X       XX    XX    XX    XX     X",
        "X             XX    XX    XX     X",
        "X       XX    XX    XX    XX     X",
        "X       XX    XX    XX    XX     X",
        "X       XX    XX    XX           X",
        "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      ],
      [
        "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "X      XX      XX    XX   XX     X",
        "X      XX      XX    XX   XX     X",
        "X      XX      XX    XX   XX     X",
        "X      XX      XX    XX          X",
        "X      XX      XX    XX   XXXX XXX",
        "XXX XXXXX      XXXXX XX   XXXX XXX",
        "XXX XXXXX XXXXXXXXXX XX   XX     X",
        "X      XX XXXXXXX    XXXX XX     X",
        "X      XX      XX    XXXX XX     X",
        "X      XX      XX    XX   XX     X",
        "X      XX      XX    XX   XXX XXXX",
        "XXX XXXXX      XX    XX   XXX XXXX",
        "XXX XXXXX      XX    XX   XX     X",
        "X      XX      XX    XX XXXX     X",
        "X      XX      XXXXX XX XXXX     X",
        "X      XX      XXXXX XX   XX     X",
        "X      XXX XXXXXX    XX   XX     X",
        "XX XXXXXXX XXXXXX    XX   XX     X",
        "XX XXXXXX      XX    XX   XX     X",
        "X      XX      XX    XX XXXXXX XXX",
        "X      XX      XXXX XXX XXXXXX XXX",
        "X      XX      XXXX XXX   XX     X",
        "X      XXXXXXX XX    XX   XX     X",
        "X      XXXXXXX XX    XX   XX     X",
        "X      XX            XX   XX     X",
        "XXX XX         XX    XX   XX     X",
        "XXX XXXXX      XX    XXX XXX     X",
        "X      XX      XXXXX XXX XXX     X",
        "X      XX XXXXXXXXXX XX   XX XXXXX",
        "X      XX XXXXXXX         XX XXXXX",
        "X      XX      XX    XX   XX     X",
        "X      XX      XX    XX   XX     X",
        "X      XX      XX    XX   XX     X",
        "X      XX      XX    XX   XX     X",
        "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
      ]
]



function export_maps(x) {
    return maps[x]
}