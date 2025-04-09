export default function Footer() {
    return (
      <footer className="bg-white border-t py-6 text-center text-gray-600 mt-10">
        <p className="text-sm">
          © {new Date().getFullYear()} <span className="font-semibold text-blue-600">FixItList</span> — Built with 💙 for better home maintenance.
        </p>
      </footer>
    );
  }
  