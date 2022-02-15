import { useEffect, useState } from "react";
import Product from "./Product";

const ShowProducts = () => {
  const [products, setProducts] = useState([]);

  const url = "http://localhost:5000/getAll";

  const getData = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };

  const handleDeleteProduct = (e) => {
    console.log(e.target.id);
    const id = e.target.id;

    fetch(`http://localhost:5000/delete/${id}`, { method: "DELETE" })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.productDeleted) {
          window.location.reload();
        }
      });
  };

  useEffect(() => {
    getData(url);
  }, [url]);

  return (
    <div className="products">
      <h3 className="products__title">Lista de productos</h3>
      {products.data &&
        products.data.map((el) => {
          return (
            <Product
              handleDeleteProduct={handleDeleteProduct}
              data={el}
              key={el.id_producto}
            />
          );
        })}
    </div>
  );
};

export default ShowProducts;
