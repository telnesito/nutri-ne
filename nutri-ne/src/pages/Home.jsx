import { Box } from '@mui/material'
import { Home as Search } from "../components/Home"
import Filters from '../components/Filters'
import Recipes from '../components/Recipes'
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
      <Recipes />
    </Box>
  )
}

export default Home