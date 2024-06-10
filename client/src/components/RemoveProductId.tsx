
export default function RemoveProductId() {
    function removeProductById() {
        fetch(`http://localhost:1301/products/${5}`, { 
            method: 'DELETE',
        })
        .then(response => response.json())
        .then(result => {
            console.log('Kết quả từ server:', result);
        })
        .catch(error => {
            console.error('Có lỗi xảy ra:', error);
        });
    }
    
    removeProductById(); 
  return (
    <div>removeProductId</div>
  )
}
