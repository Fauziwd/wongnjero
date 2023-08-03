import React, { useEffect, useState } from "react";
import Sidebar from "../layout/Sidebar";
import Navbar from "../layout/Navbar";
import BottomNav from "../layout/BottomNav";
import Swal from "sweetalert2";

const TabelAbsensi = ({ data }) => {
  return (
    <div className="rounded-lg table-container shadow-xl overflow-x-auto overflow-y-auto max-h-44">
      <table className="w-full border-collapse border">
        <thead className="sticky top-0 dark:bg-gray-900">
          <tr className="backdrop backdrop-blur-lg shadow-lg dark:bg-gray-800 dark:backdrop-blur-lg">
            <th className="p-2">No.</th>
            <th className="p-2">Nama</th>
            <th className="p-2">Status</th>
            <th className="p-2">Keterangan</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([nama, info], index) => (
            <tr key={index}>
              <td className="p-2 border">{index + 1}</td>
              <td className="p-2 border">{nama}</td>
              <td className="p-2 border">{info.hadir ? "Hadir" : "Izin"}</td>
              <td className="p-2 border">{info.keterangan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const FormAbsensi = () => {
  const [absensiData, setAbsensiData] = useState([]);

  useEffect(() => {
    // Ambil data dari file JSON di public/angk3.json
    fetch("/angk3.json")
      .then((response) => response.json())
      .then((data) => {
        // Ambil hanya bagian nama dari data JSON
        const namaList = data.map((item) => item.Nama);
        setAbsensiData(namaList);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [absenState, setAbsenState] = useState({});

  const handleAbsenChange = (nama, type) => {
    setAbsenState((prevState) => ({
      ...prevState,
      [nama]: {
        ...prevState[nama],
        absen: type === "absen" ? true : false,
        hadir: type === "hadir" ? true : false,
        izin: type === "izin" ? true : false,
      },
    }));
  };

  const handleKeteranganChange = (nama, value) => {
    setAbsenState((prevState) => ({
      ...prevState,
      [nama]: {
        ...prevState[nama],
        keterangan: value, // Mengganti nilai keterangan saja, tidak mempengaruhi checkbox yang dipilih
      },
    }));
  };

 const handleFormSubmit = () => {
  // Cek apakah ada data absensi yang diisi atau tidak
  if (Object.keys(absenState).length === 0) {
    // Tampilkan pesan Sweet Alert jika data kosong
    Swal.fire({
      icon: "warning",
      title: "Data Absensi Kosong",
      text: "Anda belum melakukan absensi. Mohon isi data absensi terlebih dahulu.",
      confirmButtonText: "OK",
      confirmButtonColor: "#5a67d8",
    });
    return; // Hentikan eksekusi fungsi handleFormSubmit
  }

  // Mengirim data ke konsol
  console.log(absenState);

  // Mengubah data yang telah di-submit menjadi string
  const dataAsString = JSON.stringify(absenState);
  setSubmittedData(dataAsString);

  // Membersihkan formulir setelah submit
  setAbsenState({});
};


  const [submittedData, setSubmittedData] = useState("");

  const handleSendToWhatsApp = (selectedNomor) => {
    // Cek apakah user telah memilih nomor telepon tujuan
    if (!selectedNomor) {
      // Menampilkan Sweet Alert dengan dropdown pilihan nomor
      Swal.fire({
        title: "Pilih Nomor Telepon",
        input: "select",
        inputOptions: {
          6281234567890: "Adam",
          6285157033316: "Fauzi",
          // Tambahkan nomor-nomor lain yang ingin ditampilkan di dropdown
        },
        inputPlaceholder: "Pilih nomor tujuan",
        showCancelButton: true,
      }).then((result) => {
        // Cek apakah pengguna telah memilih nomor atau mengklik tombol "Cancel"
        if (result.isConfirmed) {
          const selectedNumber = result.value;
          handleOpenWhatsApp(selectedNumber); // Panggil fungsi untuk membuka WhatsApp dengan nomor yang dipilih
        }
      });
    } else {
      // Jika nomor telah dipilih, langsung membuka WhatsApp
      handleOpenWhatsApp(selectedNomor);
    }
  };

  const handleOpenWhatsApp = (selectedNomor) => {
    // Membuat pesan dalam format tabel dari data JSON yang telah di-submit
    const pesanTabel = formatPesanTabel(JSON.parse(submittedData));

    // Membuat URL link dengan format pesan WhatsApp
    const formattedPesan = encodeURIComponent(pesanTabel);
    const url = `https://wa.me/${selectedNomor}?text=${formattedPesan}`;

    // Buka link WhatsApp menggunakan window.location.href
    window.location.href = url;
  };

  // Fungsi untuk mengubah data JSON menjadi format pesan dalam tabel
  const formatPesanTabel = (data) => {
    let pesan = "No. | Nama | Status | Keterangan\n"; // Tambahkan judul kolom di sini
    let nomor = 1;

    // Iterasi setiap entri dalam data JSON
    for (const [nama, info] of Object.entries(data)) {
      const hadirStatus = info.hadir ? "Hadir" : "Izin";
      const keterangan = info.keterangan || "";

      // Format pesan untuk setiap entri
      pesan += `  ${nomor}.  | ${nama} | ${hadirStatus} | ${keterangan}\n`; // Tambahkan spasi untuk memformat pesan dalam tabel
      nomor++;
    }

    return pesan;
  };

  const [selectedNomor, setSelectedNomor] = useState(""); // State untuk menyimpan nomor telepon yang dipilih

  const handleSelectNomor = (event) => {
    setSelectedNomor(event.target.value); // Mengupdate state selectedNomor ketika dropdown dipilih
  };

  return (
    <>
      <Sidebar />
      <Navbar />

      <div className="w-full p-6 dark:bg-gray-900 dark:text-white h-screen" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <span class="bg-blue-100 text-blue-800 text-xl font-medium mr-2 px-5 py-3 text-center rounded dark:bg-blue-900 dark:text-blue-300 ml-3">Form Absensi</span>
        <div className="rounded-lg shadow-lg overflow-x-auto overflow-y-auto max-h-96">
          <table className="w-full">
            <thead className="sticky top-0 shadow-lg bg-gray-200 dark:bg-gray-800  bg-opacity-10 backdrop-filter backdrop-blur-lg">
              <tr className="rounded-tl-lg dark:bg-gray-800 dark:backdrop-blur-lg bg-opacity-10 backdrop-filter backdrop-blur-lg">
                <th className="rounded-tl-lg p-2">No</th>
                <th className="p-2">Nama</th>
                <th className="p-2" colSpan="3">
                  Status
                </th>
                <th className="p-2">Keterangan</th>
              </tr>
              <tr>
                <th className="p-2"></th>
                <th className="p-2"></th>
                <th className="p-2">Absen</th>
                <th className="p-2">Hadir</th>
                <th className="p-2">Izin</th>
                <th className="p-2"></th>
              </tr>
            </thead>
            <tbody>
              {absensiData.map((nama, index) => (
                <tr key={index}>
                  <td className="p-2 border">{index + 1}</td>
                  <td className="p-2 border">{nama}</td>
                  <td className="p-2 border text-center">
                    <input
                      type="checkbox"
                      name="Absen"
                      className="form-checkbox rounded-full border-blue-500 dark:bg-gray-800 h-4 w-4 text-purple-600"
                      checked={absenState[nama]?.absen || false}
                      onChange={() => handleAbsenChange(nama, "absen")}
                    />
                  </td>
                  <td className="p-2 border text-center">
                    <input
                      type="checkbox"
                      name="Hadir"
                      className="form-checkbox rounded-full border-blue-500 dark:bg-gray-800 h-4 w-4 text-purple-600"
                      checked={absenState[nama]?.hadir || false}
                      onChange={() => handleAbsenChange(nama, "hadir")}
                    />
                  </td>
                  <td className="p-2 border text-center">
                    <input
                      type="checkbox"
                      name="Izin"
                      className="form-checkbox rounded-full border-blue-500 dark:bg-gray-800 h-4 w-4 text-purple-600"
                      checked={absenState[nama]?.izin || false}
                      onChange={() => handleAbsenChange(nama, "izin")}
                    />
                  </td>
                  <td className="p-2 border">
                    <textarea
                      name="Keterangan"
                      className="w-full p-1 border-blue-600 dark:bg-gray-800 rounded"
                      value={absenState[nama]?.keterangan || ""}
                      onChange={(e) =>
                        handleKeteranganChange(nama, e.target.value)
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <button
          className="mt-4 mr-4 bg-purple-600 shadow-xl text-white py-2 px-4 rounded hover:bg-purple-700"
          onClick={handleFormSubmit}
        >
          Submit
        </button>

        {/* Tombol untuk mengirim data ke WhatsApp */}
        {selectedNomor && (
          <button
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
            onClick={() => handleSendToWhatsApp(selectedNomor)} // Memanggil fungsi handleSendToWhatsApp dengan nomor yang dipilih
          >
            Bagikan ke WhatsApp
          </button>
        )}

        {/* Dropdown untuk memilih nomor orang */}
        {submittedData && (
          <div className="my-4">
            <label
              htmlFor="nomorOrang"
              className="text-sm font-medium text-gray-700 dark:text-white"
            >
              Pilih Nomor Orang:
            </label>
            <select
              id="nomorOrang"
              name="nomorOrang"
              className="block w-full mt-1 py-2 px-3 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={(event) => setSelectedNomor(event.target.value)} // Mengupdate state selectedNomor ketika dropdown dipilih
            >
              {/* Opsi-opsi dropdown */}
              <option value="">Pilih Nomor Orang</option>
              <option value="6281234567890">Adam</option>
              <option value="6285157033316">Fauzi</option>
              {/* Tambahkan opsi sesuai dengan nomor-nomor yang ingin Anda tampilkan */}
            </select>
          </div>
        )}

        {/* Tabel hasil inputan absensi */}
        {submittedData && (
          <>
            <h2 className="mt-6 mb-2 drop-shadow-lg">Hasil Inputan Absensi:</h2>
            <TabelAbsensi data={JSON.parse(submittedData)} />
          </>
        )}
      </div>
      <BottomNav />
    </>
  );
};

export default FormAbsensi;
