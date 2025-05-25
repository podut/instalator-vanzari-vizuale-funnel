import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const TermsAndConditions: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <React.Fragment>
        <title>Termeni și Condiții - Instalator Pro</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Termeni și condiții pentru serviciile Instalator Pro - Instalații sanitare în Baia Mare și Maramureș" />
      </React.Fragment>

      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button
            onClick={() => navigate('/')}
            variant="ghost"
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Înapoi la pagina principală
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Termeni și Condiții</h1>
          <p className="text-gray-600 mt-2">Ultima actualizare: 25 Mai 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptarea Termenilor</h2>
            <p className="text-gray-700 leading-relaxed">
              Prin utilizarea serviciilor Instalator Pro, acceptați în totalitate termenii și condițiile prezentate mai jos. 
              Dacă nu sunteți de acord cu acești termeni, vă rugăm să nu utilizați serviciile noastre.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Descrierea Serviciilor</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Instalator Pro oferă următoarele servicii:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Instalații sanitare și termice</li>
              <li>Montaj și reparații centrale termice</li>
              <li>Desfundare canalizare</li>
              <li>Detectare și reparare scurgeri</li>
              <li>Servicii de urgență 24/7</li>
              <li>Mentenanță instalații existente</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Zonele de Acoperire</h2>
            <p className="text-gray-700 leading-relaxed">
              Serviciile noastre sunt disponibile în următoarele zone:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mt-4">
              <li>Baia Sprie și împrejurimi</li>
              <li>Județul Maramureș</li>
              <li>Zone limitrofe (la cerere)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Prețuri și Plăți</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>4.1 Oferte de preț:</strong> Toate prețurile sunt comunicate înainte de începerea lucrărilor și sunt valabile pentru perioada specificată în ofertă.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>4.2 Modalități de plată:</strong> Acceptăm plata în numerar sau transfer bancar. Pentru lucrări de valoare mare, se poate solicita un avans.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>4.3 Tarife urgență:</strong> Pentru intervenții în afara programului normal de lucru se aplică tarife speciale.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Garanții</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>5.1 Garanția lucrărilor:</strong> Oferim garanție de 12 luni pentru toate lucrările executate, cu excepția uzurii normale.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>5.2 Garanția pieselor:</strong> Piesele instalate beneficiază de garanția producătorului.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>5.3 Excluderi:</strong> Garanția nu acoperă deteriorările cauzate de utilizare necorespunzătoare, forță majoră sau intervenții neautorizate.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Responsabilități</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>6.1 Responsabilitatea noastră:</strong> Garantăm executarea lucrărilor conform standardelor în vigoare și utilizarea materialelor de calitate.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>6.2 Responsabilitatea clientului:</strong> Clientul trebuie să asigure accesul la locul de muncă și să furnizeze informații corecte despre instalațiile existente.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>6.3 Asigurări:</strong> Deținem asigurare de răspundere civilă profesională pentru toate serviciile oferite.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Anulări și Reprogramări</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>7.1 Anulare de către client:</strong> Anulările trebuie comunicate cu minimum 24 ore înainte de programarea stabilită.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>7.2 Reprogramare:</strong> Reprogramările sunt posibile în funcție de disponibilitate, fără costuri suplimentare.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>7.3 Forță majoră:</strong> În caz de forță majoră, ambele părți pot anula sau reprograma fără penalități.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Protecția Datelor</h2>
            <p className="text-gray-700 leading-relaxed">
              Respectăm în totalitate prevederile GDPR privind protecția datelor personale. Pentru detalii complete, 
              consultați <a href="/politica-confidentialitate" className="text-blue-600 hover:underline">Politica de Confidențialitate</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Soluționarea Litigiilor</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>9.1 Negociere amiabilă:</strong> Încurajăm rezolvarea amiabilă a oricăror neînțelegeri.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>9.2 ANPC:</strong> Pentru litigii de consum, puteți apela la serviciile ANPC pentru mediere.
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>9.3 Jurisdicția:</strong> Pentru litigiile care nu pot fi rezolvate amiabil, competentă este judecătoria din Baia Mare.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Contact</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-2">
                <strong>Instalator Pro</strong>
              </p>
              <p className="text-gray-700">Strada Gutinului nr 5, Baia Sprie, Maramureș</p>
              <p className="text-gray-700">Telefon: <a href="tel:0757695950" className="text-blue-600 hover:underline">0757 695 950</a></p>
              <p className="text-gray-700">Email: <a href="mailto:podutzpavel_93@yahoo.com" className="text-blue-600 hover:underline">podutzpavel_93@yahoo.com</a></p>
            </div>
          </section>

          <section className="border-t pt-8">
            <p className="text-sm text-gray-500">
              Acești termeni și condiții sunt valabili de la data de 25 Mai 2025 și pot fi modificați periodic. 
              Modificările vor fi comunicate pe site-ul nostru web.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
