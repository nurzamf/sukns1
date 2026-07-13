import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';

import faqImg from '../assets/img/faq.png';
import complaintsImg from '../assets/img/complaints.png';
import sitemapImg from '../assets/img/sitemap.png';
import contactUsImg from '../assets/img/contact-us.png';
import rakyatImg from '../assets/img/rakyat.png';
import pelaburImg from '../assets/img/pelabur.png';
import penjawatAwamImg from '../assets/img/penjawat-awam.png';
import pelancongImg from '../assets/img/pelancong.png';

import cukaiPembayaranImg from '../assets/img/cukai-pembayaran.png';
import permohonanBantuanImg from '../assets/img/permohonan-bantuan.png';
import usahawanPelaburanImg from '../assets/img/usahawan-pelaburan.png';
import semakanStatusImg from '../assets/img/semakan-status-permohonan.png';
import muatTurunBorangImg from '../assets/img/muat-turun-borang.png';
import perkhidmatanDigitalImg from '../assets/img/perkhidmatan-digital.png';
import agensiPejabatImg from '../assets/img/agensi-pejabat.png';
import aduanMaklumbalasImg from '../assets/img/aduan-maklumbalas.png';
import istiadatPerasmianImg from './assets/images/istiadat_perasmian_1783514478387.jpg';
import peluncuranEtanahImg from '../assets/img/e-tanah.png';

// ============================================================
// POPULAR SERVICES DATA
// ============================================================
const SERVICES_CARDS = [
  {
    toast: "Urusan Cukai Taksiran, Cukai Tanah & Cukai Petak dibuka di ePembayaran SUKNS.",
    img: cukaiPembayaranImg,
    alt: "Cukai & Pembayaran",
    title: "Cukai & Pembayaran"
  },
  {
    toast: "Sila isi permohonan skim bantuan kebajikan dan persekolahan Kasih NS.",
    img: permohonanBantuanImg,
    alt: "Permohonan & Bantuan",
    title: "Permohonan & Bantuan"
  },
  {
    toast: "Membuka skim latihan keusahawanan mikro dan pendaftaran projek MVV 2.0.",
    img: usahawanPelaburanImg,
    alt: "Usahawan & Pelaburan",
    title: "Usahawan & Pelaburan"
  },
  {
    toast: "Meneroka status semakan permohonan geran, lesen, dan tanah semasa.",
    img: semakanStatusImg,
    alt: "Semakan Status",
    title: "Semakan Status"
  },
  {
    toast: "Direktori fail borang pdf rasmi pentadbiran daerah dan tanah.",
    img: muatTurunBorangImg,
    alt: "Muat Turun Borang",
    title: "Muat Turun Borang"
  },
  {
    toast: "Mengakses platform e-Tanah, e-Khidmat, dan sistem digital bersepadu.",
    img: perkhidmatanDigitalImg,
    alt: "Perkhidmatan Digital",
    title: "Perkhidmatan Digital"
  },
  {
    toast: "Direktori carian nombor telefon dan alamat e-mel agensi Pejabat Daerah.",
    img: agensiPejabatImg,
    alt: "Agensi & Pejabat",
    title: "Agensi & Pejabat"
  },
  {
    toast: "Platform aduan rakyat SISPAA Negeri Sembilan sedia menerima maklum balas.",
    img: aduanMaklumbalasImg,
    alt: "Aduan & Maklum Balas",
    title: "Aduan & Maklum Balas"
  }
];

// Replicate SERVICES_CARDS 5 times to enable infinite loop
const REPEATED_SERVICES = [
  ...SERVICES_CARDS,
  ...SERVICES_CARDS,
  ...SERVICES_CARDS,
  ...SERVICES_CARDS,
  ...SERVICES_CARDS
];

// ============================================================
// NEWS ARTICLES DATA
// ============================================================
interface Article {
  id: number;
  title: string;
  category: string;
  categoryClass: string;
  date: string;
  image: string;
  summary: string;
  paragraphs: string[];
}

const ARTICLES_DATA: Article[] = [
  {
    id: 0,
    title: "KDNK N9 disasar dua kali ganda menjelang 2040",
    category: "Ekonomi",
    categoryClass: "tag-ekonomi",
    date: "23 Jun 2026",
    image: "https://www.figma.com/api/mcp/asset/7378d53a-b30c-4c8d-a6f0-458ed662a905",
    summary: "Negeri Sembilan menyasarkan peningkatan Keluaran Dalam Negara Kasar (KDNK) hampir dua kali ganda kepada RM109.12 bilion menjelang tahun 2040.",
    paragraphs: [
      "Seremban, 4 Jun 2026 (Korporat SUKNS) – Negeri Sembilan menyasarkan peningkatan Keluaran Dalam Negara Kasar (KDNK) hampir dua kali ganda kepada RM109.12 bilion menjelang tahun 2040. Sasaran itu dijangka dicapai menerusi pelaksanaan Draf Rancangan Struktur Negeri Sembilan 2040, dokumen penting yang akan menjadi kompas pembangunan negeri bagi tempoh 15 tahun akan datang.",
      "Menteri Besar Negeri Sembilan, Dato' Seri Utama Haji Aminuddin Harun berkata, pertumbuhan ekonomi itu akan dipacu oleh pelbagai projek berimpak tinggi termasuk pembangunan di kawasan Malaysia Vision Valley (MVV) 2.0, Zon Pembangunan Ekonomi Seremban dan Port Dickson serta pembangunan sektor pertanian dan pelancongan di daerah-daerah lain.",
      "\"KDNK negeri yang kini berada pada paras RM57.01 bilion dijangka meningkat kepada RM109.12 bilion menjelang tahun 2040 selaras dengan pertumbuhan pelaburan dan pembangunan yang dirancang.",
      "\"Pertumbuhan ini didorong oleh pelbagai projek berimpak tinggi khususnya di Zon Pembangunan Ekonomi Seremban dan Port Dickson dalam kawasan MVV 2.0 yang menjadi pemangkin utama kepada pembangunan industri, pelaburan dan penggunaan tanah secara strategik.",
      "\"Malah, jumlah projek pelaburan dijangka meningkat daripada 295 projek pada tahun 2025 kepada 2,405 projek menjelang tahun 2040,\" katanya ketika merasmikan Program Publisiti dan Penyertaan Awam Draf Rancangan Struktur Negeri Sembilan 2040 di sini, hari ini.",
      "Menurutnya, Negeri Sembilan turut mempunyai kelebihan besar untuk terus berkembang apabila kadar tepu bina negeri masih rendah, iaitu sekitar 12.55 peratus. Ini sekali gus menyediakan ruang luas bagi pembangunan bandar baharu, kawasan perindustrian dan perumahan.",
      "\"Pembangunan masa depan negeri tidak boleh hanya berasaskan pertumbuhan ekonomi semata-mata, sebaliknya perlu memberi manfaat langsung kepada rakyat. Nilai sebenar kejayaan bukanlah sekadar angka pelaburan atau hasil negeri, tetapi peluang pekerjaan yang diwujudkan untuk anak-anak Negeri Sembilan, peluang perniagaan kepada usahawan tempatan serta peningkatan pendapatan isi rumah rakyat,\" katanya.",
      "Dalam masa sama, Aminuddin menyeru rakyat supaya mengambil peluang menyertai sesi publisiti awam bagi memberikan pandangan terhadap draf berkenaan. Masa depan negeri ini bukan milik kerajaan semata-mata, tetapi milik seluruh rakyat Negeri Sembilan.",
      "\"Sebab itu suara rakyat perlu didengari dan aspirasi rakyat perlu diterjemahkan ke dalam perancangan pembangunan negeri,\" katanya.",
      "Sementara itu, draf rancangan ini merupakan hala tuju yang akan menentukan corak pembangunan ekonomi, sosial, infrastruktur, perumahan, pengangkutan serta kesejahteraan rakyat Negeri Sembilan. Pembangunan negeri perlu digerakkan secara lebih pintar, inklusif, mampan dan berdaya tahan dalam mendepani cabaran masa hadapan termasuk perubahan iklim, perkembangan teknologi, ekonomi digital serta pertumbuhan penduduk yang semakin meningkat."
    ]
  },
  {
    id: 1,
    title: "e-Tanah mula digunakan di Negeri Sembilan",
    category: "Digital",
    categoryClass: "tag-digital",
    date: "13 Mei 2026",
    image: peluncuranEtanahImg,
    summary: "Sistem Pentadbiran Tanah Elektronik (e-Tanah) kini dilaksanakan sepenuhnya di Negeri Sembilan bagi mempermudah urusan pemilik tanah.",
    paragraphs: [
      "Seremban, 13 Mei 2026 – Sistem Pentadbiran Tanah Elektronik (e-Tanah) kini dilaksanakan sepenuhnya di seluruh Negeri Sembilan bagi mempercepatkan urusan pemilikan, pendaftaran cukai, dan pindah milik tanah secara digital dan efisien.",
      "Langkah transformasi digital ini dijangka memangkas tempoh menunggu urusan tanah daripada beberapa minggu kepada beberapa jam sahaja melalui integrasi sistem pintar baharu.",
      "Sila layari portal cukai atau pendaftaran tanah e-Tanah Negeri Sembilan untuk menikmati perkhidmatan pantas ini bermula hari ini secara atas talian tanpa perlu beratur panjang."
    ]
  },
  {
    id: 2,
    title: "Istiadat Perasmian Penggal Keempat DUN Negeri Sembilan",
    category: "Rasmi",
    categoryClass: "tag-rasmi",
    date: "24 April 2026",
    image: istiadatPerasmianImg,
    summary: "Istiadat Perasmian Penggal Keempat Dewan Undangan Negeri (DUN) telah berlangsung gilang-gemilang hari ini.",
    paragraphs: [
      "Seremban, 24 April 2026 – Istiadat Perasmian Penggal Keempat Dewan Undangan Negeri (DUN) Negeri Sembilan telah disempurnakan dengan penuh istiadat oleh Yang di-Pertuan Besar Negeri Sembilan, Tuanku Muhriz Ibni Almarhum Tuanku Munawir.",
      "Baginda menyeru agar barisan kepimpinan negeri mengutamakan perpaduan, kemakmuran kebajikan rakyat, serta terus merangka inisiatif pemulihan dan pembangunan sosioekonomi yang inklusif dan lestari.",
      "Majlis turut dihadiri oleh EXCO Negeri Sembilan, ketua-ketua jabatan, serta wakil media rasmi korporat negeri."
    ]
  },
  {
    id: 3,
    title: "Negeri Sembilan catat sejarah pelaburan bernilai RM14.7 bilion",
    category: "Pelaburan",
    categoryClass: "tag-pelaburan",
    date: "25 Mac 2026",
    image: "https://www.figma.com/api/mcp/asset/7f158c08-5a19-40ab-820c-9b6e2ce960b3",
    summary: "Negeri Sembilan merekodkan kemasukan pelaburan tertinggi dalam sejarah bernilai RM14.7 bilion bagi memacu industri.",
    paragraphs: [
      "Seremban, 25 Mac 2026 – Negeri Sembilan membuktikan statusnya sebagai hab pelaburan utama negara dengan merekodkan kemasukan pelaburan bersejarah bernilai RM14.7 bilion bagi tempoh kewangan lalu.",
      "Sektor pembuatan berteknologi tinggi, automotif, bioteknologi, serta logistik di Malaysia Vision Valley (MVV) 2.0 merupakan pemangkin utama kemasukan modal domestik dan antarabangsa ini.",
      "Pencapaian ini dijangka membuka lebih daripada 5,000 peluang pekerjaan berkemahiran tinggi untuk anak watan Negeri Sembilan."
    ]
  },
  {
    id: 4,
    title: "Tuanku Muhriz Zahir Kekesalan dan Kebimbangan Gejala Rasuah",
    category: "Rasmi",
    categoryClass: "tag-rasmi",
    date: "06 Feb 2026",
    image: "https://www.figma.com/api/mcp/asset/d52fd737-62bd-4061-9044-7d5e0b16aee0",
    summary: "Yang di-Pertuan Besar Negeri Sembilan menzahirkan titah peringatan khas mengenai kepentingan integriti dalam pentadbiran.",
    paragraphs: [
      "Seremban, 6 Februari 2026 – Yang di-Pertuan Besar Negeri Sembilan, Tuanku Muhriz Ibni Almarhum Tuanku Munawir hari ini menzahirkan kekesalan serta kebimbangan baginda mengenai penularan gejala pecah amanah dan rasuah yang dilaporkan.",
      "Baginda mengingatkan semua jentera pentadbiran awam negeri, penjawat awam, serta seluruh rakyat supaya sentiasa teguh memelihara integriti dan bersikap telus demi menjamin masa depan negeri yang diredhai dan dihormati.",
      "Integriti tinggi adalah asas kepada kemakmuran dan keberkatan pembangunan sesebuah negeri berdaulat."
    ]
  },
  {
    id: 5,
    title: "532 Terima Darjah Kebesaran, Bintang dan Pingat Negeri Sembilan",
    category: "Rasmi",
    categoryClass: "tag-rasmi",
    date: "06 Feb 2026",
    image: "https://www.figma.com/api/mcp/asset/7b3f04b7-76d6-4545-bc04-cdb559dd2c56",
    summary: "Seramai 532 penerima darjah kebesaran dirasmikan bersempena sambutan Hari Keputeraan Yang di-Pertuan Besar.",
    paragraphs: [
      "Seremban, 6 Februari 2026 – Seramai 532 individu daripada pelbagai latar belakang menerima darjah kebesaran, bintang, dan pingat sempena sambutan Hari Keputeraan Ke-78 Yang di-Pertuan Besar Negeri Sembilan.",
      "Penganugerahan ini mengiktiraf sumbangan, kecemerlangan, jasa bakti patriotik serta pengorbanan luar biasa penerima dalam memajukan kebajikan, kesukanan, sosioekonomi, dan kestabilan negeri.",
      "Pentadbiran mengucapkan setinggi-tinggi tahniah kepada semua tokoh masyarakat dan penjawat awam yang diraikan tahun ini."
    ]
  },
  {
    id: 6,
    title: "50,000 Penjawat Awam Persekutuan Negeri Sembilan Terima RM300",
    category: "Ekonomi",
    categoryClass: "tag-ekonomi",
    date: "16 Jan 2026",
    image: "https://www.figma.com/api/mcp/asset/41ddf939-3389-4fc4-92eb-d9706d12e951",
    summary: "Kerajaan Negeri Sembilan meluluskan dana bantuan khas bagi menghargai komitmen penjawat awam persekutuan di negeri ini.",
    paragraphs: [
      "Seremban, 16 Januari 2026 – Pentadbiran Kerajaan Negeri Sembilan bersetuju memberikan insentif penghargaan khas sebanyak RM300 secara one-off kepada lebih 50,000 penjawat awam persekutuan yang bertugas di negeri ini.",
      "Inisiatif berkebajikan ini memperuntukkan perbelanjaan bernilai RM15 juta bagi meringankan beban kos sara hidup serta memperkukuh sinergi kerja yang mantap antara agensi persekutuan dan negeri.",
      "Bantuan kebajikan ini diharap dapat menyuntik semangat produktiviti yang lebih tinggi dalam memberikan perkhidmatan terbaik kepada rakyat."
    ]
  },
  {
    id: 7,
    title: "NS Terima Bayaran Premium Tanah di Gemas RM72.49 Juta",
    category: "Ekonomi",
    categoryClass: "tag-ekonomi",
    date: "16 Jan 2026",
    image: "https://www.figma.com/api/mcp/asset/f8230e3e-8b65-4fa6-aea4-a11df946aeea",
    summary: "Kemukakan bayaran premium tanah industri bagi pembangunan hab ekonomi dan logistik baru berimpak tinggi di Gemas.",
    paragraphs: [
      "Gemas, 16 Januari 2026 – Pentadbiran Kerajaan Negeri Sembilan secara rasmi mengesahkan penerimaan bayaran premium tanah bernilai RM72.49 juta bagi tujuan pembinaan hab logistik dan komersial baharu.",
      "Daerah Gemas disasar menjadi salah satu zon transit industri yang menghubungkan jajaran pengangkutan selatan tanah air, sekali gus menarik kemasukan rantaian industri baharu.",
      "Ia adalah sebahagian daripada pelan jangka panjang bagi mengimbangi pembangunan ekonomi di antara kawasan pantai barat dan pedalaman negeri."
    ]
  },
  {
    id: 8,
    title: "NS Fest 2025 Pacu Ekonomi Negeri dan Landasan Promosi Tahun Melawat Negeri Sembilan 2026",
    category: "Ekonomi",
    categoryClass: "tag-ekonomi",
    date: "30 Dis 2025",
    image: "https://www.figma.com/api/mcp/asset/87d02890-f48a-47cf-b74a-e0cf0a625134",
    summary: "Penganjuran kemuncak NS Fest berjaya merekodkan angka kehadiran luar biasa dan impak ekonomi yang tinggi bagi menyambut Tahun Melawat N9 2026.",
    paragraphs: [
      "Seremban, 30 Disember 2025 – Festival Negeri Sembilan (NS Fest) 2025 mencatat rekod cemerlang apabila berjaya menghimpunkan lebih 300,000 pengunjung tempatan dan pelancong luar sepanjang minggu penganjurannya.",
      "Festival ini bukan sahaja mempamerkan keindahan adat, warisan kebudayaan Adat Perpatih, makanan tradisional seperti masak lemak cili api, malah menjadi pemacu ekonomi usahawan kecil sederhana (PKS).",
      "NS Fest ini juga bertindak sebagai pelancaran kempen promosi rasmi bersempena Tahun Melawat Negeri Sembilan 2026 (TMNS 2026) yang bertemakan Pesona Warisan."
    ]
  },
  {
    id: 9,
    title: "Negeri Sembilan Bentang Belanjawan Negeri 2026 RM640 Juta",
    category: "Pelaburan",
    categoryClass: "tag-pelaburan",
    date: "10 Dis 2025",
    image: "https://www.figma.com/api/mcp/asset/d8bdc2f0-abfa-44ce-9145-5223637f7a3e",
    summary: "Belanjawan Negeri Sembilan 2026 difokuskan ke arah kesejahteraan komuniti, pemerkasaan digital, dan kelestarian pertanian.",
    paragraphs: [
      "Seremban, 10 Disember 2025 – Pentadbiran Kerajaan Negeri Sembilan membentangkan Belanjawan Negeri 2026 berjumlah RM640 juta dengan menggariskan tema 'Pembangunan Sejahtera Rakyat Didahulukan'.",
      "Belanjawan ini memperuntukkan dana signifikan bagi membina kemudahan perumahan mesra rakyat, program pemerkasaan digital usahawan belia, serta bantuan input pertanian moden.",
      "Usaha proaktif ini akan memastikan rantaian ekonomi kekal berdaya saing di samping memelihara kedaulatan Adat Perpatih serta kebajikan sosioekonomi golongan rentan."
    ]
  }
];

