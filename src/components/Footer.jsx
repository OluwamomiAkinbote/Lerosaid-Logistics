// components/Footer.js
export default function Footer() {
  return (
    <footer className="bg-red-900 text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </div>
    </footer>
  );
}
