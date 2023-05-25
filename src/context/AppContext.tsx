import { ReactNode, createContext, useState } from 'react'

export const AppContext = createContext({
  isCartOpen: false,
  items: [] as ItemType[],
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  openCart: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeCart: () => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  addToCart: (_item: ItemType) => {},
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  removeFromCart: (_id: number) => {},
})

export function AppProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [items, setItems] = useState<ItemType[]>([])

  const openCart = () => {
    setIsCartOpen(true)
  }

  const closeCart = () => {
    setIsCartOpen(false)
  }

  const addToCart = (item: ItemType) => {
    setItems(items => [...items, item])
  }

  const removeFromCart = (itemId: number) => {
    setItems(items => items.filter(item => item.id !== itemId))
  }

  return (
    <AppContext.Provider
      value={{
        isCartOpen,
        items,
        openCart,
        closeCart,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
