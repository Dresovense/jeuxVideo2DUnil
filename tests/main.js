kaboom({
    width: 320,
    height: 192,
    scale: 3,
    debug: true,
});
  
loadRoot("assets/sprites");
loadSprite("grass", "/tilesets/grass.png");
loadSpriteAtlas("/tilesets/plains.png", {
    "plains_top_left": {x: 16, y: 0, width: 16, height: 16},
    "plains_left": {x: 16, y: 16, width: 16, height: 16},
    "plains_top": {x: 30, y: 0, width: 16, height: 16},
})
loadSpriteAtlas("/characters/Character_001.png", {
    "hero":{
        x: 0,
        y: 0,
        width: 72,
        height: 96,
        sliceX: 3,
        sliceY: 4,
        anims: {
            idle_front: {from: 0, to: 0, loop: true},
            run_down: {from: 0, to: 2, loop: true},
            run_left: {from: 3, to: 5, loop: true},
            run_right: {from: 6, to: 8, loop: true},
            run_up: {from: 9, to: 11, loop: true}
        }
    }
})



scene("accueil", () => {
    //texte d'accueil
    add([
        text("Press Space to play", {
            size: 24,
            color: rgb(255, 0, 0),
            }),
        anchor("center"),
        pos(center()),
    ])

    onKeyPress("space", () => {
        go("test");
    })
})

scene("test", () => {
    let player = add([
        sprite("hero", {anim: "idle_front"}),
        pos(center()),
        anchor("center"),
        area({
            shape: new Rect(vec2(0), 12, 18),
            offset: vec2(0,3)
        }),
        width(16),
        height(16),
        z(1),
        body(),
        "player",
    ]);

    const SPEED = 50

    onKeyDown("right", () => {
        player.move(RIGHT.scale(SPEED))
        camPos(player.pos)
    })
    onKeyPress("right", () => {
        player.play("run_right")
    })

    onKeyDown("left", () => {
        player.move(LEFT.scale(SPEED))
        camPos(player.pos)
    })
    onKeyPress("left", () => {
        player.play("run_left")
    })

    onKeyDown("up", () => {
        player.move(UP.scale(SPEED))
        camPos(player.pos)
    })
    onKeyPress("up", () => {
        player.play("run_up")
    })

    onKeyDown("down", () => {
        player.move(DOWN.scale(SPEED))
        camPos(player.pos)
    })
    onKeyPress("down", () => {
        player.play("run_down")
    })

    onUpdate(() => {
        if(!isKeyDown("left") && !isKeyDown("right") && !isKeyDown("up") && !isKeyDown("down")){
            player.stop("run_down")
        }
    })



    const map = [
        'ggggggggggggggggggggtggggggggggg',
        'ggggggggggggggggggggtggggggggg',
        'gggttttlggggggggggggtggggggggg',
        'ggglggggggggggggggggtgggggggggg',
        'ggglggggggggggggggggtgggggggggg',
        'ggglggggggggggggggggtgggggggggg',
        'ggglggggggggggggggggtgggggggggg',
        'ggggggggggggggggggggtgggggggggg',
        'ggggggggggggggggggggtgggggggggg',
        'ggggggggggggggggggggtggggggggg',
        'ggggggggggggggggggggtggggggggg',
        'ggggggggggggggggggggtggggggggg',
        'ggggggggggggggggggggtggggggggg',
        'ggggggggggggggggggggtggggggggg',
        'ggggggggggggggggggggtggggggggg',
    ]

    const levelOne = {
        tileWidth: 16,
        tileHeight: 16,
        tiles:{
            'g': () => [
                sprite('grass'),
                anchor("center"),
            ], 
            'l': () => [
                sprite('plains_left'),
                area(),
                anchor("center"),
                body({
                    mass: 10000000000000000000,
                    restitution: 0
                }),
                "wall"
            ] ,
            't': () => [
                sprite('plains_top'),
                area(),
                anchor("center"),
                body({
                    mass: 10000000000000000000000,
                    restitution: 0
                }),
                "wall"
            ]
        }
    }
  
    addLevel(map, levelOne)
  

})

go('accueil')