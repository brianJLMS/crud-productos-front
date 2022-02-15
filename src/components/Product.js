const Product = ({ data, handleDeleteProduct }) => {
  const { nombre, id_producto } = data;
  return (
    <div className="product">
      <h4 className="product__name">{nombre}</h4>
      <button
        onClick={(e) => handleDeleteProduct(e)}
        id={id_producto}
        className="product__btn"
      >
        Eliminar
      </button>
    </div>
  );
};

export default Product;
