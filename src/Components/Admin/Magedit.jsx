import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import ResponsiveDrawer from './Sidebar'
import axios from 'axios'
import { Button, Divider, TextField, Toolbar, Typography, Alert } from '@mui/material';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { stateToHTML } from "draft-js-export-html";

function Magedit() {

    const params = useParams();
    const id = params.id;

    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

    const [title, settitle] = useState(null);
    const [text, settext] = useState(null);
    const [loading, setloading] = useState(false);
    const [uploadProgress2, setuploadProgress2] = useState(null);

    const submitHandler = async (e) => {
        e.preventDefault();
        const data = {
            title: title,
            text: text,
            id: id,
        };
        const ress = await axios.post('https://videos-backends.herokuapp.com/magazinesu',data);
        setuploadProgress2(ress.data.message);
    };

    const hello = () => {
        const contentState = editorState.getCurrentContent();
        settext(stateToHTML(contentState));
    };


    const fetchData = async () => {
        const ress = await axios.get('http://videos-backends.herokuapp.com/magazines/' + id);
        settitle(ress.data.title);
        settext(ress.data.text);
        setloading(true);
      };
    
      React.useEffect(() => {
        fetchData();
      }, []);


  return (
    <ResponsiveDrawer>
      <div style={{ position: 'fixed', top: 20, right: 20, zIndex: 9999}}>
          { uploadProgress2 && <Alert severity="info">{uploadProgress2}</Alert>}
        </div>
        <Typography variant="h3" component="div" gutterBottom>
            Update Magazine
        </Typography>
        <Toolbar/>
      {
        loading ?
        <form onSubmit={submitHandler}>
            <TextField value={title} required onChange={(e) => settitle(e.target.value)} id="filled-basic" label="Title" variant="filled" /> <br/> <br/> 
            <Editor 
              toolbar={{options: ['inline', 'blockType', 'list', 'textAlign',],}}
              editorState={editorState}
              onChange={hello}
              onEditorStateChange={setEditorState}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
            />
            <br/>
            <Divider/>
            <br/>
            <Button variant="contained" type="submit" fullWidth>Submit</Button>
        </form>
      :
      "Loading"
      }
    </ResponsiveDrawer>
  )
}

export default Magedit