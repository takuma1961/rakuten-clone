// import { useEffect, useState } from "react";
// import "../../layout/css/ProductList.css";

// function ProductList() {

//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch("http://localhost:8080/api/products")
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error("API通信に失敗しました");
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 setProducts(data);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 setError(err.message);
//                 setLoading(false);
//             });
//     }, []);
    
//     if (loading) return <p>読み込み中・・・</p>;
//     if (error) return <p style={{ color: "red" }}>{error}</p>;

//     return (
//         <div>
//             <h1>商品一覧</h1>
//             <ul>
//                 {products.map((product) =>
//                     <li key={product.id}>
//                         {product.name}/{product.price}円
//                     </li>
//                 )}
//             </ul>
//         </div>
//     );
// }
// export default ProductList;