// reactsözdizimi ve component yapıp ekleme
/* function MyButton() {
  return(
    <button>This is a Button</button>
  );
}

export default function App() {
  return(
    <div>
      <h1>Hello React</h1>
      <MyButton />
    </div>
  );
} */



// style dosyası ekleme
// obje kullanımı
/* import './App.css';

const user = {
  name: 'Hady Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: '90'
}

export default function App() {
  return(
    <>
      <h1>{user.name}</h1>
      <img className="avatar" src={user.imageUrl} width={user.imageSize} height={user.imageSize} />
    </>
  )
} */



// koşullu render
/* function AdminPanel() {
  return(
    <p>admin panel</p>
  )
}

function LoginPanel() {
  return(
    <p>login panel</p>
  )
}

export function App1() {
  const isLogged = true;
  let content;
  if(isLogged){
    content = <AdminPanel />
  }else{
    content = <loginPanel />
  }
  return(
    <>
      {content}
    </>
  );
}


// koşullu render 2
export function App2() {
  const isLoggedIn = true;
  return (
    <>
      {isLoggedIn ? <AdminPanel /> : <LoginPanel />}
    </>
  )
}

// koşullu render 2
export default function App() {
  const isLoggedIn = false;
  return (
    <>
      {isLoggedIn && <AdminPanel />}
    </>
  )
} */



// listeleri render etme
/* const products = [
  { title: 'Lahana', id: 1 },
  { title: 'Sarımsak', id: 2 },
  { title: 'Elma', id: 3 },
];

export default function App() {
  const listItems = products.map((product, index) => (
    <li key={product.id}>{index}: {product.title}</li>
  ));

  return(
    <ul>
      {listItems}
    </ul>
  )
} */



/* const products = [
  { title: 'Lahana', isFruit: false, id: 1 },
  { title: 'Sarımsak', isFruit: false, id: 2 },
  { title: 'Elma', isFruit: true, id: 3 },
];
export default function App() {
  const listItems = products.map(product => 
    <li key={product.id} style={{color: product.isFruit ? 'magenta': 'darkgreen'}}>{product.title}</li>
  );

  return(
    <ul>
      {listItems}
    </ul>
  )
} */



// olaylara cevap verme
/* function AlertButton() {
  function handleClick() {
    alert('Butona tıklandı');
  }

  return(
    <button onClick={handleClick}>Butona tıkla</button>
  );
}
export default function App() {
  return(
    <AlertButton />
  );
} */



// ekranı güncelleme
/* import { useState } from 'react';
function CountButton() {
  const [count, setCount] = useState(0);

  function addCounter() {
    setCount( count + 1)
  }

  return(
    <button onClick={addCounter}>Sayac: {count}</button>
  )
}

export function App1() {
  return(
    <>
      <CountButton />
    </>
  );
}


// eğer 2 adet eklersek birbirinden bağımsız 2 buton olur çünkü count fonksinun içinde yani o fonksiyona özel
export function App2() {
  return(
    <>
      <CountButton />
      <CountButton />
    </>
  );
} */



import { useState } from 'react';


// const işlemi şimdi fonksiyona özel değil global yerde olduğu için değişken hepsini değiştirir
export default function App2() {
  function CountButton() {
    function addCounter() {
      setCount( count + 1)
    }
    
    return(
      <button onClick={addCounter}>Sayac: {count}</button>
    )
  }
  const [count, setCount] = useState(0);
  return(
    <>
      <CountButton />
      <CountButton />
    </>
  );
}