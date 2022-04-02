import React from "react";
import {shallow} from "enzyme";
import { GifGridItem } from "../../Components/GifGridItem";


describe('Testing in <GifGridItem />', () => {

    const title = 'A tittle';
    const url = 'https://localhost/something.jpg'

    test('should show <GifGridItem /> correctly', () => {
        let wrapper = shallow(<GifGridItem />)

        expect(wrapper).toMatchSnapshot();
    })
    
    
})
