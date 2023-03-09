import axios from 'axios'
import { useAsync } from 'react-use'
import { requestUrlMarvel } from '../helpers/config'

const COMICS = requestUrlMarvel('/comics')
/**
 * It returns a state object that is the result of an asynchronous call to the Marvel API
 */
export const stateApiMarvelComics = () => useAsync(async () => (await axios.get(COMICS)).data, [])

/**
 * It returns an array of three values: the data, a boolean indicating if the data is loading, and an
 * error object.
 *
 * The function takes an optional parameter, which is the URL to fetch. If no URL is provided, it will
 * default to the URL for the Marvel Comics API.
 *
 * The function uses the useAsync hook to fetch the data. The useAsync hook is a custom hook that I
 * wrote. It's a wrapper around the useState hook. It takes a function that returns a promise, and
 * returns an array of three values: the data, a boolean indicating if the data is loading, and an
 * error object.
 *
 * The useAsync hook is a custom hook that I wrote. It's a wrapper around the useState hook. It takes a
 * function that returns a promise, and returns an array of three values: the data, a boolean
 * indicating if the data is loading, and an error object.
 * @param [options] - The URL to fetch data from.
 * @returns An array of three values: value, loading, error.
 */
export const stateApiMarvel = (options = requestUrlMarvel('/comics')) => {
  const { value, loading, error } = useAsync(async () => (await axios.get(options)).data, [])
  return [value, loading, error]
}
