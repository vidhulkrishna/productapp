import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'

const Navbar = () => {
    const Navgbar = () => {
        return(
        <Box>
        <AppBar>
            <Toolbar>
                <Typography>productapp</Typography>
                <Button color="inherit"><Link to='/'>View</Link></Button>
                <Button color="inherit"><Link to='/add'>Add</Link></Button>
            </Toolbar>                
        </AppBar>
    </Box>

    
          
  )
}
}

export default Navbar