import React from "react";
import {shallow} from "enzyme";
import GifGridItem from "../../Components/GifGridItem";


describe('Testing in <GifGridItem />', () => {

    const title = 'A tittle';
    const url = 'https://localhost/something.jpg'

    let wrapper = shallow(<GifGridItem title={ title } url={ url } />)

    test('should show <GifGridItem /> correctly', () => {
        
        expect(wrapper).toMatchSnapshot();
    })

    test('should have a paragraph with the title', () => {
        const titleText = wrapper.find('p').text().trim();

        expect(titleText).toBe(title);
    })
    
    test('should have src and alt', () => {
        
        const imgSrc = wrapper.find('img').prop("src").trim();
        const imgAlt = wrapper.find('img').prop("alt").trim();

        expect(imgSrc).toBe(url);
        expect(imgAlt).toBe(title);
        
    })
    
    test('should have animate__fadeIn', () => {
        const div = wrapper.find('div');

        expect(div.hasClass('animate__fadeIn')).toBe(true);
    })
    
    
    
})
