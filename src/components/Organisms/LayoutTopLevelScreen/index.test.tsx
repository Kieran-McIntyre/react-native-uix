import React from "react";
import { render } from '@testing-library/react-native';
import { LayoutTopLevelScreen } from ".";
import { View } from "react-native"

jest.mock("@fortawesome/react-native-fontawesome", () => ({
    FontAwesomeIcon: () => <View />
}))

jest.mock("../../../hooks/useStyle")

describe('Organisms - LayoutTopLevelScreen', () => {
    it('should render', () => {
        const title = "A title"
        const navigation = jest.fn()

        const { getByTestId } = render(<LayoutTopLevelScreen title={title} navigation={navigation} />)
    })
})