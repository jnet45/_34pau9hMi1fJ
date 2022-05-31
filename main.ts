radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        basic.clearScreen()
        led.plot(0, 2)
        pins.analogWritePin(AnalogPin.P12, 1023)
        pins.analogWritePin(AnalogPin.P16, 0)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
    } else if (receivedNumber == 2) {
        basic.clearScreen()
        led.plot(4, 2)
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P16, 1023)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
    } else if (receivedNumber == 3) {
        basic.clearScreen()
        led.plot(2, 4)
        pins.analogWritePin(AnalogPin.P12, 1023)
        pins.analogWritePin(AnalogPin.P16, 1023)
        basic.pause(1000)
        pins.analogWritePin(AnalogPin.P12, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
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
