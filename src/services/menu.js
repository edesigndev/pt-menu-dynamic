import { GET_MENU } from './path'
import config from '../config'
import { sortMenuList } from '../utils'

const apiUrl = config.BASE_URL

export const getMenu = async () => {
  try {
    const res = await fetch(`${apiUrl}${GET_MENU}`)
    const json = await res.json()
    return sortMenuList(json.data.list[0])
  } catch (e) {
    throw new Error('Error get menu')
  }
}
