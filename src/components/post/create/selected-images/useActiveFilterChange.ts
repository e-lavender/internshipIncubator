export const useActiveFilterChange = (changeFilterFn: (filter: string) => void) => {
  const changeActiveFilter = (filter: string) => {
    switch (filter) {
      case 'No filter':
        changeFilterFn('')
        break
      case 'Kyoto':
        changeFilterFn('contrast(90%) brightness(120%) saturate(160%) hue-rotate(-10deg)')
        break
      case 'Lark':
        changeFilterFn('contrast(100%) sepia(50%)')
        break
      case 'Gingham':
        changeFilterFn('contrast(90%) sepia(20%)')
        break
      case 'Happy':
        changeFilterFn('contrast(110%) brightness(110%) saturate(130%)')
        break
      case 'Shabby':
        changeFilterFn('contrast(150%) saturate(110%)')
        break
      case 'Old school': {
        changeFilterFn('contrast(75%) brightness(115%) saturate(85%)')
        break
      }
      case 'Silent Hill': {
        changeFilterFn('contrast(95%) brightness(125%) saturate(150%) sepia(25%)')
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
