'use client';

import { Card } from './ui/card';
import { Button } from './ui/button';
import Link from 'next/link';

const properties = [
  {
    id: 1,
    title: 'Apartamento de Luxo',
    location: 'Centro, Balneário Camboriú',
    price: 'R$ 1.200.000',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Cobertura Duplex',
    location: 'Barra Sul, Balneário Camboriú',
    price: 'R$ 2.500.000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Casa com Vista para o Mar',
    location: 'Pioneiros, Balneário Camboriú',
    price: 'R$ 3.100.000',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80',
  },
];

export default function PropertyGrid() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Imóveis em Destaque</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {properties.map((property) => (
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
  );
}