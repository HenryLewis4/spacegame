namespace SpriteKind {
    export const enemyProjectile = SpriteKind.create()
}
function checkYposition (valueY: number) {
    if (valueY >= 90) {
        return true
    } else {
        return false
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemyProjectile, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(-1)
    music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.UntilDone)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (!(enemyAtBottom)) {
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
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.UntilDone)
        pause(500)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    sprites.destroy(sprite)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    destroyedIndex = enemyList.indexOf(otherSprite)
    enemyList.removeAt(destroyedIndex)
    if (enemyList.length <= 0) {
        game.splash("You Win!")
        game.gameOver(true)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.setLife(0)
})
let projectile2: Sprite = null
let chosenPlane: Sprite = null
let destroyedIndex = 0
let projectile: Sprite = null
let enemyAtBottom = false
let enemyPlane: Sprite = null
let enemyList: Sprite[] = []
let spaceship: Sprite = null
game.splash("Hit all the planes before they get to the bottom.")
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
spaceship.y = 110
controller.moveSprite(spaceship, 100, 0)
spaceship.setStayInScreen(true)
enemyList = []
info.setLife(3)
for (let index = 0; index < 5; index++) {
    enemyPlane = sprites.create(img`
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
        `, SpriteKind.Enemy)
    enemyList.push(enemyPlane)
}
let lastXPosition = 20
for (let value of enemyList) {
    value.setPosition(lastXPosition, 11)
    lastXPosition += 30
    value.setVelocity(50, 0)
}
game.onUpdateInterval(1000, function () {
    chosenPlane = enemyList._pickRandom()
    projectile2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 3 1 3 . . . . . . 
        . . . . . . 2 3 1 3 2 . . . . . 
        . . . . . . 2 1 1 1 2 . . . . . 
        . . . . . . 2 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 2 3 1 3 2 . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.enemyProjectile)
    projectile2.setPosition(chosenPlane.x, chosenPlane.y)
    projectile2.setVelocity(0, 100)
})
forever(function () {
    for (let value of enemyList) {
        if (value.x > 150) {
            value.y += 20
            value.x += -10
            value.setVelocity(-50, 0)
            enemyAtBottom = checkYposition(value.y)
        } else if (value.x < 15) {
            value.y += 20
            value.x += 10
            value.setVelocity(50, 0)
            enemyAtBottom = checkYposition(value.y)
        }
    }
})
