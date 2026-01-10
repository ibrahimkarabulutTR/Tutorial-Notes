// CLOSURE

function disFonksiyon() {
  let sayac = 0; // This variable will be "put in the backpack"

  function icFonksiyon() {
    sayac++; // Accesses the 'sayac' variable from the outer scope
    console.log(sayac);
  }

  return icFonksiyon; // We return the inner function to the outside
}

const benimSayacim = disFonksiyon(); // disFonksiyon ran, finished, and returned icFonksiyon.

benimSayacim(); // Çıktı: 1
benimSayacim(); // Çıktı: 2
benimSayacim(); // Çıktı: 3




function alisverisSepeti() {
  let urunler = []; // This is our "private" data. It cannot be accessed from outside.

  // These functions have a closure that remembers the "urunler" array.
  function sepeteEkle(urun) {
    urunler.push(urun);
    console.log(`${urun.ad} sepete eklendi.`);
  }

  function sepetiGoster() {
    console.log("Sepetinizdeki ürünler:", urunler);
  }

  // We only provide controlled access to the functions to the outside world.
  return {
    ekle: sepeteEkle,
    goster: sepetiGoster
  };
}

const sepetim = alisverisSepeti();

sepetim.ekle({ ad: 'Laptop', fiyat: 30000 });
sepetim.ekle({ ad: 'Mouse', fiyat: 500 });
sepetim.goster(); // Çıktı: Sepetinizdeki ürünler: [ { ad: 'Laptop', ... }, { ad: 'Mouse', ... } ]

// CAUTION: We cannot directly access the private data!
console.log(sepetim.urunler); // Çıktı: undefined
// sepetim.urunler = []; // This way we cannot accidentally delete the cart.




// Assume there is a <div id="buton-kutusu"> in HTML.
const kutu = document.getElementById('buton-kutusu');

for (let i = 1; i <= 5; i++) {
  const buton = document.createElement('button');
  buton.innerText = `Buton ${i}`;

  // THE MOST COMMON USE OF CLOSURE IS HERE!
  buton.addEventListener('click', function() {
    // This function remembers the value of "i" from when it was created,
    // even if clicked years later.
    console.log(`Buton ${i} tıklandı!`);
  });

  kutu.appendChild(buton);
}




function apiIstekOlusturucu(temelURL) {

  // This inner function remembers the "temelURL" variable.
  return function(endpoint) {
    return `${temelURL}/${endpoint}`;
  }
}

const googleApi = apiIstekOlusturucu('https://maps.googleapis.com');
const bizimApi = apiIstekOlusturucu('https://api.bizimsite.com');

console.log(googleApi('place/v1/search'));
// Çıktı: https://maps.googleapis.com/place/v1/search

console.log(bizimApi('users/123'));
// Çıktı: https://api.bizimsite.com/users/123