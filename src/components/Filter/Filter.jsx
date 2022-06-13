import s from "./Filter.module.css";
import PropTypes from "prop-types";

const Filter = ({ value, onChange }) => (
   <label >
     <p className={s.FilterTitle}>Find contacts bu name</p>
    <input className={s.InputFilter} type="text" value={value} onChange={onChange}/>
  </label> 
 
    
)
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
    
export default Filter;