export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-sm">
        <div>&copy; {new Date().getFullYear()} Productify. All rights reserved.</div>
        <div>Valentinus Gilbert Sanjaya - 2540126430</div>
      </div>
    </footer>
  );
} 