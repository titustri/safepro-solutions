import { Award, BookOpen, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Award,
    title: "Sertifikasi K3",
    description:
      "Program sertifikasi resmi yang diakui oleh Kementerian Ketenagakerjaan untuk berbagai bidang keahlian K3.",
    features: ["Sertifikat Resmi", "Instruktur Berpengalaman", "Standar Nasional"],
  },
  {
    icon: BookOpen,
    title: "Pelatihan Non-Sertifikasi",
    description:
      "Pelatihan praktis dan aplikatif untuk meningkatkan pengetahuan dan keterampilan K3 di lingkungan kerja.",
    features: ["Materi Terkini", "Metode Interaktif", "Studi Kasus"],
  },
  {
    icon: Users,
    title: "Konsultasi K3",
    description:
      "Layanan konsultasi profesional untuk membantu perusahaan memenuhi standar dan regulasi K3.",
    features: ["Audit K3", "Implementasi SMK3", "Dokumentasi Lengkap"],
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Layanan Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Solusi lengkap untuk kebutuhan pelatihan, sertifikasi, dan konsultasi K3 perusahaan Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-shadow duration-300 border-border"
            >
              <CardHeader>
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <service.icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full">
                  Selengkapnya
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
