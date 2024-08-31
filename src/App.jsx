import { useState } from 'react'
import path from "./ultils/path"
import { Route, Routers } from 'react-router-dom'

function App() {

  return (
    <>
      <Routers>
        <Route path={path.LAYOUT} element={<Layout />}>
          <Route path={path.HOME} element={<Home />} />
        </Route>
      </Routers>
    </>
  )
}

export default App
