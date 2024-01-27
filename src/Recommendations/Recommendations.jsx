import React, { useEffect,useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Box} from '@mui/material';
const Recommendations = ({receivedData}) => {

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: 'buy',
          headerName: 'Buy',
          width: 150
        },
        {
            field: 'hold',
            headerName: 'Hold',
            width: 150
          },
          {
            field: 'sell',
            headerName: 'Sell',
            width: 150
          },
          {
            field: 'period',
            headerName: 'Period',
            width: 150
          },
          {
            field: 'strongBuy',
            headerName: 'Strong Buy',
            width: 150
          },
          {
            field: 'strongSell',
            headerName: 'Strong Sell',
            width: 150
          }

      ];

  return (
    <div>
        {receivedData!==undefined && receivedData.length > 0 ? 
            <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
         rows={receivedData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
      /></Box>
        :<div></div>}
    </div>
    )
  }
export default Recommendations ; 