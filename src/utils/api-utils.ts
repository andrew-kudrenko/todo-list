import { Record } from '../interfaces'

type HTTPMethod = 'GET' | 'POST' | 'DELETE' | 'PUT' | 'PATCH' | 'OPTIONS'

const apiUri = 'https://todo-list-bend.herokuapp.com'

async function request(endPoint: string, method: HTTPMethod = 'GET', body?: any): Promise<any> {
  try {
    const uri = `${apiUri}/${endPoint}`

    const options: RequestInit = {
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }) 
    }

    if (body) {
      options.body = JSON.stringify(body)
    }

    const response = await fetch(uri, { method, ...options })

    return await response.json()
  } catch (e) {
    // throw new Error(`Ошибка при обращении к базе данных. ${e}`)
    console.warn(`Ошибка при обращении к базе данных. ${e}`)
  }
}

export const getRecords = async (): Promise<Record[]> => await request('records')

export const addRecord = async (record: Record): Promise<void> => {
  await request('records', 'POST', record)
}
export const removeRecord = async (id: string): Promise<void> => {
  await request('records', 'DELETE', { _id: id })
}