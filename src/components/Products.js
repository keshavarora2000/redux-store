import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add } from '../store/cartSlice';
import { fetchProducts } from '../store/productSlice';
import { STATUSES } from '../store/productSlice'

const Products = () => {
  const dispatch = useDispatch();
  // const [products, setProducts] = useState([]);

  useEffect(() => {
    // CALL USED WHEN NO THUNK WAS USED 

    // const fetchProducts = async () => {
    //   const res = await fetch('https://fakestoreapi.com/products');
    //   const data = await res.json();
    //   setProducts(data);
    // }
    dispatch(fetchProducts());
  }, [dispatch]);

  const {data: product, status} = useSelector(state => state.product);

  const addProductHandler = (product) => {
    dispatch(add(product));
  }

  if(status === STATUSES.LOADING) {
    return <h2>Loading...</h2>
  }

  if(status === STATUSES.ERROR) {
    return <h2>Something Went Wrong...</h2>
  }

  return (
    <div className='productsWrapper'>
      {product.map((product) => {
        return (
          <div className='card' key={product.id}>
            <img src={product.image} alt="product"/>
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button onClick={() => addProductHandler(product)} className='btn'>Add to Cart</button>
          </div>
        )
      })}
    </div>
  )
}

export default Products