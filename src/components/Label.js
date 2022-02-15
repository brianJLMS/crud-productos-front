const Label = ({ etiqueta, index, handleDeleteLabel }) => {
  return (
    <div id={index} className="label-item">
      <p className="label-item__name">{etiqueta}</p>
      <button
        className="label-item__btn"
        onClick={(e) => {
          handleDeleteLabel(e, index);
        }}
      >
        X
      </button>
    </div>
  );
};

export default Label;
