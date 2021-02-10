import { useState, useEffect } from 'react'

export default function useSurvivorFilters(items = [], nameFilter, infectedFilter) {
  const [filteredItems, setFilteredItems] = useState(items)

  useEffect(() => {
    let newItems = [...items]

    if (infectedFilter) {
      newItems = newItems.filter(item => item?.infected)
    }

    if (nameFilter) {
      newItems = newItems.filter(({ firstName = '', lastName = '' }) => {
        return [`${firstName} ${lastName}`, `${lastName} ${firstName}`]
          .some(el => el.toLowerCase().includes(nameFilter.toLowerCase()))
      })
    }

    setFilteredItems(newItems)
  }, [items, nameFilter, infectedFilter])

  return filteredItems
}
