import "./App.css";
import {
  useCreateProduct,
  useDeleteProduct,
  useProducts,
  useUpdateProduct,
} from "./features/products";

function App() {
  const { products, isLoading, error } = useProducts();
  const { createProduct } = useCreateProduct();
  const { updateProduct } = useUpdateProduct(1);
  const { deleteProduct } = useDeleteProduct(1);
  console.log(products && products.products);

  if (isLoading) return <>Carregando...</>;
  if (error) return <>Houve um erro</>;

  return (
    <div>
      <button
        onClick={() =>
          createProduct({ title: "Mateus" }).then((result) =>
            console.log(result),
          )
        }
      >
        Create Product
      </button>
      <button
        onClick={() =>
          updateProduct({ title: "João" }).then((result) => console.log(result))
        }
      >
        Update Product
      </button>
      <button
        onClick={() => deleteProduct().then((result) => console.log(result))}
      >
        Delete Product
      </button>
      {products.products &&
        products.products.map((p: any) => <p key={p.id}>{p.title}</p>)}
    </div>
  );
}

export default App;
