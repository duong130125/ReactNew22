import { useEffect, useState } from "react";
import './ProductList.css'
import AddProduct from "./AddProduct";

interface Products {
    id: number
    product_name: number,
    image: string,
    price: number,
    quantity: number,
    created_at: string
}

export default function ProductList() {
    const [products, setProducts] = useState<Products[]>([]);
    const [isAdding, setIsAdding] = useState<boolean>(false); 

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
        const response = await fetch('http://localhost:1301/products'); 
        const data = await response.json();
        setProducts(data);
        } catch (error) {
        console.error('Có lỗi xảy ra:', error);
        }
    };
    
    const handleDelete = (id: number) => {
    
        fetch(`http://localhost:1301/products/${id}`, {
        method: "DELETE",
        })
        .then((response: Response) => {
            if (response.ok) {
            confirm("Bạn có chắc muốn xóa sản phẩm ?")
            fetchProducts();
            }
        })
        .catch((error) => console.log(error));
    };

    const addProduct = async (product: Products) => {
      try {
        await fetch('http://localhost:1301/products', { 
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product)
        });
        fetchProducts(); 
      } catch (error) {
        console.error('Error adding product:', error);
      }
    };

  return (
    <>
     <div className="container">
     <button id="addProductBtn" onClick={() => setIsAdding(true)}>Thêm mới sản phẩm</button>
      {isAdding && <AddProduct onCancel={() => setIsAdding(false)} onSave={addProduct} products={products} />}
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Ngày thêm</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product: Products, index: number) => (
            <tr>
                <td>{index + 1}</td>
                <td>{product.product_name}</td>
                <td><img src={product.image} alt={product.product_name}/></td>
                <td>{product.price} đ</td>
                <td>{product.quantity}</td>
                <td>{product.created_at}</td>
                <td>
                <button className="edit-btn">Sửa</button>
                <button onClick={() => handleDelete(product.id)} className="delete-btn">Xóa</button>
                </td>
          </tr>
          ))}
        </tbody>
      </table>

    </div>
    </>
  )
}
