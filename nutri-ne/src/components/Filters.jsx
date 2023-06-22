import { Box, Checkbox, FormControlLabel, TextField, Typography } from "@mui/material"
import { useState } from "react"
import { FilterContext } from "../context/FilterContextProvider"
import { useContext } from "react"
const Filters = () => {

  const alergias = ["Gluten", "Pez", "Lácteos", "Mariscos", "Trigo", "Soja", "Huevos", "Nueces"]
  const dietas = ["Vegetariano",
    "Vegano",
    "Paleo",
    "Alto-fibra",
    "Alto-proteina",
    "Bajo-carbo",
    "Bajo-grasas",
    "Bajo-sodio",
    "Bajo-azúcar",
    "Sin alcohol",
    "Balanceada",
    "Inmunidad"]

  const { filter, setFilter } = useContext(FilterContext)

  console.log(filter)

  return (
    <Box
      width={'25vw'}
      paddingTop={'20px'}
      height={'100vh'}
      display={'flex'}
      flexDirection={'column'}
      gap={'10px'}
      sx={{
        overflowY: 'auto'
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

          onChange={({ target }) => setFilter({ maxCalories: target.value })}

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
          onChange={({ target }) => setFilter({ maxIngredients: target.value })}
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
        >Alergias</Typography>
        <Box
          display={'flex'}
          flexWrap={'wrap'}
        >
          {
            alergias.map((alergia, index) => <FormControlLabel key={index} sx={{ color: 'black', width: '100px', height: '40px' }} control={<Checkbox size="small" />} label={alergia} />)
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
            dietas.map((alergia, index) => <FormControlLabel key={index} sx={{ color: 'black', width: '160px', height: '40px' }} control={<Checkbox size="small" />} label={alergia} />)
          }

        </Box>


      </Box>



    </Box>
  )
}

export default Filters