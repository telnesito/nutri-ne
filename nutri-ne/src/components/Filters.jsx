import { Box, Checkbox, Drawer, FormControlLabel, IconButton, TextField, Typography } from "@mui/material"
import { FilterContext } from "../context/FilterContextProvider"
import { useContext } from "react"
import { Close } from "@mui/icons-material"
import DrawerResponsive from "./DrawerResponsive"
const Filters = ({ open, setOpen }) => {

  const alergias = ["alcohol-free", "celery-free", "crustacean-free", "dairy-free", "DASH", "egg-free", "fish-free", "fodmap-free", "gluten-free", "immuno-supportive", "kidney-friendly", "kosher", "low-fat-abs", "low-potassium", "low-sugar", "lupine-free", "Mediterranean", "mollusk-free", "mustard-free", "no-oil-added", "paleo", "peanut-free", "pescatarian", "pork-free", "red-meat-free", "sesame-free", "shellfish-free", "soy-free", "sugar-conscious", "sulfite-free", "vegan", "vegetarian", "wheat-free"]

  const dietas = ["balanced", "high-fiber", "high-protein", "low-carb", "low-fat", "low-sodium"]


  const { filter, setFilter } = useContext(FilterContext)


  return (
    <>
      <DrawerResponsive open={open}>
        <Box
          gap={'10px'}
          sx={{
            display: 'flex',
            flexDirection: 'column',

            padding: '20px',
            height: '100vh',
            overflowY: 'auto',
            width: {
              xl: '25vw', lg: '25vw', md: '80vw', sm: '90vw', xs: '100vw'
            },

          }}


        >
          <IconButton onClick={() => setOpen(false)}>
            <Close />
          </IconButton>
          <Typography
            variant="body1"
            fontWeight={'700'}
            color={'black'}>Filtros de búsqueda</Typography>

          <Box
            display={'flex'}
            flexDirection={'column'}
            gap={'10px'}
          >
            <Typography
              variant="body2"
              fontWeight={'700'}

              color={'black'}
            >Calorías máximas</Typography>

            <TextField

              onChange={({ target }) => setFilter({ ...filter, maxCalories: target.value })}

              autoComplete={'off'}

              fullWidth
              placeholder="Ingresar calorias..."
              type="number"
              variant="standard" />

            <Typography
              variant="body2"
              fontWeight={'700'}

              color={'black'}
            >Rango de cantidad de ingredientes</Typography>

            <TextField
              onChange={({ target }) => setFilter({ ...filter, maxIngredients: target.value })}
              autoComplete={'off'}
              helperText={'El rango se ingresa de la siguiente forma min-max, p.e: 2-4'}
              fullWidth
              placeholder="Ingresar rango..."
              type="text"
              variant="standard" />

            <Typography
              variant="body2"
              fontWeight={'700'}

              color={'black'}
            >Salud</Typography>
            <Box
              display={'flex'}
              flexWrap={'wrap'}
            >
              {
                alergias.map((alergia, index) => <FormControlLabel key={index} sx={{ color: 'black', width: '170px', height: '40px' }} control={<Checkbox
                  onChange={({ target }) => {
                    const updatedAlergias = new Set(filter.alergias);
                    if (target.checked) {
                      updatedAlergias.add(alergia);
                    } else {
                      updatedAlergias.delete(alergia);
                    }
                    setFilter({ ...filter, alergias: Array.from(updatedAlergias) });
                  }}
                  size="small"
                />} label={alergia} />)
              }

            </Box>
            <Typography
              variant="body2"
              fontWeight={'700'}

              color={'black'}
            >Dietas</Typography>

            <Box
              display={'flex'}
              flexWrap={'wrap'}
            >
              {
                dietas.map((dietas, index) => <FormControlLabel key={index} sx={{ color: 'black', width: '160px', height: '40px' }} control={<Checkbox
                  onChange={({ target }) => {
                    const updateDietas = new Set(filter.dietas);
                    if (target.checked) {
                      updateDietas.add(dietas);
                    } else {
                      updateDietas.delete(dietas);
                    }
                    setFilter({ ...filter, dietas: Array.from(updateDietas) });
                  }}
                  size="small" />} label={dietas} />)
              }

            </Box>


          </Box>

        </Box>
      </DrawerResponsive>
      <Box
        gap={'10px'}
        sx={{
          display: {
            xs: 'none', sm: 'none', md: 'none', lg: 'flex', xl: 'flex'
          },
          flexDirection: 'column',

          paddingTop: '20px',
          height: '100vh',
          overflowY: 'auto',
          width: {
            xl: '25vw', lg: '25vw', md: '80vw', sm: '90vw', xs: '100vw'
          },

        }}


      >

        <Typography
          variant="body1"
          fontWeight={'700'}
          color={'black'}>Filtros de búsqueda</Typography>

        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={'10px'}
        >
          <Typography
            variant="body2"
            fontWeight={'700'}

            color={'black'}
          >Calorías máximas</Typography>

          <TextField

            onChange={({ target }) => setFilter({ ...filter, maxCalories: target.value })}

            autoComplete={'off'}

            fullWidth
            placeholder="Ingresar calorias..."
            type="number"
            variant="standard" />

          <Typography
            variant="body2"
            fontWeight={'700'}

            color={'black'}
          >Rango de cantidad de ingredientes</Typography>

          <TextField
            onChange={({ target }) => setFilter({ ...filter, maxIngredients: target.value })}
            autoComplete={'off'}
            helperText={'El rango se ingresa de la siguiente forma min-max, p.e: 2-4'}
            fullWidth
            placeholder="Ingresar rango..."
            type="text"
            variant="standard" />

          <Typography
            variant="body2"
            fontWeight={'700'}

            color={'black'}
          >Salud</Typography>
          <Box
            display={'flex'}
            flexWrap={'wrap'}
          >
            {
              alergias.map((alergia, index) => <FormControlLabel key={index} sx={{ color: 'black', width: '170px', height: '40px' }} control={<Checkbox
                onChange={({ target }) => {
                  const updatedAlergias = new Set(filter.alergias);
                  if (target.checked) {
                    updatedAlergias.add(alergia);
                  } else {
                    updatedAlergias.delete(alergia);
                  }
                  setFilter({ ...filter, alergias: Array.from(updatedAlergias) });
                }}
                size="small"
              />} label={alergia} />)
            }

          </Box>
          <Typography
            variant="body2"
            fontWeight={'700'}

            color={'black'}
          >Dietas</Typography>

          <Box
            display={'flex'}
            flexWrap={'wrap'}
          >
            {
              dietas.map((dietas, index) => <FormControlLabel key={index} sx={{ color: 'black', width: '160px', height: '40px' }} control={<Checkbox
                onChange={({ target }) => {
                  const updateDietas = new Set(filter.dietas);
                  if (target.checked) {
                    updateDietas.add(dietas);
                  } else {
                    updateDietas.delete(dietas);
                  }
                  setFilter({ ...filter, dietas: Array.from(updateDietas) });
                }}
                size="small" />} label={dietas} />)
            }

          </Box>


        </Box>

      </Box>
    </>



  )
}

export default Filters