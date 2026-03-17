import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { Product } from '@/lib/products';
import { toast } from '@/hooks/use-toast';

export interface CartItem extends Product {
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  wishlist: Product[];
  isAuthenticated: boolean;
  user: null | { name: string; email: string };
}

// 🔥 Load from localStorage
const getInitialState = (): StoreState => {
  try {
    return {
      cart: JSON.parse(localStorage.getItem('cart') || '[]'),
      wishlist: JSON.parse(localStorage.getItem('wishlist') || '[]'),
      isAuthenticated: false,
      user: null,
    };
  } catch {
    return { cart: [], wishlist: [], isAuthenticated: false, user: null };
  }
};

type StoreAction =
  | { type: 'ADD_TO_CART'; product: Product }
  | { type: 'REMOVE_FROM_CART'; productId: string }
  | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
  | { type: 'ADD_TO_WISHLIST'; product: Product }
  | { type: 'REMOVE_FROM_WISHLIST'; productId: string }
  | { type: 'LOGIN'; user: { name: string; email: string } }
  | { type: 'LOGOUT' }
  | { type: 'CLEAR_CART' };

function storeReducer(state: StoreState, action: StoreAction): StoreState {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const existing = state.cart.find(i => i.id === action.product.id);

      if (existing) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.product, quantity: 1 }],
      };
    }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cart: state.cart.filter(i => i.id !== action.productId),
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        cart:
          action.quantity <= 0
            ? state.cart.filter(i => i.id !== action.productId)
            : state.cart.map(item =>
                item.id === action.productId
                  ? { ...item, quantity: action.quantity }
                  : item
              ),
      };

    case 'ADD_TO_WISHLIST': {
      if (state.wishlist.some(i => i.id === action.product.id)) {
        return state;
      }

      return {
        ...state,
        wishlist: [...state.wishlist, action.product],
      };
    }

    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(i => i.id !== action.productId),
      };

    case 'LOGIN':
      return {
        ...state,
        isAuthenticated: true,
        user: action.user,
      };

    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };

    case 'CLEAR_CART':
      return { ...state, cart: [] };

    default:
      return state;
  }
}

