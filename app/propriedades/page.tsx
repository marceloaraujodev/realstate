'use client'
import { useSearchParams } from 'next/navigation';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';


interface Property {
  id: number;
  title: string;
  type: string;
  bedrooms: string;
  location: string;
  price: string;
  image: string;
}
const properties: Property[] = [
  {
    id: 1,
    title: 'Apartamento de Luxo',
    type: 'apartment',
    bedrooms: '3',
    location: 'Centro, Balneário Camboriú',
    price: 'R$ 800.000',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Cobertura Duplex',
    type: 'lot',
    bedrooms: '2',
    location: 'Barra Sul, Balneário Camboriú',
    price: 'R$ 1.500.000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Casa com Vista para o Mar',
    type: 'house',
    bedrooms: '4',
    location: 'Pioneiros, Balneário Camboriú',
    price: 'R$ 3.100.000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    title: 'Apartamento Studio',
    type: 'apartment',
    bedrooms: '1',
    location: 'Pioneiros, Balneário Camboriú',
    price: 'R$ 400.000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
];

export default function PropriedadesPage() {
  const searchParams = useSearchParams();

  const filters = {
    type: searchParams.get('type') || '', // e.g., "apartment"
    bedrooms: searchParams.get('bedrooms') || '', // e.g., "2"
    price: searchParams.get('priceRange') || '', // e.g., "0-500000"
  };

  // Handle logic to fetch or filter properties based on these filters
  const isPriceInRange = (price: string, range: string) => {
    const [minPrice, maxPrice] = range.split('-').map(Number);
    const propertyPrice = parseInt(price.replace(/[^\d]/g, ''), 10); // Remove non-numeric characters
    return propertyPrice >= minPrice && propertyPrice <= maxPrice;
  };

  const filteredProperties = properties.filter(property => {
    const isTypeMatch = !filters.type || property.type === filters.type;
    const isBedroomsMatch = !filters.bedrooms || property.bedrooms === filters.bedrooms;
    const isPriceMatch = !filters.price || isPriceInRange(property.price, filters.price);

    return isTypeMatch && isBedroomsMatch && isPriceMatch;
  })


  return (
    <div className="flex flex-col flex-1">
      <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Imóveis em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden">
              <div className="aspect-video relative">
                <img
                  src={property.image}
                  alt={property.title}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-2">{property.location}</p>
                <p className="text-primary font-bold mb-4">{property.price}</p>
                <Link href={`/propriedades/${property.id}`}>
                  <Button className="w-full">Ver Detalhes</Button>
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
    </div>
  );
}