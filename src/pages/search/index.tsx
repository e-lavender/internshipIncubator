import { AccountImagePicker } from '@/modules'
import { NextPageWithLayout } from '@/pages/_app'

const Search: NextPageWithLayout = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '10rem 0 5rem' }}>Search</h1>
      <AccountImagePicker />
    </div>
  )
}

export default Search

// const [avatar, setAvatar] = useState<string | undefined>(null)
// const { JPG, PNG } = MIME_TYPES
// const formRef = useRef<HTMLFormElement | null>(null)
//
// const handleClick = () => {
//     if (!formRef?.current) return
//
//     const formData = new FormData(formRef?.current)
//     const file = formRef?.current.file.files[0]
//     const blob = new Blob([file], { type: file.type })
//
//     console.log(
//         'blob >>> ',
//         blob,
//         'filereader >>> ',
//         formRef?.current.file.files[0],
//         'arrayBuffer >>> ',
//         blob.arrayBuffer().then(console.log)
//     )
//     const reader = new FileReader()
//
//     reader?.readAsDataURL(blob)
//
//     setAvatar(URL.createObjectURL(blob))
//
//     // fetch('https://httpbin.org/post', {
//     //   method: 'POST',
//     //   body: formData,
//     // })
//     //   .then(console.log)
//     //   .catch(e => console.log(e))
// }
//
//
// <FileInput multiple ref={formRef}>
//     <button type={'button'} onClick={handleClick}>
//         upload
//     </button>
// </FileInput>
//
// <Avatar src={avatar} />
