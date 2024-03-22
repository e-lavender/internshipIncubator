import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { DBSchema, IDBPDatabase, openDB } from 'idb'

export interface postsDB extends DBSchema {
  draftPosts: {
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
      db.createObjectStore('draftPosts', { autoIncrement: true, keyPath: 'key' })
    },
  })
}

const addPostToDraft = async (data: PostImageViewModel[], description: string) => {
  if (!dbPromise) {
    return null
  }

  const db = await dbPromise
  const tx = db.transaction('draftPosts', 'readwrite')
  const store = tx.objectStore('draftPosts')

  await store.add({ description, drafts: data })
  await tx.done
}

const getDrafts = async () => {
  if (!dbPromise) {
    return []
  }

  const db = await dbPromise
  const tx = db.transaction('draftPosts', 'readonly')
  const store = tx.objectStore('draftPosts')

  return store.getAll()
}

export { addPostToDraft, getDrafts }
