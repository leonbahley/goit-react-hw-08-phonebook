import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsFilterSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    // <label className={css.Filter}>
    //   Filter contacts by name
    //   <input
    //     className={css.FilterInput}
    //     type="text"
    //     onChange={e => dispatch(setFilter(e.target.value.toLowerCase()))}
    //   />
    // </label>
    <>
      <Typography variant="h1" component="h2">
        Filter contacts by name
      </Typography>
      <TextField id="filter" label="Filter" variant="outlined" />
    </>
  );
};

export default Filter;
