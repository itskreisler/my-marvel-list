import axios from 'axios'
import { useAsync } from 'react-use'
import { requestUrlMarvel } from '../helpers/config'

const COMICS = requestUrlMarvel('/comics', { limit: 2, title: 'Hulk' })
export const stateApiMarvelComics = () => useAsync(async () => (await axios.get(COMICS)).data, [])
