basic.showIcon(IconNames.Yes)
let _4digit = grove.createDisplay(DigitalPin.P1, DigitalPin.P15)
basic.forever(function () {
    _4digit.show(pins.analogReadPin(AnalogPin.P0))
    if (pins.analogReadPin(AnalogPin.P0) > 1000) {
        basic.showLeds(`
            # # # . .
            # # # . .
            # # # # #
            . . # # #
            . . # # #
            `)
    } else {
        if (pins.analogReadPin(AnalogPin.P0) > 700) {
            basic.showLeds(`
                . . # . .
                . . # . .
                # . # . #
                . # # # .
                . . # . .
                `)
        } else {
            if (pins.analogReadPin(AnalogPin.P0) > 300) {
                basic.showLeds(`
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    . . . . .
                    `)
            } else {
                basic.showLeds(`
                    . . # . .
                    . # # # .
                    # . # . #
                    . . # . .
                    . . # . .
                    `)
            }
        }
    }
})