const StoreContext = createContext<any>(null);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(storeReducer, getInitialState());

  // 🔥 Persist to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state.cart));
  }, [state.cart]);

  useEffect(() => {
    localStorage.setItem('wishlist', JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  const addToCart = (product: Product) => {
    dispatch({ type: 'ADD_TO_CART', product });
    toast({ title: 'Added to cart', description: product.name });
  };

  const removeFromCart = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_CART', productId: id });
    toast({ title: 'Removed', description: 'Item removed from cart' });
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch({ type: 'UPDATE_QUANTITY', productId: id, quantity });
  };

  const addToWishlist = (product: Product) => {
    if (state.wishlist.some(item => item.id === product.id)) {
      toast({ title: 'Already in wishlist' });
      return;
    }

    dispatch({ type: 'ADD_TO_WISHLIST', product });
    toast({ title: 'Added to wishlist', description: product.name });
  };

  const removeFromWishlist = (id: string) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', productId: id });
    toast({ title: 'Removed from wishlist' });
  };

  const login = (user: { name: string; email: string }) => {
    dispatch({ type: 'LOGIN', user });
  };

  const logout = () => dispatch({ type: 'LOGOUT' });

  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  const getTotalPrice = () =>
    Number(
      state.cart
        .reduce((t, i) => t + i.price * i.quantity, 0)
        .toFixed(2)
    );

  const getTotalItems = () =>
    state.cart.reduce((t, i) => t + i.quantity, 0);

  return (
    <StoreContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        updateQuantity,
        addToWishlist,
        removeFromWishlist,
        login,
        logout,
        clearCart,
        getTotalPrice,
        getTotalItems,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export const useStore = () => {
  const ctx = useContext(StoreContext);
  if (!ctx) throw new Error('useStore must be used within provider');
  return ctx;
};

// import React, { createContext, useContext, useReducer, ReactNode } from 'react';
// import { Product } from '@/lib/products';
// import { toast } from '@/hooks/use-toast';

// export interface CartItem extends Product {
//   quantity: number;
// }

// interface StoreState {
//   cart: CartItem[];
//   wishlist: Product[];
//   isAuthenticated: boolean;
//   user: null | { name: string; email: string };
// }

// type StoreAction =
//   | { type: 'ADD_TO_CART'; product: Product }
//   | { type: 'REMOVE_FROM_CART'; productId: string }
//   | { type: 'UPDATE_QUANTITY'; productId: string; quantity: number }
//   | { type: 'ADD_TO_WISHLIST'; product: Product }
//   | { type: 'REMOVE_FROM_WISHLIST'; productId: string }
//   | { type: 'LOGIN'; user: { name: string; email: string } }
//   | { type: 'LOGOUT' }
//   | { type: 'CLEAR_CART' };

// const initialState: StoreState = {
//   cart: [],
//   wishlist: [],
//   isAuthenticated: false,
//   user: null,
// };

// function storeReducer(state: StoreState, action: StoreAction): StoreState {
//   switch (action.type) {
//     case 'ADD_TO_CART': {
//       const existingItem = state.cart.find(item => item.id === action.product.id);
      
//       if (existingItem) {
//         return {
//           ...state,
//           cart: state.cart.map(item =>
//             item.id === action.product.id
//               ? { ...item, quantity: item.quantity + 1 }
//               : item
//           ),
//         };
//       }

//       return {
//         ...state,
//         cart: [...state.cart, { ...action.product, quantity: 1 }],
//       };
//     }

//     case 'REMOVE_FROM_CART':
//       return {
//         ...state,
//         cart: state.cart.filter(item => item.id !== action.productId),
//       };

//     case 'UPDATE_QUANTITY':
//       if (action.quantity <= 0) {
//         return {
//           ...state,
//           cart: state.cart.filter(item => item.id !== action.productId),
//         };
//       }

//       return {
//         ...state,
//         cart: state.cart.map(item =>
//           item.id === action.productId
//             ? { ...item, quantity: action.quantity }
//             : item
//         ),
//       };

//     case 'ADD_TO_WISHLIST':
//       if (state.wishlist.some(item => item.id === action.product.id)) {
//         return state;
//       }

//       return {
//         ...state,
//         wishlist: [...state.wishlist, action.product],
//       };

//     case 'REMOVE_FROM_WISHLIST':
//       return {
//         ...state,
//         wishlist: state.wishlist.filter(item => item.id !== action.productId),
//       };

//     case 'LOGIN':
//       return {
//         ...state,
//         isAuthenticated: true,
//         user: action.user,
//       };

//     case 'LOGOUT':
//       return {
//         ...state,
//         isAuthenticated: false,
//         user: null,
//       };

//     case 'CLEAR_CART':
//       return {
//         ...state,
//         cart: [],
//       };

//     default:
//       return state;
//   }
// }

// const StoreContext = createContext<{
//   state: StoreState;
//   dispatch: React.Dispatch<StoreAction>;
//   addToCart: (product: Product) => void;
//   removeFromCart: (productId: string) => void;
//   updateQuantity: (productId: string, quantity: number) => void;
//   addToWishlist: (product: Product) => void;
//   removeFromWishlist: (productId: string) => void;
//   login: (user: { name: string; email: string }) => void;
//   logout: () => void;
//   clearCart: () => void;
//   getTotalPrice: () => number;
//   getTotalItems: () => number;
// } | null>(null);

// export function StoreProvider({ children }: { children: ReactNode }) {
//   const [state, dispatch] = useReducer(storeReducer, initialState);

//   const addToCart = (product: Product) => {
//     dispatch({ type: 'ADD_TO_CART', product });
//     toast({
//       title: 'Added to cart',
//       description: `${product.name} has been added to your cart.`,
//     });
//     console.log('Added to cart:', product.name);
//   };

//   const removeFromCart = (productId: string) => {
//     dispatch({ type: 'REMOVE_FROM_CART', productId });
//     toast({
//       title: 'Removed from cart',
//       description: 'Item has been removed from your cart.',
//     });
//   };

//   const updateQuantity = (productId: string, quantity: number) => {
//     dispatch({ type: 'UPDATE_QUANTITY', productId, quantity });
//   };

//   const addToWishlist = (product: Product) => {
//     if (state.wishlist.some(item => item.id === product.id)) {
//       toast({
//         title: 'Already in wishlist',
//         description: 'This item is already in your wishlist.',
//       });
//       return;
//     }

//     dispatch({ type: 'ADD_TO_WISHLIST', product });
//     toast({
//       title: 'Added to wishlist',
//       description: `${product.name} has been added to your wishlist.`,
//     });
//     console.log('Added to wishlist:', product.name);
//   };

//   const removeFromWishlist = (productId: string) => {
//     dispatch({ type: 'REMOVE_FROM_WISHLIST', productId });
//     toast({
//       title: 'Removed from wishlist',
//       description: 'Item has been removed from your wishlist.',
//     });
//   };

//   const login = (user: { name: string; email: string }) => {
//     dispatch({ type: 'LOGIN', user });
//     toast({
//       title: 'Login successful',
//       description: `Welcome back, ${user.name}!`,
//     });
//     console.log('Login Successful:', user.email);
//   };

//   const logout = () => {
//     dispatch({ type: 'LOGOUT' });
//     toast({
//       title: 'Logged out',
//       description: 'You have been logged out successfully.',
//     });
//     console.log('User logged out');
//   };

//   const clearCart = () => {
//     dispatch({ type: 'CLEAR_CART' });
//   };

//   const getTotalPrice = () => {
//     return state.cart.reduce((total, item) => total + (item.price * item.quantity), 0);
//   };

//   const getTotalItems = () => {
//     return state.cart.reduce((total, item) => total + item.quantity, 0);
//   };

//   return (
//     <StoreContext.Provider
//       value={{
//         state,
//         dispatch,
//         addToCart,
//         removeFromCart,
//         updateQuantity,
//         addToWishlist,
//         removeFromWishlist,
//         login,
//         logout,
//         clearCart,
//         getTotalPrice,
//         getTotalItems,
//       }}
//     >
//       {children}
//     </StoreContext.Provider>
//   );
// }

// export function useStore() {
//   const context = useContext(StoreContext);
//   if (!context) {
//     throw new Error('useStore must be used within a StoreProvider');
//   }
//   return context;
// }