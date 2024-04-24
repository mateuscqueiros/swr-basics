import "./App.css";
import {
  useCreateProduct,
  useDeleteProduct,
  useProducts,
  useUpdateProduct,
} from "./features/products";

function App() {
  const { data, isLoading, error } = useProducts();
  const { trigger: createProduct } = useCreateProduct();
  const { trigger: updateProduct } = useUpdateProduct(1);
  const { trigger: deleteProduct } = useDeleteProduct(1);
  const products = data && data.products;

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
      {products && products.map((p: any) => <p key={p.id}>{p.title}</p>)}
    </div>
  );
}

export default App;
