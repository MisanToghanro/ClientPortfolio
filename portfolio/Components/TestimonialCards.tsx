interface Testimonial {
  quote: string;
  author: string;
}

const testimonials: Testimonial[] = [
  {
    quote: "Wizzy’s Graphics took my vision for a luxury perfume ad and turned it into a masterpiece. The attention to detail and the premium feel of the design perfectly matched my brand's identity.",
    author: "Ebi, CEO of Ebi’s Fragrance"
  },
  {
    quote: "I needed a flyer that explained my product clearly while still looking professional. Wizzy delivered exactly what I needed with a clean, vibrant design that our customers love.",
    author: "Manager, Chrysolite Home Care"
  },
  {
    quote: "Wizzy’s Graphics provided us with a clean, powerful visual identity that perfectly represents our mission in renewable energy. The professional layout and modern typography have significantly improved how corporate clients perceive our brand. If you want a designer who understands corporate branding, Wizzy is the one.",
    author: "CEO, Light House Renewable Energy"
  },
  {
    quote: "Wizzy designs are top notch graphics design. His work is modern, his animations are smooth, and he actually understands what a brand needs to grow. 10/10 service!",
    author: "Churchill, CR Software Engineering (FUPRE)"
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="w-full bg-[#07153B] py-12  px-6 md:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-8">
          What Clients Say
        </h2>
        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <p className="text-[#07153B] text-sm mb-4">{testimonial.quote}</p>
              <p className="text-[#657A97] text-xs font-medium">{testimonial.author}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
