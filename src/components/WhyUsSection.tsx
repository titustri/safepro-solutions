import { CheckCircle2, Users, Award, Clock, BookOpen, Shield } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Tersertifikasi & Terakreditasi",
    description: "Lembaga pelatihan resmi dengan akreditasi nasional",
  },
  {
    icon: Users,
    title: "Instruktur Berpengalaman",
    description: "Tim pengajar profesional dengan pengalaman industri",
  },
  {
    icon: Clock,
    title: "Jadwal Fleksibel",
    description: "Jadwal pelatihan yang dapat disesuaikan dengan kebutuhan",
  },
  {
    icon: BookOpen,
    title: "Materi Komprehensif",
    description: "Kurikulum lengkap sesuai standar industri terkini",
  },
  {
    icon: Shield,
    title: "Standar Keamanan Tinggi",
    description: "Prosedur pelatihan yang aman dan terkontrol",
  },
  {
    icon: CheckCircle2,
    title: "Sertifikat Resmi",
    description: "Sertifikat diakui Kementerian Ketenagakerjaan",
  },
];

export const WhyUsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Mengapa Memilih Kami?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kami berkomitmen memberikan pelatihan K3 berkualitas tinggi untuk meningkatkan keselamatan kerja
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 p-6 rounded-lg hover:bg-muted/50 transition-colors duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
