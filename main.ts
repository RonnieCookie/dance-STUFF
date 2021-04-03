controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    myDANCER.x = arrowXs[0]
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    myDANCER.x = arrowXs[3]
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    myDANCER.x = arrowXs[2]
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy(effects.fire, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    myDANCER.x = arrowXs[1]
})
function setUpStopper () {
    stopper = sprites.create(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ...........................................................................................444..................................................................
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb4bbbbb4bbbbbbbbbbbbbbbb444bbbbbbbbb4444bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb444bbbbbbbbbbbbbbbbbbbbbbbbbb
        4999999999499994449999999999999999499999999999999994449999994994499999999999444444999999999999999944449999999999999994999999999999999944499999999999994499999999
        6446666666466666664444446666666666646666644664444446666666666446666666666444666666666666666666666666664444666666666646666666666666666666666644466664446666666666
        8884488884888888888888884448888888884488884448888888888888884884888888888888888888888888888888888888888888444888888488888888888888888888888888844488888888888888
        ......................................4.........................................................................................................................
        .......................................4........................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ...........................3....................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `, SpriteKind.Enemy)
    stopper.setPosition(80, 106)
}
function makeArrow () {
    arrowNumber = randint(0, 3)
    myARROW = sprites.create(arrowIMG[arrowNumber], SpriteKind.Projectile)
    myARROW.y = 0
    myARROW.vy = 80
    myARROW.x = arrowXs[arrowNumber]
}
let myARROW: Sprite = null
let arrowNumber = 0
let stopper: Sprite = null
let arrowXs: number[] = []
let arrowIMG: Image[] = []
let myDANCER: Sprite = null
info.setLife(5)
myDANCER = sprites.create(img`
    . . . . . . . . . . . c c . . . 
    . . c c . c c c c 3 c 6 3 c . . 
    . f f 5 c 6 c 5 f f 3 3 6 c . . 
    . f f 5 c 6 c 5 f f 3 3 3 3 c . 
    . b 5 5 5 c 5 5 5 c 3 3 3 3 3 c 
    . b 5 5 5 c 5 5 5 c 6 3 3 3 3 c 
    . b b 5 5 3 5 5 c 3 6 3 3 3 c c 
    . b b 5 5 3 5 5 c 3 3 3 6 6 c c 
    . c c 5 5 5 5 5 b c c 3 3 3 3 c 
    c 5 5 4 5 5 5 4 b 5 5 c 3 3 3 c 
    b 5 4 b 4 4 4 4 b b 5 c 3 3 c . 
    c 4 5 5 b 4 b 5 5 5 4 c b b . . 
    c 5 5 5 c 4 c 5 5 5 c 4 4 5 b . 
    c 5 5 5 c 4 c 5 5 5 c 4 c 5 c . 
    c 5 5 5 5 c 5 5 5 5 c 4 c 5 c . 
    . c c c c c c c c c . . c c c . 
    `, SpriteKind.Player)
myDANCER.setPosition(80, 88)
arrowIMG = [img`
    . . . . . . . . f . . . . . . . 
    . . . . . . . f f f . . . . . . 
    . . . . . . f f f f f . . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . f f f f f f f f f . . . 
    . . . f f f f f f f f f f f . . 
    . . f f f f f f f f f f f f f . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . f f f f f f f . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . f f f f f f f . . . 
    . . . . . . f f f f f f f . . . 
    . . . . . . f f f f f f f . . . 
    . . . . . . f f f f f f f . . . 
    . . . . . . f f f f f f f . . . 
    . . . f f f f f f f f f f f f f 
    . . . . f f f f f f f f f f f . 
    . . . . . f f f f f f f f f . . 
    . . . . . . f f f f f f f . . . 
    . . . . . . . f f f f f . . . . 
    . . . . . . . . f f f . . . . . 
    . . . . . . . . . f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . f . . . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . . f f f . . . . . . . . 
    f f f f f f f f f . . . . . . . 
    f f f f f f f f f f . . . . . . 
    f f f f f f f f f f f . . . . . 
    f f f f f f f f f f f f . . . . 
    f f f f f f f f f f f . . . . . 
    f f f f f f f f f f . . . . . . 
    f f f f f f f f f . . . . . . . 
    . . . . . f f f . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . . f . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, img`
    . . . . . . f . . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . f f f . . . . . . . . . 
    . . . f f f f f f f f f . . . . 
    . . f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    f f f f f f f f f f f f . . . . 
    . f f f f f f f f f f f . . . . 
    . . f f f f f f f f f f . . . . 
    . . . f f f f f f f f f . . . . 
    . . . . f f f . . . . . . . . . 
    . . . . . f f . . . . . . . . . 
    . . . . . . f . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `]
arrowXs = [35, 65, 95, 125]
scene.setBackgroundColor(1)
effects.smiles.startScreenEffect()
setUpStopper()
game.onUpdateInterval(1000, function () {
    makeArrow()
})
