import { Box } from '@mui/material'
import { Home as Search } from "../components/Home"
import Filters from '../components/Filters'
import Recipes from '../components/Recipes'
import { Outlet } from 'react-router-dom'
const Home = () => {
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

      <Filters />
      <Search />
      <Outlet />
    </Box>
  )
}

export default Home