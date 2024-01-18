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
    filter: 'saturate(2)',
  },
  {
    name: 'Lark',
    filter: 'grayscale(100%)',
  },
  {
    name: 'Gingham',
    filter: 'contrast(160%)',
  },
  {
    name: 'Happy',
    filter: 'contrast(110%) brightness(110%) saturate(130%)',
  },
  {
    name: 'Shabby',
    filter: 'sepia(80%)',
  },
  {
    name: 'Old school',
    filter: 'opacity(70%)',
  },
  {
    name: 'Silent Hill',
    filter: 'hue-rotate(150deg)',
  },
  {
    name: 'Hudson',
    filter: 'sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67)',
  },
]
