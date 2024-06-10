
export default function CreateProduct() {

function createProduct() {
    const product = {
        "product_name": "thuyền",
        "image": "https://go2joy.s3.ap-southeast-1.amazonaws.com/blog/wp-content/uploads/2022/04/15095153/du-thuyen-ha-long-scarlet-pearl.jpg",
        "price": 300,
        "quantity": 100,
        "created_at": "12/07/2055"
    };

    fetch('http://localhost:1301/products', { 
        method: 'POST',
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
        console.log('Đã thêm mới sản phẩm: ', data);
    })
    .catch(error => {
        console.error('Có lỗi xảy ra', error);
    });
}

createProduct();
  return (
    <div>CreateProduct</div>
  )
}
