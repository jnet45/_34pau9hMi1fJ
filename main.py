def on_received_number(receivedNumber):
    if receivedNumber == 1:
        basic.clear_screen()
        led.plot(0, 2)
        pins.analog_write_pin(AnalogPin.P12, 1023)
        pins.analog_write_pin(AnalogPin.P16, 0)
        basic.pause(1000)
        pins.analog_write_pin(AnalogPin.P12, 0)
        pins.analog_write_pin(AnalogPin.P16, 0)
    elif receivedNumber == 2:
        basic.clear_screen()
        led.plot(4, 2)
        pins.analog_write_pin(AnalogPin.P12, 0)
        pins.analog_write_pin(AnalogPin.P16, 1023)
        basic.pause(1000)
        pins.analog_write_pin(AnalogPin.P12, 0)
        pins.analog_write_pin(AnalogPin.P16, 0)
    elif receivedNumber == 3:
        basic.clear_screen()
        led.plot(2, 4)
        pins.analog_write_pin(AnalogPin.P12, 1023)
        pins.analog_write_pin(AnalogPin.P16, 1023)
        basic.pause(1000)
        pins.analog_write_pin(AnalogPin.P12, 0)
        pins.analog_write_pin(AnalogPin.P16, 0)
    else:
        pass
radio.on_received_number(on_received_number)

radio.set_group(8)
basic.show_leds("""
    # # # . #
        # . . . .
        # . # . #
        # . # . #
        # # # . #
""")