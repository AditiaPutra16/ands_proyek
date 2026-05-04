export default function ContactSection() {
  return (
    <section
      className="bg-[#FFFBF7] py-20 px-4 sm:px-6 lg:px-8 border-t border-[#F0E6DD]"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#7F1D1D] mb-4">
            Kunjungi & Hubungi Kami
          </h2>
          <div className="w-24 h-1 bg-[#EA580C] mx-auto rounded-full mb-6"></div>
          <p className="text-[#7D6356] max-w-2xl mx-auto text-lg">
            Punya pertanyaan atau ingin melakukan pemesanan dalam jumlah besar? <br />
            Hubungi kontak di bawah ini!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-[#F0E6DD]">
          {/* Kolom Kiri: Informasi Kontak */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-[#5C3D2E] mb-6">
              Informasi Kontak
            </h3>

            {/* Lokasi */}
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#EA580C]/10 text-[#EA580C]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-[#5C3D2E]">
                  Lokasi Kedai
                </h4>
                <p className="text-[#7D6356] mt-1">
                  Sawangan, Depok
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#14532D]/10 text-[#14532D]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-[#5C3D2E]">WhatsApp</h4>
                <a
                  href="https://wa.me/6281314239100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7D6356] mt-1 hover:text-[#EA580C] transition-colors flex items-center"
                >
                  +62 813-1423-9100
                </a>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start">
              <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-full bg-[#7F1D1D]/10 text-[#7F1D1D]">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
              <div className="ml-4">
                <h4 className="text-lg font-bold text-[#5C3D2E]">Instagram</h4>
                <a
                  href="https://www.instagram.com/__andsbakehuis?igsh=Z2Fyc2NsejBybDU0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#7D6356] mt-1 hover:text-[#EA580C] transition-colors"
                >
                  @ands.
                </a>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Google Maps Embed */}
          <div className="h-full min-h-[300px] w-full rounded-2xl overflow-hidden shadow-inner border border-gray-200">
            {/* Ganti atribut 'src' di bawah ini dengan link embed map lokasi Anda dari Google Maps Share > Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15859.285086269885!2d106.748856!3d-6.417006!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69e8f31e859509%3A0xbf124b33b6097a!2sJl.%20Melati%20Surya%20I%20Blok%20EB%20No.3%2C%20Duren%20Mekar%2C%20Kec.%20Bojongsari%2C%20Kota%20Depok%2C%20Jawa%20Barat%2016518!5e0!3m2!1sid!2sid!4v1777693426380!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