interface Toast {
  id: string;
  message: string;
}

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  time: string;
}

export default function App() {
  // Navigation Routing States
  // 'utama' (Home), 'berita' (News Listing), 'artikel' (Article Details)
  const [view, setView] = useState<'utama' | 'berita' | 'artikel'>('berita');
  const [activeArticle, setActiveArticle] = useState<Article>(ARTICLES_DATA[0]);

  // Floating & Utility States
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [toasts, setToasts] = useState<Toast[]>([]);
  
  // Navigation / Search Panel States
  const [searchDropdownOpen, setSearchDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [tempSearchInput, setTempSearchInput] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  // News Filtering & Search States
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [selectedChips, setSelectedChips] = useState<string[]>(['Semua']);
  const [newsSearchQuery, setNewsSearchQuery] = useState('');
  const [newsCurrentPage, setNewsCurrentPage] = useState(1);

  // Chatbot States
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<Message[]>([
    {
      id: 'welcome',
      sender: 'bot',
      text: "Hai! Saya Perpatih@NS, pembantu peribadi pintar anda yang boleh menjawab persoalan mengenai urusan dan perkhidmatan berkaitan Pentadbiran Kerajaan Negeri Sembilan!",
      time: "Baru Saja"
    }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isBotTyping, setIsBotTyping] = useState(false);

  // Announcements Slider State
  const [announcementIndex, setAnnouncementIndex] = useState(0);
  const announcements = [
    "Jadual Hasil Kutipan Luar Pejabat Bagi Rancangan Rumah Rakyat/Pangsa Bulan : Julai 2026",
    "Pendaftaran Skim Bantuan Kasih NS 2026 Telah Dibuka Menerusi Portal ePembayaran",
    "Sesi Publisiti Draf Rancangan Struktur Negeri Sembilan 2040 Diadakan Sepanjang Julai Ini"
  ];

  // Gallery cloned slides to enable circular infinite loop with peeking
  const clonedGallerySlides = [
    { src: "https://www.figma.com/api/mcp/asset/75966551-bad0-4082-80a9-c0a65874ce24", alt: "Galeri Negeri Sembilan 2", originalIndex: 1 },
    { src: "https://www.figma.com/api/mcp/asset/bc05dbc7-b092-43cf-8495-8bf93b6e76c3", alt: "Galeri Negeri Sembilan 3", originalIndex: 2 },
    { src: "https://www.figma.com/api/mcp/asset/a7c08574-f79c-4207-b8f4-5348c31fc701", alt: "Galeri Negeri Sembilan 1", originalIndex: 0 },
    { src: "https://www.figma.com/api/mcp/asset/75966551-bad0-4082-80a9-c0a65874ce24", alt: "Galeri Negeri Sembilan 2", originalIndex: 1 },
    { src: "https://www.figma.com/api/mcp/asset/bc05dbc7-b092-43cf-8495-8bf93b6e76c3", alt: "Galeri Negeri Sembilan 3", originalIndex: 2 },
    { src: "https://www.figma.com/api/mcp/asset/a7c08574-f79c-4207-b8f4-5348c31fc701", alt: "Galeri Negeri Sembilan 1", originalIndex: 0 },
    { src: "https://www.figma.com/api/mcp/asset/75966551-bad0-4082-80a9-c0a65874ce24", alt: "Galeri Negeri Sembilan 2", originalIndex: 1 }
  ];

  // Services Carousel Offset State
  const [carouselIndex, setCarouselIndex] = useState(16);
  const [carouselTransitionEnabled, setCarouselTransitionEnabled] = useState(true);
  const carouselOffset = carouselIndex * 250;
  const servicesTrackRef = useRef<HTMLDivElement>(null);

  // Gallery Slider State
  const [galleryIndex, setGalleryIndex] = useState(2);
  const [galleryTransitionEnabled, setGalleryTransitionEnabled] = useState(true);

  // Accessibility State & Panel Controllers
  const [a11yPanelOpen, setA11yPanelOpen] = useState(false);

  // States for the 10 quick tools
  const [a11yInvert, setA11yInvert] = useState(false);
  const [a11yMonochrome, setA11yMonochrome] = useState(false);
  const [a11yDarkContrast, setA11yDarkContrast] = useState(false);
  const [a11yLightContrast, setA11yLightContrast] = useState(false);
  const [a11yLowSaturation, setA11yLowSaturation] = useState(false);
  const [a11yHighSaturation, setA11yHighSaturation] = useState(false);
  const [a11yHighlightLinks, setA11yHighlightLinks] = useState(false);
  const [a11yHighlightHeadings, setA11yHighlightHeadings] = useState(false);
  const [a11yScreenReader, setA11yScreenReader] = useState(false);
  const [a11yReadingMode, setA11yReadingMode] = useState(false);

  // States for adjustments (percentage scale from 80% to 200% / similar values)
  const [a11yContentScale, setA11yContentScale] = useState(100); // 80 - 150
  const [a11yFontSize, setA11yFontSize] = useState(100); // 80 - 200
  const [a11yLineHeight, setA11yLineHeight] = useState(100); // 100 - 250
  const [a11yLetterSpacing, setA11yLetterSpacing] = useState(100); // 100 - 200

  // Derived Accessibility Active State
  const isA11yActive = a11yInvert || a11yMonochrome || a11yDarkContrast || a11yLightContrast || 
                       a11yLowSaturation || a11yHighSaturation || a11yHighlightLinks || 
                       a11yHighlightHeadings || a11yScreenReader || a11yReadingMode || 
                       a11yContentScale !== 100 || a11yFontSize !== 100 || 
                       a11yLineHeight !== 100 || a11yLetterSpacing !== 100;

  // Language switcher state
  const [language, setLanguage] = useState<'MS' | 'EN'>('MS');
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);

  // Chatbot chat scroll auto-position helper
  const chatBodyRef = useRef<HTMLDivElement>(null);

  // ============================================================
  // SIDE EFFECTS & LIFECYCLE
  // ============================================================
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to chat bottom whenever messages change
  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
    }
  }, [chatMessages]);

  // Auto-rotate announcement every 5 seconds for an infinite loop
  useEffect(() => {
    const timer = setInterval(() => {
      setAnnouncementIndex(prev => (prev + 1) % announcements.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [announcements.length]);

  // Carousel loop logic for seamless infinite circular navigation
  useEffect(() => {
    if (carouselIndex >= 24 || carouselIndex < 16) {
      const timer = setTimeout(() => {
        setCarouselTransitionEnabled(false);
        setCarouselIndex(16 + ((carouselIndex % 8 + 8) % 8));
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [carouselIndex]);

  // Gallery loop logic for seamless infinite circular navigation
  useEffect(() => {
    if (galleryIndex >= 5) {
      const timer = setTimeout(() => {
        setGalleryTransitionEnabled(false);
        setGalleryIndex(2);
      }, 350);
      return () => clearTimeout(timer);
    } else if (galleryIndex <= 1) {
      const timer = setTimeout(() => {
        setGalleryTransitionEnabled(false);
        setGalleryIndex(4);
      }, 350);
      return () => clearTimeout(timer);
    }
  }, [galleryIndex]);

  // Sync and apply detailed accessibility preferences
  useEffect(() => {
    // 1. Invert colors
    if (a11yInvert) {
      document.documentElement.classList.add('a11y-invert');
    } else {
      document.documentElement.classList.remove('a11y-invert');
    }

    // 2. Monochrome
    if (a11yMonochrome) {
      document.documentElement.classList.add('a11y-monochrome');
    } else {
      document.documentElement.classList.remove('a11y-monochrome');
    }

    // 3. Dark Contrast
    if (a11yDarkContrast) {
      document.documentElement.classList.add('a11y-dark-contrast');
    } else {
      document.documentElement.classList.remove('a11y-dark-contrast');
    }

    // 4. Light Contrast
    if (a11yLightContrast) {
      document.documentElement.classList.add('a11y-light-contrast');
    } else {
      document.documentElement.classList.remove('a11y-light-contrast');
    }

    // 5. Low Saturation
    if (a11yLowSaturation) {
      document.documentElement.classList.add('a11y-low-sat');
    } else {
      document.documentElement.classList.remove('a11y-low-sat');
    }

    // 6. High Saturation
    if (a11yHighSaturation) {
      document.documentElement.classList.add('a11y-high-sat');
    } else {
      document.documentElement.classList.remove('a11y-high-sat');
    }

    // 7. Highlight Links
    if (a11yHighlightLinks) {
      document.documentElement.classList.add('a11y-highlight-links');
    } else {
      document.documentElement.classList.remove('a11y-highlight-links');
    }

    // 8. Highlight Headings
    if (a11yHighlightHeadings) {
      document.documentElement.classList.add('a11y-highlight-headings');
    } else {
      document.documentElement.classList.remove('a11y-highlight-headings');
    }

    // 9. Reading Mode
    if (a11yReadingMode) {
      document.documentElement.classList.add('a11y-reading-mode');
    } else {
      document.documentElement.classList.remove('a11y-reading-mode');
    }

    // 10. Font Size
    document.documentElement.style.setProperty('--a11y-font-size', `${a11yFontSize / 100}rem`);
    
    // 11. Line Height
    document.documentElement.style.setProperty('--a11y-line-height', `${a11yLineHeight / 100}`);

    // 12. Letter Spacing
    document.documentElement.style.setProperty('--a11y-letter-spacing', `${(a11yLetterSpacing - 100) / 100}em`);

    // 13. Content Scale
    const mainEl = document.getElementById('main-content');
    if (mainEl) {
      mainEl.style.transform = a11yContentScale !== 100 ? `scale(${a11yContentScale / 100})` : 'none';
      mainEl.style.transformOrigin = 'top center';
      if (a11yContentScale > 100) {
        mainEl.style.marginBottom = `${(a11yContentScale - 100) * 0.5}vh`;
      } else {
        mainEl.style.marginBottom = '0';
      }
    }
  }, [
    a11yInvert,
    a11yMonochrome,
    a11yDarkContrast,
    a11yLightContrast,
    a11yLowSaturation,
    a11yHighSaturation,
    a11yHighlightLinks,
    a11yHighlightHeadings,
    a11yReadingMode,
    a11yFontSize,
    a11yLineHeight,
    a11yLetterSpacing,
    a11yContentScale
  ]);

  // Screen Reader Speech synthesis effect
  useEffect(() => {
    if (!a11yScreenReader) return;

    let lastText = '';
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      let text = target.innerText || target.getAttribute('aria-label') || target.getAttribute('alt') || '';
      text = text.trim();
      if (text && text !== lastText && text.length < 200) {
        lastText = text;
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = language === 'MS' ? 'ms-MY' : 'en-US';
        window.speechSynthesis.speak(utterance);

        target.classList.add('a11y-hover-highlight');
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      target.classList.remove('a11y-hover-highlight');
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      window.speechSynthesis.cancel();
    };
  }, [a11yScreenReader, language]);

  const handleA11yReset = () => {
    setA11yInvert(false);
    setA11yMonochrome(false);
    setA11yDarkContrast(false);
    setA11yLightContrast(false);
    setA11yLowSaturation(false);
    setA11yHighSaturation(false);
    setA11yHighlightLinks(false);
    setA11yHighlightHeadings(false);
    setA11yScreenReader(false);
    setA11yReadingMode(false);
    setA11yContentScale(100);
    setA11yFontSize(100);
    setA11yLineHeight(100);
    setA11yLetterSpacing(100);
    showToast("Semua tetapan kebolehcapaian telah ditetapkan semula.");
  };

  const handleLanguageChange = (lang: 'MS' | 'EN') => {
    setLanguage(lang);
    setLangDropdownOpen(false);
    showToast(lang === 'MS' ? "Bahasa ditukar kepada Bahasa Melayu (MS)" : "Language changed to English (EN)");
  };

  // ============================================================
  // EVENT HANDLERS & HELPERS
  // ============================================================
  const showToast = (message: string) => {
    const id = Date.now().toString();
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 2800);
  };

  const handleNavClick = (targetView: 'utama' | 'berita') => {
    setView(targetView);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsTileClick = (article: Article) => {
    setActiveArticle(article);
    setView('artikel');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (tempSearchInput.trim()) {
      setNewsSearchQuery(tempSearchInput);
      setSearchQuery(tempSearchInput);
      setView('berita');
      setSearchDropdownOpen(false);
      showToast(`Mencari berita berkaitan "${tempSearchInput}"`);
    } else {
      showToast('Sila masukkan kata kunci carian.');
    }
  };

  const handleMainSearchSelect = (tag: string) => {
    setTempSearchInput(tag);
    setNewsSearchQuery(tag);
    setSearchQuery(tag);
    setView('berita');
    setSearchDropdownOpen(false);
    showToast(`Mencari berita berkaitan "${tag}"`);
  };

  // ChatBot Automated Intelligence Engine
  const handleSendMessage = () => {
    if (!chatInput.trim()) return;

    const userMessage = chatInput.trim();
    const newMessage: Message = {
      id: Date.now().toString(),
      sender: 'user',
      text: userMessage,
      time: "Baru Saja"
    };

    setChatMessages(prev => [...prev, newMessage]);
    setChatInput('');
    setIsBotTyping(true);

    // AI simulation delay
    setTimeout(() => {
      const normalizedMsg = userMessage.toLowerCase();
      let botText = '';

      if (normalizedMsg.includes('cukai') || normalizedMsg.includes('bayar') || normalizedMsg.includes('bil')) {
        botText = "Bagi urusan bayaran cukai taksiran atau cukai tanah di Negeri Sembilan, anda boleh melakukannya menerusi Portal ePembayaran SUKNS atau menggunakan sistem e-Tanah. Selain itu, anda boleh merujuk jadual kutipan Luar Pejabat bagi pembayaran fizikal RRR.";
      } else if (normalizedMsg.includes('e-tanah') || normalizedMsg.includes('tanah') || normalizedMsg.includes('geran')) {
        botText = "Sistem Pentadbiran Tanah Elektronik (e-Tanah) Negeri Sembilan membolehkan anda membuat pendaftaran, pemindahan hak milik, dan semakan hak milik tanah secara atas talian. Sistem bersepadu ini mengurangkan masa menunggu daripada berminggu kepada beberapa jam sahaja!";
      } else if (normalizedMsg.includes('bantuan') || normalizedMsg.includes('rumah') || normalizedMsg.includes('skim')) {
        botText = "Pentadbiran menyediakan pelbagai inisiatif rumah mesra rakyat dan bantuan kebajikan termasuk Rancangan Rumah Rakyat, bantuan persekolahan, serta Bantuan Kasih NS bagi meringankan beban golongan sasar.";
      } else if (normalizedMsg.includes('pelaburan') || normalizedMsg.includes('mvv') || normalizedMsg.includes('vision') || normalizedMsg.includes('industri')) {
        botText = "Kawasan Malaysia Vision Valley (MVV) 2.0 merupakan Zon Pembangunan Ekonomi utama yang merangkumi Seremban dan Port Dickson. Ia memfokuskan kepada industri pembuatan berteknologi tinggi, logistik automotif, serta pelaburan global bagi mewujudkan peluang pekerjaan baru.";
      } else if (normalizedMsg.includes('menteri besar') || normalizedMsg.includes('mb') || normalizedMsg.includes('aminuddin')) {
        botText = "Menteri Besar Negeri Sembilan sekarang ialah Dato' Seri Utama Haji Aminuddin Harun, yang komited memajukan negeri dengan motto 'Bersih, Muafakat, Sejahtera'.";
      } else if (normalizedMsg.includes('adat') || normalizedMsg.includes('perpatih') || normalizedMsg.includes('sejarah') || normalizedMsg.includes('warisan')) {
        botText = "Negeri Sembilan sangat unik dengan amalan Adat Perpatih yang mengutamakan struktur kekeluargaan matrilinear, muafakat, serta keharmonian komuniti. Adat ini telah diamalkan selama lebih 300 tahun dan menjadi mercu tanda warisan sejarah kebanggaan kami.";
      } else if (normalizedMsg.includes('berita') || normalizedMsg.includes('kdnk')) {
        botText = "Anda boleh meneliti senarai berita terkini kami secara dinamik di portal ini! Contohnya, berita sasaran peningkatan KDNK N9 kepada RM109.12 bilion menjelang tahun 2040 di bawah Draf Rancangan Struktur 2040.";
      } else {
        botText = "Terima kasih atas pertanyaan anda tentang Negeri Sembilan! Sila tanyakan soalan mengenai 'cukai', 'e-Tanah', 'bantuan rumah', 'pelaburan MVV 2.0', 'Menteri Besar', atau 'Adat Perpatih' untuk respons tersasar.";
      }

      setChatMessages(prev => [
        ...prev,
        {
          id: Date.now().toString() + '-reply',
          sender: 'bot',
          text: botText,
          time: "Baru Saja"
        }
      ]);
      setIsBotTyping(false);
    }, 850);
  };

  // Carousel slider helper for Services popular (infinite loop)
  const handleCarouselNav = (direction: 'prev' | 'next') => {
    setCarouselTransitionEnabled(true);
    if (direction === 'prev') {
      setCarouselIndex(prev => prev - 1);
    } else {
      setCarouselIndex(prev => prev + 1);
    }
  };

  // Gallery slider helper (infinite loop)
  const handleGalleryNav = (direction: 'prev' | 'next') => {
    setGalleryTransitionEnabled(true);
    if (direction === 'prev') {
      setGalleryIndex(prev => prev - 1);
    } else {
      setGalleryIndex(prev => prev + 1);
    }
  };

  // Filter Drawer & Category Chip Selectors
  const handleChipClick = (chip: string) => {
    if (chip === 'Semua') {
      setSelectedChips(['Semua']);
    } else {
      const withoutSemua = selectedChips.filter(c => c !== 'Semua');
      if (withoutSemua.includes(chip)) {
        const next = withoutSemua.filter(c => c !== chip);
        setSelectedChips(next.length === 0 ? ['Semua'] : next);
      } else {
        setSelectedChips([...withoutSemua, chip]);
      }
    }
    setNewsCurrentPage(1);
  };

  const clearNewsFilters = () => {
    setNewsSearchQuery('');
    setSearchQuery('');
    setTempSearchInput('');
    setSelectedChips(['Semua']);
    setNewsCurrentPage(1);
    showToast("Semua tapisan berita telah dikosongkan.");
  };

  // Filtering Logic for News Grid
  const filteredArticles = ARTICLES_DATA.filter(article => {
    // 1. Filter by Search Query
    const matchesSearch = newsSearchQuery 
      ? article.title.toLowerCase().includes(newsSearchQuery.toLowerCase()) || 
        article.category.toLowerCase().includes(newsSearchQuery.toLowerCase()) || 
        article.summary.toLowerCase().includes(newsSearchQuery.toLowerCase())
      : true;

    // 2. Filter by selected category/year chips
    if (selectedChips.includes('Semua')) {
      return matchesSearch;
    }

    const matchesCategoriesOrYears = selectedChips.some(chip => {
      // Check if matches category
      if (article.category.toLowerCase() === chip.toLowerCase()) {
        return true;
      }
      // Check if matches year
      if (article.date.includes(chip)) {
        return true;
      }
      return false;
    });

    return matchesSearch && matchesCategoriesOrYears;
  });

  // Paginated articles
  const ARTICLES_PER_PAGE = 6;
  const totalNewsPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE) || 1;
  const paginatedArticles = filteredArticles.slice(
    (newsCurrentPage - 1) * ARTICLES_PER_PAGE,
    newsCurrentPage * ARTICLES_PER_PAGE
  );

  return (
    <div>
      <a href="#main-content" className="skip-link">Langkau ke kandungan utama</a>

      {/* ================= ANNOUNCEMENT BAR ================= */}
      <div className="announce-bar">
        <span className="tag">Notis &amp; Pengumuman</span>
        <div className="announce-nav sm:flex hidden items-center gap-0.5 ml-2 mr-0.5">
          <button 
            type="button" 
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10 text-[#eee] hover:text-white transition-all active:scale-90"
            aria-label="Pengumuman sebelumnya" 
            onClick={() => setAnnouncementIndex(prev => (prev - 1 + announcements.length) % announcements.length)}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button 
            type="button" 
            className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/10 text-[#eee] hover:text-white transition-all active:scale-90"
            aria-label="Pengumuman seterusnya" 
            onClick={() => setAnnouncementIndex(prev => (prev + 1) % announcements.length)}
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
        <div className="msg pr-4" style={{ perspective: '400px' }}>
          <AnimatePresence mode="wait">
            <motion.span
              key={announcementIndex}
              initial={{ opacity: 0, y: 15, rotateX: -45 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              exit={{ opacity: 0, y: -15, rotateX: 45 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              style={{ display: "inline-block", transformOrigin: "center center" }}
              className="w-full truncate text-[#eee] hover:text-white transition-colors duration-200"
            >
              {announcements[announcementIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="actions">
          <button 
            type="button" 
            onClick={() => showToast("Halaman Soalan Lazim dibuka (simulasi demo).")}
            aria-label="Soalan Lazim (FAQ)"
            title="Soalan Lazim (FAQ)"
          >
            <img src={faqImg} alt="FAQ" className="w-6 h-6 object-contain" />
          </button>
          <button 
            type="button" 
            onClick={() => showToast("Panel aduan & maklum balas dibuka (simulasi demo).")}
            aria-label="Aduan & Maklum Balas"
            title="Aduan & Maklum Balas"
          >
            <img src={complaintsImg} alt="Aduan" className="w-6 h-6 object-contain" />
          </button>
          <button 
            type="button" 
            onClick={() => showToast("Peta laman dibuka (simulasi demo).")}
            aria-label="Peta Laman"
            title="Peta Laman"
          >
            <img src={sitemapImg} alt="Peta Laman" className="w-6 h-6 object-contain" />
          </button>
          <button 
            type="button" 
            onClick={() => showToast("Maklumat hubungi kami ditunjukkan di bahagian kaki halaman (footer).")}
            aria-label="Hubungi Kami"
            title="Hubungi Kami"
          >
            <img src={contactUsImg} alt="Hubungi Kami" className="w-6 h-6 object-contain" />
          </button>
        </div>
      </div>

      {/* ================= HEADER / NAV ================= */}
      <header className="site-header">
        <div className={`nav-wrap ${isScrolled || view !== 'utama' ? 'solid' : ''}`} id="navWrap">
          <a className="brand cursor-pointer" onClick={() => handleNavClick('utama')}>
            <img src="https://www.figma.com/api/mcp/asset/392cae89-65a5-4922-b53c-00ba1fadc6f2" referrerPolicy="no-referrer" alt="Jata Negeri Sembilan" />
            <span>
              <span className="tagline block">Portal Rasmi</span>
              <span className="name block">KERAJAAN NEGERI SEMBILAN</span>
              <span className="motto block">Bersih &nbsp;•&nbsp; Muafakat &nbsp;•&nbsp; Sejahtera</span>
            </span>
          </a>

          <nav className="main-nav" aria-label="Navigasi utama">
            <div className={`nav-item ${view === 'utama' ? 'active' : ''}`}>
              <a className="cursor-pointer" onClick={() => handleNavClick('utama')}>Utama</a>
            </div>

            <div className={`nav-item has-dropdown ${activeDropdown === 'korporat' ? 'open' : ''}`}>
              <button type="button" onClick={() => setActiveDropdown(activeDropdown === 'korporat' ? null : 'korporat')}>
                Korporat
                <svg className="chev" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1.5 3.5L5 7l3.5-3.5"/></svg>
              </button>
              <div className="dropdown-panel">
                <div className="submenu-item">
                  <span className="submenu-trigger">Mengenai Kami</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Maklumat Mengenai PSUKNS"); }}>Mengenai PSUKNS</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Visi, Misi, Moto PSUKNS"); }}>Visi, Misi, Moto</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Dasar & Objektif SUKNS"); }}>Dasar &amp; Objektif</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Struktur Organisasi SUKNS"); }}>Struktur Organisasi</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Bahagian & Unit SUKNS"); }}>Bahagian / Unit</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Piagam Pelanggan Rasmi"); }}>Piagam Pelanggan</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Laporan Pencapaian Piagam Pelanggan"); }}>Laporan Pencapaian Piagam Pelanggan</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Pelan Strategik Organisasi SUKNS"); }}>Pelan Strategik Organisasi</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Pelan Strategik Pendigitalan SUKNS"); }}>Pelan Strategik Pendigitalan</a>
                  </div>
                </div>

                <div className="submenu-item">
                  <span className="submenu-trigger">Mengenai N. Sembilan</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Pengenalan Negeri Sembilan"); }}>Pengenalan</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Sejarah Penubuhan Negeri Sembilan"); }}>Sejarah Penubuhan</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Warisan Adat Perpatih"); }}>Adat Perpatih</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Struktur Pentadbiran Kerajaan Negeri Sembilan"); }}>Struktur Pentadbiran</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Lokasi & Geografi Negeri Sembilan"); }}>Lokasi &amp; Geografi</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Bendera & Jata Kebanggaan Negeri"); }}>Bendera &amp; Jata</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Lagu Kebesaran Negeri Sembilan"); }}>Lagu Kebesaran</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Sistem Undang Dan Tunku Besar Tampin"); }}>Undang &amp; Tunku Besar Tampin</a>
                  </div>
                </div>

                <div className="submenu-item">
                  <span className="submenu-trigger">Institusi &amp; Agensi</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Senarai Jabatan Negeri Sembilan"); }}>Jabatan Negeri</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Pejabat Daerah & Tanah Negeri Sembilan"); }}>Pejabat Daerah &amp; Tanah</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Badan Berkanun Negeri Sembilan"); }}>Badan Berkanun</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Pihak Berkuasa Tempatan (PBT) Negeri Sembilan"); }}>Pihak Berkuasa Tempatan</a>
                  </div>
                </div>

                <div className="submenu-item">
                  <span className="submenu-trigger">Dasar &amp; Governans</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Rancangan Pembangunan Negeri Sembilan 2021-2025"); }}>Rancangan Pembangunan</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Majlis Bersama Jabatan (MBJ)"); }}>Majlis Bersama Jabatan (MBJ)</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Pekeliling Persekutuan dan Negeri Sembilan"); }}>Pekeliling Persekutuan &amp; Negeri</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Akta/Pekeliling Perundangan"); }}>Akta/Pekeliling</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Polisi Agensi Rasmi"); }}>Polisi Agensi</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Garis Panduan Agensi"); }}>Garis Panduan</a>
                  </div>
                </div>

                <div className="submenu-item">
                  <span className="submenu-trigger">Kerjaya</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Peluang Jawatan Kosong di Kerajaan Negeri Sembilan"); }}>Jawatan Kosong</a>
                  </div>
                </div>

                <div className="submenu-item">
                  <span className="submenu-trigger">Untuk Penjawat Awam</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Ketua Pegawai Digital (CDO)"); }}>Ketua Pegawai Digital (CDO)</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Pegawai Keselamatan ICT (ICTSO)"); }}>Pegawai Keselamatan ICT (ICTSO)</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Pegawai Kanan SUKNS"); }}>Pegawai Kanan SUKNS</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Muat Turun Borang Penjawat Awam"); }}>Muat Turun Borang</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("CSIRTNS Cyber Security Team"); }}>CSIRTNS</a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`nav-item has-dropdown ${activeDropdown === 'perkhidmatan' ? 'open' : ''}`}>
              <button type="button" onClick={() => setActiveDropdown(activeDropdown === 'perkhidmatan' ? null : 'perkhidmatan')}>
                Perkhidmatan
                <svg className="chev" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1.5 3.5L5 7l3.5-3.5"/></svg>
              </button>
              <div className="dropdown-panel">
                <div className="submenu-item">
                  <span className="submenu-trigger">Perkhidmatan &amp; Bayaran</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); handleNavClick('utama'); setTimeout(() => { window.location.hash = "perkhidmatan"; }, 100); }}>Pembayaran Cukai Tanah</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); handleNavClick('utama'); setTimeout(() => { window.location.hash = "perkhidmatan"; }, 100); }}>Aduan Rakyat (SISPAA)</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); handleNavClick('utama'); setTimeout(() => { window.location.hash = "perkhidmatan"; }, 100); }}>GIS9 Geoinformasi</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Sistem Pengurusan Perkahwinan Islam (SPPIM)"); }}>Sistem Perkahwinan (SPPIM)</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); handleNavClick('utama'); setTimeout(() => { window.location.hash = "perkhidmatan"; }, 100); }}>Muat Turun Borang Rasmi</a>
                  </div>
                </div>

                <div className="submenu-item">
                  <span className="submenu-trigger">Bantuan &amp; Kebajikan</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); handleNavClick('utama'); setTimeout(() => { window.location.hash = "perkhidmatan"; }, 100); }}>Inisiatif Belanjawan Negeri</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); handleNavClick('utama'); setTimeout(() => { window.location.hash = "perkhidmatan"; }, 100); }}>Dasar Perumahan Negeri Sembilan</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); handleNavClick('utama'); setTimeout(() => { window.location.hash = "perkhidmatan"; }, 100); }}>Semakan Status Permohonan</a>
                  </div>
                </div>

                <div className="submenu-item">
                  <span className="submenu-trigger">Sektor &amp; Ekonomi</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Sektor Pelaburan Negeri Sembilan"); }}>Pelaburan</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Sektor Pertanian & Asas Tani"); }}>Pertanian &amp; Asas Tani</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Sektor Pendidikan Negeri Sembilan"); }}>Pendidikan</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Sektor Kesihatan & Kebajikan Awam"); }}>Kesihatan &amp; Kebajikan</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Promosi Pelancongan Negeri Sembilan"); }}>Pelancongan</a>
                  </div>
                </div>

                <div className="submenu-item">
                  <span className="submenu-trigger">Perniagaan &amp; Tender</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Sistem Tender/Sebut Harga Negeri Sembilan"); }}>Tender / Sebut Harga</a>
                  </div>
                </div>

                <div className="submenu-item">
                  <span className="submenu-trigger">Keselamatan &amp; Perundangan</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Informasi Jenayah & Keselamatan Awam"); }}>Jenayah &amp; Keselamatan</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Sistem Kesalahan Syariah Negeri Sembilan"); }}>Kesalahan Syariah</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Agensi Anti Dadah Kebangsaan (AADK)"); }}>Agensi Anti Dadah (AADK)</a>
                  </div>
                </div>

                <div className="submenu-item">
                  <span className="submenu-trigger">Kehormatan Negeri</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Laman Informasi Pingat Negeri Sembilan Darul Khusus"); }}>Laman Informasi Pingat</a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`nav-item has-dropdown ${activeDropdown === 'media' || view === 'berita' || view === 'artikel' ? 'open' : ''}`}>
              <button type="button" onClick={() => setActiveDropdown(activeDropdown === 'media' ? null : 'media')}>
                Media
                <svg className="chev" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1.5 3.5L5 7l3.5-3.5"/></svg>
              </button>
              <div className="dropdown-panel align-left">
                <div className="submenu-item">
                  <span className="submenu-trigger">Berita &amp; Hebahan</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer font-bold text-[var(--red)]" onClick={() => { setActiveDropdown(null); handleNavClick('berita'); }}>Berita Terkini</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Pengumuman Rasmi Pentadbiran"); }}>Pengumuman Rasmi</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Keratan Akhbar Tempatan & Nasional"); }}>Keratan Akhbar</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Aktiviti-aktiviti Kerajaan Negeri Sembilan"); }}>Aktiviti Pentadbiran</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Penerbitan Rasmi & Warta Kerajaan"); }}>Penerbitan &amp; Warta</a>
                  </div>
                </div>

                <div className="submenu-item">
                  <span className="submenu-trigger">Galeri Media</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Galeri Foto Aktiviti"); }}>Galeri Foto</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Galeri Video Rasmi"); }}>Galeri Video</a>
                  </div>
                </div>

                <div className="submenu-item">
                  <span className="submenu-trigger">Arkib Media</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Arkib Pengumuman Lampau"); }}>Arkib Pengumuman</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Arkib Berita Lama"); }}>Arkib Berita</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Arkib Galeri Media"); }}>Arkib Galeri</a>
                  </div>
                </div>

                <div className="submenu-item">
                  <span className="submenu-trigger">Media Sosial</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); handleNavClick('utama'); setTimeout(() => { window.location.hash = "media-sosial"; }, 100); }}>Facebook Rasmi PSUKNS</a>
                  </div>
                </div>
              </div>
            </div>

            <div className={`nav-item has-dropdown ${activeDropdown === 'hubungikami' ? 'open' : ''}`}>
              <button type="button" onClick={() => setActiveDropdown(activeDropdown === 'hubungikami' ? null : 'hubungikami')}>
                Hubungi Kami
                <svg className="chev" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1.5 3.5L5 7l3.5-3.5"/></svg>
              </button>
              <div className="dropdown-panel align-left">
                <div className="submenu-item">
                  <span className="submenu-trigger">Hubungi Pentadbiran</span>
                  <div className="sub-submenu-panel">
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); showToast("Direktori Pegawai SUKNS"); }}>Direktori Pegawai</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); handleNavClick('utama'); setTimeout(() => { window.location.hash = "footer"; }, 100); }}>Alamat &amp; Peta Lokasi</a>
                    <a className="cursor-pointer" onClick={() => { setActiveDropdown(null); handleNavClick('utama'); setTimeout(() => { window.location.hash = "footer"; }, 100); }}>Aduan, Pertanyaan &amp; Maklum Balas</a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="nav-utils">
            <div className="relative">
              <button 
                type="button" 
                className="lang-pill" 
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                aria-expanded={langDropdownOpen}
                aria-haspopup="true"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[18px] h-[18px]"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18z"/></svg>
                <span>{language}</span>
                <svg viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ width: '8px', height: '8px' }}><path d="M1.5 3.5L5 7l3.5-3.5"/></svg>
              </button>

              {langDropdownOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setLangDropdownOpen(false)} />
                  <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-slate-100 py-1.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <button
                      type="button"
                      onClick={() => handleLanguageChange('MS')}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2 ${language === 'MS' ? 'bg-[#b22222]/10 text-[#b22222]' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
                      Bahasa Melayu
                    </button>
                    <button
                      type="button"
                      onClick={() => handleLanguageChange('EN')}
                      className={`w-full text-left px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2 ${language === 'EN' ? 'bg-[#b22222]/10 text-[#b22222]' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      <span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span>
                      English (EN)
                    </button>
                  </div>
                </>
              )}
            </div>

            <div className="relative">
              <button 
                type="button" 
                className={`icon-btn ${isA11yActive ? 'active-state' : ''}`} 
                aria-label="Ciri kebolehcapaian"
                onClick={() => setA11yPanelOpen(!a11yPanelOpen)}
                style={{ background: isA11yActive ? 'rgba(255,255,255,0.3)' : 'none' }}
                aria-expanded={a11yPanelOpen}
                aria-haspopup="true"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="4" r="1.6" fill="currentColor" stroke="none"/><path d="M5 8l7 2 7-2M12 10v4l-3 7M12 14l3 7"/></svg>
              </button>

              {a11yPanelOpen && (
                <>
                  <div className="fixed inset-0 z-40" onClick={() => setA11yPanelOpen(false)} />
                  <div className="absolute right-0 mt-2 w-[380px] sm:w-[410px] max-w-[calc(100vw-24px)] bg-white rounded-xl overflow-hidden shadow-2xl border border-slate-100 flex flex-col z-50 origin-top-right animate-in fade-in slide-in-from-top-2 duration-150 text-slate-800">
                    {/* Header */}
                    <div className="p-4 flex items-center justify-between border-b border-slate-100 bg-white">
                      <div className="flex items-center gap-2">
                        <h2 className="text-sm sm:text-base font-bold text-slate-800 flex items-center gap-1.5">
                          Alat Kebolehcapaian
                        </h2>
                        <button 
                          type="button" 
                          onClick={handleA11yReset}
                          className="p-1 text-slate-500 hover:text-[#b22222] hover:bg-slate-50 rounded-full transition-colors" 
                          title="Tetapkan semula semua"
                          aria-label="Tetapkan semula semua"
                        >
                          <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/>
                            <path d="M16 3h5v5"/>
                            <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/>
                            <path d="M8 21H3v-5"/>
                          </svg>
                        </button>
                      </div>
                      <button 
                        type="button" 
                        onClick={() => setA11yPanelOpen(false)}
                        className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#2563EB] hover:bg-blue-700 text-white flex items-center justify-center shadow-md transition-transform hover:scale-105 active:scale-95"
                        aria-label="Tutup panel kebolehcapaian"
                      >
                        <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                    </div>

                    {/* Content body */}
                    <div className="p-3 sm:p-4 space-y-3 sm:space-y-4 max-h-[70vh] overflow-y-auto flex-1">
                      {/* Tool Grid */}
                      <div className="grid grid-cols-2 gap-2">
                        {/* 1. Warna terbalik */}
                        <button
                          type="button"
                          onClick={() => setA11yInvert(!a11yInvert)}
                          className={`flex items-center gap-1.5 p-2 rounded-xl border text-left text-[11px] sm:text-xs font-semibold transition-all ${
                            a11yInvert 
                              ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB] shadow-xs' 
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50 hover:bg-slate-50'
                          }`}
                        >
                          <svg className="w-[14px] h-[14px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M12 2a10 10 0 0 0 0 20V2z" fill="currentColor" />
                          </svg>
                          <span className="truncate">Warna terbalik</span>
                        </button>

                        {/* 2. Monokrom */}
                        <button
                          type="button"
                          onClick={() => setA11yMonochrome(!a11yMonochrome)}
                          className={`flex items-center gap-1.5 p-2 rounded-xl border text-left text-[11px] sm:text-xs font-semibold transition-all ${
                            a11yMonochrome 
                              ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB] shadow-xs' 
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50 hover:bg-slate-50'
                          }`}
                        >
                          <svg className="w-[14px] h-[14px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M4.93 4.93l14.14 14.14M12 2a10 10 0 0 0 0 20" />
                          </svg>
                          <span className="truncate">Monokrom</span>
                        </button>

                        {/* 3. Kontra gelap */}
                        <button
                          type="button"
                          onClick={() => {
                            setA11yDarkContrast(!a11yDarkContrast);
                            if (!a11yDarkContrast) setA11yLightContrast(false);
                          }}
                          className={`flex items-center gap-1.5 p-2 rounded-xl border text-left text-[11px] sm:text-xs font-semibold transition-all ${
                            a11yDarkContrast 
                              ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB] shadow-xs' 
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50 hover:bg-slate-50'
                          }`}
                        >
                          <svg className="w-[14px] h-[14px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill={a11yDarkContrast ? "currentColor" : "none"} />
                          </svg>
                          <span className="truncate">Kontra gelap</span>
                        </button>

                        {/* 4. Kontra cerah */}
                        <button
                          type="button"
                          onClick={() => {
                            setA11yLightContrast(!a11yLightContrast);
                            if (!a11yLightContrast) setA11yDarkContrast(false);
                          }}
                          className={`flex items-center gap-1.5 p-2 rounded-xl border text-left text-[11px] sm:text-xs font-semibold transition-all ${
                            a11yLightContrast 
                              ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB] shadow-xs' 
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50 hover:bg-slate-50'
                          }`}
                        >
                          <svg className="w-[14px] h-[14px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="5" fill={a11yLightContrast ? "currentColor" : "none"} />
                            <line x1="12" y1="1" x2="12" y2="3" />
                            <line x1="12" y1="21" x2="12" y2="23" />
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                            <line x1="1" y1="12" x2="3" y2="12" />
                            <line x1="21" y1="12" x2="23" y2="12" />
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                          </svg>
                          <span className="truncate">Kontra cerah</span>
                        </button>

                        {/* 5. Kepekatan rendah */}
                        <button
                          type="button"
                          onClick={() => {
                            setA11yLowSaturation(!a11yLowSaturation);
                            if (!a11yLowSaturation) setA11yHighSaturation(false);
                          }}
                          className={`flex items-center gap-1.5 p-2 rounded-xl border text-left text-[11px] sm:text-xs font-semibold transition-all ${
                            a11yLowSaturation 
                              ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB] shadow-xs' 
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50 hover:bg-slate-50'
                          }`}
                        >
                          <svg className="w-[14px] h-[14px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="2 2">
                            <circle cx="12" cy="12" r="10" />
                          </svg>
                          <span className="truncate">Kepekatan rendah</span>
                        </button>

                        {/* 6. Kepekatan tinggi */}
                        <button
                          type="button"
                          onClick={() => {
                            setA11yHighSaturation(!a11yHighSaturation);
                            if (!a11yHighSaturation) setA11yLowSaturation(false);
                          }}
                          className={`flex items-center gap-1.5 p-2 rounded-xl border text-left text-[11px] sm:text-xs font-semibold transition-all ${
                            a11yHighSaturation 
                              ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB] shadow-xs' 
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50 hover:bg-slate-50'
                          }`}
                        >
                          <svg className="w-[14px] h-[14px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <circle cx="12" cy="12" r="10" />
                            <circle cx="12" cy="12" r="6" fill="currentColor" />
                          </svg>
                          <span className="truncate">Kepekatan tinggi</span>
                        </button>

                        {/* 7. Serlah pautan */}
                        <button
                          type="button"
                          onClick={() => setA11yHighlightLinks(!a11yHighlightLinks)}
                          className={`flex items-center gap-1.5 p-2 rounded-xl border text-left text-[11px] sm:text-xs font-semibold transition-all ${
                            a11yHighlightLinks 
                              ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB] shadow-xs' 
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50 hover:bg-slate-50'
                          }`}
                        >
                          <svg className="w-[14px] h-[14px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                            <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                          </svg>
                          <span className="truncate">Serlah pautan</span>
                        </button>

                        {/* 8. Serlah tajuk */}
                        <button
                          type="button"
                          onClick={() => setA11yHighlightHeadings(!a11yHighlightHeadings)}
                          className={`flex items-center gap-1.5 p-2 rounded-xl border text-left text-[11px] sm:text-xs font-semibold transition-all ${
                            a11yHighlightHeadings 
                              ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB] shadow-xs' 
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50 hover:bg-slate-50'
                          }`}
                        >
                          <svg className="w-[14px] h-[14px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <rect x="3" y="3" width="18" height="18" rx="2" />
                            <path d="M7 8h10M12 8v8M9 16h6" />
                          </svg>
                          <span className="truncate">Serlah tajuk</span>
                        </button>

                        {/* 9. Pembaca skrin */}
                        <button
                          type="button"
                          onClick={() => {
                            const next = !a11yScreenReader;
                            setA11yScreenReader(next);
                            if (next) {
                              showToast("Pembaca skrin diaktifkan. Layangkan tetikus pada teks untuk mendengar sebutan.");
                            }
                          }}
                          className={`flex items-center gap-1.5 p-2 rounded-xl border text-left text-[11px] sm:text-xs font-semibold transition-all ${
                            a11yScreenReader 
                              ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB] shadow-xs' 
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50 hover:bg-slate-50'
                          }`}
                        >
                          <svg className="w-[14px] h-[14px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" />
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                          </svg>
                          <span className="truncate">Pembaca skrin</span>
                        </button>

                        {/* 10. Mod baca */}
                        <button
                          type="button"
                          onClick={() => setA11yReadingMode(!a11yReadingMode)}
                          className={`flex items-center gap-1.5 p-2 rounded-xl border text-left text-[11px] sm:text-xs font-semibold transition-all ${
                            a11yReadingMode 
                              ? 'border-[#2563EB] bg-[#2563EB]/5 text-[#2563EB] shadow-xs' 
                              : 'border-slate-200 hover:border-slate-300 text-slate-700 bg-slate-50/50 hover:bg-slate-50'
                          }`}
                        >
                          <svg className="w-[14px] h-[14px] shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                            <line x1="4" y1="6" x2="20" y2="6" />
                            <line x1="4" y1="12" x2="20" y2="12" />
                            <line x1="4" y1="18" x2="20" y2="18" />
                          </svg>
                          <span className="truncate">Mod baca</span>
                        </button>
                      </div>

                      {/* Slider Adjustments */}
                      <div className="space-y-2 pt-1 text-xs">
                        {/* 1. Skala kandungan */}
                        <div className="p-2.5 bg-slate-50/60 border border-slate-100 rounded-xl flex items-center justify-between gap-3">
                          <div className="w-[100px] shrink-0">
                            <span className="text-xs font-bold text-slate-700 block truncate">Skala kandungan</span>
                          </div>
                          <div className="flex items-center gap-2 flex-1">
                            <input 
                              type="range" 
                              min="80" 
                              max="150" 
                              step="5"
                              value={a11yContentScale}
                              onChange={(e) => setA11yContentScale(Number(e.target.value))}
                              className="flex-1 accent-[#2563EB] h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="text-xs font-bold text-slate-600 min-w-[34px] text-right">{a11yContentScale}%</span>
                          </div>
                          <div className="flex gap-1 shrink-0">
                            <button 
                              type="button"
                              onClick={() => setA11yContentScale(prev => Math.max(80, prev - 5))}
                              className="w-[24px] h-[24px] rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-700 hover:border-slate-300 transition-all active:scale-95"
                              aria-label="Kurangkan skala kandungan"
                            >
                              —
                            </button>
                            <button 
                              type="button"
                              onClick={() => setA11yContentScale(prev => Math.min(150, prev + 5))}
                              className="w-[24px] h-[24px] rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-700 hover:border-slate-300 transition-all active:scale-95"
                              aria-label="Tambahkan skala kandungan"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* 2. Saiz huruf */}
                        <div className="p-2.5 bg-slate-50/60 border border-slate-100 rounded-xl flex items-center justify-between gap-3">
                          <div className="w-[100px] shrink-0">
                            <span className="text-xs font-bold text-slate-700 block truncate">Saiz huruf</span>
                          </div>
                          <div className="flex items-center gap-2 flex-1">
                            <input 
                              type="range" 
                              min="80" 
                              max="200" 
                              step="5"
                              value={a11yFontSize}
                              onChange={(e) => setA11yFontSize(Number(e.target.value))}
                              className="flex-1 accent-[#2563EB] h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="text-xs font-bold text-slate-600 min-w-[34px] text-right">{a11yFontSize}%</span>
                          </div>
                          <div className="flex gap-1 shrink-0">
                            <button 
                              type="button"
                              onClick={() => setA11yFontSize(prev => Math.max(80, prev - 5))}
                              className="w-[24px] h-[24px] rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-700 hover:border-slate-300 transition-all active:scale-95"
                              aria-label="Kurangkan saiz huruf"
                            >
                              —
                            </button>
                            <button 
                              type="button"
                              onClick={() => setA11yFontSize(prev => Math.min(200, prev + 5))}
                              className="w-[24px] h-[24px] rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-700 hover:border-slate-300 transition-all active:scale-95"
                              aria-label="Tambahkan saiz huruf"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* 3. Tinggi garisan */}
                        <div className="p-2.5 bg-slate-50/60 border border-slate-100 rounded-xl flex items-center justify-between gap-3">
                          <div className="w-[100px] shrink-0">
                            <span className="text-xs font-bold text-slate-700 block truncate">Tinggi garisan</span>
                          </div>
                          <div className="flex items-center gap-2 flex-1">
                            <input 
                              type="range" 
                              min="100" 
                              max="250" 
                              step="10"
                              value={a11yLineHeight}
                              onChange={(e) => setA11yLineHeight(Number(e.target.value))}
                              className="flex-1 accent-[#2563EB] h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="text-xs font-bold text-slate-600 min-w-[34px] text-right">{a11yLineHeight}%</span>
                          </div>
                          <div className="flex gap-1 shrink-0">
                            <button 
                              type="button"
                              onClick={() => setA11yLineHeight(prev => Math.max(100, prev - 10))}
                              className="w-[24px] h-[24px] rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-700 hover:border-slate-300 transition-all active:scale-95"
                              aria-label="Kurangkan tinggi garisan"
                            >
                              —
                            </button>
                            <button 
                              type="button"
                              onClick={() => setA11yLineHeight(prev => Math.min(250, prev + 10))}
                              className="w-[24px] h-[24px] rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-700 hover:border-slate-300 transition-all active:scale-95"
                              aria-label="Tambahkan tinggi garisan"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* 4. Jarak huruf */}
                        <div className="p-2.5 bg-slate-50/60 border border-slate-100 rounded-xl flex items-center justify-between gap-3">
                          <div className="w-[100px] shrink-0">
                            <span className="text-xs font-bold text-slate-700 block truncate">Jarak huruf</span>
                          </div>
                          <div className="flex items-center gap-2 flex-1">
                            <input 
                              type="range" 
                              min="100" 
                              max="200" 
                              step="5"
                              value={a11yLetterSpacing}
                              onChange={(e) => setA11yLetterSpacing(Number(e.target.value))}
                              className="flex-1 accent-[#2563EB] h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer"
                            />
                            <span className="text-xs font-bold text-slate-600 min-w-[34px] text-right">{a11yLetterSpacing}%</span>
                          </div>
                          <div className="flex gap-1 shrink-0">
                            <button 
                              type="button"
                              onClick={() => setA11yLetterSpacing(prev => Math.max(100, prev - 5))}
                              className="w-[24px] h-[24px] rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-700 hover:border-slate-300 transition-all active:scale-95"
                              aria-label="Kurangkan jarak huruf"
                            >
                              —
                            </button>
                            <button 
                              type="button"
                              onClick={() => setA11yLetterSpacing(prev => Math.min(200, prev + 5))}
                              className="w-[24px] h-[24px] rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-[10px] font-bold text-slate-700 hover:border-slate-300 transition-all active:scale-95"
                              aria-label="Tambahkan jarak huruf"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
            <button type="button" className="icon-btn" aria-label="Cari" onClick={() => setSearchDropdownOpen(!searchDropdownOpen)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="7"/><path d="M21 21l-4.3-4.3"/></svg>
            </button>

            {/* ================= SEARCH DROPDOWN ================= */}
            <div className={`search-panel ${searchDropdownOpen ? 'open' : ''}`} role="dialog" aria-label="Carian laman">
              <form onSubmit={handleSearchSubmit}>
                <input 
                  type="text" 
                  placeholder="Cari perkhidmatan, berita, borang..." 
                  aria-label="Kata kunci carian"
                  value={tempSearchInput}
                  onChange={(e) => setTempSearchInput(e.target.value)}
                />
              </form>
              <p className="hint">Carian popular:</p>
              <div className="quick-tags">
                <button type="button" onClick={() => handleMainSearchSelect("Cukai Taksiran")}>Cukai Taksiran</button>
                <button type="button" onClick={() => handleMainSearchSelect("e-Tanah")}>e-Tanah</button>
                <button type="button" onClick={() => handleMainSearchSelect("Bantuan Rumah")}>Bantuan Rumah</button>
                <button type="button" onClick={() => handleMainSearchSelect("Semakan Status")}>Semakan Status</button>
              </div>
            </div>

            <button type="button" className="burger" aria-label="Buka menu mudah alih" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
            </button>
          </div>
        </div>
      </header>

      {/* ================= MOBILE MENU (OFFCANVAS) ================= */}
      <div className={`mobile-menu-scrim ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
      <nav className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} aria-label="Navigasi mudah alih">
        <div className="mobile-menu-head">
          <strong>Menu Utama</strong>
          <button type="button" aria-label="Tutup menu" style={{ background: 'none', border: 0, color: '#fff' }} onClick={() => setMobileMenuOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '22px', height: '22px' }}><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>
        <div className="mobile-menu-body">
          <a className="cursor-pointer" onClick={() => handleNavClick('utama')}>Utama</a>

          <button type="button" className="m-toggle" onClick={() => setActiveDropdown(activeDropdown === 'mob-korporat' ? null : 'mob-korporat')}>
            Korporat
            <svg className="chev" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1.5 3.5L5 7l3.5-3.5"/></svg>
          </button>
          <div className={`sub-list ${activeDropdown === 'mob-korporat' ? 'open' : ''}`}>
            <div className="sub-group-title">Mengenai Kami</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Maklumat Mengenai PSUKNS"); }}>Mengenai PSUKNS</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Visi, Misi, Moto PSUKNS"); }}>Visi, Misi, Moto</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Dasar & Objektif SUKNS"); }}>Dasar &amp; Objektif</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Struktur Organisasi SUKNS"); }}>Struktur Organisasi</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Bahagian & Unit SUKNS"); }}>Bahagian / Unit</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Piagam Pelanggan Rasmi"); }}>Piagam Pelanggan</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Laporan Pencapaian Piagam Pelanggan"); }}>Laporan Pencapaian Piagam Pelanggan</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Pelan Strategik Organisasi SUKNS"); }}>Pelan Strategik Organisasi</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Pelan Strategik Pendigitalan SUKNS"); }}>Pelan Strategik Pendigitalan</a>

            <div className="sub-group-title">Mengenai Negeri Sembilan</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Pengenalan Negeri Sembilan"); }}>Pengenalan</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Sejarah Penubuhan Negeri Sembilan"); }}>Sejarah Penubuhan</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Warisan Adat Perpatih"); }}>Adat Perpatih</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Struktur Pentadbiran Kerajaan Negeri"); }}>Struktur Pentadbiran Kerajaan Negeri</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Lokasi & Geografi Negeri Sembilan"); }}>Lokasi</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Bendera & Jata Kebanggaan Negeri"); }}>Bendera &amp; Jata</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Lagu Kebesaran Negeri Sembilan"); }}>Lagu Kebesaran</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Sistem Undang Dan Tunku Besar Tampin"); }}>Undang Dan Tunku Besar Tampin</a>

            <div className="sub-group-title">Institusi &amp; Agensi</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Senarai Jabatan Negeri Sembilan"); }}>Jabatan Negeri</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Pejabat Daerah & Tanah Negeri Sembilan"); }}>Pejabat Daerah &amp; Tanah</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Badan Berkanun Negeri Sembilan"); }}>Badan Berkanun</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Pihak Berkuasa Tempatan Negeri Sembilan"); }}>Pihak Berkuasa Tempatan</a>

            <div className="sub-group-title">Dasar &amp; Governans</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Rancangan Pembangunan Negeri Sembilan 2021-2025"); }}>Rancangan Pembangunan Negeri Sembilan 2021-2025</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Majlis Bersama Jabatan (MBJ)"); }}>Majlis Bersama Jabatan (MBJ)</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Pekeliling Persekutuan dan Negeri Sembilan"); }}>Pekeliling Persekutuan dan Negeri</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Akta/Pekeliling Perundangan"); }}>Akta/Pekeliling</a>
            <a className="cursor-pointer pl-6 text-xs text-slate-500" onClick={() => { setMobileMenuOpen(false); showToast("Polisi Agensi"); }}>• Polisi Agensi</a>
            <a className="cursor-pointer pl-6 text-xs text-slate-500" onClick={() => { setMobileMenuOpen(false); showToast("Garis Panduan Agensi"); }}>• Garis Panduan</a>

            <div className="sub-group-title">Kerjaya</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Peluang Jawatan Kosong di Kerajaan Negeri Sembilan"); }}>Jawatan Kosong</a>

            <div className="sub-group-title">Untuk Penjawat Awam</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Ketua Pegawai Digital (CDO)"); }}>Ketua Pegawai Digital (CDO)</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Pegawai Keselamatan ICT (ICTSO)"); }}>Pegawai Keselamatan ICT (ICTSO)</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Pegawai Kanan SUKNS"); }}>Pegawai Kanan</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Muat Turun Borang Penjawat Awam"); }}>Muat Turun Borang Penjawat Awam</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("CSIRTNS Cyber Security Team"); }}>CSIRTNS</a>
          </div>

          <button type="button" className="m-toggle" onClick={() => setActiveDropdown(activeDropdown === 'mob-perkhidmatan' ? null : 'mob-perkhidmatan')}>
            Perkhidmatan
            <svg className="chev" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1.5 3.5L5 7l3.5-3.5"/></svg>
          </button>
          <div className={`sub-list ${activeDropdown === 'mob-perkhidmatan' ? 'open' : ''}`}>
            <div className="sub-group-title">Perkhidmatan &amp; Bayaran</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); handleNavClick('utama'); setTimeout(() => { window.location.hash = "perkhidmatan"; }, 100); }}>Pembayaran Cukai Tanah</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); handleNavClick('utama'); setTimeout(() => { window.location.hash = "perkhidmatan"; }, 100); }}>Aduan Rakyat</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); handleNavClick('utama'); setTimeout(() => { window.location.hash = "perkhidmatan"; }, 100); }}>GIS9 Geoinformasi</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Sistem Pengurusan Perkahwinan Islam (SPPIM)"); }}>Sistem Pengurusan Perkahwinan Islam</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); handleNavClick('utama'); setTimeout(() => { window.location.hash = "perkhidmatan"; }, 100); }}>Muat Turun Borang Rasmi</a>

            <div className="sub-group-title">Bantuan &amp; Kebajikan</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); handleNavClick('utama'); setTimeout(() => { window.location.hash = "perkhidmatan"; }, 100); }}>Inisiatif Belanjawan Negeri</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); handleNavClick('utama'); setTimeout(() => { window.location.hash = "perkhidmatan"; }, 100); }}>Dasar Perumahan Negeri Sembilan</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); handleNavClick('utama'); setTimeout(() => { window.location.hash = "perkhidmatan"; }, 100); }}>Semakan Status Permohonan</a>

            <div className="sub-group-title">Sektor &amp; Ekonomi</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Sektor Pelaburan Negeri Sembilan"); }}>Pelaburan</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Sektor Pertanian & Asas Tani"); }}>Pertanian</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Sektor Pendidikan Negeri Sembilan"); }}>Pendidikan</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Sektor Kesihatan & Kebajikan Awam"); }}>Kesihatan</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Promosi Pelancongan Negeri Sembilan"); }}>Pelancongan</a>

            <div className="sub-group-title">Perniagaan &amp; Tender</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Sistem Tender/Sebut Harga Negeri Sembilan"); }}>Tender/Sebut Harga</a>

            <div className="sub-group-title">Keselamatan &amp; Undang-undang</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Informasi Jenayah & Keselamatan Awam"); }}>Jenayah &amp; Keselamatan</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Sistem Kesalahan Syariah Negeri Sembilan"); }}>Kesalahan Syariah Negeri Sembilan</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Agensi Anti Dadah Kebangsaan (AADK)"); }}>Agensi Anti Dadah Kebangsaan</a>

            <div className="sub-group-title">Kehormatan Negeri</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Laman Informasi Pingat Negeri Sembilan Darul Khusus"); }}>Laman Informasi Pingat</a>
          </div>

          <button type="button" className="m-toggle" onClick={() => setActiveDropdown(activeDropdown === 'mob-media' ? null : 'mob-media')}>
            Media
            <svg className="chev" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1.5 3.5L5 7l3.5-3.5"/></svg>
          </button>
          <div className={`sub-list ${activeDropdown === 'mob-media' ? 'open' : ''}`}>
            <div className="sub-group-title">Berita &amp; Hebahan</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Pengumuman Rasmi Pentadbiran"); }}>Pengumuman</a>
            <a className="cursor-pointer font-bold text-[var(--red)]" onClick={() => { setMobileMenuOpen(false); handleNavClick('berita'); }}>Berita</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Keratan Akhbar Tempatan & Nasional"); }}>Keratan Akhbar</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Aktiviti-aktiviti Kerajaan Negeri Sembilan"); }}>Aktiviti</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Penerbitan Rasmi & Warta Kerajaan"); }}>Penerbitan</a>

            <div className="sub-group-title">Galeri</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Galeri Foto Aktiviti"); }}>Foto</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Galeri Video Rasmi"); }}>Video</a>

            <div className="sub-group-title">Arkib</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Arkib Pengumuman Lampau"); }}>Arkib Pengumuman</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Arkib Berita Lama"); }}>Arkib Berita</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Arkib Galeri Media"); }}>Arkib Galeri</a>

            <div className="sub-group-title">Media Sosial</div>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); handleNavClick('utama'); setTimeout(() => { window.location.hash = "media-sosial"; }, 100); }}>Facebook PSUKNS</a>
          </div>

          <button type="button" className="m-toggle" onClick={() => setActiveDropdown(activeDropdown === 'mob-hubungi' ? null : 'mob-hubungi')}>
            Hubungi Kami
            <svg className="chev" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M1.5 3.5L5 7l3.5-3.5"/></svg>
          </button>
          <div className={`sub-list ${activeDropdown === 'mob-hubungi' ? 'open' : ''}`}>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); showToast("Direktori Pegawai SUKNS"); }}>Direktori Pegawai</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); handleNavClick('utama'); setTimeout(() => { window.location.hash = "footer"; }, 100); }}>Alamat &amp; Peta Lokasi</a>
            <a className="cursor-pointer" onClick={() => { setMobileMenuOpen(false); handleNavClick('utama'); setTimeout(() => { window.location.hash = "footer"; }, 100); }}>Aduan, Pertanyaan &amp; Maklum Balas</a>
          </div>
        </div>
      </nav>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <main id="main-content">
        
        {/* ============================================================
            1. HOME / UTAMA VIEW
            ============================================================ */}
        {view === 'utama' && (
          <div className="fade-in">
            {/* HERO SECTION */}
            <section className="hero">
              <img className="hero-bg" src="https://www.figma.com/api/mcp/asset/9fb0ad86-e85b-4dbf-9100-3aca6aad283d" alt="Pemandangan Bandar Diraja Negeri Sembilan" />
              <div className="hero-scrim"></div>
              <div className="hero-content">
                <p className="eyebrow">Selamat Datang ke</p>
                <h1>Gerbang rasmi Kerajaan<br />dan rakyat Negeri Sembilan</h1>
              </div>
              <div className="scroll-cue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '26px', height: '26px' }}><path d="M12 5v14M5 12l7 7 7-7"/></svg>
              </div>
            </section>

            {/* AUDIENCE SELECTOR GRID */}
            <section className="audience-grid reveal in">
              <div className="audience-card" style={{ '--i': 0 } as React.CSSProperties} onClick={() => showToast("Membuka Portal khas Rakyat Negeri Sembilan.")}>
                <div className="audience-icon">
                  <img src={rakyatImg} alt="Rakyat" referrerPolicy="no-referrer" />
                </div>
                <span>Rakyat</span>
              </div>
              <div className="audience-card" style={{ '--i': 1 } as React.CSSProperties} onClick={() => showToast("Membuka Portal Inisiatif Usahawan, Pelabur & MVV 2.0.")}>
                <div className="audience-icon">
                  <img src={pelaburImg} alt="Usahawan & Pelabur" referrerPolicy="no-referrer" />
                </div>
                <span>Usahawan &amp; Pelabur</span>
              </div>
              <div className="audience-card" style={{ '--i': 2 } as React.CSSProperties} onClick={() => showToast("Membuka Portal Khas Jabatan Kerajaan & Media SUKNS.")}>
                <div className="audience-icon">
                  <img src={penjawatAwamImg} alt="Penjawat Awam & Media" referrerPolicy="no-referrer" />
                </div>
                <span>Penjawat Awam &amp; Media</span>
              </div>
              <div className="audience-card" style={{ '--i': 3 } as React.CSSProperties} onClick={() => showToast("Membuka Portal Promosi Pelancongan Pesona Warisan TMNS.")}>
                <div className="audience-icon">
                  <img src={pelancongImg} alt="Pelancong" referrerPolicy="no-referrer" />
                </div>
                <span>Pelancong</span>
              </div>
            </section>

            {/* POPULAR SERVICES SECTION */}
            <section className="section services-shell" id="perkhidmatan">
              <div className="container">
                <h2 className="section-title left gradient-text reveal in">PERKHIDMATAN POPULAR</h2>
                <div className="services-track-wrap">
                  <div 
                    className="services-track" 
                    ref={servicesTrackRef}
                    style={{ 
                      transform: `translateX(-${carouselOffset}px)`, 
                      transition: carouselTransitionEnabled ? 'transform 300ms cubic-bezier(.4,0,.2,1)' : 'none' 
                    }}
                  >
                    {REPEATED_SERVICES.map((card, idx) => (
                      <div 
                        key={idx} 
                        className="service-card" 
                        onClick={() => showToast(card.toast)}
                      >
                        <div className="service-icon">
                          <img src={card.img} alt={card.alt} referrerPolicy="no-referrer" />
                        </div>
                        <p>{card.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="carousel-nav">
                  <button type="button" onClick={() => handleCarouselNav('prev')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}><path d="M15 18l-6-6 6-6"/></svg> Kembali
                  </button>
                  <button type="button" onClick={() => handleCarouselNav('next')}>
                    Seterusnya <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
            </section>

            {/* NEWS & ANNOUNCEMENT PREVIEW */}
            <section className="section news-shell">
              <div className="container news-preview-grid">
                <div className="news-hero-card reveal in">
                  <div>
                    <p className="eyebrow">Berita Terkini</p>
                    <h3>Berita Rasmi Kerajaan Negeri</h3>
                    <p>Dapatkan berita, pengumuman rasmi, inisiatif kebajikan, serta perkembangan pembangunan ekonomi terkini berkaitan Pentadbiran Negeri Sembilan.</p>
                  </div>
                  <a className="more-link cursor-pointer" onClick={() => handleNavClick('berita')}>
                    Lihat semua berita
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                  </a>
                </div>

                {/* Grid of 4 Latest Articles */}
                {ARTICLES_DATA.slice(0, 4).map((article, index) => (
                  <a 
                    key={article.id}
                    className="news-tile reveal in cursor-pointer" 
                    style={{ '--i': index + 1 } as React.CSSProperties}
                    onClick={() => handleNewsTileClick(article)}
                  >
                    <img src={article.image} alt={article.title} />
                    <div className="tile-body">
                      <h4>{article.title}</h4>
                      <div className="meta">
                        <span>{article.date}</span>
                        <span className={`tag-pill ${article.categoryClass}`}>{article.category}</span>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>

            {/* GALLERY SLIDER SECTION */}
            <section className="section" style={{ paddingLeft: 0, paddingRight: 0, paddingTop: '40px', paddingBottom: '40px' }}>
              <div className="gallery-track-wrap reveal in" style={{ margin: 0, width: '100%' }}>
                <div 
                  className="gallery-track"
                  style={{ 
                    transform: `translateX(calc(var(--slide-offset) - ${galleryIndex} * (var(--slide-width) + var(--slide-gap))))`, 
                    transition: galleryTransitionEnabled ? 'transform 350ms cubic-bezier(.4,0,.2,1)' : 'none' 
                  }}
                >
                  {clonedGallerySlides.map((slide, idx) => (
                    <div 
                      key={idx}
                      className={`gallery-slide ${galleryIndex === idx ? 'active' : ''}`}
                    >
                      <img src={slide.src} alt={slide.alt} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="container" style={{ marginTop: '20px' }}>
                <div className="carousel-nav" style={{ marginTop: 0 }}>
                  <button type="button" onClick={() => handleGalleryNav('prev')}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}><path d="M15 18l-6-6 6-6"/></svg> Kembali
                  </button>
                  <button type="button" onClick={() => handleGalleryNav('next')}>
                    Seterusnya <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}><path d="M9 18l6-6-6-6"/></svg>
                  </button>
                </div>
              </div>
            </section>

            {/* SOCIAL MEDIA FEEDS SECTION */}
            <section className="section" id="media-sosial">
              <div className="container">
                <h2 className="section-title gradient-text reveal in">Ikuti Kami di Media Sosial</h2>
                <div className="social-icons reveal in">
                  <button type="button" className="si-fb" aria-label="Facebook" onClick={() => showToast("Membuka pautan Facebook rasmi Pentadbiran Kerajaan Negeri Sembilan (demo).")}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z"/></svg>
                  </button>
                  <button type="button" className="si-ig" aria-label="Instagram" onClick={() => showToast("Membuka pautan Instagram rasmi SUKNS (demo).")}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="w-[14px] h-[14px]"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
                  </button>
                  <button type="button" className="si-yt" aria-label="YouTube" onClick={() => showToast("Membuka saluran YouTube TVSUKNS (demo).")}>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-[14px] h-[14px]"><path d="M23 12s0-3.5-.4-5.2c-.3-1-1-1.7-2-2C18.9 4.3 12 4.3 12 4.3s-6.9 0-8.6.5c-1 .3-1.7 1-2 2C1 8.5 1 12 1 12s0 3.5.4 5.2c.3 1 1 1.7 2 2 1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5c1-.3 1.7-1 2-2 .4-1.7.4-5.2.4-5.2zM9.8 15.5v-7l6 3.5-6 3.5z"/></svg>
                  </button>
                  <button type="button" className="si-all" onClick={() => showToast("Memaparkan direktori semua platform media sosial rasmi SUKNS.")}>All</button>
                </div>
                
                <div className="social-grid reveal reveal-stagger in">
                  <a className="cursor-pointer" style={{ '--i': 0 } as React.CSSProperties} onClick={() => showToast("Melihat siaran Instagram SUKNS - Sambutan NS Fest (demo).")}>
                    <img src="https://www.figma.com/api/mcp/asset/5bf02cca-eba9-48fa-baf3-64644ba004fd" alt="Siaran Instagram 1" />
                  </a>
                  <a className="cursor-pointer" style={{ '--i': 1 } as React.CSSProperties} onClick={() => showToast("Melihat siaran Instagram SUKNS - Titah Integriti Tuanku Muhriz (demo).")}>
                    <img src="https://www.figma.com/api/mcp/asset/f2fb4ecd-1600-47aa-83b2-4790a4c296d0" alt="Siaran Instagram 2" />
                  </a>
                  <a className="cursor-pointer" style={{ '--i': 2 } as React.CSSProperties} onClick={() => showToast("Melihat siaran Instagram SUKNS - Maklumat e-Tanah NS (demo).")}>
                    <img src="https://www.figma.com/api/mcp/asset/8d215b13-47a3-40d4-a53e-45344ad92b91" alt="Siaran Instagram 3" />
                  </a>
                  <a className="cursor-pointer" style={{ '--i': 3 } as React.CSSProperties} onClick={() => showToast("Melihat siaran Instagram SUKNS - Pelaburan Hab Gemas (demo).")}>
                    <img src="https://www.figma.com/api/mcp/asset/bc212871-45fa-4b1d-877a-791c260cd597" alt="Siaran Instagram 4" />
                  </a>
                  <a className="cursor-pointer" style={{ '--i': 4 } as React.CSSProperties} onClick={() => showToast("Melihat siaran Instagram SUKNS - Publisiti Rancangan Struktur 2040 (demo).")}>
                    <img src="https://www.figma.com/api/mcp/asset/45bc4e1c-80e9-40c0-be9c-e833221642b8" alt="Siaran Instagram 5" />
                  </a>
                </div>
                <div style={{ textAlign: 'center', marginTop: '36px' }}>
                  <button type="button" className="btn btn-outline-red" onClick={() => showToast("Tiada lagi siaran tambahan untuk dimuatkan dalam simulasi prototaip.")}>Lebih Banyak Siaran</button>
                </div>
              </div>
            </section>

            {/* CALL TO ACTION BANNER (ADAT PERPATIH) */}
            <section className="section-tight" style={{ position: 'relative', zIndex: 10, marginBottom: '-170px' }}>
              <div className="container">
                <div className="cta-card reveal in">
                  <img className="cta-photo" src="https://www.figma.com/api/mcp/asset/62d88a3d-f440-4724-b716-cd58a7c43d12" alt="Warisan Adat Perpatih Negeri Sembilan" />
                  <div className="cta-bg-gradient"></div>
                  <div className="cta-body">
                    <h3>Lebih 300 tahun Adat Perpatih</h3>
                    <p>Meneroka keunikan warisan sejarah, seni bina rumah tradisi Minangkabau, adat berbudaya, serta institusi diraja berdaulat yang membentuk jati diri Negeri Sembilan.</p>
                    <button 
                      type="button" 
                      className="btn btn-dark" 
                      onClick={() => showToast("Halaman penerokaan Adat Perpatih dan Sejarah ditunjukkan (simulasi).")}
                    >
                      Terokai Negeri Sembilan
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: "14px", height: "14px" }}><path d="M5 12h14M13 6l6 6-6 6"/></svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {/* ============================================================
            2. NEWS LISTING VIEW ('berita')
            ============================================================ */}
        {view === 'berita' && (
          <div className="fade-in">
            {/* TITLE BAND */}
            <section className="title-band news-bg">
              <div className="container">
                <div className="breadcrumb">
                  <a onClick={() => setView('utama')}>Utama</a>
                  <svg className="sep" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                  <a onClick={() => setView('utama')}>Media</a>
                  <svg className="sep" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                  <span className="current">Berita</span>
                </div>
                <h1>Berita</h1>
                <p className="updated">Kemaskini terakhir pada 29 June 2026</p>
              </div>
            </section>

            {/* NEWS LISTING CONTAINER */}
            <section className="section">
              <div className="container">
                
                {/* Search & Filter Controls */}
                <div className="filter-bar">
                  <input 
                    type="text" 
                    placeholder="Masukkan kata kunci carian berita di sini..." 
                    value={newsSearchQuery}
                    onChange={(e) => { setNewsSearchQuery(e.target.value); setNewsCurrentPage(1); }}
                  />
                  <button type="button" className="filter-toggle" onClick={() => setIsFilterDrawerOpen(!isFilterDrawerOpen)}>
                    {isFilterDrawerOpen ? 'Tutup Tapisan' : 'Tapisan'}
                  </button>
                  <button type="button" className="filter-clear" onClick={clearNewsFilters}>
                    Kosongkan
                  </button>
                </div>

                {/* Filter Drawer with Category Chips */}
                <div className={`filter-drawer ${isFilterDrawerOpen ? 'open' : ''}`}>
                  <div className="filter-drawer-inner">
                    {['Semua', 'Ekonomi', 'Rasmi', 'Digital', 'Pelaburan', '2026', '2025'].map((chip) => (
                      <button 
                        key={chip} 
                        type="button" 
                        className={`chip ${selectedChips.includes(chip) ? 'active' : ''}`}
                        onClick={() => handleChipClick(chip)}
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                </div>

                {/* News Grid (Dynamically filtered) */}
                {paginatedArticles.length > 0 ? (
                  <div className="news-grid reveal reveal-stagger in">
                    {paginatedArticles.map((article, index) => (
                      <a 
                        key={article.id}
                        className="news-tile reveal in cursor-pointer" 
                        style={{ '--i': index, minHeight: '280px' } as React.CSSProperties}
                        onClick={() => handleNewsTileClick(article)}
                      >
                        <img src={article.image} alt={article.title} />
                        <div className="tile-body">
                          <h4>{article.title}</h4>
                          <div className="meta">
                            <span>{article.date}</span>
                            <span className={`tag-pill ${article.categoryClass}`}>{article.category}</span>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20 bg-gray-50 rounded-2xl border border-gray-100 my-10">
                    <svg className="w-12 h-12 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                    </svg>
                    <p className="text-gray-500 font-medium text-lg">Tiada artikel berita yang sepadan dengan tapisan anda.</p>
                    <button type="button" className="btn btn-outline-red mt-4 btn-sm" onClick={clearNewsFilters}>Papar Semua Berita</button>
                  </div>
                )}

                {/* Paginated Counter */}
                {filteredArticles.length > 0 && (
                  <p className="result-count">
                    Memaparkan {Math.min(filteredArticles.length, (newsCurrentPage - 1) * ARTICLES_PER_PAGE + 1)} hingga {Math.min(filteredArticles.length, newsCurrentPage * ARTICLES_PER_PAGE)} daripada {filteredArticles.length} artikel berita
                  </p>
                )}

                {/* Pagination Controls */}
                {filteredArticles.length > ARTICLES_PER_PAGE && (
                  <div className="pagination">
                    <button 
                      type="button" 
                      className="arrow" 
                      aria-label="Halaman sebelumnya" 
                      disabled={newsCurrentPage === 1}
                      onClick={() => setNewsCurrentPage(prev => Math.max(1, prev - 1))}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}><path d="M15 18l-6-6 6-6"/></svg>
                    </button>
                    <div className="page-nums">
                      {Array.from({ length: totalNewsPages }).map((_, i) => {
                        const pageNum = i + 1;
                        return (
                          <button 
                            key={pageNum}
                            type="button" 
                            className={newsCurrentPage === pageNum ? 'current' : ''}
                            onClick={() => setNewsCurrentPage(pageNum)}
                          >
                            {pageNum}
                          </button>
                        );
                      })}
                    </div>
                    <button 
                      type="button" 
                      className="arrow" 
                      aria-label="Halaman seterusnya" 
                      disabled={newsCurrentPage === totalNewsPages}
                      onClick={() => setNewsCurrentPage(prev => Math.min(totalNewsPages, prev + 1))}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '18px', height: '18px' }}><path d="M9 18l6-6-6-6"/></svg>
                    </button>
                  </div>
                )}

              </div>
            </section>
          </div>
        )}

        {/* ============================================================
            3. ARTICLE DETAILS VIEW ('artikel')
            ============================================================ */}
        {view === 'artikel' && (
          <div className="fade-in">
            {/* ARTICLE BREADCRUMB */}
            <section className="title-band news-bg" style={{ paddingBottom: '26px' }}>
              <div className="container">
                <div className="breadcrumb">
                  <a onClick={() => setView('utama')}>Utama</a>
                  <svg className="sep" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                  <a onClick={() => setView('berita')}>Berita</a>
                  <svg className="sep" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
                  <span className="current truncate max-w-[280px] sm:max-w-none">{activeArticle.title}</span>
                </div>
              </div>
            </section>

            {/* MAIN ARTICLE DETAIL SECTION */}
            <section className="article-shell">
              <article className="article-card reveal in">
                <h1>{activeArticle.title}</h1>
                <div className="article-meta">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>
                  Disiarkan pada {activeArticle.date} &nbsp;•&nbsp; Kategori: <span className="font-bold underline ml-1 text-gray-700">{activeArticle.category}</span>
                </div>
                <hr className="article-divider" />
                <div className="article-hero-img">
                  <img src={activeArticle.image} alt={activeArticle.title} />
                </div>
              </article>

              <div className="article-body reveal in">
                <div className="prose">
                  {activeArticle.paragraphs.map((para, pIdx) => (
                    <p key={pIdx}>{para}</p>
                  ))}
                </div>
                <hr className="article-divider" />
                <div className="article-footer-row">
                  <div className="article-author">Sumbangan artikel oleh: <strong>KSU Negeri Sembilan</strong></div>
                  <div className="article-actions">
                    <button 
                      type="button" 
                      className="act-print"
                      onClick={() => { window.print(); }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 9V2h12v7M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2M6 14h12v8H6z"/></svg>
                      Cetak
                    </button>
                    <button 
                      type="button" 
                      className="act-download"
                      onClick={() => {
                        const content = `${activeArticle.title}\n\n${activeArticle.paragraphs.join('\n\n')}`;
                        const blob = new Blob([content], { type: 'text/plain' });
                        const url = URL.createObjectURL(blob);
                        const link = document.createElement('a');
                        link.href = url;
                        link.download = `${activeArticle.title.replace(/\s+/g, '_')}.txt`;
                        link.click();
                        URL.revokeObjectURL(url);
                        showToast("Fail draf artikel berita dimuat turun (simulasi teks).");
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16"/></svg>
                      Muat Turun
                    </button>
                    <button 
                      type="button" 
                      className="act-share"
                      onClick={() => {
                        navigator.clipboard.writeText(window.location.href);
                        showToast("Pautan artikel rasmi disalin ke papan keratan.");
                      }}
                    >
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 3.9M15.4 6.6L8.6 10.5"/></svg>
                      Kongsi
                    </button>
                  </div>
                </div>
              </div>

              <div style={{ textAlign: 'center' }}>
                <a className="back-to-news btn" onClick={() => handleNavClick('berita')}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '14px', height: '14px' }}><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                  Kembali ke Berita
                </a>
              </div>
            </section>
          </div>
        )}

      </main>

      {/* ================= FOOTER ================= */}
      <footer className={`site-footer ${view === 'utama' ? 'footer-overlap' : ''}`} id="footer">
        <div className="container footer-grid">
          <div>
            <h5>Hubungi Kami</h5>
            <p><strong>Pejabat Setiausaha Kerajaan Negeri Sembilan,</strong><br />
            Tingkat 5, Blok A, Wisma Negeri,<br />
            Jalan Dato' Abdul Malek,<br />
            70503 Seremban, Negeri Sembilan.</p>
            <p style={{ marginTop: '14px' }}>
              <strong>Telefon:</strong> 606-765 9900<br />
              <strong>Faks:</strong> 606-761 7386<br />
              <strong>Emel:</strong> korporatsukns[at]ns[dot]gov[dot]my
            </p>
          </div>
          <div>
            <h5>Pautan Agensi</h5>
            <div className="footer-links">
              <a className="cursor-pointer" onClick={() => showToast("Melayari Portal Pejabat Daerah dan Tanah (simulasi).")}>Pejabat Daerah dan Tanah</a>
              <a className="cursor-pointer" onClick={() => showToast("Melayari Portal Pihak Berkuasa Tempatan Negeri (simulasi).")}>Pihak Berkuasa Tempatan</a>
              <a className="cursor-pointer" onClick={() => showToast("Melayari Jabatan Audit & Kerajaan Negeri (simulasi).")}>Jabatan Kerajaan</a>
              <a className="cursor-pointer" onClick={() => showToast("Melayari Badan Berkanun Negeri Sembilan (simulasi).")}>Badan Berkanun</a>
              <a className="cursor-pointer" onClick={() => showToast("Melayari Jabatan Digital Negara Persekutuan (simulasi).")}>Jabatan Digital Negara</a>
              <a className="cursor-pointer" onClick={() => showToast("Melayari Portal Jabatan Perdana Menteri (simulasi).")}>Jabatan Perdana Menteri</a>
              <a className="cursor-pointer" onClick={() => showToast("Melayari Portal Rasmi MyGOV Persekutuan (simulasi).")}>MyGOV</a>
              <a className="cursor-pointer" onClick={() => showToast("Melayari Portal Hasil Dalam Negeri LHDN (simulasi).")}>Lembaga Hasil Dalam Negeri (LHDN)</a>
            </div>
          </div>
          <div>
            <h5>Pautan Staf</h5>
            <div className="footer-links">
              <a className="cursor-pointer" onClick={() => showToast("Melayari Portal Web Mail Penjawat Negeri Sembilan (simulasi).")}>Web Mail</a>
              <a className="cursor-pointer" onClick={() => showToast("Mengakses Sistem Intranet Wisma Negeri (simulasi).")}>Intranet</a>
              <a className="cursor-pointer" onClick={() => showToast("Melayari Portal Rasmi MyHRMIS Mobile JPA (simulasi).")}>MyHRMIS Mobile</a>
            </div>
          </div>
          <div>
            <h5>Statistik Pelawat</h5>
            <p>Jumlah Pelawat Unik: 16,369,579</p>
            <p style={{ marginTop: '10px' }}><strong>Kemaskini terakhir:</strong> 29 Jun 2026</p>
            <img src="https://www.figma.com/api/mcp/asset/b45f9a2a-ed84-4a83-90d1-e8d5bd8ef780" alt="Carta statistik pelawat rasmi" style={{ marginTop: '14px', borderRadius: '8px' }} />
          </div>
        </div>
        <div className="container footer-bottom">
          <span>Hakcipta Terpelihara &copy; 2026 Pentadbiran Kerajaan Negeri Sembilan.</span>
          <div className="legal-links">
            <a className="cursor-pointer" onClick={() => showToast("Penafian Undang-undang Portal.")}>Penafian</a>
            <a className="cursor-pointer" onClick={() => showToast("Dasar Keselamatan Maklumat SUKNS.")}>Dasar Keselamatan</a>
            <a className="cursor-pointer" onClick={() => showToast("Dasar Privasi & Perlindungan Data.")}>Dasar Privasi</a>
            <a className="cursor-pointer" onClick={() => showToast("Halaman Soalan Lazim dibuka.")}>Soalan Lazim</a>
            <a className="cursor-pointer" onClick={() => showToast("Peta Laman navigasi pentadbiran.")}>Peta Laman</a>
            <a className="cursor-pointer" onClick={() => showToast("Meneroka portal MyGov Persekutuan.")}>MyGov</a>
          </div>
        </div>
      </footer>

      {/* ================= TOAST WRAP CONTAINER ================= */}
      <div className="toast-wrap" aria-live="polite">
        {toasts.map(toast => (
          <div key={toast.id} className="toast show">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}><path d="M20 6L9 17l-5-5"/></svg>
            <span>{toast.message}</span>
          </div>
        ))}
      </div>

      {/* ================= BACK TO TOP BUTTON (Smooth slide horizontal transition) ================= */}
      <button 
        type="button" 
        className={`back-to-top ${showBackToTop ? 'show' : ''}`} 
        aria-label="Kembali ke atas"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        style={{ right: isChatOpen ? '420px' : '24px' }} /* Shifting layout fix: slides perfectly to prevent overlapping with chatbot! */
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
      </button>

      {/* ================= CHATBOT SYSTEM ================= */}
      {!isChatOpen && (
        <button 
          type="button" 
          className="chatbot-launcher" 
          aria-label="Buka pembantu AI Perpatih@NS"
          onClick={() => setIsChatOpen(true)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="5" width="18" height="13" rx="3"/><path d="M8 10h.01M16 10h.01M8 14h8"/><path d="M12 2v3"/></svg>
        </button>
      )}

      <div className={`chatbot-panel ${isChatOpen ? 'open' : ''}`} role="dialog" aria-label="Pembantu AI Perpatih@NS">
        <div className="chatbot-head">
          <strong>PEMBUNTU AI PERPATIH@NS</strong>
          <button type="button" aria-label="Tutup chatbot" onClick={() => setIsChatOpen(false)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '20px', height: '20px', color: 'var(--ink)' }}><path d="M6 6l12 12M18 6L6 18"/></svg>
          </button>
        </div>
        <div className="chatbot-head-input">AI Assistant powered by PSUKNS</div>
        
        <div className="chatbot-body" ref={chatBodyRef}>
          {chatMessages.map((msg) => (
            <div key={msg.id} className="chatbot-msg pop" style={{ justifyContent: msg.sender === 'user' ? 'flex-end' : 'flex-start' }}>
              {msg.sender === 'bot' && <div className="chatbot-avatar">NS</div>}
              <div>
                <div className="chatbot-bubble" style={{ background: msg.sender === 'user' ? '#f4c430' : '#fff' }}>
                  {msg.text}
                </div>
                <div className="chatbot-time">{msg.time}</div>
              </div>
            </div>
          ))}

          {isBotTyping && (
            <div className="chatbot-msg pop" style={{ justifyContent: 'flex-start' }}>
              <div className="chatbot-avatar">NS</div>
              <div>
                <div className="chatbot-bubble bg-white italic text-gray-400">
                  Perpatih@NS sedang menaip...
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="chatbot-foot">
          <div className="row">
            <input 
              type="text" 
              placeholder="Tanya soalan tentang cukai, e-Tanah, MVV 2.0..."
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === 'Enter') handleSendMessage(); }}
            />
            <button type="button" aria-label="Hantar mesej" onClick={handleSendMessage}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ width: '16px', height: '16px' }}><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
