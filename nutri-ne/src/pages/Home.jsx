import { Box } from '@mui/material'
import { Home as Search } from "../components/Home"
import Filters from '../components/Filters'
import Recipes from '../components/Recipes'
import { Outlet } from 'react-router-dom'
const Home = () => {
  return (
    <Box
      width={'100vw'}

      bgcolor={'white'}
      justifyContent={'center'}
      display={'flex'}
    >

      <Filters />
      <Search />
      <Outlet />
    </Box>
  )
}

export default Home