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
            up: {from: 36, to: 38, loop: true},
            left: {from: 12, to: 14, loop: true},
            down: {from: 0, to: 2, loop: true},
            right: {from: 24, to: 26, loop: true},
            idle_up: {from: 1, to: 1, loop: true}
        }
    }
})
loadSpriteAtlas("sprites/tilesets/Dungeon_A2.png", {
    "test":{
        x: 0,
        y: 0,
        height: 64,
        width: 64,
    }
})
loadSprite("ground", "sprites/background/stone_tile.png")
loadSpriteAtlas("sprites/ennemies/Monster.png", {
    "bat":{
        x: 0,
        y: 0,
        width: 574,
        height: 384,
        sliceX: 12,
        sliceY: 8,
        anims: {
            down: {from: 0, to: 2, loop: true},
            left: {from: 12, to: 14, loop: true},
            right: {from: 24, to: 26, loop: true},
            up: {from: 36, to: 38, loop: true},
            idle_up: {from: 36, to: 36, loop: true}
        }
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
    let background_position = player.pos
    camPos(player.pos)

    //add controls and animations
    onKeyDown("right", () => {
        player.move(RIGHT.scale(SPEED))
        camPos(player.pos)
        if(player.pos.x > background_position.x + 80){
            background_position = background_position.add(vec2(80,0))
            background.pos = background.pos.add(vec2(80,0))
        }
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
        if(player.pos.x < background_position.x - 80){
            background_position = background_position.add(vec2(-80,0))
            background.pos = background.pos.add(vec2(-80,0))
        }
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
        if(player.pos.y < background_position.y - 80){
            background_position = background_position.add(vec2(0,-80))
            background.pos = background.pos.add(vec2(0,-80))
        }
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
        if(player.pos.y > background_position.y + 80){
            background_position = background_position.add(vec2(0,80))
            background.pos = background.pos.add(vec2(0,80))
        }
    })
    onKeyPress("down", () => {
        direction = direction.add(DOWN)
        check_movement(direction, player)
    })
    onKeyRelease("down", () => {
        direction = direction.sub(DOWN)
        check_movement(direction, player)
    })



    //background moves with the player
    let background = add([
        sprite("ground", {width: width(), height: height()}),
        pos(player.pos),
        anchor("center"),
        scale(2),
        z(-1)
    ]);
    
    addLevel([
        "       5        ",
        "           5    ",
        "           5    ",
        "       5    5    ",
        "       5    5    ",
        "  5         5    ",
        "     5      5    ",
    ],{
        tileWidth: 32,
        tileHeight: 32,
        tiles: {
            "5": () => [
                sprite("test"),
                anchor("center")
            ]
        }
    })
    

    //add enemy bat
    //let bat_direction = RIGHT
    let bat_SPEED = 50
    let bat = add([
        sprite("bat", {anim: "idle_up"}),
        pos(400,500),
        anchor("center"),
        area({
            shape: new Rect(vec2(0), 32, 32),
            offset: vec2(0, 12)
        }),
        scale(0.35),
        z(1),
        body(),
        "bat",
        {
            bat_direction: RIGHT
        }
    ]);

    let bat2 = add([
        sprite("bat", {anim: "idle_up"}),
        pos(400,500),
        anchor("center"),
        area({
            shape: new Rect(vec2(0), 32, 32),
            offset: vec2(0, 12)
        }),
        scale(0.35),
        z(1),
        body(),
        "bat",
        {
            bat_direction: RIGHT
        }
    ]);

    
    // Set the enemy's behavior to run continuously
    for(let i = 0; i < get("bat").length; i++){
        bat = get("bat")[i]
        console.log(bat)
        loop(randi(1,3), () => {
            let directions = [RIGHT, LEFT, UP, DOWN]
            bat.bat_direction = bat.bat_direction.add(directions[randi(4)]).unit()
            console.log(bat.bat_direction)
            if(bat.bat_direction.x == 0 && bat.bat_direction.y == 0){
                let directions = [RIGHT, LEFT, UP, DOWN]
                bat.bat_direction = bat.bat_direction.add(directions[randi(4)]).unit()
            }
        })
    }
    onUpdate("bat", (bat) => {
        let distance_player_bat = vec2(bat.pos).sub(player.pos).len();
        if(distance_player_bat < 100){
            bat.move(vec2(player.pos).sub(bat.pos).unit().scale(bat_SPEED + 30)); // Move towards the player
        }
        else{
            let movement = bat.bat_direction.scale(bat_SPEED)
            bat.move(movement)
        }
    })
    
})

go('donjon')

function check_movement(direction, player){
    if(direction.y == 1){
        player.play("down")
    }
    else if(direction.y == -1){
        player.play("up")
    }
    else{
        if(direction.x == 1){
            player.play("right")
        }
        else if(direction.x == -1){
            player.play("left")
        }
        else{
            player.play("idle_up")
        }
    }
}