kaboom({
    width: 400,
    height: 240,
    scale: 2.5,
    debug: true,
});

//load sprites
loadRoot("assets/")
loadSpriteAtlas("sprites/characters/player.png", {
    "player":{
        x: 0,
        y: 0,
        width: 832,
        height: 1344,
        sliceX: 13,
        sliceY: 21,
        anims: {
            walk_up: {from: 104, to: 112, loop: true},
            walk_left: {from: 117, to: 125, loop: true},
            walk_down: {from: 130, to: 138, loop: true},
            walk_right: {from: 143, to: 151, loop: true},
            idle_up: {from: 26, to: 27, loop: true}
        }
    }
})
loadSprite("grass", "sprites/tilesets/grass.png")
loadSpriteAtlas("sprites/tilesets/fences.png", {
    "fence1":{
        x: 0,
        y: 16,
        width: 16,
        height: 16,
    },
    "fence2":{
        x: 16,
        y: 0,
        width: 16,
        height: 16
    },
    "fence3":{
        x: 32,
        y: 48,
        width: 16,
        height: 16
    },
    "fence4":{
        x: 48,
        y: 0,
        width: 16,
        height: 16
    },
    "fence5":{
        x: 48,
        y: 32,
        width: 16,
        height: 16
    },
    "fence6":{
        x: 16,
        y: 32,
        width: 16,
        height: 16
    }
})
  

scene("donjon", () => {
    const SPEED = 100
    let direction = vec2(0,0)    //changer selon la position de départ

    //add player sprite
    let player = add([
        sprite("player", {anim: "idle_up"}),
        pos(500,500),
        anchor("center"),
        area({
            shape: new Rect(vec2(0), 32, 32),
            offset: vec2(0, 12)
        }),
        scale(0.5),
        z(1),
        body(),
        "player",
    ]);
    camPos(player.pos)

    //add controls and animations
    onKeyDown("right", () => {
        player.move(RIGHT.scale(SPEED))
        camPos(player.pos)
        background.pos = player.pos
    })
    onKeyPress("right", () => {
        direction = direction.add(RIGHT)
        check_movement(direction, player)
    })
    onKeyRelease("right", () => {
        direction = direction.sub(RIGHT)
        check_movement(direction, player)
    })

    onKeyDown("left", () => {
        player.move(LEFT.scale(SPEED))
        camPos(player.pos)
        background.pos = player.pos
    })
    onKeyPress("left", () => {
        direction = direction.add(LEFT)
        check_movement(direction, player)
    })
    onKeyRelease("left", () => {
        direction = direction.sub(LEFT)
        check_movement(direction, player)
    })

    onKeyDown("up", () => {
        player.move(UP.scale(SPEED))
        camPos(player.pos)
        background.pos = player.pos
    })
    onKeyPress("up", () => {
        direction = direction.add(UP)
        check_movement(direction, player)
    })
    onKeyRelease("up", () => {
        direction = direction.sub(UP)
        check_movement(direction, player)
    })

    onKeyDown("down", () => {
        player.move(DOWN.scale(SPEED))
        camPos(player.pos)
        background.pos = player.pos
    })
    onKeyPress("down", () => {
        console.log("press")
        direction = direction.add(DOWN)
        check_movement(direction, player)
    })
    onKeyRelease("down", () => {
        direction = direction.sub(DOWN)
        check_movement(direction, player)
        console.log("release")
    })



    //background moves with the player
    let background = add([
       /*  {
          draw() {
            drawSprite("background", {
                pos: vec2(0, 0),
                width: width(),
                height: height(),
                tiled: true
              });
          },
        }, */
      ]);
      


    const mapLayerOne = [
        '',
        '',
        '',
        '',
        '',
        '',
        '',
        '          23333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333334',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          1                                                                                                      1',
        '          63333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333335',
    ]

    const spritesLayerOne = {
        tileWidth: 16,
        tileHeight: 16,
        tiles:{
            '1': () => [
                sprite('fence1'),
                anchor("center"),
                area(),
                body({
                    isStatic: true, 
                }),
            ],
            '2': () => [
                sprite('fence2'),
                anchor("center"),
                area(),
                body({
                    isStatic: true, 
                }),
            ],
            '3': () => [
                sprite('fence3'),
                anchor("center"),
                area(),
                body({
                    isStatic: true, 
                }),
            ],
            '4': () => [
                sprite('fence4'),
                anchor("center"),
                area(),
                body({
                    isStatic: true, 
                }),
            ],
            '5': () => [
                sprite('fence5'),
                anchor("center"),
                area(),
                body({
                    isStatic: true, 
                }),
            ],
            '6': () => [
                sprite('fence6'),
                anchor("center"),
                area(),
                body({
                    isStatic: true, 
                }),
            ],
        }
    }

    addLevel(mapLayerOne, spritesLayerOne)

  

})

go('donjon')


function check_movement(direction, player){
    if(direction.y == 1){
        player.play("walk_down")
    }
    else if(direction.y == -1){
        player.play("walk_up")
    }
    else{
        if(direction.x == 1){
            player.play("walk_right")
        }
        else if(direction.x == -1){
            player.play("walk_left")
        }
        else{
            player.play("idle_up")
        }
    }
}