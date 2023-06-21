import { Backdrop, CircularProgress } from '@mui/material'

const Loading = ({ isLoading }) => {
  return (
    <Backdrop open={isLoading}>
      <CircularProgress></CircularProgress>
    </Backdrop>
  )
}

export default Loading