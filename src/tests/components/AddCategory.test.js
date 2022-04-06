import { shallow } from "enzyme";
import AddCategory from "../../Components/AddCategory";
import '@testing-library/jest-dom';

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();
  let wrapper = shallow(<AddCategory setCategories={setCategories} />);

  beforeEach( () => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategories={setCategories} />);
  })

  test("should show it correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("should change box text", () => {
    const input = wrapper.find("input");
    const value = "Hola Mundo";

    input.simulate("change", {target: { value }});

    const valueText = wrapper.find('p').text().trim();
    
    expect(valueText).toBe(valueText);
  });

  test('should not post the information with submit.', () => {
      wrapper.find('form').simulate('submit', { preventDefault(){} });

      expect( setCategories ).not.toHaveBeenCalled();
  })

  test('should call setCategories and clean box text', () => {
    const value = "Goku";

    wrapper.find("input").simulate("change", {target: { value }});

    wrapper.find('form').simulate('submit', { preventDefault(){} });

    expect( setCategories ).toHaveBeenCalled();
    expect( setCategories ).toHaveBeenCalledTimes(1);
    expect( setCategories ).toHaveBeenCalledWith(expect.any(Function));

    expect(wrapper.find('input').prop('value')).toBe('');

  })
  
  
});
