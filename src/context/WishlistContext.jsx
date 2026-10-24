import {createContext,useContext} from 'react'
import {useLocalStorage} from '../hooks/useLocalStorage.js'
const WishlistContext=createContext(null)
export function WishlistProvider({children}){const [items,setItems]=useLocalStorage('kc-wishlist',[]);const isWishlisted=id=>items.some(i=>i.id===id);const toggleWishlist=product=>setItems(prev=>prev.some(i=>i.id===product.id)?prev.filter(i=>i.id!==product.id):[...prev,product]);return <WishlistContext.Provider value={{items,isWishlisted,toggleWishlist}}>{children}</WishlistContext.Provider>}
export function useWishlist(){const ctx=useContext(WishlistContext);if(!ctx)throw new Error('useWishlist must be used within WishlistProvider');return ctx}
