/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ella An
 * Created on: Oct 2024
 * This program tells how far an object is
*/

let distanceToObject: number = 0

//setup
basic.showIcon(IconNames.Happy)

//find distance from sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showString((distanceToObject).toString() + "cm")
    basic.showIcon(IconNames.Happy)
})
