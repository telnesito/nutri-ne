import { Box, Card, CardContent, Divider, TextField, Typography } from "@mui/material"
import { RecipeContext } from "../context/RecipeContexProvidert"
import { useContext, useState } from "react"
const Recipes = () => {

  // label: '',
  // image: '',
  // mealType: '',
  // ingredients: '',
  // digest: '',
  // dietLabels: '',
  // cautions: '',
  // url: ''
  const { recipe, _ } = useContext(RecipeContext)

  const [porciones, setPorciones] = useState(recipe.recipeYield)

  console.log(recipe.recipeYield)
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
      {recipe.label ? <>



        <Box >
          <Typography
            fontWeight={'700'}
            variant="body1"
            paddingLeft={'14px'}

            color={'black'}>
            Detalles
          </Typography>

          <Typography
            paddingLeft={'14px'}

            variant="body2"
            color={'black'}
          >{recipe.label}</Typography>
        </Box>

        <Box>
          <Typography
            fontWeight={'700'}
            variant="body1"
            paddingLeft={'14px'}

            color={'black'}>Tipo de comida</Typography>

          <Typography
            color={'black'}
            variant="body2"
            paddingLeft={'14px'}


          >{recipe.mealType}</Typography>
        </Box>
        <Box
          paddingLeft={'14px'}
        >
          <Typography
            fontWeight={'700'}
            variant="body1"

            color={'black'}>Nutricion</Typography>
          <Divider />
          <Box
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            height={'100px'}
            justifyContent={'space-around'}

          >
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              justifyContent={'center'}
              height={'80px'}
            >
              <Typography
                height={'45px'}
                fontSize={'25px'}
                color={'black'}
              >{Math.floor(recipe.calories / porciones)}</Typography>

              <Typography
                fontSize={'12px'}
                color={'black'}
              >Calorias / porciones</Typography>

            </Box>

            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              height={'100px'}
              justifyContent={'center'}
            >
              <TextField
                onChange={({ target }) => setPorciones(target.value)}
                sx={{
                  width: '70px',
                  height: '45px'
                }}
                size="small" type="number" variant="outlined" />

              <Typography
                fontSize={'12px'}
                color={'black'}
              >Porciones</Typography>
            </Box>
          </Box>
          <Divider />

          <Box>
            {recipe.digest && recipe.digest.map(({ label, total, unit }, index) => <Box
              display={'flex'}
              color={'black'} key={index}>
              <Typography>{label}</Typography>
            </Box>)}
          </Box>
        </Box>


        <Box>
          <Typography
            paddingLeft={'14px'}

            variant="body1"
            fontWeight={700}
            color={'black'}
          >Instrucciones de preparacion</Typography>

          <Typography
            color={'black'}
            variant="body2"
            paddingLeft={'14px'}
            component={'a'}
            href={recipe.url}
            target="_blank"


          >
            Ver Instrucciones
          </Typography>
        </Box>

        <Typography
          paddingLeft={'14px'}

          variant="body1"
          fontWeight={700}
          color={'black'}


        >{recipe.ingredients && recipe.ingredients.length + " "} Ingredientes</Typography>
        <Box
          display={'flex'}
          flexDirection={'row'}
          flexWrap={'wrap'}
          paddingLeft={'14px'}
          paddingBottom={'14px'}

          gap={'10px'}
          color={'black'}
        >
          {recipe.ingredients && recipe.ingredients.map(({ food, text, image, measure, quantity }, index) =>
            <Card
              key={index}
              sx={{
                boxShadow: '-2px -2px 15px  #00000040',
                width: '45%'
              }}
            >
              <CardContent>
                <Box>

                  <img height={'100px'} src={image}></img>
                  <Typography
                    fontWeight={700}
                    fontSize={'12px'}
                  >Ingrediente</Typography>
                  <Typography
                    color={'black'}
                    fontSize={'12px'}
                  >{food}</Typography>
                </Box>
                <Box>
                  <Typography
                    fontWeight={700}
                    fontSize={'12px'}>Instruccion</Typography>

                  <Typography
                    fontSize={'12px'}
                  >{text}</Typography>
                </Box>

                <Box>
                  <Typography
                    fontWeight={700}
                    fontSize={'12px'}>Cantidad</Typography>

                  <Typography
                    fontSize={'12px'}
                  >{quantity + " " + measure} </Typography>
                </Box>

              </CardContent>

            </Card>
          )
          }
        </Box>
      </>
        : <Typography color={'black'}>No hay receta que mostrar</Typography>

      }

    </Box>
  )
}

export default Recipes