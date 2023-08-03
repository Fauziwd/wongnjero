import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Sidebar from "../layout/Sidebar";
import BottomNav from "../layout/BottomNav";
import Modal from "react-modal";
import "../css/galeri.css";

function Galeri() {
  // Daftar URL foto yang ingin ditampilkan di galeri
  const fotoList = [
    "/image/WonkNjero/bendungan.jpg",
    "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-9/173757180_4526635124017662_2306623614814339381_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=XanubHuoH4wAX8JcWdx&_nc_ht=scontent-xsp1-1.xx&oh=00_AfBv_MvVZV5egGfCXWrVtNVFyPikqDvZMvSgbCzBRu-HGA&oe=64EED084",
    "https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/105505252_3623360211011829_9178814435241310868_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=9A3M0GfJRBUAX_u76cg&_nc_ht=scontent-xsp1-3.xx&oh=00_AfAThtxh-qBilVZI5FerL5gfDF4RBaT0NbNVyTPR70jAJg&oe=64EEC7AD",
    "https://scontent-xsp1-2.xx.fbcdn.net/v/t1.18169-9/10653610_922261801121697_3310593390932151330_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=3YnKRU-VD68AX8XCCt0&_nc_ht=scontent-xsp1-2.xx&oh=00_AfBsF2cGglwQn8Ps8fDj99HOp9fVYNiq3WeuHg8WQS6Emw&oe=64EEC829",
    "/image/WonkNjero/madang.jpg",
    // Tambahkan URL foto lainnya di sini
  ];

  // Fungsi untuk mengisi daftar foto ke dalam Carousel
  const renderFotoList = () => {
    return fotoList.map((fotoUrl, index) => (
      <div key={index} className="relative h-96">
        <img
          src={fotoUrl}
          className="w-full h-full object-cover object-center"
          alt={`Foto ${index + 1}`}
          style={{ boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.6)" }}
        />
      </div>
    ));
  };
  

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const photos = [
    "/image/WonkNjero/futsalss.jpg",
    "/image/WonkNjero/bendungan.jpg",
    "https://scontent-xsp1-2.xx.fbcdn.net/v/t1.18169-9/10653610_922261801121697_3310593390932151330_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=3YnKRU-VD68AX8XCCt0&_nc_ht=scontent-xsp1-2.xx&oh=00_AfBsF2cGglwQn8Ps8fDj99HOp9fVYNiq3WeuHg8WQS6Emw&oe=64EEC829",
    "https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-9/173757180_4526635124017662_2306623614814339381_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=XanubHuoH4wAX8JcWdx&_nc_ht=scontent-xsp1-1.xx&oh=00_AfBv_MvVZV5egGfCXWrVtNVFyPikqDvZMvSgbCzBRu-HGA&oe=64EED084",
    "/image/WonkNjero/pergi.jpg",
    
    // Tambahkan URL photo lainnya di sini
  ];

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handlePhotoClick = (index) => {
    setCurrentIndex(index);
    openModal();
  };

  const [activeCategory, setActiveCategory] = useState("Semua Foto");

  const categories = [
    "Semua Foto",
    "Adam",
    "Fauzi",
    "Hilmi",
    "Khottob",
    "Luqman",
    "Misbah",
    "Nabil",
    "Umar",
    "Zahid",
    "Zaky",
  ];

  const images = [
    {
      url: "/image/WonkNjero/Adam/IMG_20201022_103933.jpg",
      category: "Adam",
    },
    {
      url: "/image/WonkNjero/Fauzi/grojogan.jpg",
      category: "Fauzi",
    },
    {
      url: "/image/WonkNjero/Haidar/IMG_20210330_125745 (1).jpg",
      category: "Haidar",
    },
    {
      url: "/image/WonkNjero/Hilmi/IMG_20210330_144044.jpg",
      category: "Hilmi",
    },
    {
      url: "/image/WonkNjero/Luqman/IMG_20201030_090030.jpg",
      category: "Luqman",
    },
    {
      url: "/image/WonkNjero/Misbah/misbah.jpg",
      category: "Misbah",
    },
    {
      url: "/image/WonkNjero/Nabil/IMG_20201118_202838.jpg",
      category: "Nabil",
    },
    {
      url: "/image/WonkNjero/Umar/IMG_20200919_152831.jpg",
      category: "Umar",
    },
    {
      url: "/image/WonkNjero/Zahid/IMG_20200917_080408.jpg",
      category: "Zahid",
    },
    {
      url: "/image/WonkNjero/Haidar/IMG_20200919_132644.jpg",
      category: "Zaky",
    },
    {
      url: "/image/WonkNjero/Haidar/cafe.jpg",
      category: "Khottob",
    },
    {
      url: "/image/WonkNjero/Hilmi/IMG_20210330_144213.jpg",
      category: "Hilmi",
    },
    // ... gambar lainnya dengan properti 'category'
  ];



  
  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const filteredImages =
    activeCategory === "Semua Foto"
      ? images
      : images.filter((image) => image.category === activeCategory);

  return (
    <>
      <div
        className="App relative dark:bg-gray-800 h-screen"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <Sidebar />
        <div className="transform -translate-x-1/2 -translate-y-1/2 text-gray-100 font-bold text-4xl z-10 fixed top-2 left-8 p-4">
          <button
            className="text-white font-medium rounded-lg text-sm px-5 py-2.5 mr-2 drop-shadow-xl mt-10 w-10"
            type="button"
            data-drawer-target="drawer-navigation"
            data-drawer-show="drawer-navigation"
            aria-controls="drawer-navigation"
          >
            <FontAwesomeIcon
              icon={faArrowRight}
              className="animate-pulse text-2xl drop-shadow-4xl"
            />
          </button>
        </div>

        <Carousel
          showIndicators={false}
          showArrows={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          infiniteLoop={true}
        >
          {renderFotoList()}
        </Carousel>

        <h1 className="absolute top-0 mt-36 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-100 font-bold text-4xl z-10 drop-shadow-lg">
          Galeri Kenangan
        </h1>
        <div className="overflow-x-auto">
          <div className="grid grid-cols-12 gap-28 p-8">
            <div className="bg-purple-200 rounded-xl h-24 w-24 shadow-xl">
              <img
                src="/image/WonkNjero/random/iftor.jpg"
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <div className="bg-purple-200 rounded-xl h-24 w-24 shadow-xl">
              <img
                src="/image/WonkNjero/random/cafe.png"
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <div className="bg-purple-200 rounded-xl h-24 w-24 shadow-xl">
              <img
                src="/image/WonkNjero/random/sowan.jpg"
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <div className="bg-purple-200 rounded-xl h-24 w-24 shadow-xl">
              <img
                src="/image/WonkNjero/random/bocil1.jpg"
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <div className="bg-purple-200 rounded-xl h-24 w-24 shadow-xl">
              <img
                src="/image/WonkNjero/random/tibo.jpg"
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <div className="bg-purple-200 rounded-xl h-24 w-24 shadow-xl">
              <img
                src="/image/WonkNjero/random/camp.jpg"
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <div className="bg-purple-200 rounded-xl h-24 w-24 shadow-xl">
              <img
                src="/image/WonkNjero/random/ujian.jpg"
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <div className="bg-purple-200 rounded-xl h-24 w-24 shadow-xl">
              <img
                src="/image/WonkNjero/random/team.jpg"
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <div className="bg-purple-200 rounded-xl h-24 w-24 shadow-xl">
              <img
                src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.18169-9/10653610_922261801121697_3310593390932151330_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=3YnKRU-VD68AX8XCCt0&_nc_ht=scontent-xsp1-2.xx&oh=00_AfBsF2cGglwQn8Ps8fDj99HOp9fVYNiq3WeuHg8WQS6Emw&oe=64EEC829"
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <div className="bg-purple-200 rounded-xl h-24 w-24 shadow-xl">
              <img
                src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.18169-9/10653610_922261801121697_3310593390932151330_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=3YnKRU-VD68AX8XCCt0&_nc_ht=scontent-xsp1-2.xx&oh=00_AfBsF2cGglwQn8Ps8fDj99HOp9fVYNiq3WeuHg8WQS6Emw&oe=64EEC829"
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <div className="bg-purple-200 rounded-xl h-24 w-24 shadow-xl">
              <img
                src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.18169-9/10653610_922261801121697_3310593390932151330_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=3YnKRU-VD68AX8XCCt0&_nc_ht=scontent-xsp1-2.xx&oh=00_AfBsF2cGglwQn8Ps8fDj99HOp9fVYNiq3WeuHg8WQS6Emw&oe=64EEC829"
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
            <div className="bg-purple-200 rounded-xl h-24 w-24 shadow-xl">
              <img
                src="https://scontent-xsp1-2.xx.fbcdn.net/v/t1.18169-9/10653610_922261801121697_3310593390932151330_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=3YnKRU-VD68AX8XCCt0&_nc_ht=scontent-xsp1-2.xx&oh=00_AfBsF2cGglwQn8Ps8fDj99HOp9fVYNiq3WeuHg8WQS6Emw&oe=64EEC829"
                className="w-full h-full object-cover rounded-xl"
                alt=""
              />
            </div>
          </div>
        </div>

        <div class="flex items-center justify-center dark:bg-gray-800 py-4 md:py-8">
          <label for="categorySelect" class="sr-only">
            Pilih Siapa?
          </label>
          <select
            id="categorySelect"
            class="block w-full max-w-xs p-2 border border-white dark:border-gray-900 bg-white dark:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium text-gray-900 dark:text-white dark:focus:ring-gray-800"
            onChange={(event) => handleCategoryClick(event.target.value)}
          >
            <option value="">Pilih berdasarkan nama</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 p-4 gap-4 dark:bg-gray-800 overflow-y-auto" style={{ maxHeight: '500px' }}>
  {filteredImages.map((image, index) => (
    <div key={index} className="relative">
      <img
        className="h-auto max-w-full rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
        src={image.url}
        alt={`Foto ${index + 1}`}
      />
      <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 flex items-center justify-center transition duration-300 ease-in-out">
        <a href="#" className="text-white text-center" disabled>
          Lihat Detail
        </a>
      </div>
    </div>
  ))}
</div>


        <div className="overflow-x-auto dark:bg-gray-800">
          <div className="grid grid-cols-9 justify-center gap-2 p-6">
            {photos.map((photoUrl, index) => (
              <div
                key={index}
                className="bg-purple-200 rounded-xl h-24 w-96 mb-20 shadow-lg"
                onClick={() => handlePhotoClick(index)}
              >
                <img
                  src={photoUrl}
                  className="w-full h-full object-cover rounded-xl"
                  alt=""
                />
              </div>
            ))}
          </div>
          <Modal
            isOpen={isModalOpen}
            onRequestClose={closeModal}
            className="modal"
          >
            <img src={photos[currentIndex]} alt="" className="modal-img" />
            <button onClick={closeModal} className="modal-close">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                fill="currentColor"
                class="bi bi-arrow-clockwise"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
              </svg>
              
            </button>
          </Modal>
        </div>
      </div>
      <BottomNav />
    </>
  );
}

export default Galeri;
