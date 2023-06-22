import { ArrowBack } from "@mui/icons-material";
import { Box, IconButton, Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material"
import { useNavigate } from "react-router-dom";

const NutritionGuide = () => {

  const navigate = useNavigate()

  const data = [
    {
      code: 'SUGAR.added',
      name: 'Azúcar añadido',
      unit: 'g'
    },
    {
      code: 'CA',
      name: 'Calcio, Ca',
      unit: 'mg'
    },
    {
      code: 'CHOCDF.net',
      name: 'Carbohidratos (netos)',
      unit: 'g'
    },
    {
      code: 'CHOCDF',
      name: 'Carbohidratos, por diferencia',
      unit: 'g'
    },
    {
      code: 'CHOLE',
      name: 'Colesterol',
      unit: 'mg'
    },
    {
      code: 'ENERC_KCAL',
      name: 'Energía',
      unit: 'kcal'
    },
    {
      code: 'FAMS',
      name: 'Ácidos grasos monoinsaturados',
      unit: 'g'
    },
    {
      code: 'FAPU',
      name: 'Ácidos grasos poliinsaturados',
      unit: 'g'
    },
    {
      code: 'FASAT',
      name: 'Ácidos grasos saturados',
      unit: 'g'
    },
    {
      code: 'FATRN',
      name: 'Ácidos grasos trans',
      unit: 'g'
    },
    {
      code: 'FIBTG',
      name: 'Fibra dietética total',
      unit: 'g'
    },
    {
      code: 'FOLDFE',
      name: 'Ácido fólico, DFE',
      unit: 'µg'
    },
    {
      code: 'FOLFD',
      name: 'Ácido fólico en alimentos',
      unit: 'µg'
    },
    {
      code: 'FOLAC',
      name: 'Ácido fólico',
      unit: 'µg'
    },
    {
      code: 'FE',
      name: 'Hierro, Fe',
      unit: 'mg'
    },
    {
      code: 'MG',
      name: 'Magnesio',
      unit: 'mg'
    },
    {
      code: 'NIA',
      name: 'Niacina',
      unit: 'mg'
    },
    {
      code: 'P',
      name: 'Fósforo, P',
      unit: 'mg'
    },
    {
      code: 'K',
      name: 'Potasio, K',
      unit: 'mg'
    },
    {
      code: 'PROCNT',
      name: 'Proteína',
      unit: 'g'
    },
    {
      code: 'RIBF',
      name: 'Riboflavina',
      unit: 'mg'
    },
    {
      code: 'NA',
      name: 'Sodio, Na',
      unit: 'mg'
    },
    {
      code: 'Sugar.alcohol',
      name: 'Alcoholes de azúcar',
      unit: 'g'
    },
    {
      code: 'SUGAR',
      name: 'Azúcares totales',
      unit: 'g'
    },
    {
      code: 'THIA',
      name: 'Tiamina',
      unit: 'mg'
    },
    {
      code: 'FAT',
      name: 'Lípidos totales',
      unit: 'g'
    },
    {
      code: 'VITA_RAE',
      name: 'Vitamina A, RAE',
      unit: 'µg'
    },
    {
      code: 'VITB12',
      name: 'Vitamina B-12',
      unit: 'µg'
    },
    {
      code: 'VITB6A',
      name: 'Vitamina B-6',
      unit: 'mg'
    },
    {
      code: 'VITC',
      name: 'Vitamina C, ácido ascórbico total',
      unit: 'mg'
    },
    {
      code: 'VITD',
      name: 'Vitamina D (D2 + D3)',
      unit: 'µg'
    },
    {
      code: 'TOCPHA',
      name: 'Vitamina E (alfa-tocoferol)',
      unit: 'mg'
    },
    {
      code: 'VITK1',
      name: 'Vitamina K (filoquinona)',
      unit: 'µg'
    },
    {
      code: 'WATER',
      name: 'Agua',
      unit: 'g'
    },
    {
      code: 'ZN',
      name: 'Zinc, Zn',
      unit: 'mg'
    }
  ];

  console.log(data);

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

      <Box
        display={'flex'}
        color={'black'}
        paddingLeft={'14px'}
        alignItems={'center'}
      >
        <IconButton size="small" onClick={() => navigate('recipes')}>
          <ArrowBack color="primary" fontSize="small" />
        </IconButton>

        <Typography variant="body2">Receta</Typography>
      </Box>

      <Box color={'black'}
        paddingLeft={'14px'}
      >
        <Typography
          variant="body1"
          fontWeight={700}
        >Guia nutricional</Typography>
      </Box>

      <Box color={'black'}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Codigo</TableCell>
              <TableCell>Nombre</TableCell>
              <TableCell>Unidad</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(({ code, name, unit }, index) => <TableRow key={index}>
              <TableCell>

                <Typography variant="body2" color={'black'}>{code}</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body2" color={'black'}>{name}</Typography>

              </TableCell>
              <TableCell>
                <Typography variant="body2" color={'black'}>{unit}</Typography>

              </TableCell>

            </TableRow>)}
          </TableBody>
        </Table>
      </Box>

    </Box>
  )
}

export default NutritionGuide