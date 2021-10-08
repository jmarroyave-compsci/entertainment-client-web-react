import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

const MIN_QUERY = 3


async function fetchSuggestions(qry, handler) {
  if(!qry || qry.length < MIN_QUERY) return [];

  if(handler){
    return await handler(qry)
  }
}

function onChange(qry, handler) {
  if(!qry || qry.length < MIN_QUERY) return;

  if(handler){
   handler(qry)
  }
}


export default function SearchBox( props ) {
  const { onSearchQuery, onSearchSuggestions } = props;
  const [open, setOpen] = React.useState(false);
  const [options, setOptions] = React.useState([]);
  const [inputValue, setInputValue] = React.useState('');
  const [value, setValue] = React.useState(null);
  const loading = open && options.length === 0;


  React.useEffect(() => {
    let active = true;

    //console.log(inputValue, 'voy')

    /*
    if (!loading) {
      return undefined;
    }
    */

    (async () => {
      var dataSuggestions = await fetchSuggestions(inputValue, onSearchSuggestions);

      if (active) {
        setOptions([...dataSuggestions]);
      }
    })();

    return () => {
      active = false;
    };
  }, [loading, open, inputValue, onSearchSuggestions]);


  return (
    <Autocomplete
      freeSolo
      clearOnEscape
      sx={{ flexGrow: 1 }}        
      open={open}
      onOpen={() => {
        setOpen(true);
      }}
      onClose={() => {
        setOpen(false);
      }}
      isOptionEqualToValue={(option, value) => option === value}
      getOptionLabel={(option) => option}
      options={options}
      loading={loading}
      value={value}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
        onChange(newValue, onSearchQuery)
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search"
          InputProps={{
            ...params.InputProps,
            type: 'searching',
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
