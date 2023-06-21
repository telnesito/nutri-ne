import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import useFecth from '../customHooks/useFecth'
import Loading from './Loading'


const Home = () => {



  const [busqueda, setBusqueda] = useState('')
  const [ingredientes, setIngredientes] = useState([])

  const url = `https://api.edamam.com/api/recipes/v2?type=public&q=${busqueda}&app_id=65a5d4c3&app_key=256f9f1b299cddd6880c5d42d477ecac`
  const { data, isLoading, error, fetchData } = useFecth(url)

  const onSubmit = async (e) => {

    e.preventDefault()
    await fetchData()
    console.log(data)




  }

  return (
    <Box
      width={'45vw'}

      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
      height={'100vh'}

    >

      <Box
        component={'form'}
        onSubmit={onSubmit}
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        height={'100%'}
        width={'80%'}
        gap={'10px'}
        padding={'20px'}
        sx={{
          overflowY: 'auto',
          overflowX: 'hidden'
        }}


      >
        <Box
          display={'flex'}
          flexDirection={'column'}
          width={'100%'}
          alignItems={'center'}
          gap={'10px'}



        >
          <TextField
            required
            sx={{
              width: '70%',
              minWidth: '450px'

            }}
            onChange={({ target }) => setBusqueda(target.value)}

            label='Ingrese ingredientes' focused placeholder='Que comeremos hoy?' type='search' variant='filled' />

          <Button sx={{
            width: '70%',
            minWidth: '450px'

          }} variant='contained' type='submit' >Buscar</Button>
        </Box>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={'20px'}
          width={'70%'}
          minWidth={'450px'}
          height={'auto'}
        >
          {
            data ? data.hits.map(({ recipe: { label, image, healthLabels, yield: recipeYield, calories, totalNutrients } }, index) => <Paper


              sx={{
                height: '320px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                paddingTop: '10px',
                boxShadow: '5px 5px 10px #00000060',
                justifyContent: 'center',
                gap: '20px'

              }}

              key={index}>
              <Box
                display={'flex'}
                gap={'20px'}
                width={'100%'}
                justifyContent={'center'}
              >
                <Box
                  width={'30%'}
                  minWidth={'80px'}
                  justifyContent={'center'}
                  display={'flex'}
                  alignItems={'initial'}
                  height={'90%'}
                >
                  <img
                    loading='lazy'

                    height={'120px'} width={'120px'} src={image}></img>
                </Box>
                <Box
                  width={'60%'}
                  minWidth={'200px'}
                  display={'flex'}
                  flexDirection={'column'}
                  justifyContent={'initial'}
                  height={'90%'}
                  gap={'10px'}
                >
                  <Typography variant='body1' color={'black'}>{label}</Typography>

                  <Box
                    display={'flex'}
                    flexWrap={'wrap'}
                    gap={'5px'}
                  >
                    {healthLabels.map((label, index) => <Typography
                      variant='body2'
                      fontSize={'10px'}
                      key={index}>
                      {label} -

                    </Typography>)}
                  </Box>
                </Box>
              </Box>
              <Box
                width={'100%'}
                height={'500px'}
                bgcolor={'#00000030'}
                display={'flex'}
                justifyContent={'center'}
                borderRadius={'5px'}
                alignItems={'center'}
              >
                <Box
                  display={'flex'}
                  width={'30%'}
                  alignItems={'center'}
                  justifyContent={'center'}
                  flexDirection={'column'}

                >
                  <Typography fontSize={'11px'} fontWeight={700} variant='body2'>{recipeYield + " "} Porciones</Typography>
                  <Typography fontSize={'30px'} fontWeight={'700'}>{Math.floor(calories / recipeYield) + " "} <span
                    style={{
                      fontSize: '10px'
                    }}
                  >kcal</span></Typography>
                </Box>

                <Box
                  display={'flex'}
                  flexDirection={'column'}
                  width={'30%'}
                  fontSize={'10px'}

                >
                  <Box
                    display={'flex'}
                    alignItems={'left'}
                    flexDirection={'column'}
                    gap={'8px'}
                    height={'100%'}
                    width={'100%'}>
                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      gap={'10px'}
                    >
                      <Box width={'6px'} height={'6px'} borderRadius={'50%'} bgcolor={'#009933'}></Box>
                      <Typography fontSize={'10px'}>PROTEINA</Typography>
                      <Typography fontSize={'10px'}>{Math.floor(totalNutrients.PROCNT.quantity) + " " + totalNutrients.PROCNT.unit}</Typography>
                    </Box>

                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      gap={'10px'}
                    >
                      <Box width={'6px'} height={'6px'} borderRadius={'50%'} bgcolor={'#ffff1a'}></Box>
                      <Typography fontSize={'10px'}>GRASAS</Typography>
                      <Typography fontSize={'10px'}>{Math.floor(totalNutrients.FAT.quantity) + " " + totalNutrients.FAT.unit}</Typography>
                    </Box>

                    <Box
                      display={'flex'}
                      alignItems={'center'}
                      gap={'10px'}
                    >
                      <Box width={'6px'} height={'6px'} borderRadius={'50%'} bgcolor={'red'}></Box>
                      <Typography fontSize={'10px'}>CARBO</Typography>
                      <Typography fontSize={'10px'}>{Math.floor(totalNutrients.CHOCDF.quantity) + " " + totalNutrients.CHOCDF.unit}</Typography>
                    </Box>
                  </Box>
                </Box>

                <Box
                  width={'30%'}
                  fontSize={'10px'}
                >
                  <Box>
                    <Typography fontSize={'10px'}>Colesterol {Math.floor(totalNutrients.CHOLE.quantity) + " " + totalNutrients.CHOLE.unit} </Typography>
                    <Typography fontSize={'10px'}>Sodio {Math.floor(totalNutrients.NA.quantity) + " " + totalNutrients.NA.unit} </Typography>
                    <Typography fontSize={'10px'}>Calcio {Math.floor(totalNutrients.CA.quantity) + " " + totalNutrients.CA.unit} </Typography>
                    <Typography fontSize={'10px'}>Magnesio {Math.floor(totalNutrients.MG.quantity) + " " + totalNutrients.MG.unit} </Typography>


                  </Box>

                </Box>
              </Box>

            </Paper>)
              : <Typography color={'black'}>Nada que mostrar</Typography>
          }
        </Box>
        <Loading isLoading={isLoading} />
      </Box>
    </Box>
  )
}

export { Home }