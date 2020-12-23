import React from 'react';
import { shallow } from 'enzyme';
import { AnimatedHeaderTitle } from "."
import toJson from "enzyme-to-json";

jest.mock("../../../hooks/useStyle")

describe('Atoms - AnimatedHeaderTitle', () => {
    it('should render', () => {
        // Arrange.
        const wrapper = shallow(<AnimatedHeaderTitle title="Title" />)

        // Assert.
        expect(wrapper.exists()).toBe(true)
    })

    it('should render title', () => {
        // Arrange.
        const title = "A title!";
        const wrapper = shallow(<AnimatedHeaderTitle title={title} />)

        // Assert.
        const actualText = wrapper.children();
        expect(toJson(actualText)).toBe(title);
    })
})