import React from 'react'

const Home = () => {hy
  return (
    <div>
    <header className="flex items-center p-4 relative bg-green-400 w-full">
        <img src="/logo.png" alt="logo AGRISMART" className="h-12" />
        
        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-8">
            <a href="/about" className="hover:text-green-600">Tentang Kami</a>
            <a href="/" className="hover:text-green-600">Beranda</a>
        </nav>

        <nav className="ml-auto flex gap-6">
            <a href="Login" className="hover:text-green-600">Login</a>
            <a href="Signup" className="hover:text-green-600">Daftar</a>
        </nav>
    </header>

    <section>
    </section>
    </div>
  )
}

export default Home
