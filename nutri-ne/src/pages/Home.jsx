import { Box, IconButton } from '@mui/material'
import { Home as Search } from "../components/Home"
import Filters from '../components/Filters'
import Recipes from '../components/Recipes'
import { Outlet } from 'react-router-dom'
import { useState } from 'react'
import TuneIcon from '@mui/icons-material/Tune';
const Home = () => {
  const [open, setOpen] = useState(false)
  return (
    <Box
      width={'100vw'}
      alignItems={'center'}
      bgcolor={'white'}
      justifyContent={'center'}
      display={'flex'}
      sx={{
        flexDirection: { xl: 'row', lg: 'row', md: 'column', sm: 'column', xs: 'column' }
      }}
    >
      <IconButton sx={{
        display: {
          xl: 'none', lg: 'none', md: 'block', sm: 'block', xs: 'block'
        }
      }} onClick={() => setOpen(true)}>
        <TuneIcon />
      </IconButton>
      <Filters open={open} setOpen={setOpen} />
      <Search />
      <Outlet />
    </Box>
  )
}

export default Home