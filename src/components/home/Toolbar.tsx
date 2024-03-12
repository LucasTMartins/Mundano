import "./Toolbar.css";
import "../../index.css"
import Drawer from '@mui/material/Drawer';
import Buttona from '@mui/material/Button'
import { Avatar, Button, Nav, Sidebar } from 'grommet';

import {Help, Projects, Clock} from 'grommet-icons';

export default function Toolbar() {
  return (
   <>
      <Drawer variant="permanent">
        <Buttona variant="contained" sx={{color:'green'}}>Teste</Buttona>
      </Drawer>
    <Sidebar
      background="var(--ctp-frappe-sky)"
      round="15px"
      header={
        <Avatar src="//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80" />
      }
      footer={<Button icon= {<Help />} hoverIndicator />}
    >
      <Nav gap="small">
        <Button icon={<Projects />} hoverIndicator />
        <Button icon={<Clock />} hoverIndicator />
      </Nav>
    </Sidebar>
    </>
  );
}

