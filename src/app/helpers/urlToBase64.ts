async function blobToBase64(blob: Blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()

    reader.onerror = reject
    reader.onload = () => resolve(reader.result)
    reader.readAsDataURL(blob)
  })
}
export async function urlToBase64(url: unknown): Promise<unknown> {
  try {
    // @ts-ignore
    const response = await fetch(url)
    const blob = await response.blob()
    const base64String = await blobToBase64(blob)

    return base64String
  } catch (error) {
    console.error(error)
    throw error
  }
}
