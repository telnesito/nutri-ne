import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/routes'
import '../index.css'
import Theme from './style/theme'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <RouterProvider router={router}></RouterProvider>

    </Theme>
  </React.StrictMode>,
)
