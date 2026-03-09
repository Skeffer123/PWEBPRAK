import React from 'react'

const About = () => {
    return (
        <div>
            <img src="logo.png" alt="Logo Agrismart" height="100" width="100" className="mx-auto" />
            <div className="max-w-4xl mx-auto p-6">
                <section className="mb-12">
                    <h1 className="text-4xl font-bold text-green-700 mb-4">Tentang Kami</h1>
                    <p className="text-gray-700 text-lg leading-relaxed">
                        Agrismart adalah platform digital yang menghubungkan petani dengan pasar modern. Kami menyediakan solusi teknologi untuk meningkatkan produktivitas pertanian dan membantu petani mendapatkan harga terbaik untuk hasil panen mereka.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-green-700 mb-6">Fitur Kami</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-4 border border-green-200 rounded-lg">
                            <h3 className="font-bold text-green-600 mb-2">Gambaran Harga Pasar</h3>
                            <p className="text-gray-600">Monitor harga real-time di berbagai pasar untuk keputusan jual yang lebih baik.</p>
                        </div>
                        <div className="p-4 border border-green-200 rounded-lg">
                            <h3 className="font-bold text-green-600 mb-2">Berita Pertanian</h3>
                            <p className="text-gray-600">Dapatkan informasi terkini seputar perkembangan dunia pertanian dan tips berkebun.</p>
                        </div>
                        <div className="p-4 border border-green-200 rounded-lg">
                            <h3 className="font-bold text-green-600 mb-2">Marketplace</h3>
                            <p className="text-gray-600">Jual dan beli produk pertanian langsung dengan pembeli dan penjual terverifikasi.</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About
