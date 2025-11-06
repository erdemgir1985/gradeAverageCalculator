// Basit Not Hesaplayıcı

function hesapla() {
    // Notları al
    const vize = parseFloat(document.getElementById('vize').value);
    const final = parseFloat(document.getElementById('final').value);
    
    // Boş kontrolü
    if (isNaN(vize) || isNaN(final)) {
        alert('Lütfen her iki notu da giriniz!');
        return;
    }
    
    // Aralık kontrolü
    if (vize < 0 || vize > 100 || final < 0 || final > 100) {
        alert('Notlar 0-100 arasında olmalıdır!');
        return;
    }
    
    // Ortalamayı hesapla (vize %40, final %60)
    const ortalama = (vize * 0.4) + (final * 0.6);
    
    // Sonucu göster
    document.getElementById('ortalama').textContent = ortalama.toFixed(1);
    
    // Durumu belirle
    const durumElement = document.getElementById('durum');
    if (ortalama >= 50) {
        durumElement.textContent = 'Geçti';
        durumElement.className = 'gec';
    } else {
        durumElement.textContent = 'Kaldı';
        durumElement.className = 'kal';
    }
    
    // Sonuç bölümünü göster
    document.getElementById('sonuc').style.display = 'block';
}

// Enter tuşu ile hesaplama
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        hesapla();
    }
});