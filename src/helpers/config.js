import md5 from 'md5'
import quotesMarvel from '../assets/quotesmarvel.json'
/* The base url of the API. */
const baseUrl = 'https://gateway.marvel.com/v1/public'

/** ts - a timestamp (or other long string which can change on a request-by-request basis) */
const ts = Number(new Date())

/* Getting the public key from the environment variable. */
const apikey = process.env.PUBLIC_KEY

/* Getting the private key from the environment variable. */
const privateKey = process.env.PRIVATE_KEY

/** hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey) */
const hash = md5(ts + privateKey + apikey)

/**
 * Toma un objeto y devuelve una cadena de consulta
 */
const queryString = ({ ...params }) => new URLSearchParams({ ts, apikey, hash, ...params }).toString()

/**
 * Toma un ruta y un objeto de argumentos y devuelve una URL
 * @param [path=/comics] - La ruta al recurso que desea solicitar.
 * @param [args] - Un objeto que contiene los parámetros de consulta que se enviarán a la API.
 */
export const requestUrlMarvel = (path = '/comics', args = {}) => `${baseUrl}${path}?${queryString(args)}`

/* Getting the title of the website from the environment variable. */
export const titleWebSite = process.env.TITLE_WEBSITE

/**
 * It returns a random quote from the quotesMarvel array.
 */
export const randomQuoteMarvel = () => quotesMarvel[Math.floor(Math.random() * quotesMarvel.length)]
