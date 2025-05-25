import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsAndConditions = () => {
  useEffect(() => {
    // Set noindex meta tag for SEO
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    // Set page title
    document.title = 'Termeni și Condiții - Instalator Pro';

    return () => {
      // Cleanup meta tag when component unmounts
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Termeni și Condiții</h1>
          
          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Informații Generale</h2>
              <p className="text-gray-600 mb-4">
                Acești termeni și condiții guvernează utilizarea serviciilor oferite de <strong>Instalator Pro</strong>, 
                cu sediul în Strada Gutinului nr 5, Baia Sprie, Maramureș, România.
              </p>
              <p className="text-gray-600 mb-4">
                Prin contactarea noastră și solicitarea serviciilor, clientul acceptă implicit acești termeni și condiții.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Servicii Oferite</h2>
              <p className="text-gray-600 mb-4">Oferim următoarele servicii profesionale:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Instalații sanitare complete</li>
                <li>Montaj și reparații centrale termice</li>
                <li>Desfundare canalizare</li>
                <li>Detectare și reparare scurgeri</li>
                <li>Reparații urgente</li>
                <li>Montaj și înlocuire căzi de baie, chiuvete, WC-uri</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Prețuri și Plată</h2>
              <p className="text-gray-600 mb-4">
                Prețurile sunt stabilite în funcție de complexitatea lucrării și materialele necesare. 
                Oferim devis gratuit înainte de începerea lucrărilor.
              </p>
              <p className="text-gray-600 mb-4">
                Plata se efectuează la finalizarea lucrărilor, prin numerar sau transfer bancar.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Garanție</h2>
              <p className="text-gray-600 mb-4">
                Oferim garanție de 12 luni pentru lucrările executate și 24 luni pentru materialele instalate 
                (conform garanției producătorului).
              </p>
              <p className="text-gray-600 mb-4">
                Garanția nu acoperă defecțiunile cauzate de utilizarea necorespunzătoare sau uzura normală.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Responsabilități</h2>
              <p className="text-gray-600 mb-4">
                Ne angajăm să executăm lucrările conform standardelor profesionale și în termenele convenite.
              </p>
              <p className="text-gray-600 mb-4">
                Clientul are responsabilitatea să asigure accesul la locul de muncă și să furnizeze informații corecte 
                despre instalațiile existente.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Anulări și Modificări</h2>
              <p className="text-gray-600 mb-4">
                Anulările pot fi făcute cu minimum 24 ore înainte de programarea stabilită, fără costuri suplimentare.
              </p>
              <p className="text-gray-600 mb-4">
                Pentru anulările în ultima clipă sau neprezentarea clientului, se poate percepe o taxă de deplasare.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Forță Majoră</h2>
              <p className="text-gray-600 mb-4">
                Nu suntem responsabili pentru întârzierile cauzate de evenimente de forță majoră 
                (condiții meteorologice extreme, calamități naturale, etc.).
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Soluționarea Disputelor</h2>
              <p className="text-gray-600 mb-4">
                Pentru soluționarea disputelor, clientii pot apela la:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>ANPC - Autoritatea Națională pentru Protecția Consumatorilor</li>
                <li>Platforma SOL (Soluționarea Online a Litigiilor) pentru consumatori UE</li>
                <li>Instanțele de judecată competente din România</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Contact</h2>
              <p className="text-gray-600 mb-4">
                Pentru întrebări despre acești termeni și condiții, ne puteți contacta:
              </p>
              <ul className="list-none text-gray-600">
                <li><strong>Telefon:</strong> 0757 695 950</li>
                <li><strong>Email:</strong> podutzpavel_93@yahoo.com</li>
                <li><strong>Adresă:</strong> Strada Gutinului nr 5, Baia Sprie, Maramureș, România</li>
              </ul>
            </section>

            <section className="mb-8">
              <p className="text-sm text-gray-500">
                <strong>Ultima actualizare:</strong> 25 mai 2025
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsAndConditions;