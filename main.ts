radio.onReceivedNumber(function (receivedNumber) {
    basic.clearScreen()
    if (receivedNumber == 1) {
        pins.analogWritePin(AnalogPin.P12, 512)
        pins.analogWritePin(AnalogPin.P16, 0)
        led.plot(4, 2)
    } else if (receivedNumber == 2) {
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P16, 512)
        led.plot(0, 2)
    } else if (receivedNumber == 3) {
        pins.analogWritePin(AnalogPin.P12, 512)
        pins.analogWritePin(AnalogPin.P16, 512)
        led.plot(2, 4)
    } else if (receivedNumber == 0) {
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
        led.plot(2, 2)
    } else {
    	
    }
})
radio.setGroup(8)
basic.showLeds(`
    # # # . #
    # . . . .
    # . # . #
    # . # . #
    # # # . #
    `)
basic.pause(1000)
