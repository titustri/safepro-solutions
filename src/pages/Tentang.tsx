import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Award, Target, Eye, Users } from "lucide-react";

const Tentang = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Kami</h1>
              <p className="text-lg md:text-xl opacity-90">
                Mitra terpercaya untuk solusi pelatihan dan sertifikasi K3 di Indonesia
              </p>
            </div>
          </div>
        </section>

        {/* Company Profile */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 text-foreground">Profil Perusahaan</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-4">
                  K3 Training Center adalah lembaga pelatihan keselamatan dan kesehatan kerja yang telah berpengalaman lebih dari 10 tahun dalam memberikan pelatihan dan sertifikasi K3. Kami berkomitmen untuk meningkatkan budaya keselamatan kerja di Indonesia melalui program pelatihan yang berkualitas dan profesional.
                </p>
                <p className="mb-4">
                  Dengan tim instruktur yang berpengalaman dan bersertifikasi, kami telah melatih ribuan peserta dari berbagai industri termasuk oil & gas, konstruksi, manufaktur, pertambangan, dan sektor lainnya.
                </p>
                <p>
                  Fasilitas pelatihan kami dilengkapi dengan peralatan modern dan standar keamanan yang tinggi untuk memastikan proses pembelajaran yang efektif dan aman.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-16 md:py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Eye className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Visi</h3>
                <p className="text-muted-foreground">
                  Menjadi lembaga pelatihan K3 terdepan di Indonesia yang menghasilkan tenaga kerja profesional dan kompeten dalam bidang keselamatan dan kesehatan kerja.
                </p>
              </div>
              <div className="bg-card p-8 rounded-lg border border-border">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                  <Target className="h-7 w-7 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground">Misi</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Memberikan pelatihan K3 berkualitas tinggi</li>
                  <li>• Meningkatkan kompetensi SDM di bidang K3</li>
                  <li>• Mendukung program zero accident di tempat kerja</li>
                  <li>• Menjadi partner terpercaya industri</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center text-foreground">
                Keunggulan Kami
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Terakreditasi</h3>
                    <p className="text-muted-foreground text-sm">
                      Memiliki akreditasi resmi dari Kementerian Ketenagakerjaan
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2 text-foreground">Instruktur Ahli</h3>
                    <p className="text-muted-foreground text-sm">
                      Tim pengajar berpengalaman dengan sertifikasi internasional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Tentang;
