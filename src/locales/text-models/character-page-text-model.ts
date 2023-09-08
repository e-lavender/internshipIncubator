import { pluralizeEn, pluralizeRu } from '@/app/helpers/pluralize'

export const CharacterPageTextModel = {
  ru: {
    getDescription(name: string, species: string) {
      return `Персонаж ${name} относится к разновидности ${species}`
    },
    description: 'Персонаж <1>name</1> относится к разновидности <2>species</2>',
    getCount(count: number) {
      const str = pluralizeRu(count)

      switch (str) {
        case 'one':
          return `${count} товар`
        case 'few':
          return `${count} товара`
        case 'many':
          return `${count} товаров`
      }
    },
  },
  en: {
    getDescription(name: string, species: string) {
      return `Character ${name} relates to ${species}`
    },
    description: 'Character <1>name</1> relates to <2>species</2>',
    getCount(count: number) {
      const str = pluralizeEn(count)

      switch (str) {
        case 'one':
          return `${count} item`
        case 'other':
          return `${count} items`
      }
    },
  },
}
