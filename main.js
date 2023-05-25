

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
loadSpriteAtlas("sprites/tilesets/Dungeon_A4.png", {
    "wall":{
        x: 96,
        y: 624,
        height: 96,
        width: 96,
    }
})

loadSpriteAtlas("sprites/tilesets/Dungeon_A4.png", {
    "wall_top":{
        x: 96,
        y: 528,
        height: 96,
        width: 96,
    }
})

loadSpriteAtlas("sprites/tilesets/Inside_B.png", {
    "chair":{
        x: 0,
        y: 624,
        height: 48,
        width: 48,
    }
})

loadSpriteAtlas("sprites/tilesets/Inside_A2.png", {
    "table":{
        x: 672,
        y: 0,
        height: 48,
        width: 48,
    }
})

loadSpriteAtlas("sprites/tilesets/Inside_B.png", {
    "kitchen1":{
        x: 0,
        y: 672,
        height: 48,
        width: 48,
    }
})

loadSpriteAtlas("sprites/tilesets/Inside_B.png", {
    "kitchen2":{
        x: 48,
        y: 672,
        height: 48,
        width: 48,
    }
})

loadSpriteAtlas("sprites/tilesets/Inside_B.png", {
    "kitchen3":{
        x: 144,
        y: 672,
        height: 48,
        width: 48,
    }
})

loadSpriteAtlas("sprites/tilesets/Inside_B.png", {
    "bed1":{
        x: 48,
        y: 480,
        height: 48,
        width: 48,
    }
})

loadSpriteAtlas("sprites/tilesets/Inside_B.png", {
    "bed2":{
        x: 96,
        y: 480,
        height: 48,
        width: 48,
    }
})

loadSpriteAtlas("sprites/tilesets/Inside_B.png", {
    "bed3":{
        x: 48,
        y: 524,
        height: 48,
        width: 48,
    }
})

loadSpriteAtlas("sprites/tilesets/Inside_B.png", {
    "bed4":{
        x: 96,
        y: 524,
        height: 48,
        width: 48,
    }
})

loadSpriteAtlas("sprites/tilesets/Inside_A4.png", {
    "wall_insidetop":{
        x: 96,
        y: 336,
        height: 48,
        width: 48,
    }
})

loadSpriteAtlas("sprites/tilesets/Inside_A4.png", {
    "wall_inside1":{
        x: 288,
        y: 432,
        height: 48,
        width: 48,
    }
})

loadSpriteAtlas("sprites/tilesets/Inside_A4.png", {
    "wall_inside2":{
        x: 0,
        y: 432,
        height: 48,
        width: 48,
    }
})

loadSpriteAtlas("sprites/tilesets/Inside_A4.png", {
    "wall_inside3":{
        x: 0,
        y: 384,
        height: 48,
        width: 48,
    }
})

loadSpriteAtlas("sprites/tilesets/Inside_A5.png", {
    "black_void":{
        x: 0,
        y: 0,
        height: 48,
        width: 48,
    }
})

loadSprite("top_right_wall", "sprites/background/top_right_wall.png")
loadSprite("top_left_wall", "sprites/background/top_left_wall.png")
loadSprite("bottom_right_wall", "sprites/background/bottom_right_wall.png")
loadSprite("bottom_left_wall", "sprites/background/bottom_left_wall.png")
loadSprite("inbetween_wall_sides", "sprites/background/inbetween_wall_sides.png")
loadSprite("inbetween_wall_front", "sprites/background/inbetween_wall_front.png")


