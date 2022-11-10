let nama,harga,stock,image;
let counter = 4;

//fungsi edit

function useEdit() {
    let getImage = document.querySelector("input#exampleInputEmail1"); //input image
    let getNama = document.querySelector("input#exampleInputEmail"); //input nama
    let getStock = document.querySelector("input#exampleInputPassword"); // input stock
    let getHarga = document.querySelector("input#exampleInputPassword2"); // input harga
}

function getId(id) {
    image = document.querySelector(`img.card-img-top-${id}`);
    nama = document.querySelector(`h5.card-title-${id}`);
    harga = document.querySelector(`p.card-text-${id}`);
    stock = document.querySelector(`p.harga-${id}`);
}

//fungsi delete
function useDelete(id) {

}

//fungsi create
function useCreate() {
    let setImage = document.querySelector("input#setImageD"); //input image
    let setNama = document.querySelector("input#setNamaD"); // input nama
    let setHarga = document.querySelector("input#setHargaD"); //input harga
    let setStock = document.querySelector("input#setStockD"); // input stock
}