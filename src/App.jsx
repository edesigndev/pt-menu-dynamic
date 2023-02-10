import { useEffect } from 'react'
import { useMenu } from './hooks/useMenu'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { NavMenu } from './components/NavMenu'
import { Content } from './components/Content'

function App () {
  const { menu, listMenu, loading } = useMenu()

  useEffect(() => {
    listMenu()
  }, [])

  return (
    <>
      <Nav username='EDGAR LAZARO' />
      <NavMenu menu={menu} />
      <Content />
      <Footer />
    </>
  )
}

export default App
