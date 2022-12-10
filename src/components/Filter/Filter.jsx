import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/contactsFilterSlice';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Typography sx={{ mb: 2 }} component="h2">
        Filter contacts by name
      </Typography>
      <TextField
        onChange={e => dispatch(setFilter(e.target.value.toLowerCase()))}
        id="filter"
        label="Filter"
        variant="outlined"
      />
    </>
  );
};

export default Filter;
