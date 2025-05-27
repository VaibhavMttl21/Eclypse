import { Testimonial } from '@/components/Testimonial';

export function TestimonialSection() {
  return (
    <section className="py-10 md:py-16 border-t border-white/20">
      <div className="max-w-4xl mx-auto px-4">
        <Testimonial 
          testimonials={[
            {
              quote: "Understated, but unforgettable. It feels like it was made for me",
              author: "Random Woman",
              location: "NY, USA"
            },
            {
              quote: "The quality and attention to detail exceeded my expectations",
              author: "Happy Customer",
              location: "London, UK"
            },
            {
              quote: "These pieces have become the foundation of my wardrobe",
              author: "Loyal Client",
              location: "Paris, France"
            }
          ]}
        />
      </div>
    </section>
  );
}
