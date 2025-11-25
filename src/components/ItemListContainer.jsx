import { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { getProducts, getProductsByCategory } from '../firebase/db'
import ItemList from './ItemList'

function ItemListContainer () {
  const [items, setItems] = useState([])
  const { categoryName } = useParams()

  useEffect(() => {
    categoryName ? getProductsByCategory(categoryName, setItems) : getProducts(setItems)
  }, [categoryName])

  return (
    <ItemList items={items} />
  )
}

export default ItemListContainer
