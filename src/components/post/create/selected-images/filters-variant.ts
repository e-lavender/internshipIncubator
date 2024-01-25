type FiltersVariantsType = {
  name: string
  filter: string
}

export const filtersVariant: FiltersVariantsType[] = [
  {
    name: 'No filter',
    filter: '',
  },
  {
    name: 'Kyoto',
    filter: 'contrast(90%) brightness(120%) saturate(160%) hue-rotate(-10deg)',
  },
  {
    name: 'Lark',
    filter: 'grayscale(100%)',
  },
  {
    name: 'Gingham',
    filter:
      'contrast(90%) brightness(110%) saturate(150%) sepia(30%) grayscale(37%) invert(10%) hue-rotate(20deg)',
  },
  {
    name: 'Happy',
    filter: 'contrast(110%) brightness(110%) saturate(130%)',
  },
  {
    name: 'Shabby',
    filter: 'contrast(150%) saturate(110%)',
  },
  {
    name: 'Old school',
    filter:
      ' contrast(95%) brightness(95%) saturate(150%) sepia(25%) grayscale(2%) hue-rotate(28deg)',
  },
  {
    name: 'Silent Hill',
    filter: 'contrast(140%) sepia(50%) grayscale(3%) invert(2%) hue-rotate(15deg)',
  },
  {
    name: 'Hudson',
    filter: 'saturate(3)',
  },
]
