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
    filter: 'contrast(100%) sepia(50%)',
  },
  {
    name: 'Gingham',
    filter: 'contrast(90%) sepia(20%)',
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
    filter: 'contrast(75%) brightness(115%) saturate(85%)',
  },
  {
    name: 'Silent Hill',
    filter: 'contrast(95%) brightness(125%) saturate(150%) sepia(25%)',
  },
  {
    name: 'Hudson',
    filter: 'sepia(0.4) saturate(2.5) hue-rotate(-30deg) contrast(0.67)',
  },
]
