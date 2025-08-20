export function api(endpoint: string) {
  return fetch(`${process.env.API_URL}${endpoint}`)
}
