import Label from "./Label";

const ShowLabels = ({ etiquetas, handleDeleteLabel }) => {
  return (
    <div className="label-list">
      {etiquetas.length > 0 &&
        etiquetas.map((etiqueta, i) => {
          return (
            <Label
              etiqueta={etiqueta}
              index={i}
              key={i}
              handleDeleteLabel={handleDeleteLabel}
            />
          );
        })}
    </div>
  );
};

export default ShowLabels;
