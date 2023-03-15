kaboom({
    width: 320,
    height: 192,
    scale: 3,
    debug: true,
});
  

scene("donjon", () => {
    const SPEED = 50
    let direction = DOWN    //changer selon la position de départ


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

    onKeyDown("right", () => {
        player.move(RIGHT.scale(SPEED))
        camPos(player.pos)
    })
    onKeyPress("right", () => {
        player.play("run_right")
        direction = RIGHT
    })

    onKeyDown("left", () => {
        player.move(LEFT.scale(SPEED))
        camPos(player.pos)
    })
    onKeyPress("left", () => {
        player.play("run_left")
        direction = LEFT
    })

    onKeyDown("up", () => {
        player.move(UP.scale(SPEED))
        camPos(player.pos)
    })
    onKeyPress("up", () => {
        player.play("run_up")
        direction = UP
    })

    onKeyDown("down", () => {
        player.move(DOWN.scale(SPEED))
        camPos(player.pos)
    })
    onKeyPress("down", () => {
        player.play("run_down")
        direction = DOWN
    })

    onKeyPress("space", () => {
    })


    onUpdate(() => {
        if(!isKeyDown("left") && !isKeyDown("right") && !isKeyDown("up") && !isKeyDown("down")){
            player.stop("run_down")
        }
    })

  

})

go('donjon')