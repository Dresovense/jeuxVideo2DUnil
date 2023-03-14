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
    },
    "hero_battle":{
        x: 0,
        y: 0,
        width: 288,
        height: 192,
        sliceX: 9,
        sliceY: 6,
        anims: {
            slice_left: {from: 0, to: 8}
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
        area(),
        z(1),
        body(),
        "player",
    ]);


    let collision_dir = []

    onKeyDown("right", () => {
        if(collision_dir.indexOf("right") < 0){
            camPos(camPos().add(vec2(2, 0)))
            player.pos.x += 2
        }
    })
    onKeyPress("right", () => {
        player.play("run_right")
    })

    onKeyDown("left", () => {
        if(collision_dir.indexOf("left") < 0){
            camPos(camPos().add(vec2(-2,0)))
            player.pos.x += -2
        }
    })
    onKeyPress("left", () => {
        player.play("run_left")
    })

    onKeyDown("up", () => {
        if(collision_dir.indexOf("top") < 0){
            camPos(camPos().add(vec2(0,-2)))
            player.pos.y += -2
        }
    })
    onKeyPress("up", () => {
        player.play("run_up")
    })

    onKeyDown("down", () => {
        if(collision_dir.indexOf("bottom") < 0){
            camPos(camPos().add(vec2(0,2)))
            player.pos.y += 2
        }
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
                "wall"
            ] ,
            't': () => [
                sprite('plains_top'),
                area(),
                anchor("center"),
                "wall"
            ]
        }
    }

    onCollideUpdate("wall", "player", (wall, player, collision) => {
        /* if(wall.pos.x < player.pos.x){
            collision_dir.push("left")
            console.log("left")
        }
        if(wall.pos.x > player.pos.x){
            collision_dir.push("right")
            console.log("right")

        }
        if(wall.pos.y < player.pos.y){
            collision_dir.push("top")
            console.log("top")

        }
        if(wall.pos.y > player.pos.y){
            collision_dir.push("botttom")
            console.log("botttom")
        } */
        console.log("here")
        console.log(collision)
        if(collision.isLeft()){
            collision_dir.push("right")
            console.log("left")
        }
        if(collision.isRight()){
            collision_dir.push("left")
            console.log("right")

        }
        if(collision.isTop()){
            collision_dir.push("bottom")
            console.log("top")

        }
        if(collision.isBottom()){
            collision_dir.push("top")
            console.log("botttom")
        }
    })

    onCollideEnd("wall", "player", () => {
        collision_dir = []
    })
  
    addLevel(map, levelOne)
  

})

go('accueil')