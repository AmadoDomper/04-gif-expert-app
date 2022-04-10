
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import GifExpertApp from "../GifExpertApp";

describe('Test for <GifExpertApp />', () => {
    
    test('should show <GifExpertApp /> correctly', () => {
        const wrapper = shallow(<GifExpertApp />);

        expect(wrapper).toMatchSnapshot();
    })

    test('should show a list of category', () => {
        const categories = ['One Punch','Dragon Ball'];

        const wrapper = shallow(<GifExpertApp defaultCategories={ categories } />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find("GifGrid").length).toBe( categories.length );
    })
    
})
