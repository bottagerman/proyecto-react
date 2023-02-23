import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
  return (
    <header className="encabezado">
      <h1>{greeting}</h1>
    </header>
  );
};

export default ItemListContainer;
