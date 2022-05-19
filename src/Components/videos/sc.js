import React, { Component } from 'react';
import axios from "axios";
import { Container, Grid, Button, TextField, Tab, Tabs, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import DataTable from 'react-data-table-component';
import EditIcon from '@mui/icons-material/Edit';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import ClearIcon from '@mui/icons-material/Clear';
import Footer from '../Footer/Footer'
import Navbar from '../Navbar';


class Sc extends Component {
  state = {
    screenplays: "",
    dataToDownload: [],
   
  }

  columns = [
    {
      name: 'ID',
      selector: 'id',
      sortable: true,

    },
    {
      name: 'Title',
      selector: 'title',
      sortable: true,
    },

    {
      name: 'Type',
      selector: 'type',
      sortable: true,


    },
    {
      name: 'Writer',
      selector: 'writer',
      sortable: true,
      


    },

    {
      name: 'File',
      selector: 'file',
      cell: row => (<a href="https://videos-backends.herokuapp.com/uploads/kebab.PNG" download>download</a>)
      // cell: row => (<span>{row.title}</span>)


    },
  ]
  data = [];
  


  componentDidMount = () => {
    axios.get(`https://videos-backends.herokuapp.com/screenplays`, {

    })
      .then(res => {
        const screenplays = res.data;
        this.setState({ screenplays });
        console.log("screenplays", res.data);

      })
  }



  render() {
    console.log(this.state.view_data)
    
    return (
      <>
      <Navbar/>
      <div style={{padding: "5%"}}>
     
       
             
            <DataTable
              title="Screenplays"
              columns={this.columns}
              data={this.state.screenplays}
              highlightOnHover
              pagination
              paginationPerPage={5}
              paginationRowsPerPageOptions={[5, 15, 25, 50]}
              paginationComponentOptions={{
                rowsPerPageText: 'Records per page:',
                rangeSeparatorText: 'out of',
               
              }}

            />  
      </div>
      <Footer/>
      </>
    );
  }

}
export default Sc;