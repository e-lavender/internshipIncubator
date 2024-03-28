import { IMAGE_SIZE } from '@/app/constants/enums'
import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { DBSchema, IDBPDatabase, openDB } from 'idb'
interface postsDB extends DBSchema {
  draftImages: {
    key: number
    value: {
      description: string
      drafts: PostImageViewModel[]
    }
  }
}

let dbPromise: Promise<IDBPDatabase<postsDB>> | null = null

if (typeof window !== 'undefined') {
  dbPromise = openDB<postsDB>('postDatabase', 1, {
    upgrade(db) {
      db.createObjectStore('draftImages', { autoIncrement: true, keyPath: 'key' })
    },
  })
}
const addPostToDraft = async (
  data: Awaited<{
    alt?: string
    fileSize: number
    filter?: string
    height: number
    imageSize: keyof typeof IMAGE_SIZE
    uploadId: string
    url: unknown
    width: number
  }>[],
  description: string
) => {
  if (!dbPromise) {
    return
  }

  try {
    const db = await dbPromise

    const tx = db.transaction('draftImages', 'readwrite')
    const store = tx.objectStore('draftImages')

    // @ts-ignore
    await store.add({ description, drafts: data })
    await tx.done
  } catch (error) {
    console.error('An error occurred while adding post to draft:', error)
  }
}
const getDraft = async () => {
  if (!dbPromise) {
    return []
  }
  try {
    const db = await dbPromise
    const tx = db.transaction('draftImages', 'readonly')
    const store = tx.objectStore('draftImages')

    return store.getAll()
  } catch (error) {
    console.error('An error occurred while getting draft:', error)

    return []
  }
}

const clearDB = (objectStoreName: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('postDatabase')

    request.onerror = function (event) {
      reject('Open database error')
    }

    request.onsuccess = async function (event) {
      try {
        const db = (event.target as IDBRequest).result as IDBDatabase

        const transaction = db.transaction(objectStoreName, 'readwrite')
        const objectStore = transaction.objectStore(objectStoreName)

        await new Promise<void>((resolve, reject) => {
          const clearRequest = objectStore.clear()

          clearRequest.onsuccess = function (event) {
            resolve()
          }

          clearRequest.onerror = function (event) {
            reject('Data clearing error')
          }
        })

        resolve('Data successfully deleted')
      } catch (error) {
        reject('An error occurred while clearing data')
      }
    }
  })
}

export { addPostToDraft, clearDB, getDraft }
