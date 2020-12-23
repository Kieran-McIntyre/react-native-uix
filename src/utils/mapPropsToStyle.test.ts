import { mapPropsToStyle } from "./mapPropsToStyle"
import { StyleSheet } from "react-native";

describe('utils - mapPropsToStyle', () => {
    it('should correctly map styles using props', () => {
        // Arrange.
        const props = {
            styleOne: true,
            styleThree: true,
            styleFour: false,
        }

        const styles: StyleSheet.NamedStyles<any> = {
            styleOne: {
                backgroundColor: 'red',
                color: 'blue',
            },
            styleTwo: {
                alignItems: 'flex-end',
            },
            styleThree: {
                justifyContent: 'center',
                borderColor: 'green',
            },
            styleFour: {
                borderRadius: 20,
                borderColor: 'pink',
            },
        }

        const expectedOutput = {
            backgroundColor: 'red',
            color: 'blue',
            justifyContent: 'center',
            borderColor: 'green',
        }

        // Act.
        const output = mapPropsToStyle(props, styles)

        // Assert.
        expect(output).toEqual(expectedOutput)
    })
})