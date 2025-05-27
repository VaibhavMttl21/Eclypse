import { Accordion } from '@/components/Accordion';

export function ProductInfo() {
  return (
    <section className="py-8 md:py-12 border-t border-white/20">
      <div className="max-w-3xl mx-auto">
        <Accordion title="Size & Fit">
          <p>Our garments are designed with a relaxed, comfortable fit. Please refer to the size guide for specific measurements. If you're between sizes, we recommend sizing up for a more relaxed look, or sizing down for a more fitted appearance.</p>
        </Accordion>
        
        <Accordion title="Delivery & Returns">
          <p>Free standard shipping on all orders over ₹5,000. Delivery typically takes 3-5 business days. We offer hassle-free returns within 30 days of delivery. Items must be unworn, unwashed, and with original tags attached.</p>
        </Accordion>
        
        <Accordion title="How This Was Made">
          <p>Each garment is crafted with meticulous attention to detail using sustainable materials and ethical production methods. Our pieces are produced in limited quantities to minimize waste and ensure the highest quality standards.</p>
        </Accordion>
      </div>
    </section>
  );
}
