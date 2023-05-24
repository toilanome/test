/* 
Tạo 1 mảng products chứa các tên sản phẩm sau: mercedes, audi, ford, lamborghini


viết 1 hàm showProduct thực hiện chức năng hiển thị ra tất cả các sản phẩm trong mảng
kiểm tra xem mảng product có phải là mảng rỗng hay không (2 điểm)
nếu là mảng rỗng log ra "không có sản phẩm để hiển thị"
nếu mảng có dữ liệu thì log ra tất cả tên sản phẩm trong mảng

viết 1 hàm addProduct để thực hiện việc thêm sản phẩm  ( 2 điểm )
tên sản phẩm nhập vào từ bàn phím
kiểm tra nếu tên sản phẩm nhỏ hơn 5 ký tự thì bắt nhập lại 
nếu dữ liệu nhập vào hợp lệ thì cho phép thêm vào mảng products

viết 1 hàm removeProduct để thực hiện việc xóa sản phẩm ( 2 điểm )
nhập tên sản phẩm cần xóa từ bàn phím
nếu tìm thấy tên sản phẩm cần xóa thì thực hiện việc xóa tên sản phẩm đó khỏi mảng
nếu không tìm thấy thì log ra thông báo "không tìm thấy sản phẩm cần xóa"
hiển thị lại dữ liệu trong mảng sau khi đã xóa sản phẩm thành công

viết 1 hàm updateProduct thực hiện cập nhật sản phẩm  ( 2 điểm )
nhập tên sản phẩm cần cập nhật từ bàn phím
nếu không tìm thấy thì log ra thông báo "không tìm thấy sản phẩm cần cập nhật"
nếu tìm thấy thì thực hiện cập nhật giá trị tên sản phẩm đó 
hiển thị lại dữ liệu trong mảng sau khi đã cập nhật thành công

viết 1 hàm removeAllProduct thực hiện việc xóa toàn bộ sản phẩm trong mảng, sau đó bên trong hàm này sẽ gọi lại hàm showProduct để thực hiện ( 2 điểm )

*/ 

const products = ["mercedes","audi","ford","lamborghini"];
console.log(products);
// Bài 1

const showProduct = () => {
    if (products ==""){
        console.log("Không có sản phẩm hiển thị");
    }else if(products != ""){
        for(let i =0;i<products.length ;i++){
            console.log(products[i]);
        }
    }
}
showProduct();

// Bài 2
const addProduct = () =>{
    let newProduct = prompt("Mời nhập sản phẩm mới");
    if(newProduct.length < 5){
       let newProduct =  prompt("Mời nhập lại");
       products.push(newProduct);
       console.log(products);
    }else if(newProduct.length >5 ){
        products.push(newProduct);
        console.log(products);
    }

}

addProduct();

// Bài 3 
const removeProduct = (arr) =>{
    let deleteProduct = prompt("Nhập sản phẩm cần xóa");
    let index = products.indexOf(deleteProduct);
    if(index !== -1){
        arr.splice(index,1)
        console.log("Đã xóa "  + deleteProduct);
        console.log("Mảng mới là : " + products);
    }else{
            console.log("Không tìm thấy sản phẩm cần xóa : " +deleteProduct);
        }
    
    
    
}
removeProduct(products)

// Bài 4
const updateProduct = () =>{

    let nameProduct = prompt("Mời nhập tên sản phẩm")
    let index = products.indexOf(nameProduct);

    if(index !== -1){
    let nameUpdate = prompt("Cập nhật sản phẩm");

        products[index] = nameUpdate;
        console.log(nameProduct +  " Vừa được cập nhật thành :  " + nameUpdate);
        console.log("Mảng mới là "  +products);
    }else{
        console.log("Không tìm thấy sản  phẩm ")
    }
}
updateProduct();

// Bài 5 
const removeAllProduct = () =>{
    products.splice(0,products.length)
    console.log("Đã xóa thành công mảng nên : ")
    showProduct();

    console.log(products);
}
removeAllProduct();


    
