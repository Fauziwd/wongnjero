import React, { useEffect, useState } from "react";
import Sidebar from '../src/layout/Sidebar';
import Navbar from "../src/layout/Navbar";
import BottomNav from "../src/layout/BottomNav";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';





function App() {
  // State untuk menyimpan data JSON yang akan diambil dari file
  const [data, setData] = useState([]);


  // Fungsi untuk mengambil data dari file JSON
  const fetchData = async () => {
    try {
      const response = await fetch("/angk3.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Gagal mengambil data:", error);
    }
  };

  // Panggil fungsi fetchData setelah komponen dimuat
  useEffect(() => {
    fetchData();
  }, []);

  function renderTableData() {
    return data.map((item, index) => (
      <tr key={index} className="border-b border-gray-200 text-gray-900 hover:bg-gray-300 dark:text-gray-200 hover:dark:bg-gray-950">
        <td className="rounded-bl-lg px-4 py-3">{index + 1}</td> {/* Kolom Nomor Urut */}
        <td className="px-4 py-3" style={{ textAlign: "left" }}>{item.Nama}</td> {/* Kolom Nama dengan posisi teks dari kiri */}
        <td className="px-4 py-3">
          {/* Kolom Nomor HP yang dijadikan tautan WhatsApp */}
          {/* Pastikan nomor HP sudah dalam format yang benar */}
          <a href={`https://wa.me/${item.NoHP}`} rel="noopener noreferrer">
            {item.NoHP}
          </a>
        </td>
        <td className="px-4 py-3">{item.Pekerjaan}</td> {/* Kolom Pekerjaan */}
        <td className="px-4 py-3">{item.Status}</td> {/* Kolom Status */}
        <td className="rounded-br-lg px-4 py-3">{item.Alamat}</td> {/* Kolom Alamat */}
      </tr>
    ));
  }




  return (
    <>
    <div className="App h-screen dark:bg-gray-900" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <Sidebar />
      <Navbar />
      <div className="relative w-full">
        <Carousel id="step-one" showIndicators={false} showArrows={true} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true}>
          <div className="relative h-56 md:h-96 shadow-lg">
            <img src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.6435-9/173757180_4526635124017662_2306623614814339381_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=e3f864&_nc_ohc=XanubHuoH4wAX8JcWdx&_nc_ht=scontent-xsp1-1.xx&oh=00_AfBv_MvVZV5egGfCXWrVtNVFyPikqDvZMvSgbCzBRu-HGA&oe=64EED084" className="w-full h-full object-cover object-center" alt="Wisuda" />
          </div>
          <div className="relative h-56 md:h-96">
            <img src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/105505252_3623360211011829_9178814435241310868_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=9A3M0GfJRBUAX_u76cg&_nc_ht=scontent-xsp1-3.xx&oh=00_AfAThtxh-qBilVZI5FerL5gfDF4RBaT0NbNVyTPR70jAJg&oe=64EEC7AD" className="w-full h-full object-cover object-center" alt="Kumpul Iftor Jama'i" />
          </div>
          <div className="relative h-56 md:h-96">
            <img src="https://scontent-xsp1-3.xx.fbcdn.net/v/t31.18172-8/10869755_1068891979792011_193701315120719053_o.jpg?_nc_cat=100&ccb=1-7&_nc_sid=19026a&_nc_ohc=LErhbs7BFFAAX8IYP8-&_nc_ht=scontent-xsp1-3.xx&oh=00_AfAhF_ZZDE58WNKGKAe7d01SMD-lDXkFM56pSBCi75egXw&oe=64EEBE8A" className="w-full h-full object-cover object-center" alt="Bersama Syeikh Bawazier" />
          </div>
          <div className="relative h-56 md:h-96">
            <img src="https://scontent-xsp1-1.xx.fbcdn.net/v/t1.18169-9/10646737_922261391121738_8009833255538659552_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=a-26GgFdYPoAX-qaWVu&_nc_ht=scontent-xsp1-1.xx&oh=00_AfCggpGiNqJn1255wYC7BXB94If8gbZ0oGTbxn_zDgQhXQ&oe=64EEC815" alt="Angk. 3 bersama Sy. Bawazier" />
          </div>
          <div className="relative h-56 md:h-96">
            <img src="https://scontent-xsp1-3.xx.fbcdn.net/v/t1.6435-9/105505252_3623360211011829_9178814435241310868_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=e3f864&_nc_ohc=9A3M0GfJRBUAX_u76cg&_nc_ht=scontent-xsp1-3.xx&oh=00_AfAThtxh-qBilVZI5FerL5gfDF4RBaT0NbNVyTPR70jAJg&oe=64EEC7AD" className="w-full h-full object-cover object-center" alt="..." />
          </div>
        </Carousel>
        <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button type="button" className="w-3 h-3 rounded-lg"></button>
          <button type="button" className="w-3 h-3 rounded-lg"></button>
        </div>
      </div>


      <div className="flex flex-col md:flex-row md:grid-cols-2 p-5 md:gap-3 md:p-10 dark:bg-gray-900 justify-center">
        <div className="flex justify-center gap-2 md:w-72">
          <div className="flex items-center justify-center text-center rounded-md  dark:text-white shadow-lg  bg-gray-300 dark:bg-gray-800 hover:dark:bg-gray-700 text-gray-900 h-16 w-full md:w-60">
            <a href='/galeri'>
              Galeri
            </a>
          </div>
          <a href='/absen' className="flex items-center justify-center text-center rounded-md  dark:text-white shadow-lg bg-gray-300 dark:bg-gray-800 hover:dark:bg-gray-700 text-gray-900 h-16 w-full md:w-60">
            Absensi
          </a>
        </div>
      </div>


      <div className="relative overflow-x-auto shadow-lg sm:rounded-lg p-3 dark:bg-gray-900">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 shadow-xl mb-20">
          <thead className="text-xs uppercase rounded-lg  dark:text-white  bg-gray-300 dark:bg-gray-800 text-gray-900">
            <tr>
              <th scope="col" className="rounded-tl-lg px-3 py-3 text-left">
                No.
              </th>
              <th scope="col" className="px-20 py33">
                Name
              </th>
              <th scope="col" className="px-10 py33">
                <div className="flex items-center">
                  No.HP
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Pekerjaan
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Status (lajang/sold)
                </div>
              </th>
              <th scope="col" className="rounded-tr-lg px-6 py-3">
                <div className="flex items-center">
                  Alamat
                </div>
              </th>
              
            </tr>
          </thead>
          <tbody className="text-center">
            {renderTableData()}
          </tbody>
        </table>
      </div>
    </div>
    <BottomNav />
    </>
  );
}

export default App;