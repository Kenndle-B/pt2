namespace SpriteKind {
    export const powerup = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile0`, function (sprite, location) {
    if (Level == 1) {
        info.changeLifeBy(-1)
        Dash.setPosition(26, 16)
        if (info.life() == 1) {
            Dash.setPosition(26, 16)
            Dash.ay = 400
        }
        if (info.life() == 2) {
            Dash.setVelocity(100, 50)
            Dash.ay = 400
            Dash.setPosition(26, 16)
        }
        if (info.life() == 3) {
            Dash.setVelocity(100, 50)
            Dash.setPosition(26, 16)
            Dash.ay = 400
        }
    }
    if (Level == 2) {
        info.changeLifeBy(-1)
        Dash.setPosition(26, 16)
        Dash.ay = 0
        if (info.life() == 1) {
            Dash.setPosition(26, 16)
            Dash.ay = 400
        }
        if (info.life() == 2) {
            Dash.setVelocity(100, 50)
            Dash.ay = 400
            Dash.setPosition(26, 16)
        }
        if (info.life() == 3) {
            Dash.setVelocity(100, 50)
            Dash.setPosition(26, 16)
            Dash.ay = 400
        }
    }
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Level == 1) {
        if (Jump <= 2) {
            Jump += 1
            Dash.vy = -100
        }
    }
    if (Level == 2) {
        if (Jump < 2) {
            Jump += 1
            Dash.vy = -100
        }
    }
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    if (Level == 1) {
        if (!(Dash.isHittingTile(CollisionDirection.Top))) {
            Jump = 0
        }
        if (Dash.isHittingTile(CollisionDirection.Right) || Dash.isHittingTile(CollisionDirection.Left)) {
            Dash.vy = 0
        }
    }
    if (Level == 2) {
        if (!(Dash.isHittingTile(CollisionDirection.Top))) {
            Jump = 0
        }
        if (Dash.isHittingTile(CollisionDirection.Right) || Dash.isHittingTile(CollisionDirection.Left)) {
            Dash.vy = 0
        }
    }
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Dash,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . 8 8 3 3 3 3 3 3 3 8 . . 
        . . . . 8 3 3 3 3 3 3 3 3 8 . . 
        . . . . 8 3 3 8 3 3 8 3 3 8 . . 
        . . . . 8 3 3 3 3 3 3 3 3 8 . . 
        . . . . 8 3 3 8 3 3 8 3 3 8 . . 
        . . . . 8 3 3 8 8 8 8 3 3 8 . . 
        . . . . 8 3 3 3 3 3 3 3 3 8 . . 
        . . . . 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . 8 8 3 3 3 3 3 3 3 8 . . 
        . . . . 8 3 3 3 3 3 3 3 3 8 . . 
        . . . . 8 3 3 8 8 3 8 3 3 8 . . 
        . . . . 8 3 3 8 3 3 3 3 3 8 . . 
        . . . . 8 3 3 8 3 3 3 3 3 8 . . 
        . . . . 8 3 3 8 8 3 8 3 3 8 . . 
        . . . . 8 3 3 3 3 3 3 3 3 8 . . 
        . . . . 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    500,
    false
    )
})
function SpawnPowerUps (num: number, imageslist: Image[]) {
    for (let index = 0; index < num; index++) {
        tempPowerup = sprites.create(imageslist._pickRandom(), SpriteKind.powerup)
        tiles.placeOnRandomTile(tempPowerup, assets.tile`transparency16`)
        if (Dash.overlapsWith(tempPowerup)) {
            info.changeScoreBy(1)
        }
    }
}
function SecondLevel () {
    if (Level == 2) {
        effects.starField.startScreenEffect()
        Dash = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 8 8 8 8 8 8 8 8 8 8 . . 
            . . . . 8 8 3 3 3 3 3 3 3 8 . . 
            . . . . 8 3 3 3 3 3 3 3 3 8 . . 
            . . . . 8 3 3 8 3 3 8 3 3 8 . . 
            . . . . 8 3 3 3 3 3 3 3 3 8 . . 
            . . . . 8 3 3 8 3 3 8 3 3 8 . . 
            . . . . 8 3 3 8 8 8 8 3 3 8 . . 
            . . . . 8 3 3 3 3 3 3 3 3 8 . . 
            . . . . 8 8 8 8 8 8 8 8 8 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        scene.cameraFollowSprite(Dash)
        info.setLife(3)
        info.setScore(0)
        info.startCountdown(30)
        Dash.setPosition(22, 96)
        Dash.ay = 400
        Dash.setVelocity(100, 50)
        controller.moveSprite(Dash, 100, 0)
    }
    return 0
}
info.onLifeZero(function () {
    game.gameOver(false)
})
function Startlevel () {
    if (Level == 1) {
        effects.starField.startScreenEffect()
        Dash = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . 8 8 8 8 8 8 8 8 8 8 . . 
            . . . . 8 8 3 3 3 3 3 3 3 8 . . 
            . . . . 8 3 3 3 3 3 3 3 3 8 . . 
            . . . . 8 3 3 8 3 3 8 3 3 8 . . 
            . . . . 8 3 3 3 3 3 3 3 3 8 . . 
            . . . . 8 3 3 8 3 3 8 3 3 8 . . 
            . . . . 8 3 3 8 8 8 8 3 3 8 . . 
            . . . . 8 3 3 3 3 3 3 3 3 8 . . 
            . . . . 8 8 8 8 8 8 8 8 8 8 . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        scene.cameraFollowSprite(Dash)
        info.setLife(3)
        info.setScore(0)
        info.startCountdown(60)
        Dash.setPosition(22, 96)
        Dash.ay = 400
        Dash.setVelocity(100, 50)
        controller.moveSprite(Dash, 100, 0)
    }
    return 0
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.powerup, function (sprite, otherSprite) {
    if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . f 3 . . . . f 3 . 
        . . . . . . f 3 a . . . f 3 a . 
        . . . . . f 3 a a . . f 3 a a . 
        . . . . f 3 a a a . f 3 a a a . 
        . . . f 3 a a a 3 f 3 a a a 3 . 
        . . f 3 a a a 3 f 3 a a a 3 . . 
        . f 3 a a a 3 f 3 a a a 3 . . . 
        f 3 a a a 3 f 3 a a a 3 . . . . 
        . f 3 a a a 3 f 3 a a a 3 . . . 
        . . f 3 a a a 3 f 3 a a a 3 . . 
        . . . f 3 a a a 3 f 3 a a a 3 . 
        . . . . f 3 a a a 3 f 3 a a a . 
        . . . . . f 3 a a a 3 f 3 a a . 
        . . . . . . f 3 a a a . f 3 a . 
        . . . . . . . f 3 a a . . f 3 . 
        `)) {
        Dash.vx += -10
        sprites.destroy(otherSprite)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 . . . 2 2 2 2 . . 
        . . 2 2 2 2 2 2 . 2 2 2 2 2 2 . 
        . . 2 3 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 3 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . 2 2 3 2 2 2 2 2 2 2 2 . . 
        . . . . 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . 2 2 2 2 2 2 2 . . . . 
        . . . . . . 2 2 2 2 2 . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        info.changeLifeBy(1)
        sprites.destroy(otherSprite)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f . . . . . 
        . . . f d b f d b d f . . . . . 
        . . . f d 9 9 9 9 d f . . . . . 
        . . . f b 6 9 9 9 b f . . . . . 
        . . . f f 9 6 9 9 f f . . . . . 
        . . . f d 9 9 9 6 d f . . . . . 
        . . . f d 9 9 6 9 d f . . . . . 
        . . f d d f f 9 f d f . . . . . 
        . . f f f f f d d d f . . . . . 
        . . f f b b b f f d f . . . . . 
        . . . f f f f b b f f . . . . . 
        . . . . . . f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        Dash.setPosition(80, 96)
        sprites.destroy(otherSprite)
    } else if (otherSprite.image.equals(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f f f f f f f f f f . . . 
        . . f a a f a a f a a f a f f . 
        . f f f f f f f f f f f f f f . 
        . . f a 1 f a a f a a f 1 a f . 
        . . f a a 1 f a a a f 1 a a f . 
        . . . f a a 1 a a a a a a f . . 
        . . . . f a a a a a a a f . . . 
        . . . . . f a a f a a f . . . . 
        . . . . . . f a f a f . . . . . 
        . . . . . . . f f f . . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)) {
        info.changeScoreBy(1)
        sprites.destroy(otherSprite)
    }
})
let tempPowerup: Sprite = null
let Dash: Sprite = null
let Jump = 0
let Level = 0
Level = game.askForNumber("Level: 1 or 2", 1)
if (Level == 1) {
    tiles.setCurrentTilemap(tilemap`level1`)
    Jump = 0
    Startlevel()
}
if (Level == 2) {
    tiles.setCurrentTilemap(tilemap`level3`)
    Jump = 0
    SecondLevel()
}
SpawnPowerUps(10, [
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . f 3 . . . . f 3 . 
    . . . . . . f 3 a . . . f 3 a . 
    . . . . . f 3 a a . . f 3 a a . 
    . . . . f 3 a a a . f 3 a a a . 
    . . . f 3 a a a 3 f 3 a a a 3 . 
    . . f 3 a a a 3 f 3 a a a 3 . . 
    . f 3 a a a 3 f 3 a a a 3 . . . 
    f 3 a a a 3 f 3 a a a 3 . . . . 
    . f 3 a a a 3 f 3 a a a 3 . . . 
    . . f 3 a a a 3 f 3 a a a 3 . . 
    . . . f 3 a a a 3 f 3 a a a 3 . 
    . . . . f 3 a a a 3 f 3 a a a . 
    . . . . . f 3 a a a 3 f 3 a a . 
    . . . . . . f 3 a a a . f 3 a . 
    . . . . . . . f 3 a a . . f 3 . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . 2 2 2 2 . . . 2 2 2 2 . . 
    . . 2 2 2 2 2 2 . 2 2 2 2 2 2 . 
    . . 2 3 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 3 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . . 2 2 3 2 2 2 2 2 2 2 2 . . 
    . . . . 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 2 . . . . 
    . . . . . . 2 2 2 2 2 . . . . . 
    . . . . . . . 2 2 2 . . . . . . 
    . . . . . . . . 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f . . . . . 
    . . . f d b f d b d f . . . . . 
    . . . f d 9 9 9 9 d f . . . . . 
    . . . f b 6 9 9 9 b f . . . . . 
    . . . f f 9 6 9 9 f f . . . . . 
    . . . f d 9 9 9 6 d f . . . . . 
    . . . f d 9 9 6 9 d f . . . . . 
    . . f d d f f 9 f d f . . . . . 
    . . f f f f f d d d f . . . . . 
    . . f f b b b f f d f . . . . . 
    . . . f f f f b b f f . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `,
img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f f f f f . . . 
    . . f a a f a a f a a f a f f . 
    . f f f f f f f f f f f f f f . 
    . . f a 1 f a a f a a f 1 a f . 
    . . f a a 1 f a a a f 1 a a f . 
    . . . f a a 1 a a a a a a f . . 
    . . . . f a a a a a a a f . . . 
    . . . . . f a a f a a f . . . . 
    . . . . . . f a f a f . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . . . f . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `
])
game.onUpdate(function () {
    if (Dash.tileKindAt(TileDirection.Center, assets.tile`myTile1`)) {
        game.gameOver(true)
    }
    Dash.vx = 100
})
