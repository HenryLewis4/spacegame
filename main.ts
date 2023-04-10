controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 3 3 3 3 3 2 . . . . 
        . . . . 3 1 1 1 1 1 1 1 3 . . . 
        . . . . 1 1 1 1 1 1 1 1 1 . . . 
        . . . 2 1 1 1 1 1 1 1 1 1 2 . . 
        . . . 2 3 1 1 1 1 1 1 3 3 2 . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        `, spaceship, 0, -100)
})
let projectile: Sprite = null
let spaceship: Sprite = null
spaceship = sprites.create(img`
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c d . . . . . . . 
    . . . . . . . c b . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . c 2 . . . . . . . 
    . . . . . . . f f . . . . . . . 
    . . . . . . . e 2 . . . . . . . 
    . . . . . . e e 4 e . . . . . . 
    . . . . . . e 2 4 e . . . . . . 
    . . . . . c c c e e e . . . . . 
    . . . . e e 2 2 2 4 e e . . . . 
    . . c f f f c c e e f f e e . . 
    . c c c c e e 2 2 2 2 4 2 e e . 
    c c c c c c e e 2 2 2 4 2 2 e e 
    c c c c c c e e 2 2 2 2 4 2 e e 
    `, SpriteKind.Player)
spaceship.y = 100
controller.moveSprite(spaceship, 100, 0)
let mySprite = sprites.create(img`
    ....ffffff.........ccc..
    ....ff22ccf.......cc4f..
    .....ffccccfff...cc44f..
    ....cc24442222cccc442f..
    ...c9b4422222222cc422f..
    ..c999b2222222222222fc..
    .c2b99111b222222222c22c.
    c222b111992222ccccccc22f
    f222222222222c222ccfffff
    .f2222222222442222f.....
    ..ff2222222cf442222f....
    ....ffffffffff442222c...
    .........f2cfffc2222c...
    .........fcc2ffffffff...
    ..........fc2ffff.......
    ...........fffff........
    `, SpriteKind.Player)
mySprite.setPosition(20, 11)
mySprite.setVelocity(50, 0)
forever(function () {
    if (mySprite.x > 150) {
        mySprite.y += 10
        mySprite.x += -10
        mySprite.setVelocity(-50, 0)
    } else if (mySprite.x < 15) {
        mySprite.y += 10
        mySprite.x += 10
        mySprite.setVelocity(50, 0)
    }
})
