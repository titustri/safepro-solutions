import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">K3</span>
              </div>
              <span className="font-bold text-lg">Training Center</span>
            </div>
            <p className="text-sm text-background/80 mb-4">
              Lembaga pelatihan K3 profesional dan tersertifikasi untuk meningkatkan keselamatan kerja di Indonesia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-background/80 hover:text-primary transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link to="/tentang" className="text-sm text-background/80 hover:text-primary transition-colors">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link to="/pelatihan" className="text-sm text-background/80 hover:text-primary transition-colors">
                  Pelatihan
                </Link>
              </li>
              <li>
                <Link to="/jadwal" className="text-sm text-background/80 hover:text-primary transition-colors">
                  Jadwal
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Layanan</h3>
            <ul className="space-y-2">
              <li className="text-sm text-background/80">Sertifikasi K3</li>
              <li className="text-sm text-background/80">Pelatihan Non-Sertifikasi</li>
              <li className="text-sm text-background/80">Konsultasi K3</li>
              <li className="text-sm text-background/80">In-House Training</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontak Kami</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-sm text-background/80">
                <MapPin className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Jl. Sudirman No. 123, Jakarta Selatan 12190</span>
              </li>
              <li className="flex items-center text-sm text-background/80">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-center text-sm text-background/80">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>info@k3training.co.id</span>
              </li>
              <li className="flex items-start text-sm text-background/80">
                <Clock className="h-4 w-4 mr-2 mt-0.5 flex-shrink-0" />
                <span>Senin - Jumat: 08:00 - 17:00<br />Sabtu: 08:00 - 13:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-6">
          <p className="text-center text-sm text-background/60">
            © 2024 K3 Training Center. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
