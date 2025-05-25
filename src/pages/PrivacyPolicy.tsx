import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const PrivacyPolicy: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* SEO Meta Tags */}
      <React.Fragment>
        <title>Politica de Confidențialitate - Instalator Pro</title>
        <meta name="robots" content="noindex, nofollow" />
        <meta name="description" content="Politica de confidențialitate pentru serviciile Instalator Pro - Protecția datelor personale GDPR" />
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
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Politica de Confidențialitate</h1>
              <p className="text-gray-600 mt-1">Protecția datelor dvs. personale - GDPR Compliant</p>
            </div>
          </div>
          <p className="text-gray-600 mt-4">Ultima actualizare: 25 Mai 2025</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Eye className="h-6 w-6 text-blue-600" />
              1. Informații Generale
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Această Politică de Confidențialitate explică cum colectăm, folosim, păstrăm și protejăm informațiile dvs. personale 
              în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) și legislația română în vigoare.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800">
                <strong>Operator de date:</strong> Instalator Pro<br />
                <strong>Adresa:</strong> Strada Gutinului nr 5, Baia Sprie, Maramureș<br />
                <strong>Contact DPO:</strong> podutzpavel_93@yahoo.com
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Ce Date Colectăm</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">2.1 Date furnizate direct de dvs.:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Nume și prenume</li>
                  <li>Număr de telefon</li>
                  <li>Adresa de email</li>
                  <li>Adresa fizică pentru prestarea serviciilor</li>
                  <li>Detalii despre serviciile solicitate</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">2.2 Date colectate automat:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Adresa IP și locația aproximativă</li>
                  <li>Tipul de browser și dispozitiv</li>
                  <li>Paginile vizitate pe site-ul nostru</li>
                  <li>Timpul petrecut pe site</li>
                  <li>Referrer (de unde ați ajuns pe site-ul nostru)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Cum Folosim Datele</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">3.1 Scopuri legitime:</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Prestarea serviciilor de instalații sanitare</li>
                  <li>Comunicarea cu clientii (programări, confirmări)</li>
                  <li>Facturarea și contabilitatea</li>
                  <li>Respectarea obligațiilor legale</li>
                  <li>Îmbunătățirea serviciilor noastre</li>
                </ul>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-medium text-gray-900 mb-2">3.2 Marketing (doar cu consimțământul dvs.):</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1 ml-4">
                  <li>Trimiterea de oferte și promoții</li>
                  <li>Newsletter cu tips și sfaturi utile</li>
                  <li>Anunțuri despre servicii noi</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <Lock className="h-6 w-6 text-green-600" />
              4. Cum Protejăm Datele
            </h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dvs. personale:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Măsuri Tehnice:</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Criptare SSL/TLS</li>
                    <li>• Firewall și protecție antivirus</li>
                    <li>• Backup-uri regulate</li>
                    <li>• Acces restricționat la date</li>
                  </ul>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Măsuri Organizatorice:</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Politici interne de securitate</li>
                    <li>• Formare personal în GDPR</li>
                    <li>• Proceduri de răspuns la incidente</li>
                    <li>• Revizuiri regulate de securitate</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Partajarea Datelor</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                <strong>Nu vindem sau închiriem datele dvs. personale tertilor.</strong> Partajăm date doar în următoarele situații:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Cu furnizori de servicii care ne ajută să operăm (hosting, contabilitate) - doar cu contracte GDPR</li>
                <li>Când este cerut de lege (autorități competente)</li>
                <li>Pentru protejarea drepturilor noastre legale</li>
                <li>Cu consimțământul dvs. explicit</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Cookie-uri și Tehnologii Similare</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Folosim cookie-uri pentru îmbunătățirea experienței pe site. Puteți gestiona preferințele de cookie-uri 
                din banner-ul afișat sau din setările browser-ului.
              </p>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-medium text-yellow-800 mb-2">Tipuri de cookie-uri:</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li><strong>Esențiale:</strong> Necesare pentru funcționarea site-ului</li>
                  <li><strong>Funcționale:</strong> Îmbunătățesc experiența utilizatorului</li>
                  <li><strong>Analiză:</strong> Ne ajută să înțelegem cum este folosit site-ul</li>
                  <li><strong>Marketing:</strong> Pentru publicitate personalizată (opțional)</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Drepturile Dvs. GDPR</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-blue-600" />
                  <span className="font-medium">Dreptul de acces</span>
                </div>
                <div className="flex items-center gap-2">
                  <Trash2 className="h-5 w-5 text-red-600" />
                  <span className="font-medium">Dreptul la ștergere</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="h-5 w-5 text-green-600" />
                  <span className="font-medium">Dreptul la rectificare</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Shield className="h-5 w-5 text-purple-600" />
                  <span className="font-medium">Dreptul la restricționare</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowLeft className="h-5 w-5 text-orange-600" />
                  <span className="font-medium">Dreptul la portabilitate</span>
                </div>
                <div className="flex items-center gap-2">
                  <Eye className="h-5 w-5 text-gray-600" />
                  <span className="font-medium">Dreptul la opoziție</span>
                </div>
              </div>
            </div>
            <div className="mt-4 bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 text-sm">
                Pentru exercitarea oricărui drept, contactați-ne la <strong>podutzpavel_93@yahoo.com</strong>. 
                Vom răspunde în maximum 30 de zile.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Reținerea Datelor</h2>
            <div className="space-y-4">
              <p className="text-gray-700 leading-relaxed">
                Păstrăm datele dvs. personale doar atât timp cât este necesar pentru scopurile pentru care au fost colectate:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li><strong>Date client activ:</strong> Pe durata relației contractuale + 3 ani (garanție)</li>
                <li><strong>Date facturare:</strong> 10 ani (obligații fiscale)</li>
                <li><strong>Date marketing:</strong> Până la retragerea consimțământului</li>
                <li><strong>Logs site web:</strong> Maximum 12 luni</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Transferuri Internaționale</h2>
            <p className="text-gray-700 leading-relaxed">
              În general, procesăm datele în UE. Dacă este nevoie de transferuri internaționale, 
              ne asigurăm că există garanții adecvate (ex: clauzele contractuale standard ale Comisiei Europene).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibent text-gray-900 mb-4">10. Contact și Reclamații</h2>
            <div className="space-y-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-3">Pentru întrebări despre protecția datelor:</h4>
                <p className="text-gray-700">Email: podutzpavel_93@yahoo.com</p>
                <p className="text-gray-700">Telefon: 0757 695 950</p>
                <p className="text-gray-700">Adresa: Strada Gutinului nr 5, Baia Sprie, Maramureș</p>
              </div>
              
              <div className="bg-red-50 p-4 rounded-lg">
                <p className="text-red-800 text-sm">
                  <strong>Dreptul la reclamație:</strong> Dacă considerați că drepturile dvs. au fost încălcate, 
                  puteți depune o reclamație la Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
                </p>
              </div>
            </div>
          </section>

          <section className="border-t pt-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Modificări ale Politicii</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ne rezervăm dreptul de a modifica această Politică de Confidențialitate. Modificările importante 
              vor fi comunicate prin email și/sau afișate pe site-ul nostru.
            </p>
            <p className="text-sm text-gray-500">
              Versiunea curentă este valabilă de la 25 Mai 2025. Verificați periodic pentru actualizări.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
