import md5 from 'md5'

const baseUrl = 'http://gateway.marvel.com/v1/public'
/** ts - a timestamp (or other long string which can change on a request-by-request basis) */
const ts = Number(new Date())

const apikey = process.env.PUBLIC_KEY

const privateKey = process.env.PRIVATE_KEY

/** hash - a md5 digest of the ts parameter, your private key and your public key (e.g. md5(ts+privateKey+publicKey) */
const hash = md5(ts + privateKey + apikey)

const queryString = ({ ...params }) => new URLSearchParams({ ts, apikey, hash, ...params }).toString()

export const requestUrlMarvel = (path = '/comics', args = {}) => `${baseUrl}${path}?${queryString(args)}`
