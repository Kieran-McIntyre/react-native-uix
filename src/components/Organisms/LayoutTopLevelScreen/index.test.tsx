import React from "react";
import { render } from '@testing-library/react-native';
import { LayoutTopLevelScreen } from ".";
import ReactNative from "react-native"

jest.mock("@fortawesome/react-native-fontawesome", () => ({
    FontAwesomeIcon: () => <ReactNative.View />
}))

jest.mock("../../../hooks/useStyle")
jest.mock("../../atoms/SegmentedControl", () => {
    return {
        SegmentedControl: () => <ReactNative.View />
    }
})

describe('Organisms - LayoutTopLevelScreen', () => {
    it('should render', () => {
        // Arrange.
        const title = "A title"
        const navigation = {
            setOptions: jest.fn()
        }

        const { getByTestId } = render(<LayoutTopLevelScreen title={title} navigation={navigation} />)

        // Assert.
    })
})