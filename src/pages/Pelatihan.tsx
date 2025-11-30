import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Users, Award } from "lucide-react";

const trainingPrograms = [
  {
    title: "Pelatihan Keselamatan Kerja",
    description: "Pelatihan dasar keselamatan kerja untuk semua industri",
    duration: "3 Hari",
    participants: "Max 20 orang",
    certificate: "Sertifikat K3",
  },
  {
    title: "Pelatihan K3 Listrik",
    description: "Pelatihan khusus untuk teknisi listrik dan instalasi",
    duration: "5 Hari",
    participants: "Max 15 orang",
    certificate: "Sertifikat Resmi",
  },
  {
    title: "Pelatihan Kebakaran",
    description: "Pelatihan pencegahan dan penanggulangan kebakaran",
    duration: "2 Hari",
    participants: "Max 25 orang",
    certificate: "Sertifikat K3",
  },
  {
    title: "Pelatihan K3 Konstruksi",
    description: "Pelatihan K3 untuk proyek konstruksi dan bangunan",
    duration: "4 Hari",
    participants: "Max 20 orang",
    certificate: "Sertifikat Resmi",
  },
  {
    title: "Pelatihan Operator Alat Berat",
    description: "Pelatihan pengoperasian alat berat dengan aman",
    duration: "5 Hari",
    participants: "Max 12 orang",
    certificate: "SIO Alat Berat",
  },
  {
    title: "Pelatihan First Aid",
    description: "Pelatihan pertolongan pertama pada kecelakaan kerja",
    duration: "2 Hari",
    participants: "Max 20 orang",
    certificate: "Sertifikat P3K",
  },
  {
    title: "Pelatihan Ketinggian",
    description: "Pelatihan bekerja di ketinggian yang aman",
    duration: "3 Hari",
    participants: "Max 15 orang",
    certificate: "Sertifikat K3",
  },
  {
    title: "Pelatihan Lingkungan",
    description: "Pelatihan pengelolaan lingkungan kerja",
    duration: "3 Hari",
    participants: "Max 20 orang",
    certificate: "Sertifikat ISO",
  },
  {
    title: "Pelatihan Ahli K3 Umum",
    description: "Pelatihan untuk menjadi Ahli K3 Umum tersertifikasi",
    duration: "12 Hari",
    participants: "Max 25 orang",
    certificate: "AK3 Umum",
  },
];

const Pelatihan = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Program Pelatihan</h1>
              <p className="text-lg md:text-xl opacity-90">
                Berbagai program pelatihan K3 yang disesuaikan dengan kebutuhan industri Anda
              </p>
            </div>
          </div>
        </section>

        {/* Training Programs */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trainingPrograms.map((program, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-border">
                  <CardHeader>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2 text-primary" />
                        {program.duration}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Users className="h-4 w-4 mr-2 text-primary" />
                        {program.participants}
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Award className="h-4 w-4 mr-2 text-primary" />
                        {program.certificate}
                      </div>
                    </div>
                    <Button className="w-full">Daftar Sekarang</Button>
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

export default Pelatihan;
