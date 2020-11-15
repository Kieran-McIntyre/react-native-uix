// should render title


import React from 'react';
import { shallow } from 'enzyme';
import { AnimatedHeaderTitle } from "."

jest.mock("../../../hooks/useStyle")

describe('Atoms - AnimatedHeaderTitle', () => {

    it('should call onPress', () => {
        // Arrange.
        const wrapper = shallow(<AnimatedHeaderTitle title="Title" />)
    })
})