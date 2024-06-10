
export default function GetProducts() {
    function getAllProduct() {
        fetch('http://localhost:1301/products')
            .then(response =>response.json())
            .then(products => {
                console.log('Danh sách sản phẩm:', products);
            })
            .catch(error => {
                console.error('Có lỗi xảy ra:', error);
            });
    }
    
    getAllProduct();    
  return (
    <div>GetProduct</div>
  )
}
