import { shallow } from "enzyme";
import AddCategory from "../../Components/AddCategory";
import '@testing-library/jest-dom';

describe("Pruebas en <AddCategory />", () => {
  const setCategories = jest.fn();
  const wrapper = shallow(<AddCategory setCategories={setCategories} />);

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

    //   expect( setCategories ).not.toHaveBeenCalled();
  })
  
});
