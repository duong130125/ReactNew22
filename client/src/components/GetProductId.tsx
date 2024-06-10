
export default function GetProductId() {
    function getProductById() {
        fetch(`http://localhost:1301/products/${4}`) 
            .then(response => {
                if (response.status === 404) {
                    throw new Error('Không tìm thấy bản ghi');
                }
                return response.json();
            })
            .then(product => {
                console.log('Thông tin sản phẩm:', product);
            })
            .catch(error => {
                if (error.message === 'Không tìm thấy bản ghi') {
                    console.log(error.message);
                } 
            });
    }
    
    getProductById();   
  return (
    <div>GetProductId</div>
  )
}
