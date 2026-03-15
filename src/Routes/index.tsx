import { Navigate, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cadastro from '../pages/Cadastro'
import DefaultLayout from '../Layouts/DefaultLayout'

const Rotas = () => {
  return (
    <Routes>
      <Route element={<DefaultLayout />}>
        <Route path="/lista" element={<Home />} />
        <Route path="/novo" element={<Cadastro />} />
        <Route path="*" element={<Navigate to={'/lista'} replace />} />
      </Route>
    </Routes>
  )
}
export default Rotas
