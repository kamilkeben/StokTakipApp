class Toptanci {
    constructor(adSoyad, firmaAdi, telefonNo) {
        this.id = Date.now().toString();
        this.adSoyad = adSoyad;
        this.firmaAdi = firmaAdi;
        this.telefonNo = telefonNo;
    }
}

// Toptancıları localStorage'da tutacağız
function toptanciKaydet(toptanci) {
    let toptancilar = JSON.parse(localStorage.getItem('toptancilar')) || [];
    toptancilar.push(toptanci);
    localStorage.setItem('toptancilar', JSON.stringify(toptancilar));
}

function toptancilariGetir() {
    return JSON.parse(localStorage.getItem('toptancilar')) || [];
}

function toptanciSil(id) {
    let toptancilar = toptancilariGetir();
    toptancilar = toptancilar.filter(t => t.id !== id);
    localStorage.setItem('toptancilar', JSON.stringify(toptancilar));
    return true;
}

function tabloGuncelle() {
    const toptancilar = toptancilariGetir();
    const tbody = document.querySelector('tbody');
    tbody.innerHTML = '';
    
    toptancilar.forEach(toptanci => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${toptanci.adSoyad}</td>
            <td>${toptanci.firmaAdi}</td>
            <td>${toptanci.telefonNo}</td>
        `;
        row.style.cursor = 'pointer';
        row.onclick = () => {
            window.location.href = `toptanci-detay.html?id=${toptanci.id}`;
        };
        tbody.appendChild(row);
    });
}