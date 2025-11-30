import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Budi Santoso",
    position: "HSE Manager",
    company: "PT. Industrial Safety",
    rating: 5,
    comment:
      "Pelatihan sangat profesional dan materi yang diberikan sangat aplikatif. Instruktur berpengalaman dan sabar dalam menjelaskan.",
  },
  {
    name: "Siti Nurhaliza",
    position: "HR Director",
    company: "PT. Manufacturing Prima",
    rating: 5,
    comment:
      "Pelayanan memuaskan, jadwal fleksibel, dan sertifikat diproses dengan cepat. Sangat membantu untuk pengembangan SDM perusahaan.",
  },
  {
    name: "Ahmad Wijaya",
    position: "Safety Officer",
    company: "PT. Konstruksi Nusantara",
    rating: 5,
    comment:
      "Fasilitas lengkap dan metode pembelajaran yang interaktif membuat pelatihan menjadi sangat menarik dan mudah dipahami.",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Testimoni Peserta
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Apa kata mereka yang telah mengikuti pelatihan bersama kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border">
              <CardContent className="pt-6">
                <div className="flex items-center mb-4">
                  <Avatar className="h-12 w-12 mr-4">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground italic">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
