import { GifGrid } from "../../Components/GifGrid";
import { shallow } from "enzyme";
import '@testing-library/jest-dom';
import { useFetchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs.js');

describe('Testing in <GifGrid />', () => {  
    const categoryInput = 'Goku';

    test('should show component correctly', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrid category={categoryInput} />);
        expect(wrapper).toMatchSnapshot();
        
    })
    
    test('should show items when call useFetchGifs', () => {

        const gifs = [{
            id: 'ABC',
            url: 'https//localhost/anything/thing.jpg',
            title: 'everything'
        }]

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow(<GifGrid category={categoryInput} />);

        expect(wrapper).toMatchSnapshot();
        expect(wrapper.find('p').exists()).toBe(false);
        console.log(wrapper.find('Component').length);
        // expect(wrapper.find('Component').length).toBe(gifs.length);


    })
    

})

