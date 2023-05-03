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
            idle_up: {from: 36, to: 36, loop: true},
            idle_down: {from: 0, to: 0, loop: true},
            idle_left: {from: 12, to: 12, loop: true},
            idle_right: {from: 24, to: 24, loop: true}
        }
    }
})
loadSpriteAtlas("sprites/characters/yasuna1 2.png", {
    "player1":{
        x: 0,
        y: 0,
        width: 432,
        height: 288,
        sliceX: 9,
        sliceY: 6,

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
            idle_down: {from: 36, to: 36, loop: true},
            idle_up: {from: 0, to: 0, loop: true},
            idle_left: {from: 12, to: 12, loop: true},
            idle_right: {from: 24, to: 24, loop: true}
        }
    }
})
loadSpriteAtlas("sprites/objects/sword.png", {
    "sword":{
        x: 0,
        y: 0,
        width: 480,
        height: 55,
        sliceX: 5,
        sliceY: 1,
        anims: {
            slash: {from: 0, to: 4, speed: 24},
            idle: {from: 0, to: 0, loop: true}
        }
    }
})
  

scene("donjon", () => {
    let direction = vec2(0,0)    //changer selon la position de départ
    let lastKnownDirection = vec2(0,0)
    
    //add player sprite
    let player = add([
        sprite("player", {anim: "idle_up"}),
        pos(500,500),
        anchor("center"),
        area({
            shape: new Rect(vec2(0), 32, 32),
            offset: vec2(0, 12),
        }),
        scale(0.5),
        z(1),
        body(),
        "player",
        health(50),
        {
            att: 15,
            def: 10,
            speed: 100,
            knockback: 20,
            gold: 0,
            max_health: 50
        }
    ]);
    sword = add([
        sprite("sword", {anim: "idle"}),
        pos(player.pos.x, player.pos.y),
        opacity(0),
        anchor("center"),
        scale(0.4),
        area({
            shape: new Rect(vec2(0), 60, 50),
        }),
        z(1),
        "sword"
    ])
    let background_position = player.pos
    let swordUsed = false
    camPos(player.pos)
    //add controls and animations
    onKeyDown("right", () => {
        player.move(RIGHT.scale(player.speed))
        sword.move(RIGHT.scale(player.speed))
        camPos(player.pos)
        background_position = background_following(player, background, background_position)
    })
    onKeyPress("right", () => {
        direction = direction.add(RIGHT)
        lastKnownDirection = check_movement(direction, player)
    })
    onKeyRelease("right", () => {
        direction = direction.sub(RIGHT)
        lastKnownDirection = check_movement(direction, player)
    })

    onKeyDown("left", () => {
        player.move(LEFT.scale(player.speed))
        sword.move(LEFT.scale(player.speed))
        camPos(player.pos)
        background_position = background_following(player, background, background_position)
    })
    onKeyPress("left", () => {
        direction = direction.add(LEFT)
        lastKnownDirection = check_movement(direction, player)
    })
    onKeyRelease("left", () => {
        direction = direction.sub(LEFT)
        lastKnownDirection = check_movement(direction, player)
    })

    onKeyDown("up", () => {
        player.move(UP.scale(player.speed))
        sword.move(UP.scale(player.speed))
        camPos(player.pos)
        background_position = background_following(player, background, background_position)
    })
    onKeyPress("up", () => {
        direction = direction.add(UP)
        lastKnownDirection = check_movement(direction, player)
    })
    onKeyRelease("up", () => {
        direction = direction.sub(UP)
        lastKnownDirection = check_movement(direction, player)
    })

    onKeyDown("down", () => {
        player.move(DOWN.scale(player.speed))
        sword.move(DOWN.scale(player.speed))
        camPos(player.pos)
        background_position = background_following(player, background, background_position)
    })
    onKeyPress("down", () => {
        direction = direction.add(DOWN)
        lastKnownDirection = check_movement(direction, player)
    })
    onKeyRelease("down", () => {
        direction = direction.sub(DOWN)
        lastKnownDirection = check_movement(direction, player)
    })

    onKeyPress("space", () => {
        if(swordUsed == false){
            swordUsed = true
            console.log(lastKnownDirection)
            if(lastKnownDirection.y == -1){
                console.log("UP")
                sword.angle = 0
                sword.pos.x += 3
                sword.pos.y -= 5
                sword.z = 0
            }
            else if(lastKnownDirection.y == 1){
                console.log("DOWN")
                sword.angle = 180
                sword.pos.x -= 5
                sword.pos.y += 17
                sword.z = 1
            }
            else{
                if(lastKnownDirection.x == 1){
                    console.log("RIGHT")
                    sword.angle = 90
                    sword.pos.x += 10
                    sword.pos.y += 8  
                    sword.z = 1
                }
                else if(lastKnownDirection.x == -1){
                    console.log("LEFT")
                    sword.angle = 270
                    sword.pos.x -= 10
                    sword.pos.y += 8  
                    sword.z = 0
                }
            }
            sword.opacity = 1
            sword.play("slash")
            wait(0.3, () => {
                sword.opacity = 0
                sword.pos.x = player.pos.x
                sword.pos.y = player.pos.y
                swordUsed = false
            })
        }
    })



    //background moves with the player
    let background = add([
        sprite("ground", {width: width(), height: height()}),
        pos(player.pos),
        anchor("center"),
        scale(1.5),
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
    add([
        sprite("bat", {anim: "idle_up"}),
        pos(400,500),
        anchor("center"),
        area({
            shape: new Rect(vec2(0), 32, 32),
            offset: vec2(0, 12),
        }),
        scale(0.35),
        z(1),
        "bat",
        "monster",
        health(10),
        {
            bat_direction: RIGHT,
            att: 10,
            def: 10,
            speed: 40,
            knockback: 20,
            drops: {
                gold: 5
            }
        }
    ]);
    
    // Set the enemy's behavior to run continuously
    for(let i = 0; i < get("bat").length; i++){
        bat = get("bat")[i]
        loop(randi(1,3), () => {
            let directions = [RIGHT, LEFT, UP, DOWN]
            bat.bat_direction = bat.bat_direction.add(directions[randi(4)]).unit()
            if(bat.bat_direction.x == 0 && bat.bat_direction.y == 0){
                let directions = [RIGHT, LEFT, UP, DOWN]
                bat.bat_direction = bat.bat_direction.add(directions[randi(4)]).unit()
            }
        })
    }
    onUpdate("bat", (bat) => {
        let distance_player_bat = vec2(bat.pos).sub(player.pos).len();
        if(distance_player_bat < 100){
            bat.move(vec2(player.pos).sub(bat.pos).unit().scale(bat.speed + 30)); // Move towards the player
        }
        else{
            let movement = bat.bat_direction.scale(bat.speed)
            bat.move(movement)
        }
    })


    //monster, player collision
    onCollide("monster", "player", (monster, player) => {
        taking_damage(monster, player)
        background_position = background_following(player, background, background_position)
    })

    //monster, sword collision
    onCollide("monster", "sword", (monster) => {
        if(swordUsed){
            taking_damage_monster(monster, player)
            if(monster.hp() <= 0){
                drops(monster)
                destroy(monster)
            }
        }
    })

    //gold, player collision
    onCollide("gold", "player", (gold, player) => {
        player.gold += gold.gold
        destroy(gold)
    })


    //add UI
    addUI(player);
    
})

go('donjon')

function check_movement(direction, player){
    if(direction.y == 1){
        player.play("down")
        lastKnownDirection = DOWN
    }
    else if(direction.y == -1){
        player.play("up")
        lastKnownDirection = UP
    }
    else{
        if(direction.x == 1){
            player.play("right")
            lastKnownDirection = RIGHT
        }
        else if(direction.x == -1){
            player.play("left")
            lastKnownDirection = LEFT
        }
        else{
            switch(lastKnownDirection){
                case UP:
                    player.play("idle_up");
                    break;
                case LEFT:
                    player.play("idle_left");
                    break;
                case RIGHT:
                    player.play("idle_right");
                    break;
                case DOWN:
                    player.play("idle_down");
                    break;

            }
        }
    }
    return lastKnownDirection
}

function background_following(player, background, background_position){
    if(player.pos.y > background_position.y + 60){
        background_position = background_position.add(vec2(0,60))
        background.pos = background.pos.add(vec2(0,60))
    }
    if(player.pos.y < background_position.y - 60){
        background_position = background_position.add(vec2(0,-60))
        background.pos = background.pos.add(vec2(0,-60))
    }
    if(player.pos.x < background_position.x - 60){
        background_position = background_position.add(vec2(-60,0))
        background.pos = background.pos.add(vec2(-60,0))
    }
    if(player.pos.x > background_position.x + 60){
        background_position = background_position.add(vec2(60,0))
        background.pos = background.pos.add(vec2(60,0))
    }
    return background_position
}

function taking_damage(monster, player){
    //movement
    const knockbackDirection = player.pos.sub(monster.pos).unit();
    player.move(knockbackDirection.scale(monster.knockback * 100));
    sword.move(knockbackDirection.scale(monster.knockback * 100))
    camPos(player.pos)

    //health
    damage = monster.att - player.def
    if(damage <= 0){
        damage = 1
    }
    player.hurt(damage)
    if(player.hp() > 0){
        damagePopup(damage, player)
    }
    console.log(player.hp())
    
}

function taking_damage_monster(monster, player){
    //movement
    const knockbackDirection = player.pos.sub(monster.pos).unit();
    monster.move(knockbackDirection.scale(-player.knockback * 100));

    //health
    damage = player.att - monster.def
    if(damage <= 0){
        damage = 1
    }
    monster.hurt(damage)
    if(monster.hp() > 0){
        damagePopup(damage, monster)
    }
    console.log(monster.hp())
}

function damagePopup(damage, entity){
    popup = add([
        text(damage),
        pos(entity.pos.x, entity.pos.y - 15),
        scale(0.25),
        color(255, 0, 0),
        anchor('center'),
        'damage',
        lifespan(0.5),
    ])
    onUpdate(() => {
        popup.pos.x = entity.pos.x
        popup.pos.y = entity.pos.y - 15 
    })
}

function drops(monster){
    let gold_drop = monster.drops.gold
    while(gold_drop > 0){
        if(gold_drop >= 100){
            add([
                circle(16),
                color(255, 250, 63),
                pos(monster.pos),
                lifespan(10),
                area(),
                "gold",
                {
                    gold: 100
                },
            ]);
            gold_drop -= 100
        }
        else if(gold_drop >= 50){
            add([
                circle(8),
                color(255, 250, 63),
                pos(monster.pos),
                lifespan(10),
                area(),
                "gold",
                {
                    gold: 50
                },
            ]);
            gold_drop -= 50
        }
        else if(gold_drop >= 20){
            add([
                circle(4),
                color(255, 250, 63),
                pos(monster.pos),
                lifespan(10),
                area(),
                "gold",
                {
                    gold: 20
                },
            ]);
            gold_drop -= 20
        }
        else if(gold_drop >= 5){
            add([
                circle(2),
                color(255, 250, 63),
                pos(monster.pos),
                lifespan(10),
                area(),
                "gold",
                {
                    gold: 5
                },
            ]);
            gold_drop -= 5
        }
        else if(gold_drop >= 1){
            add([
                circle(1),
                color(255, 250, 63),
                pos(monster.pos),
                lifespan(10),
                area(),
                "gold",
                {
                    gold: 1
                },
            ]);
            gold_drop -= 1
        }
    }
}

function addUI(player){
    //hp
    const healthBar = add([
        rect(100, 10),
        pos(10, 10),
        color(15, 139, 6),
        "ui",
        fixed()
    ]);
    console.log(healthBar)
    onUpdate(() => {
        // Update health bar
        const maxHp = player.max_health;
        const currentHp = player.hp();

        healthBar.width = (currentHp / maxHp) * 100;
    })

    //gold
    const gold_logo = add([
        circle(5),
        pos(width() - 30, 15),
        color(255, 255, 0),
        fixed(),
        "ui"
    ])

    const gold =  add([
        text(player.gold, {size: 20}),
        pos(width() - 20, 5),
        color(255, 255, 0),
        "ui",
        fixed()
    ]);
    onUpdate(() => {
        // Update gold
        gold.text = player.gold
    })

}