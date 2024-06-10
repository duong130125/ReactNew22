import React, { useState } from 'react';

const AddProductForm = ({ onCancel, onSave, products}) => {
  const [product_name, setProduct_name] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [created_at, setCreated_at] = useState('');

  const handleSave = () => {
    if (!product_name || !image || !price || !quantity || !created_at) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    if (products.some(product => product.name === name)) {
      alert('Tên sản phẩm đã tồn tại!');
      return;
    }

    const newProduct = {
      id: Date.now(), 
      product_name,
      image,
      price,
      quantity,
      created_at,
    };

    onSave(newProduct);
    onCancel();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Thêm mới sản phẩm</h2>
        <label>
          Tên sản phẩm:
          <input type="text" value={product_name} onChange={e => setProduct_name(e.target.value)} />
        </label>
        <label>
          Hình ảnh:
          <input type="text" value={image} onChange={e => setImage(e.target.value)} />
        </label>
        <label>
          Giá:
          <input type="number" value={price} onChange={e => setPrice(e.target.value)} />
        </label>
        <label>
          Số lượng (kg):
          <input type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
        </label>
        <label>
          Ngày thêm:
          <input type="date" value={created_at} onChange={e => setCreated_at(e.target.value)} />
        </label>
        <button onClick={handleSave}>Lưu</button>
        <button onClick={onCancel}>Hủy</button>
      </div>
    </div>
  );
};

export default AddProductForm;
