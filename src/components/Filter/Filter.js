import PropTypes from 'prop-types';
import style from '../Filter/Filter.module.css';

export default function Filter({ filter, onChange }) {
    return (
        <label className={style.label}>
        Find contact by name
        <input type="text" name="filter" value={filter} onChange={onChange}/>
        </label>
    );
}

Filter.propTypes = {
    filter: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};
