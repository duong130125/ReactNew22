
export default function UpdateProductId() {
function updateProductById() {
    const product = {
        "product_name": "tàu",
        "image": "https://go2joy.s3.ap-southeast-1.amazonaws.com/blog/wp-content/uploads/2022/04/15095153/du-thuyen-ha-long-scarlet-pearl.jpg",
        "price": 300000,
        "quantity": 100,
        "created_at": "12/08/2222"
    };

    fetch(`http://localhost:1301/products/${12}`, { 
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(product) 
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Kiểm tra điều kiện' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        console.log('Sản phẩm được Update:', data);
    })
    .catch(error => {
        console.error('Có lỗi xảy ra: ', error);
    });
}

updateProductById(); 

  return (
    <div>UpdateProductId</div>
  )
}
