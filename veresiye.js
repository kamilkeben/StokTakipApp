class VeresiyeMusteri {
    constructor(adSoyad, tcNo, telefonNo, adres) {
        this.adSoyad = adSoyad;
        this.tcNo = tcNo;
        this.telefonNo = telefonNo;
        this.adres = adres;
    }
}

// LocalStorage'dan veresiye müşterilerini getir
function veresiyeMusterileriGetir() {
    const musterilerJSON = localStorage.getItem('veresiyeMusterileri');
    return musterilerJSON ? JSON.parse(musterilerJSON) : [];
}

// Tabloyu güncelle
function tabloGuncelle() {
    const musteriler = veresiyeMusterileriGetir();
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';

    musteriler.forEach(musteri => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${musteri.adSoyad}</td>
            <td>${musteri.tcNo}</td>
            <td>${musteri.telefonNo}</td>
            <td>${musteri.adres}</td>
        `;
        tbody.appendChild(row);
    });
}
