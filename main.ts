let Image2: Image = null
let Temperature = 0
input.onButtonPressed(Button.A, function () {
    Image2 = images.createBigImage(`
        . # . . . . # # . .
        # . # . . # . . . .
        . # . . . # . . . .
        . . . . . # . . . .
        . . . . . . # # . .
        `)
    Temperature = input.temperature()
    basic.showNumber(input.temperature())
    Image2.scrollImage(1, 200)
})
input.onButtonPressed(Button.AB, function () {
    if (Temperature > 30) {
        basic.showString("STAY HOME")
    } else {
        basic.showString("PLEASENT WEATHER")
    }
})
input.onButtonPressed(Button.B, function () {
    Image2 = images.createBigImage(`
        . # . . . # # # # .
        # . # . . # . . . .
        . # . . . # # # . .
        . . . . . # . . . .
        . . . . . # . . . .
        `)
    Temperature = input.temperature()
    basic.showNumber(Temperature * 1.8 + 32)
    Image2.scrollImage(1, 200)
})