loadSprite("ground", "sprites/background/crystal_tile.png")


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
    },
    "slime":{
        x: 0,
        y: 0,
        width: 574,
        height: 384,
        sliceX: 12,
        sliceY: 8,
        anims: {
            down: {from: 3, to: 5, loop: true},
            left: {from: 15, to: 17, loop: true},
            right: {from: 27, to: 29, loop: true},
            up: {from: 39, to: 41, loop: true},
            idle_down: {from: 39, to: 39, loop: true},
            idle_up: {from: 3, to: 3, loop: true},
            idle_left: {from: 15, to: 15, loop: true},
            idle_right: {from: 27, to: 27, loop: true}
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
    //Add around the map walls
    add([
        sprite("top_left_wall",),
        pos(48,120),
        anchor("center"),
        scale(0.25)
    ]);
    add([
        sprite("bottom_left_wall",),
        pos(48,720),
        anchor("center"),
        scale(0.25)
    ]);
    add([
        sprite("top_right_wall",),
        pos(744,120),
        anchor("center"),
        scale(0.25)
    ]);
    add([
        sprite("bottom_right_wall",),
        pos(744,720),
        anchor("center"),
        scale(0.25)
    ]);
    add([
        sprite("inbetween_wall_sides",),
        pos(-108,420),
        anchor("center"),
        scale(0.25)
    ]);
    add([
        sprite("inbetween_wall_sides",),
        pos(900,420),
        anchor("center"),
        scale(0.25)
    ]);
    add([
        sprite("inbetween_wall_front",),
        pos(396,-72),
        anchor("center"),
        scale(0.25)
    ]);
    add([
        sprite("inbetween_wall_front",),
        pos(396,912),
        anchor("center"),
        scale(0.25)
    ]);

    //Create player, movement, and level
        let direction = vec2(0,0)    //changer selon la position de départ
        let lastKnownDirection = vec2(0,0)
        
        //add player sprite
        let player = add([
            sprite("player", {anim: "idle_up"}),
            pos(250,250),
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
    

    //Exporter maps du fichiers maps
    let code = export_maps(Math.floor(Math.random(maps.length-1)*maps.length));//log(code[i])



    //Modifier les X en dessus d'une case vide de chaque map en Y
    let modifiedCode = [];

    for (let i = 0; i < code.length; i++) {
        let modifiedLine = "";
        for (let j = 0; j < code[i].length; j++) {
            if (code[i][j] === "X" && i != (code.length - 1) && code[i + 1][j] === " ") {
            modifiedLine += "Y";
            } else {
            modifiedLine += code[i][j];
            }
        }
        modifiedCode.push(modifiedLine);
    }
    for (let i = 0; i < modifiedCode.length; i++) {
      console.log(modifiedCode[i]);
}
for (let i = 0; i < code.length; i++) {
    console.log(code[i]);
}
console.log(code.length,  modifiedCode.length)


    addLevel(modifiedCode,{
        tileWidth: 24,
        tileHeight: 24,
        tiles: {
            "Y": () => [
                sprite("wall"),
                anchor("center"),
                scale(0.25),
                area(),
                body({isStatic:true}),
            ],
            "X": () => [
                sprite("wall_top"),
                anchor("center"),
                scale(0.25),
                area(),
                body({isStatic:true}),
            ],
            "E": () => [
                sprite("wall_insidetop"),
                anchor("center"),
                scale(0.5),
                area(),
                body({isStatic:true}),
            ],
            "F": () => [
                sprite("wall_inside1"),
                anchor("center"),
                scale(0.5),
                area(),
                body({isStatic:true}),
            ],
            "G": () => [
                sprite("bed1"),
                anchor("center"),
                scale(0.5),
                area(),
                body({isStatic:true}),
            ],
            "H": () => [
                sprite("bed2"),
                anchor("center"),
                scale(0.5),
                area(),
                body({isStatic:true}),
            ],
            "I": () => [
                sprite("bed3"),
                anchor("center"),
                scale(0.5),
                area(),
                body({isStatic:true}),
            ],
            "J": () => [
                sprite("bed4"),
                anchor("center"),
                scale(0.5),
                area(),
                body({isStatic:true}),
            ],
            "K": () => [
                sprite("wall_inside3"),
                anchor("center"),
                scale(0.5),
                area(),
                body({isStatic:true}),
            ],
            "Q": () => [
                sprite("wall_inside2"),
                anchor("center"),
                scale(0.5),
                area(),
                body({isStatic:true}),
            ],
            "L": () => [
                sprite("table"),
                anchor("center"),
                scale(0.5),
                area(),
                body({isStatic:true}),
            ],
            "M": () => [
                sprite("kitchen1"),
                anchor("center"),
                scale(0.5),
                area(),
                body({isStatic:true}),
            ],
            "N": () => [
                sprite("kitchen2"),
                anchor("center"),
                scale(0.5),
                area(),
                body({isStatic:true}),
            ],
            "O": () => [
                sprite("kitchen3"),
                anchor("center"),
                scale(0.5),
                area(),
                body({isStatic:true}),
            ],
            "P": () => [
                sprite("chair"),
                anchor("center"),
                scale(0.5),
                area(),
            ],
            "V": () => [
                sprite("black_void"),
                anchor("center"),
                scale(0.5),
                area(),
            ]
        }
    })

        addSlime((400,400))
        enemyBehavior(player, sword); 



    //collisions (monster and items)
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

        //projectile collision
        onCollide("damage", "player", (projectile, player) => {
            destroy(projectile)
            //health
            damage = projectile.damage - player.def
            if(damage <= 0){
                damage = 1
            }
            player.hurt(damage)
            if(player.hp() > 0){
                damagePopup(damage, player)
            }
            console.log(player.hp())
        })

        goldCollision()


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
    //outline
    add([
        rect(100, 10),
        outline(3),
        color(0,0,0,0),
        fixed(),
        pos(10,10),
        "ui",
        z(50),
    ])
    //hp
    const healthBar = add([
        rect(100, 10),
        pos(10, 10),
        color(15, 139, 6),
        "ui",
        fixed(),
        z(50),
    ]);
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
        "ui",
        z(50),
    ])

    const gold =  add([
        text(player.gold, {size: 20}),
        pos(width() - 20, 5),
        color(255, 255, 0),
        "ui",
        fixed(),
        z(50),
    ]);
    onUpdate(() => {
        // Update gold
        gold.text = player.gold
    })

}

function map_generator(){
    // Define the size of the dungeon
    const dungeonWidth = 10;
    const dungeonHeight = 10;

    // Create a 2D array to represent the dungeon
    const dungeonMap = new Array(dungeonHeight).fill(null).map(() => new Array(dungeonWidth).fill(null));

    // Fill the dungeon with walls
    for (let y = 0; y < dungeonHeight; y++) {
      for (let x = 0; x < dungeonWidth; x++) {
        dungeonMap[y][x] = "wall";
      }
    }

    // Dig out rooms and corridors
    for (let i = 0; i < 50; i++) {
     // Choose a random point in the dungeon
     const x = Math.floor(Math.random() * dungeonWidth);
      const y = Math.floor(Math.random() * dungeonHeight);
  
      // Dig out a room or corridor from that point
      if (Math.random() < 0.5) {
        const roomWidth = Math.floor(Math.random() * 5) + 2;
        const roomHeight = Math.floor(Math.random() * 5) + 2;
        for (let dy = 0; dy < roomHeight; dy++) {
          for (let dx = 0; dx < roomWidth; dx++) {
            const nx = x - Math.floor(roomWidth / 2) + dx;
            const ny = y - Math.floor(roomHeight / 2) + dy;
            if (nx >= 1 && nx < dungeonWidth - 1 && ny >= 1 && ny < dungeonHeight - 1) {
              dungeonMap[ny][nx] = "floor";
            }
          }
        }
      } else {
        const dirX = Math.random() < 0.5 ? -1 : 1;
        const dirY = Math.random() < 0.5 ? -1 : 1;
        const corridorLength = Math.floor(Math.random() * 8) + 3;
        let corridorX = x;
        let corridorY = y;
        for (let j = 0; j < corridorLength; j++) {
          if (corridorX >= 1 && corridorX < dungeonWidth - 1 && corridorY >= 1 && corridorY < dungeonHeight - 1) {
            dungeonMap[corridorY][corridorX] = "floor";
          }
          corridorX += dirX;
          corridorY += dirY;
        }
      }
    }
}
function addBat(position){
//add enemy bat
    bat = add([
        sprite("bat", {anim: "idle_up"}),
        pos(position),
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
            direction: RIGHT,
            att: 10,
            def: 10,
            speed: 40,
            knockback: 20,
            drops: {
                gold: 5
            },
            currentAnimation: "",
        }
    ]);
    
    // Set the enemy's behavior to run continuously
        loop(randi(1,3), () => {
            let directions = [RIGHT, LEFT, UP, DOWN]
            bat.direction = bat.direction.add(directions[randi(4)]).unit()
            if(bat.direction.x == 0 && bat.direction.y == 0){
                let directions = [RIGHT, LEFT, UP, DOWN]
                bat.direction = bat.direction.add(directions[randi(4)]).unit()
            }

            //anims
            if(Math.abs(bat.direction.x) > Math.abs(bat.direction.y)){
                if(bat.direction.x > 0){
                    bat.play("right")
                }
                else{
                    bat.play("left")
                }
            }
            else{
                if(bat.direction.y < 0){
                    bat.play("up")
                }
                else{
                    bat.play("down")
                }
            }
        })
}

