import { Drawer } from '@mui/material'

const DrawerResponsive = ({ children, open }) => {
  return (
    <Drawer
      open={open}
      anchor="left"
      sx={{
        width: '100vw',
        display: {
          xl: 'none', lg: 'none', md: 'block', sm: 'block', xs: 'block'
        }

      }}
    >

      {children}

    </Drawer>
  )
}

export default DrawerResponsive