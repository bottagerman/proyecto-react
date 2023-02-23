import "./ProductCard.css";

export const ProductCard = ({title, price}) => {

  return (
    <div className="Contenido">
      <h1>{title}</h1>
      <h2>{price}</h2>
    </div>
  );
};

// export default Main