function addSlime(position){
    //add enemy bat
        slime = add([
            sprite("slime", {anim: "idle_up"}),
            pos(position),
            anchor("center"),
            area({
                shape: new Rect(vec2(0), 32, 32),
                offset: vec2(0, 12),
            }),
            scale(0.4),
            z(1),
            "slime",
            "monster",
            health(10),
            {
                direction: RIGHT,
                att: 10,
                def: 10,
                speed: 20,
                knockback: 20,
                drops: {
                    gold: 5
                },
                moving: false
            }
        ]);
}

function enemyBehavior(player){
    batBehavior(player);

    slimeBehavior(player);
    
}

function batBehavior(player){
    onUpdate("bat", (bat) => {
        let distance_player_bat = vec2(bat.pos).sub(player.pos).len();
        if(distance_player_bat < 100){
            let direction = vec2(player.pos).sub(bat.pos).unit().scale(bat.speed + 30)

            //anims
            if(Math.abs(direction.x) > Math.abs(direction.y)){
                if(direction.x > 0 && bat.currentAnimation != "right"){
                    bat.play("right")
                    bat.currentAnimation = "right"
                }
                else if(direction.x < 0 && bat.currentAnimation != "left"){
                    bat.play("left")
                    bat.currentAnimation = "left"
                }
            }
            else{
                if(direction.y < 0 && bat.currentAnimation != "up"){
                    bat.play("up")
                    bat.currentAnimation = "up"
                }
                else if(direction.y > 0 && bat.currentAnimation != "down"){
                    bat.play("down")
                    bat.currentAnimation = "down"
                }
            }
            bat.move(direction); // Move towards the player

        }
        else{
            let movement = bat.direction.scale(bat.speed)
            bat.move(movement)
        }
    })
}

