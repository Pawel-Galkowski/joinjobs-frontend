import { useAppDispatch } from '../hooks'
import { type AppDispatch } from './../store'

export const useMultipleDispatch = (items: any) => {
  const dispatch: AppDispatch = useAppDispatch()

  items.forEach((item: any) => {
    dispatch(item)
  })
}
