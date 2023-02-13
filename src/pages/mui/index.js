import * as React from 'react';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import Header from '../../components/Header'

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  };

export default function muiApp() {
  return (
    <div>
        {/* <Header/> */}
        <Button variant='text' className='text-red-500'>
          Text
        </Button>
      <Button variant="contained">Hello World</Button>
      <Button variant="text">Text</Button>
<Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" >tailwindcss</Button>
<Button variant="outlined">Outlined</Button>
<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
      {/* <List sx={style} component="nav" aria-label="mailbox folders">
  <ListItem button>
    <ListItemText primary="Inbox" />
  </ListItem>
  <Divider />
  <ListItem button divider>
    <ListItemText primary="Drafts" />
  </ListItem>
  <ListItem button>
    <ListItemText primary="Trash" />
  </ListItem>
  <Divider light />
  <ListItem button>
    <ListItemText primary="Spam" />
  </ListItem>
</List> */}
    </div>
  );
}