export default function Footer() {
  return (
    <footer className="bg-sand-50 border-t border-sand-200 py-12 text-center text-sand-800/60">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif text-2xl text-sand-900 mb-6 italic tracking-tight font-semibold">PRZYSTAŃ MORSA</h2>
        <div className="flex justify-center gap-6 mb-8 text-sm font-light">
          <a href="#" className="hover:text-sea-900 transition-colors">Polityka prywatności</a>
          <a href="#" className="hover:text-sea-900 transition-colors">Regulamin</a>
        </div>
        <p className="text-xs uppercase tracking-widest text-sand-800/50">
          &copy; {new Date().getFullYear()} Przystań Morsa, Mielno. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
