export const useActiveFilterChange = (changeFilterFn: (filter: string) => void) => {
  const changeActiveFilter = (filter: string) => {
    switch (filter) {
      case 'No filter':
        changeFilterFn('')
        break
      case 'Kyoto':
        changeFilterFn('saturate(2)')
        break
      case 'Lark':
        changeFilterFn('grayscale(100%)')
        break
      case 'Gingham':
        changeFilterFn('contrast(160%)')
        break
      case 'Happy':
        changeFilterFn('contrast(110%) brightness(110%) saturate(130%)')
        break
      case 'Shabby':
        changeFilterFn('sepia(100%)')
        break
      case 'Old school': {
        changeFilterFn('opacity(50%)')
        break
      }
      case 'Silent Hill': {
        changeFilterFn('hue-rotate(180deg')
        break
      }
      case 'Hudson': {
        changeFilterFn('sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67)')
        break
      }
      default: {
        changeFilterFn('')
        break
      }
    }
  }

  return changeActiveFilter
}
