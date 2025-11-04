/**
 * Book Page
 * Dedicated route for Calendly booking with full-width inline embed
 */

import { CalendlyInline } from '@/components/CalendlyInline';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';

const Book = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <CalendlyInline />
      </main>
      <Footer />
    </div>
  );
};

export default Book;
