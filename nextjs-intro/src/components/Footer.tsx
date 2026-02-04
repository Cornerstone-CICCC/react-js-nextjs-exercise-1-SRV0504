export default function Footer() {
    const year = new Date().getFullYear();
  
    return (
      <footer className="border-t mt-10">
        <div className="mx-auto max-w-4xl px-4 py-6 text-sm text-gray-600">
          © {year} nextjs-intro. All rights reserved.
        </div>
      </footer>
    );
  }
  