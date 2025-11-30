import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const trainingCategories = [
  "Pelatihan Keselamatan Kerja",
  "Pelatihan K3 Listrik",
  "Pelatihan Kebakaran",
  "Pelatihan K3 Konstruksi",
  "Pelatihan Operator Alat Berat",
  "Pelatihan First Aid",
  "Pelatihan Ketinggian",
  "Pelatihan Lingkungan",
  "Pelatihan Ahli K3 Umum",
  "Pelatihan ISO & SMK3",
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTrainingOpen, setIsTrainingOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K3</span>
            </div>
            <span className="font-bold text-xl text-foreground hidden sm:inline">
              Training Center
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Beranda
              </Button>
            </Link>
            <Link to="/tentang">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Tentang Kami
              </Button>
            </Link>

            {/* Training Dropdown */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-foreground hover:text-primary">
                    Pelatihan
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-1 p-4 md:w-[500px] md:grid-cols-2 bg-popover">
                      {trainingCategories.map((category) => (
                        <NavigationMenuLink key={category} asChild>
                          <Link
                            to="/pelatihan"
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                          >
                            <div className="text-sm font-medium leading-none">
                              {category}
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/berita">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Berita
              </Button>
            </Link>
            <Link to="/jadwal">
              <Button variant="ghost" className="text-foreground hover:text-primary">
                Jadwal
              </Button>
            </Link>
            <Link to="/kontak">
              <Button className="ml-4">
                Hubungi Kami
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Beranda
              </Button>
            </Link>
            <Link to="/tentang" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Tentang Kami
              </Button>
            </Link>

            {/* Mobile Training Dropdown */}
            <div>
              <Button
                variant="ghost"
                className="w-full justify-between"
                onClick={() => setIsTrainingOpen(!isTrainingOpen)}
              >
                Pelatihan
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isTrainingOpen ? "rotate-180" : ""
                  }`}
                />
              </Button>
              {isTrainingOpen && (
                <div className="pl-4 space-y-1 mt-2">
                  {trainingCategories.map((category) => (
                    <Link
                      key={category}
                      to="/pelatihan"
                      onClick={() => setIsOpen(false)}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full justify-start text-sm"
                      >
                        {category}
                      </Button>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/berita" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Berita
              </Button>
            </Link>
            <Link to="/jadwal" onClick={() => setIsOpen(false)}>
              <Button variant="ghost" className="w-full justify-start">
                Jadwal
              </Button>
            </Link>
            <Link to="/kontak" onClick={() => setIsOpen(false)}>
              <Button className="w-full mt-2">
                Hubungi Kami
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};