function slimeBehavior(player){
    const slimes = get("slime")
    //no player in sight
    for(let i = 0; i < slimes.length; i++){
        let slime = slimes[i]
        // Set the enemy's behavior to run continuously
        loop(randi(4,6), () => {
            let directions = [RIGHT, LEFT, UP, DOWN]
            slime.direction = slime.direction.add(directions[randi(4)]).unit()
            if(slime.direction.x == 0 && slime.direction.y == 0){
                let directions = [RIGHT, LEFT, UP, DOWN]
                slime.direction = slime.direction.add(directions[randi(4)]).unit()
            }
    
            //anims
            if(Math.abs(slime.direction.x) > Math.abs(slime.direction.y)){
                if(slime.direction.x > 0){
                    slime.play("right")
                }
                else{
                    slime.play("left")
                }
            }
            else{
                if(slime.direction.y < 0){
                    slime.play("up")
                }
                else{
                    slime.play("down")
                }
            }
    
            slime.moving = true
            
            wait(2, () => {
                slime.moving = false
                if(Math.abs(slime.direction.x) > Math.abs(slime.direction.y)){
                    if(slime.direction.x > 0){
                        slime.play("idle_right")
                    }
                    else{
                        slime.play("idle_left")
                    }
                }
                else{
                    if(slime.direction.y < 0){
                        slime.play("idle_down")
                    }
                    else{
                        slime.play("idle_up")
                    }
                }
            })
        })
        // Run script for 2 seconds
        onUpdate(() => {
            if(slime.moving == true){
                let movement = slime.direction.scale(slime.speed)
                slime.move(movement)
            }
        })
    }

    //player in slight
    loop(2, () => {
        if(slime.hp() > 0){
            let distance_player_slime = vec2(slime.pos).sub(player.pos).len();
            console.log(distance_player_slime)
            if(distance_player_slime < 150){
                run = false;
                let projectile = add([
                    circle(5),
                    pos(slime.pos),
                    anchor("center"),
                    area(),
                    z(1),
                    color(41,207,207),
                    "projectile",
                    "damage",
                    {
                        damage: slime.att
                    }
                ])
                let direction = vec2(player.pos).sub(projectile.pos).unit().scale(60)
                onUpdate(() => {
                    projectile.move(direction)
                })
                wait(rand(1, 2), () => {
                    if(projectile){
                        let splash = add([
                            circle(6),
                            pos(projectile.pos),
                            anchor("center"),
                            area(),
                            color(41,207,255),
                            "splash",
                            "damage",
                            {
                                damage: slime.att
                            }
                        ])
                        destroy(projectile)
                        wait(6, () => {
                            destroy(splash)
                        })
                    }
                })
            }
        }
    })
}

function goldCollision(){
    //gold, player collision
    onCollide("gold", "player", (gold, player) => {
        player.gold += gold.gold
        destroy(gold)
    })
}
