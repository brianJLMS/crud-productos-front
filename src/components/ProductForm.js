import { useState } from "react";
import ProductFormLabels from "./ProductFormLabels";

function ProductForm() {
  const [nombre, setNombre] = useState("");

  const [etiquetas, setEtiquetas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.length < 4)
      return window.alert(
        "El campo 'Nombre de Producto' debe tener al menos 4 caracteres"
      );

    const bodyPost = {
      nombre,
      etiquetas,
    };

    console.log(bodyPost);

    fetch("http://localhost:5000/insert", {
      headers: {
        "Content-type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(bodyPost),
    })
      .then((res) => res.json())
      .then((data) => data);

    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handleChange = (e) => {
    setNombre(e.target.value);
  };

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <div className="form__name-cont">
        <label className="form__label-name" htmlFor="nombre">
          Nombre del producto:{" "}
        </label>
        <input
          className="form__input-name"
          type="text"
          id="nombre"
          name="nombre"
          onChange={(e) => {
            handleChange(e);
          }}
        />
      </div>

      <ProductFormLabels etiquetas={etiquetas} setEtiquetas={setEtiquetas} />
      <input
        type="submit"
        value="Guardar producto"
        className="form__btn-submit"
      />
    </form>
  );
}

export default ProductForm;
