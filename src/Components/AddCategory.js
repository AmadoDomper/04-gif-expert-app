import React, {useState} from "react";
import PropTypes from 'prop-types';

 const AddCategory = ({ setCategories }) => {
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);

        console.log('HadleInputChange call')
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log('handleSubmit', inputValue);

        if(inputValue.trim().length > 2){
            setCategories(cats => [inputValue, ...cats]);
            setinputValue('');
        }

    }

  return (
    <form onSubmit={handleSubmit}>
    <p>{ inputValue }</p>
      <input 
            type='text' 
            value={inputValue} 
            onChange={handleInputChange}
            />
    </form>
  );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;