import { useGetCitiesMutation } from '@/app/services/countries/countries.api'

export const useLocation = () => {
  const [getCities, { data: cities }] = useGetCitiesMutation()

  //*** Response data was transformed in rtk

  // const mappedCities: SelectValue[] | undefined = useMemo(() => {
  //   return cities?.data.map(city => {
  //     return { value: city.toLowerCase(), label: city }
  //   })
  // }, [cities])

  return { getCities }
}
