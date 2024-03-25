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
const addPostToDraft = async (data: PostImageViewModel[], description: string) => {
  if (!dbPromise) {
    return
  }

  try {
    const db = await dbPromise

    console.log(db)
    const tx = db.transaction('draftImages', 'readwrite')
    const store = tx.objectStore('draftImages')

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

/*const clearDB = (objectStoreName: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('postDatabase')

    request.onerror = function (event) {
      reject('Open database error')
    }

    request.onsuccess = function (event) {
      const db = (event.target as IDBRequest).result

      if (db instanceof IDBDatabase) {
        const transaction = db.transaction(objectStoreName, 'readwrite')
        const objectStore = transaction.objectStore(objectStoreName)

        const clearRequest = objectStore.clear()

        clearRequest.onsuccess = function (event) {
          resolve('Data successfully deleted')
        }

        clearRequest.onerror = function (event) {
          reject('Data clearing error')
        }
      }
    }
  })
}*/

export { addPostToDraft, getDraft }
