import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";

const schedules = [
  {
    month: "Januari 2025",
    trainings: [
      {
        title: "Pelatihan K3 Umum",
        date: "6-8 Januari 2025",
        location: "Jakarta",
        seats: "15 Kursi Tersedia",
      },
      {
        title: "Ahli K3 Konstruksi",
        date: "13-25 Januari 2025",
        location: "Jakarta",
        seats: "10 Kursi Tersedia",
      },
      {
        title: "Pelatihan K3 Listrik",
        date: "20-24 Januari 2025",
        location: "Bandung",
        seats: "12 Kursi Tersedia",
      },
    ],
  },
  {
    month: "Februari 2025",
    trainings: [
      {
        title: "Pelatihan Kebakaran",
        date: "3-4 Februari 2025",
        location: "Jakarta",
        seats: "20 Kursi Tersedia",
      },
      {
        title: "Operator Alat Berat",
        date: "10-14 Februari 2025",
        location: "Surabaya",
        seats: "8 Kursi Tersedia",
      },
      {
        title: "Ahli K3 Umum",
        date: "17-28 Februari 2025",
        location: "Jakarta",
        seats: "18 Kursi Tersedia",
      },
    ],
  },
  {
    month: "Maret 2025",
    trainings: [
      {
        title: "Pelatihan Ketinggian",
        date: "3-5 Maret 2025",
        location: "Jakarta",
        seats: "15 Kursi Tersedia",
      },
      {
        title: "First Aid & P3K",
        date: "10-11 Maret 2025",
        location: "Bandung",
        seats: "20 Kursi Tersedia",
      },
      {
        title: "Pelatihan Lingkungan",
        date: "17-19 Maret 2025",
        location: "Jakarta",
        seats: "15 Kursi Tersedia",
      },
    ],
  },
];

const Jadwal = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-br from-primary to-primary/80">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-primary-foreground">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Jadwal Pelatihan</h1>
              <p className="text-lg md:text-xl opacity-90">
                Jadwal lengkap program pelatihan dan sertifikasi K3
              </p>
            </div>
          </div>
        </section>

        {/* Schedule List */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto space-y-12">
              {schedules.map((schedule, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold mb-6 text-foreground">{schedule.month}</h2>
                  <div className="grid gap-4">
                    {schedule.trainings.map((training, idx) => (
                      <Card key={idx} className="hover:shadow-md transition-shadow duration-300 border-border">
                        <CardHeader>
                          <CardTitle className="text-xl">{training.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="grid md:grid-cols-3 gap-4 mb-4">
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4 mr-2 text-primary" />
                              {training.date}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <MapPin className="h-4 w-4 mr-2 text-primary" />
                              {training.location}
                            </div>
                            <div className="flex items-center text-sm text-muted-foreground">
                              <Users className="h-4 w-4 mr-2 text-primary" />
                              {training.seats}
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <Button>Daftar Sekarang</Button>
                            <Button variant="outline">Detail Program</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
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

export default Jadwal;
