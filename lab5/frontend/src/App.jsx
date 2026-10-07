const Hello=()=>{
  return <h2>Welcome to React 19</h2>
}

const Book=()=>{
  return <>
  <h1>Science Fiction</h1>
  <h2>Price: $19.99</h2>
  <h2>Rating: 4.5/5</h2>
  
  </>
}




export default function App() {
  return (
  <>
  <h1 className='text-3xl font-bold bg-blue-500 text-white p-4 text-center'>
    Hello World</h1>
  <Hello/>
  <Book/>
  </>
  );
}


