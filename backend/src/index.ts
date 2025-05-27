import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// Dummy data
const products = [
  {
    id: 1,
    name: 'Silhouette No. 1 - Vermilion',
    price: 7999,
    description: 'Product is a philosophy of craft. Every garment is designed to come softly in out, in movement, in timeless.',
    images: [
      'https://images.pexels.com/photos/2766334/pexels-photo-2766334.jpeg',
      'https://images.pexels.com/photos/2766345/pexels-photo-2766345.jpeg',
      'https://images.pexels.com/photos/2766339/pexels-photo-2766339.jpeg',
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    category: 'Outerwear',
  },
  {
    id: 2,
    name: 'Urban Edge Jacket - Noir',
    price: 6499,
    description: 'Sleek urban design meets functionality in this contemporary piece.',
    images: [
      'https://images.pexels.com/photos/2887766/pexels-photo-2887766.jpeg',
      'https://images.pexels.com/photos/2887767/pexels-photo-2887767.jpeg',
    ],
    sizes: ['S', 'M', 'L', 'XL'],
    category: 'Jackets',
  },
];

const orders: any[] = [];

app.get('/api/products', (_, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

app.post('/api/orders', (req, res) => {
  const order = {
    id: orders.length + 1,
    ...req.body,
    status: 'pending',
    createdAt: new Date(),
  };
  orders.push(order);
  res.status(201).json(order);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});