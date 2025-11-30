import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const newsArticles = [
  {
    title: "Pelaksanaan Pelatihan AK3 Umum Batch 25",
    date: "15 Desember 2024",
    excerpt: "Sukses menyelenggarakan pelatihan Ahli K3 Umum dengan 25 peserta dari berbagai perusahaan industri.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
  },
  {
    title: "Kerjasama dengan PT. Industri Nusantara",
    date: "10 Desember 2024",
    excerpt: "Menandatangani MOU dengan PT. Industri Nusantara untuk program in-house training K3.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
  },
  {
    title: "Workshop Safety Management System",
    date: "5 Desember 2024",
    excerpt: "Mengadakan workshop tentang implementasi Sistem Manajemen K3 yang efektif di tempat kerja.",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600",
  },
  {
    title: "Sertifikasi 100 Tenaga Kerja Konstruksi",
    date: "1 Desember 2024",
    excerpt: "Berhasil mensertifikasi 100 pekerja konstruksi dalam program K3 Konstruksi.",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600",
  },
  {
    title: "Pelatihan K3 Listrik untuk PLN",
    date: "25 November 2024",
    excerpt: "Menyelenggarakan pelatihan khusus K3 Listrik untuk teknisi PT. PLN (Persero).",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600",
  },
  {
    title: "Seminar Nasional K3 2024",
    date: "20 November 2024",
    excerpt: "Menjadi narasumber dalam Seminar Nasional tentang tren dan regulasi K3 terbaru.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600",
  },
];

const Berita = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Berita & Kegiatan</h1>
              <p className="text-lg md:text-xl opacity-90">
                Update terbaru tentang kegiatan dan program pelatihan kami
              </p>
            </div>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsArticles.map((article, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300 border-border">
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center text-sm text-muted-foreground mb-2">
                      <Calendar className="h-4 w-4 mr-2" />
                      {article.date}
                    </div>
                    <CardTitle className="text-xl hover:text-primary transition-colors cursor-pointer">
                      {article.title}
                    </CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <button className="text-primary font-medium text-sm hover:underline">
                      Baca Selengkapnya →
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Berita;
