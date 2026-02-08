const clients = [
  { name: 'Racing Force Group', logo: '/images/racing-force-group-logo.png' },
  { name: 'Bell Helmets', logo: '/logos/bell-helmets.png' },
  { name: 'OMP Racing', logo: '/logos/omp.png' },
  { name: 'SeedTrust Escrow', logo: '/logos/seedtrust.png' }
]

export default function TrustedBy() {
  return (
    <section className="py-12 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-8">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
          {clients.map((client) => (
            <img
              key={client.name}
              src={client.logo}
              alt={client.name}
              className="h-8 object-contain grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
