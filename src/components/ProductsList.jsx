import ProductsCard from "./ProductsCard";

function ProductsList(props) {
  const { productsList } = props;

  if (!Array.isArray(productsList.products)) {
    return <p>No products here</p>;
  }

  return (
    <div>
      {productsList && productsList.products.map((product) => (
        <ProductsCard key={product.id} oneProduct={product} />
      ))}
    </div>
  );
}



export default ProductsList;