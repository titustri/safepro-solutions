const galleryImages = [
  {
    url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600",
    alt: "Pelatihan K3 Umum",
  },
  {
    url: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
    alt: "Workshop Safety",
  },
  {
    url: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600",
    alt: "Training Session",
  },
  {
    url: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600",
    alt: "Sertifikasi Peserta",
  },
  {
    url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600",
    alt: "Pelatihan Lapangan",
  },
  {
    url: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600",
    alt: "Group Training",
  },
];

export const GallerySection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Galeri Kegiatan
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dokumentasi kegiatan pelatihan dan sertifikasi kami
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-video overflow-hidden rounded-lg group cursor-pointer"
            >
              <img
                src={image.url}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-primary-foreground font-medium p-4">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
