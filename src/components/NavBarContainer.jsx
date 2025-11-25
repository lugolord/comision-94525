import { useState, useEffect } from 'react'
import { getCategories } from '../firebase/db'
import NavBar from './NavBar'

function NavBarContainer () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then(cats => setCategories(cats))
  }, [])

  return (
    <NavBar categories={categories} />
  )
}

export default NavBarContainer
