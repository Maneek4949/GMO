import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
  }

  const Component1 :React.FC = () => {
    const [data, setData] = useState<Post[]>([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          setData(response.data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
    let rows:GridRowsProp=[];
    
    data.forEach( d=>{
        rows = [...rows,
            { id: d.id.toString(), col1:d.userId, col2:d.title, col3: d.body },
          ];
        
    })
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'col1', headerName: 'UserID', width: 150 },
        { field: 'col2', headerName: 'Title', width: 350 },
        { field: 'col3', headerName: 'Body', width: 650 },
      ];

    return (
        
        <div style={{ height: 300, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
  };
  
  export default Component1;