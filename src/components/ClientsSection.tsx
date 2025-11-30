const clients = [
  "PT. Pertamina",
  "PT. PLN",
  "PT. Freeport",
  "PT. Telkom",
  "PT. Astra",
  "PT. Unilever",
  "PT. Indofood",
  "PT. Semen Indonesia",
];

export const ClientsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Klien & Partner Kami
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Dipercaya oleh perusahaan-perusahaan terkemuka di Indonesia
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl font-bold text-primary">
                    {client.split(" ")[1].substring(0, 2)}
                  </span>
                </div>
                <p className="font-semibold text-sm text-foreground">{client}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
