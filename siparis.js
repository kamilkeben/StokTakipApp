class SiparisMusteri {
    constructor(id, adSoyad, tcNo, telefonNo, olcusu, adres) {
        this.id = id;
        this.adSoyad = adSoyad;
        this.tcNo = tcNo;
        this.telefonNo = telefonNo;
        this.olcusu = olcusu;
        this.adres = adres;
    }

    static musterileriGetir() {
        return JSON.parse(localStorage.getItem('siparisMusterileri')) || [];
    }

    static musteriEkle(musteri) {
        const musteriler = this.musterileriGetir();
        musteriler.push(musteri);
        localStorage.setItem('siparisMusterileri', JSON.stringify(musteriler));
    }

    static musteriSil(tcNo) {
        let musteriler = this.musterileriGetir();
        musteriler = musteriler.filter(m => m.tcNo !== tcNo);
        localStorage.setItem('siparisMusterileri', JSON.stringify(musteriler));
    }

    static musteriBul(tcNo) {
        const musteriler = this.musterileriGetir();
        return musteriler.find(m => m.tcNo === tcNo);
    }

    static musteriAra(aramaMetni) {
        const musteriler = this.musterileriGetir();
        return musteriler.filter(m => 
            m.tcNo.toLowerCase().includes(aramaMetni.toLowerCase())
        );
    }
}
