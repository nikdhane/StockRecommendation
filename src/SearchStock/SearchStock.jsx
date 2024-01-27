//Create react function based component for search stock functionality with get api

import React, { useEffect,useState } from 'react';
import axios from 'axios';
import { Typography,List,ThemeProvider,createTheme,Box,TextField,ListItem,ListItemText,Button} from '@mui/material';

// Create a new component called SearchStock
const SearchStock = ({updatedSelectedStockDetails}) => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [search, setSearch] = useState(null);
    const [selectedStock, setselectedStock] = useState(null);
    
    const fetchData = async () => {
        try {
          // Set loading to true while data is being fetched
          setLoading(true);
          const TOKEN_KEY='cmplp4hr01qg7bboal0gcmplp4hr01qg7bboal10';
          const API_KEY='https://finnhub.io/api/v1/search?q='+search+
          '&token='+TOKEN_KEY;
         
          // Fetch data from the API using axios or fetch or any other library of your choice.
          // For example, using axios:
          const response = await axios.get(API_KEY);
  
          // Set the data in the state
          data.allStocks=response.data?.result;
          setData(data);
          
        } catch (error) {
          // Set the error in the state if there's an issue with the API request
          setError(error.message);
        } finally {
          // Set loading to false whether the request was successful or not
          setLoading(false);
        }
      };

      const fetchSelectedStockData = async () => {
        try {
          // Set loading to true while data is being fetched
          setLoading(true);
          const TOKEN_KEY='cmplp4hr01qg7bboal0gcmplp4hr01qg7bboal10';
          const API_KEY='https://finnhub.io/api/v1/stock/recommendation?symbol='+selectedStock+
          '&token='+TOKEN_KEY;
         
          // Fetch data from the API using axios or fetch or any other library of your choice.
          // For example, using axios:
          const response = await axios.get(API_KEY);
  
          // Set the data in the state
          data.selectedStock=response.data;
          let i=1;
          for(let object of data.selectedStock)
          {
            object.id=i;
            i++;
          }
          setData(data);
          updatedSelectedStockDetails(data.selectedStock);
        } catch (error) {
          // Set the error in the state if there's an issue with the API request
          setError(error.message);
        } finally {
          // Set loading to false whether the request was successful or not
          setLoading(false);
        }
      };
    // useEffect(() => {
    //     console.log('search changed:', search);
    //     if(search!==null)
    //     {
    //         fetchData();
    //     }
    //   }, [search]); 
    useEffect(() => {
        if(search!==null)
        {
            fetchData();
        }
      }, [search]);
      useEffect(() => {
        if(selectedStock!==null)
        {
            fetchSelectedStockData();
        }
      }, [selectedStock]);
      
    //function to handle search stock
     const handleSearch = (event) => {
        setTimeout(function() { setSearch(event.target.value); }, 3000);
         
     }
     const handleViewDetails = (value) => {
        setselectedStock(value);
         
     }
     const defaultTheme = createTheme();
    //function to handle search button
    // handleSearchButton = () => {
    //     this.props.searchStock(this.state.search);
    // }

        return (
            <ThemeProvider theme={defaultTheme}>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        id="searchText"
                        onChange={handleSearch}
                        autoFocus
                    />
                    {/* <input type="text"  placeholder="Search Stock" 
                 /> */}
                    {loading && <p>Loading...</p>}
                    {error && <p>Error: {error}</p>}
                    {data !== undefined && data.allStocks !== undefined ?
                        data.allStocks.map((item) => (
                            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                <React.Fragment>
                                    <ListItem alignItems="flex-start">
                                        <ListItemText primary={item.description} secondary={
                                            <React.Fragment>
                                                <Typography sx={{ display: 'inline' }}
                                                    component="span"
                                                    variant="body2"
                                                    color="text.primary">{item.displaySymbol}</Typography>
                                                   
                                                <Button variant="contained" onClick={() => handleViewDetails(item.symbol)}>View Details</Button>
                                            </React.Fragment>} />
                                    </ListItem>

                                </React.Fragment>
                            </List>
                        ))
                        : <div></div>}

                </Box>
            </ThemeProvider>
        );
    
}
//export SearchStock component
export default SearchStock;
