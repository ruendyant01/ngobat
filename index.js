let nama,harga,stock,image;
let counter = 4;

//fungsi edit

function useEdit() {
    let getImage = document.querySelector("input#exampleInputEmail1"); //input image
    let getNama = document.querySelector("input#exampleInputEmail"); //input nama
    let getStock = document.querySelector("input#exampleInputPassword"); // input stock
    let getHarga = document.querySelector("input#exampleInputPassword2"); // input harga
    if(!(getImage.value || getNama.value || getStock.value || getHarga.value)) {
        alert("data tidak boleh ada yang kosong.Coba lagi");
        return 0;
    }

    image.src = getImage.value;
    nama.innerHTML = getNama.value;
    stock.innerHTML = "Stock : "+getStock.value;
    getHarga.innerHTML = "Harga : "+getHarga.value;

    getImage.value = "";
    getNama.value = "";
    getStock.value = "";
    getHarga.value = "";
}

function getId(id) {
    image = document.querySelector(`img.card-img-top-${id}`);
    nama = document.querySelector(`h5.card-title-${id}`);
    harga = document.querySelector(`p.card-text-${id}`);
    stock = document.querySelector(`p.harga-${id}`);
}

//fungsi delete
function useDelete(id) {
    let data= document.getElementById(id);
    data.remove();
}

//fungsi create
function useCreate() {
    let setImage = document.querySelector("input#setImageD").value; //input image
    let setNama = document.querySelector("input#setNamaD").value; // input nama
    let setHarga = document.querySelector("input#setHargaD").value; //input harga
    let setStock = document.querySelector("input#setStockD").value; // input stock
    document.querySelector("input#setStockD").value = "";
    document.querySelector("input#setHargaD").value = "";
    document.querySelector("input#setNamaD").value = "";
    document.querySelector("input#setImageD").value = "";

    if(!setImage || !setNama || !setHarga || !setStock) {
        alert("data tidak boleh ada yang kosong.Coba lagi");
        return 0;
    }

    let cards = document.querySelector("div.cards");
    let temp = `
    <div class="card" style="width: 18rem;" id="${counter}">
        <img src="${setImage}" class="card-img-top-${counter}" alt="${setNama}">
        <div class="card-body">
          <h5 class="card-title-${counter}">${setNama}</h5>
          <p class="card-text-${counter}">Stock : ${setStock}</p>
          <p class="card-text harga-${counter}">Harga : ${setHarga}</p>
          <button id="${counter}" onclick="getId(this.id)" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
            Edit
          </button>
          <button type="button" class="btn delete btn-danger" id="${counter}" onclick="useDelete(this.id)">Delete</button>
        </div>
      </div>
    `;
    cards.innerHTML += temp;
    counter++;
}