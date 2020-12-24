import React from 'react';
import { DisclosureIcon } from "."
import { View } from "react-native"
import { shallow } from 'enzyme';

jest.mock("@fortawesome/react-native-fontawesome", () => ({
    FontAwesomeIcon: () => <View />
}))

describe('Atoms - DisclosureIcon', () => {
    it('should render', () => {
        // Arrange.
        const backgroundColor = "red"
        const icon: any = <View />

        const wrapper = shallow(<DisclosureIcon icon={icon} backgroundColor={backgroundColor} />)

        // Assert.
        expect(wrapper.exists()).toBe(true)
    })
})