import React from 'react';

function App() {
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      description: 'This is the description for Product 1.',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      description: 'This is the description for Product 2.',
    },
    // Add more products here
  ];

  return (
    <div className="App">
      <header>
        <h1>Welcome to Our E-commerce Store</h1>
      </header>
      <main>
        <section className="products">
          <h2>Products</h2>
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <button>Add to Cart</button>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; {new Date().getFullYear()} E-commerce Store. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
