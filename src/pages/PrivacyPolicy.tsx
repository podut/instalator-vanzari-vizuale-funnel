import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  useEffect(() => {
    // Set noindex meta tag for SEO
    const metaRobots = document.createElement('meta');
    metaRobots.name = 'robots';
    metaRobots.content = 'noindex, nofollow';
    document.head.appendChild(metaRobots);

    // Set page title
    document.title = 'Politica de Confidențialitate - Instalator Pro';

    return () => {
      // Cleanup meta tag when component unmounts
      document.head.removeChild(metaRobots);
    };
  }, []);

  return (    <div className="min-h-screen bg-white">
      <Header showBackArrow />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Politica de Confidențialitate</h1>
            <p className="text-lg text-gray-600">Protecția datelor personale conform GDPR</p>
          </div>          
          <div className="bg-white shadow-lg rounded-lg p-8 lg:p-12">
            <div className="prose prose-lg max-w-none">
            <section className="mb-8 text-center">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Informații Generale</h2>
              <p className="text-gray-600 mb-4">
                <strong>Instalator Pro</strong> respectă confidențialitatea datelor personale și se angajează să protejeze 
                informațiile furnizate de clienții săi, conform Regulamentului General privind Protecția Datelor (GDPR).
              </p>
              <p className="text-gray-600 mb-4">
                Operator de date: Instalator Pro, cu sediul în Strada Gutinului nr 5, Baia Sprie, Maramureș, România.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Datele Personale Colectate</h2>
              <p className="text-gray-600 mb-4">Colectăm următoarele categorii de date personale:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Date de identificare:</strong> nume, prenume</li>
                <li><strong>Date de contact:</strong> număr de telefon, adresă de email</li>
                <li><strong>Date de localizare:</strong> adresa pentru prestarea serviciilor</li>
                <li><strong>Date tehnice:</strong> informații despre instalațiile existente</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Scopurile Prelucrării</h2>
              <p className="text-gray-600 mb-4">Datele personale sunt prelucrate pentru:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Prestarea serviciilor de instalații sanitare</li>
                <li>Comunicarea cu clienții</li>
                <li>Programarea și confirmare întâlnirilor</li>
                <li>Emiterea facturilor și gestionarea plăților</li>
                <li>Gestionarea garanțiilor și service-ului post-vânzare</li>
                <li>Îmbunătățirea serviciilor oferite</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Temeiurile Legale</h2>
              <p className="text-gray-600 mb-4">Prelucrăm datele personale pe baza:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Consimțământul</strong> pentru contactare și marketing</li>
                <li><strong>Executarea contractului</strong> pentru prestarea serviciilor</li>
                <li><strong>Interesul legitim</strong> pentru îmbunătățirea serviciilor</li>
                <li><strong>Obligația legală</strong> pentru emiterea facturilor</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Perioada de Păstrare</h2>
              <p className="text-gray-600 mb-4">
                Datele personale sunt păstrate pentru perioada necesară îndeplinirii scopurilor pentru care au fost colectate:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Date contractuale:</strong> 5 ani de la finalizarea serviciilor</li>
                <li><strong>Date de garanție:</strong> pe perioada garanției acordate</li>
                <li><strong>Date fiscale:</strong> conform legislației în vigoare (minim 10 ani)</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Drepturile Dvs.</h2>
              <p className="text-gray-600 mb-4">Aveți următoarele drepturi privind datele personale:</p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Dreptul de acces</strong> - să obțineți confirmarea prelucrării datelor</li>
                <li><strong>Dreptul de rectificare</strong> - să corectați datele inexacte</li>
                <li><strong>Dreptul de ștergere</strong> - să solicitați ștergerea datelor</li>
                <li><strong>Dreptul de restricționare</strong> - să limitați prelucrarea</li>
                <li><strong>Dreptul de portabilitate</strong> - să obțineți datele într-un format portabil</li>
                <li><strong>Dreptul de opoziție</strong> - să vă opuneți prelucrării</li>
                <li><strong>Dreptul de a retrage consimțământul</strong></li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Securitatea Datelor</h2>
              <p className="text-gray-600 mb-4">
                Implementăm măsuri tehnice și organizatorice adecvate pentru protejarea datelor personale:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li>Criptarea datelor în tranzit și în repaus</li>
                <li>Accesul restricționat la datele personale</li>
                <li>Backup-uri regulate și sigure</li>
                <li>Formarea personalului în domeniul protecției datelor</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Cookie-uri și Tehnologii de Urmărire</h2>
              <p className="text-gray-600 mb-4">
                Site-ul nostru folosește cookie-uri pentru:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Cookie-uri esențiale:</strong> pentru funcționarea site-ului</li>
                <li><strong>Cookie-uri de performanță:</strong> pentru Google Analytics</li>
                <li><strong>Cookie-uri de preferințe:</strong> pentru setările utilizatorului</li>
              </ul>
              <p className="text-gray-600 mb-4">
                Puteți gestiona preferințele cookie-urilor prin banner-ul de consimțământ.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Transferul Datelor</h2>
              <p className="text-gray-600 mb-4">
                Datele personale pot fi transferate către:
              </p>
              <ul className="list-disc pl-6 text-gray-600 mb-4">
                <li><strong>Google Analytics:</strong> pentru analiza traficului (cu măsuri de protecție)</li>
                <li><strong>Furnizorii de servicii IT:</strong> pentru mentenanța tehnică</li>
                <li><strong>Autoritățile competente:</strong> în cazuri prevăzute de lege</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Plângeri</h2>
              <p className="text-gray-600 mb-4">
                Dacă considerați că drepturile dvs. au fost încălcate, puteți depune o plângere la:
              </p>
              <p className="text-gray-600 mb-4">
                <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong><br/>
                Website: <a href="https://www.dataprotection.ro" className="text-plumber-600 hover:text-plumber-800">www.dataprotection.ro</a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">11. Contact</h2>
              <p className="text-gray-600 mb-4">
                Pentru exercitarea drepturilor sau întrebări despre această politică:
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
            </section>            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;