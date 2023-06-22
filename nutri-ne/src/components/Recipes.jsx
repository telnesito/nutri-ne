import { Accordion, AccordionDetails, AccordionSummary, Box, Card, CardContent, Divider, IconButton, TextField, Typography } from "@mui/material"
import { RecipeContext } from "../context/RecipeContexProvidert"
import { useContext, useState } from "react"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
const Recipes = () => {


  const { recipe, _ } = useContext(RecipeContext)
  const navigate = useNavigate()
  const [porciones, setPorciones] = useState(1)

  return (
    <Box
      width={'25vw'}
      paddingTop={'20px'}
      height={'100vh'}
      display={'flex'}
      flexDirection={'column'}
      gap={'10px'}
      data-aos="fade-left"

      sx={{
        overflowY: 'auto'
      }}
    >
      <Box
        display={'flex'}
        color={'black'}
        paddingLeft={'14px'}
        alignItems={'center'}
      >
        <IconButton size="small" onClick={() => navigate('/')}>
          <ArrowBack color="primary" fontSize="small" />
        </IconButton>

        <Typography variant="body2">Retroceder</Typography>
      </Box>
      {recipe.label ? <>



        <Box >
          <Typography
            fontWeight={'700'}
            variant="body1"
            paddingLeft={'14px'}

            color={'black'}>
            Nombre de receta
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

        {recipe.cautions.length > 0 ?

          <Box

          >
            <Typography
              fontWeight={'700'}
              variant="body1"
              paddingLeft={'14px'}

              color={'black'}>Precaucion</Typography>


            <Box display={'flex'}
              gap={'10px'}
              flexWrap={'wrap'}
              alignItems={'center'}
              color={'white'}
              paddingLeft={'14px'}
            >
              {recipe.cautions.map((el, index) =>

                <Typography
                  boxShadow={'4px 4px 10px #00000050'}
                  width={'auto'}
                  padding={'5px'}
                  borderRadius={'10px'}
                  bgcolor={'red'}
                  key={index}
                  variant="body2"
                  textAlign={'center'}


                >{el}</Typography>
              )}
            </Box>
          </Box>
          : null
        }

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

          <Accordion

            sx={{
              width: '95%',
              mt: '10px',
              bgcolor: '#df5159 ',
              color: 'white'
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon color="secondary" />}
            >
              Nutrientes
            </AccordionSummary>

            <AccordionDetails>

              <Box
                display={'flex'}

                flexWrap={'wrap'}
                gap={'20px'}
              >
                {recipe.digest && recipe.digest.map(({ tag, total, unit }, index) => <Box
                  color={'white'}
                  display={'flex'}
                  width={'45%'}
                  key={index}>

                  <Typography width={'125px'}>{tag}</Typography>
                  <Typography >{Math.floor(total / porciones)}</Typography>
                  <Typography >{unit}</Typography>

                </Box>)}
              </Box>
            </AccordionDetails>
          </Accordion>
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
                  >{quantity.toFixed(1) + " " + measure} </Typography>
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