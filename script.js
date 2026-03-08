(function () {
  'use strict';

  var noWa = '6282212345678';

  function bukaWhatsApp(pesan) {
    var text = encodeURIComponent(pesan);
    var url = 'https://wa.me+6282134637488/' + noWa + '?text=' + text;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      window.location.href = url;
    } else {
      window.open(url, '_blank');
    }
  }

  var navToggle = document.querySelector('.nav-toggle');
  var navMenu = document.querySelector('.nav-menu');
  var navLinks = document.querySelectorAll('.nav-menu a');
  var formKontak = document.getElementById('form-kontak');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('active');
      navToggle.setAttribute('aria-label',
        navMenu.classList.contains('active') ? 'Tutup menu' : 'Buka menu');
    });
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        navMenu.classList.remove('active');
      });
    });
  }

  if (formKontak) {
    formKontak.addEventListener('submit', function (e) {
      e.preventDefault();
      var nama = document.getElementById('nama').value.trim();
      var tel = document.getElementById('tel').value.trim();
      var pesan = document.getElementById('pesan').value.trim();
      var msg = 'Halo, saya ' + nama + ' (HP: ' + tel + ').\n\n' + pesan;
      bukaWhatsApp(msg);
    });
  }

  var formCustomer = document.getElementById('form-customer');
  if (formCustomer) {
    formCustomer.addEventListener('submit', function (e) {
      e.preventDefault();
      var nama = document.getElementById('customer-nama').value.trim();
      var tel = document.getElementById('customer-tel').value.trim();
      var alamat = document.getElementById('customer-alamat').value.trim();
      var produk = document.getElementById('customer-produk').value;
      var ukuran = document.getElementById('customer-ukuran').value.trim();
      var lokasi = document.getElementById('customer-lokasi').value.trim();
      var tanggal = document.getElementById('customer-tanggal').value;
      var metode = document.getElementById('customer-metode').value;
      var ukiran = document.getElementById('customer-ukiran').value.trim();
      var catatan = document.getElementById('customer-catatan').value.trim();

      var lines = [
        '*DATA PEMESANAN / CUSTOMER*',
        '',
        'Nama: ' + nama,
        'No. HP/WA: ' + tel,
        'Alamat: ' + alamat,
        '',
        'Jenis produk: ' + produk,
        'Ukuran: ' + (ukuran || '-'),
        'Lokasi pemakaman/TPU: ' + lokasi,
        'Tanggal pemasangan: ' + (tanggal || '-'),
        'Metode ukiran: ' + (metode || '-'),
        '',
        'Teks ukiran: ' + (ukiran || '-'),
        'Catatan: ' + (catatan || '-')
      ];
      bukaWhatsApp(lines.join('\n'));
    });
  }
})();
