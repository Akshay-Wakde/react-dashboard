// Layout.jsx (Conceptual Structure)
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';

function Layout({ children, pageTitle }) {
  // Use pageTitle to set the document head content (e.g., <title>)

  return (
    <div className="flex h-screen bg-gray-100">
      {/* 1. Navigation (Sidebar) */}
      <Navigation />

      {/* Main Content Wrapper */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* 2. Header (Top Bar) */}
        <Header />

        {/* 3. Page Content Area (Scrollable) */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto p-6">
          {children} {/* This is where your specific page components (Dashboard, UserList, etc.) render */}
        </main>

        {/* 4. Footer */}
        <Footer />
      </div>
    </div>
  );
}
export default Layout;