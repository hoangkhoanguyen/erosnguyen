"use client";

import { Star } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Alex transformed our buggy MVP into a scalable product that handled our Series A launch without a hitch. A true professional.",
    author: "John Doe",
    role: "CTO @ TechStart",
    avatar: "JD",
    rating: 5,
  },
  {
    id: "2",
    quote:
      "Rare to find a developer who cares as much about the design details as the backend logic. The result was Pixel Perfect.",
    author: "Sarah Miller",
    role: "Product Manager",
    avatar: "SM",
    rating: 5,
  },
  {
    id: "3",
    quote:
      "Communication was excellent throughout the project. Alex explained technical constraints clearly and offered smart alternatives.",
    author: "Mike Lee",
    role: "Founder @ Agency",
    avatar: "ML",
    rating: 5,
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="flex flex-col gap-4 p-6 bg-surface rounded-xl border border-stroke hover:border-accent/30 transition-all">
      <div className="flex gap-1 text-primary">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-primary" />
        ))}
      </div>
      <p className="text-muted-foreground italic text-sm leading-relaxed">
        &quot;{testimonial.quote}&quot;
      </p>
      <div className="mt-auto flex items-center gap-3">
        <div className="size-10 rounded-full bg-accent flex items-center justify-center font-bold text-accent text-sm">
          {testimonial.avatar}
        </div>
        <div>
          <p className="text-foreground font-bold text-sm">
            {testimonial.author}
          </p>
          <p className="text-muted-foreground text-xs">{testimonial.role}</p>
        </div>
      </div>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-background border-t border-stroke">
      <div className="container">
        <h2 className="text-foreground text-3xl font-bold text-center mb-12">
          What People Say
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
