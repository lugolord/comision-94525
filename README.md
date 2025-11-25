# App Ecommerce (React)

Documento README en **Markdown** para tu aplicación e‑commerce hecha con React.

---

## Tecnologías y dependencias

La app está construida con React y usa las siguientes dependencias principales:

- `react` (React)
- `react-bootstrap` (componentes UI basados en Bootstrap)
- `bootstrap` (CSS de Bootstrap)
- `react-router-dom` (ruteo)
- `firebase` (backend: Firestore / Auth / Hosting opcional)
- `react-spinners` (spinners / indicadores de carga)

> Instalación (ejemplo con npm):

```bash
npm install react react-dom react-bootstrap bootstrap react-router-dom firebase react-spinners
```

Si usas Yarn:

```bash
yarn add react react-dom react-bootstrap bootstrap react-router-dom firebase react-spinners
```

Recuerda importar el CSS de Bootstrap (por ejemplo en `src/index.js` o `src/main.jsx`):

```js
import 'bootstrap/dist/css/bootstrap.min.css';
```

---

## Funcionalidades principales

Tu app implementa las siguientes funcionalidades:

1. **Mostrar productos** (listado con tarjetas).
2. **Filtrar por categoría** (barra lateral / select / botones).
3. **Detalle de producto** (página con información completa y opción de añadir al carrito).
4. **Carrito de compras** (agregar, quitar, actualizar cantidades).
5. **Finalizar compra** (checkout: formularios y envío a Firebase/Firestore o simulación).
6. **Indicadores de carga** (spinners mientras se cargan datos).
7. **Rutas navegables** (p. ej. `/`, `/categoria/:id`, `/producto/:id`, `/carrito`, `/checkout`).

---

## Estructura sugerida de carpetas

```
src/
├─ components/
│  ├─ ProductCard.jsx
│  ├─ ProductList.jsx
│  ├─ CategoryFilter.jsx
│  ├─ Navbar.jsx
│  ├─ CartItem.jsx
│  └─ LoadingSpinner.jsx
├─ pages/
│  ├─ Home.jsx
│  ├─ CategoryPage.jsx
│  ├─ ProductDetail.jsx
│  ├─ Cart.jsx
│  └─ Checkout.jsx
├─ context/
│  └─ CartContext.jsx
├─ firebase/
│  └─ config.js
├─ routes/
│  └─ AppRouter.jsx
├─ data/
│  └─ products.js   # (pruebas/local)
└─ index.js
```

---

## Snippets útiles

### 1) Ruteo con `react-router-dom` (AppRouter.jsx)

```jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '..lkññlrom '../pages/Checkout';

export default function AppRouter(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/categoria/:id" element={<CategoryPage/>} />
        <Route path="/producto/:id" element={<ProductDetail/>} />
        <Route path="/carrito" element={<Cart/>} />
        <Route path="/checkout" element={<Checkout/>} />
      </Routes>
    </BrowserRouter>
  );
}
```

### 2) Contexto simple para carrito (context/CartContext.jsx)

```jsx
import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }){
  const [cart, setCart] = useState([]);

  function addToCart(product, qty = 1){
    setCart(prev => {
      const found = prev.find(p => p.id === product.id);
      if(found) return prev.map(p => p.id === product.id ? {...p, qty: p.qty + qty} : p);
      return [...prev, {...product, qty}];
    });
  }

  function removeFromCart(id){
    setCart(prev => prev.filter(p => p.id !== id));
  }

  function clearCart(){ setCart([]); }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
```

### 3) Ejemplo de uso de `react-spinners` para loading (components/LoadingSpinner.jsx)

```jsx
import { ClipLoader } from 'react-spinners';

export default function LoadingSpinner({ loading }){
  return (
    <div className="d-flex justify-content-center align-items-center" style={{height: '200px'}}>
      <ClipLoader loading={loading} size={40} />
    </div>
  );
}
```

### 4) Ejemplo simple de ProductCard con React Bootstrap

```jsx
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function ProductCard({ product, onAdd }){
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title>{product.title}</Card.Title>
        <Card.Text>${product.price}</Card.Text>
        <div className="d-flex justify-content-between">
          <Link to={`/producto/${product.id}`} className="btn btn-outline-primary">Ver</Link>
          <Button onClick={() => onAdd(product)}>Agregar</Button>
        </div>
      </Card.Body>
    </Card>
  );
}
```

---

## Integración con Firebase (breve)

1. Crea un proyecto en Firebase Console y configura Firestore y/o Authentication según necesites.
2. Agrega la configuración en `src/firebase/config.js` (variables del proyecto).
3. Usa la SDK modular (v9+):

```js
// src/firebase/config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  // etc.
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
```

---

## Scripts útiles

- `npm start` — arranca la app en modo desarrollo.
- `npm run build` — crea el build de producción.
- `npm test` — corre tests (si los tienes).

---

## Links a la documentación oficial

- React: https://react.dev/
- React Bootstrap: https://react-bootstrap.github.io/
- Bootstrap (CSS): https://getbootstrap.com/
- React Router: https://reactrouter.com/
- Firebase (Docs): https://firebase.google.com/docs
- React Spinners (npm / GitHub): https://www.npmjs.com/package/react-spinners

---

## Consejos y mejoras futuras

- Validar correctamente el stock antes de añadir al carrito.
- Persistir el carrito en `localStorage` o en Firestore para sesiones persistentes.
- Agregar paginación / lazy loading para listados largos.
- Internacionalización si planeas soportar varios idiomas.
- Tests unitarios para la lógica del carrito.

---

Si querés, puedo:

- Generar un **README** más completo en inglés.
- Crear componentes base (archivos `.jsx`) listos para copiar/pegar.
- Preparar un ejemplo mínimo funcional con datos de prueba.

Dime qué preferís y lo agrego.

