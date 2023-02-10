import { useState, useCallback } from 'react'
import { getMenu } from '../services/menu.js'

export function useMenu () {
  const [menu, setMenu] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const listMenu = useCallback(async () => {
    try {
      setLoading(true)
      setError(null)
      const newMenu = await getMenu()
      setMenu(newMenu)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }, [])

  return { menu, listMenu, loading }
}
