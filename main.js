kaboom({
    width: 400,
    height: 240,
    scale: 2.5,
    debug: true,
});

//load sprites
loadRoot("assets/")
loadSpriteAtlas("sprites/characters/yasuna1.png", {
    "player":{
        x: 0,
        y: 0,
        width: 576,
        height: 384,
        sliceX: 12,
        sliceY: 8,
        anims: {
            walk_up: {from: 36, to: 38, loop: true},
            walk_left: {from: 12, to: 14, loop: true},
            walk_down: {from: 0, to: 2, loop: true},
            walk_right: {from: 24, to: 26, loop: true},
            idle_up: {from: 1, to: 1, loop: true}
        }
    }
})
loadSpriteAtlas("sprites/tilesets/Dungeon_A2.png", {
    "ground":{
        x: 0,
        y: 192,
        height: 64,
        width: 64,
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
        sprite("ground", {width: width(), height: height()}),
        pos(player.pos),
        anchor("center"),
      ]);
    
  

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