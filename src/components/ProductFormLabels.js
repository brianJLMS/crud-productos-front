import { useState } from "react";
import ShowLabels from "./ShowLabels";

const ProductFormLabels = ({ etiquetas, setEtiquetas }) => {
  const [etiqueta, setEtiqueta] = useState("");

  const handleChange = (e) => {
    setEtiqueta(e.target.value);
  };

  const handleDeleteLabel = (e, index) => {
    e.preventDefault();

    const labels = etiquetas;

    labels.splice(index, 1);

    return setEtiquetas(labels);
  };

  return (
    <section className="label">
      <h3 className="label__title">Etiquetas</h3>
      <div className="label__inp-cont">
        <label className="label__lab" htmlFor="etiqueta">
          Etiqueta:{" "}
        </label>
        <input
          type="text"
          id="etiqueta"
          name="etiqueta"
          className="label__inp"
          onChange={(e) => handleChange(e)}
        />
        <button
          className="label__btn"
          onClick={(e) => {
            e.preventDefault();
            setEtiquetas([...etiquetas, etiqueta]);
          }}
        >
          Agregar etiqueta
        </button>
      </div>
      <ShowLabels etiquetas={etiquetas} handleDeleteLabel={handleDeleteLabel} />
    </section>
  );
};

export default ProductFormLabels;
