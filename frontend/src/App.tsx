import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { getProducts, createOrder } from '@/lib/api'
import { Hero } from '@/components/Hero'
import { LookbookShowcase } from '@/components/LookbookShowcase'
import { ProductPage } from '@/components/ProductPage'
import { CartPage } from '@/components/cart/CartPage'
import { CheckoutPage } from '@/components/checkout/CheckoutPage'
import { LoadingSpinner } from '@/components/LoadingSpinner'

interface Product {
  id: number
  name: string
  price: number
  description: string
  images: string[]
  sizes: string[]
  category: string
}

type AppState = 'browsing' | 'cart' | 'checkout'

function App() {
  const [appState, setAppState] = useState<AppState>('browsing')
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    streetAddress: '',
    aptNumber: '',
    state: '',
    zip: '',
  })
  const [orderSuccess, setOrderSuccess] = useState(false)

  useEffect(() => {
    getProducts()
      .then(data => {
    
        setSelectedProduct(data[0])
        setLoading(false)
      })
      .catch(error => {
        console.error('Failed to fetch products:', error)
        setLoading(false)
      })
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handlePlaceOrder = async () => {
    if (!selectedProduct) return

    try {
      const orderData = {
        product: selectedProduct,
        size: selectedSize,
        shippingAddress: formData,
        total: selectedProduct.price + 200 + 1400, // Price + shipping + tax
      }
      const order = await createOrder(orderData)
      console.log('Order placed:', order)
      setOrderSuccess(true)
      
      // Reset form data and app state after successful order
      setTimeout(() => {
        setFormData({
          firstName: '',
          lastName: '',
          streetAddress: '',
          aptNumber: '',
          state: '',
          zip: '',
        })
        setAppState('browsing')
        setOrderSuccess(false)
      }, 3000)
    } catch (error) {
      console.error('Failed to place order:', error)
    }
  }

  if (loading) {
    return <LoadingSpinner />
  }
  
  if (orderSuccess) {
    return (
      <div className="fixed inset-0 bg-white flex flex-col items-center justify-center p-4 z-50">
        <div className="text-center space-y-4 max-w-md">
          <div className="w-16 h-16 bg-green-100 rounded-full mx-auto flex items-center justify-center">
            <svg className="w-8 h-8 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-medium">Order Confirmed!</h2>
          <p className="text-gray-600">
            Thank you for your purchase. Your order has been confirmed and will be shipped soon.
          </p>
          <button 
            onClick={() => {
              setAppState('browsing');
              setOrderSuccess(false);
            }}
            className="mt-4 px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition"
          >
            Return to Shopping
          </button>
        </div>
      </div>
    )
  }
  
  const renderContent = () => {
    // Only show Hero and LookbookShowcase in browsing state
    if (appState === 'browsing') {
      return (
        <>
          <Hero />
          <div className="bg-black text-white">
            <LookbookShowcase />
          </div>
          <ProductPage 
            product={selectedProduct!}
            selectedSize={selectedSize}
            onSizeSelect={setSelectedSize}
            onCheckout={() => setAppState('cart')}
          />
        </>
      )
    } else if (appState === 'cart') {
      return (
        <CartPage 
          product={selectedProduct!}
          selectedSize={selectedSize}
          onCheckout={() => setAppState('checkout')}
          onContinueShopping={() => setAppState('browsing')}
        />
      )
    } else if (appState === 'checkout') {
      return (
        <CheckoutPage 
          product={selectedProduct!}
          formData={formData}
          onInputChange={handleInputChange}
          onBack={() => setAppState('cart')}
          onPlaceOrder={handlePlaceOrder}
        />
      )
    }
  }
  
  return (
    <div className="bg-black">
      <AnimatePresence mode="wait">
        {renderContent()}
      </AnimatePresence>
    </div>
  )
}

export default App