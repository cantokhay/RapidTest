# Futbol Kadro / Diziliş Dashboard Ürünleri Araştırması

Bu raporda piyasadaki en popüler futbol kadro oluşturma (lineup builder) ve takım yönetim dashboard ürünleri (BuildLineup, Lineup11, Homecrowd, FotMob, Transfermarkt, SofaScore vb.) incelenmiştir.

## Ortak Özellikler Listesi

Piyasadaki popüler ürünlerin sahip olduğu temel uygulamalar ve özellikler şunlardır:

1.  **Görsel Saha (Interactive Pitch):** Taktik tahtası veya yeşil saha görünümü.
2.  **Diziliş Seçimi (Formations):** 4-3-3, 4-4-2, 3-5-2 gibi hazır taktiksel dizilişleri tek tıkla uygulayabilme.
3.  **Oyuncu Ekleme ve Arama:** Veritabanından oyuncu arama veya serbest metin olarak isim girme.
4.  **Sürükle-Bırak (Drag & Drop):** Oyuncuların saha içindeki konumlarını serbestçe değiştirebilme.
5.  **Forma/Kit Özelleştirme:** Forma rengi, deseni ve takım logosu (arması) yükleme / seçme.
6.  **Yedek Kulübesi (Substitutes):** İlk 11 dışında yedek oyuncular için ayrılmış liste veya yan panel.
7.  **Dışa Aktarma (Export/Share):** Hazırlanan kadroyu yüksek çözünürlüklü görsel (PNG/JPG) olarak indirme veya sosyal medyada paylaşma.
8.  **Oyuncu Detayları:** Oyuncu gücü, reytingi, istatistikleri veya mevkisi gibi ekstra verilerin gösterilmesi.
9.  **Çapraz Platform (Responsive):** Hem mobil hem de masaüstünde pürüzsüz çalışma deneyimi.

---

## "%20 Özellik = %80 Değer" (Pareto) Yaklaşımı

Kullanıcıların bu uygulamaları kullanmasındaki temel amaç; **hızlıca görsel bir kadro oluşturup bunu başkalarıyla paylaşmaktır.** Tonlarca ekstra istatistik veya karmaşık koçluk modülleri (antrenman takibi, xG simülasyonları vb.) yerine aşağıdaki "Hayati %20'lik" özellik seti, kullanıcı değerinin (ve kullanım oranının) %80'ini oluşturmaktadır:

### En Önemli Özellikler (MVP için Odaklanılması Gerekenler)

1.  **Hızlı Diziliş (Seçili Formasyon + Saha Çizimi):** Kullanıcı yeşil sahayı ve oyuncu slotlarını (noktalarını) anında görmelidir. Dizilişi (örn. 4-4-2) seçtiğinde slotlar otomatik güncellenmelidir.
2.  **Kolay Oyuncu Atama (Arama + Tıklama):** Sahadaki boş bir pozisyona tıklandığında hızlıca bir oyuncu aranıp eklenebilmelidir (API entegrasyonu veya manuel metin).
3.  **Temel Görsel Özelleştirme (Takım Kimliği):** Takım arması ve forma ana renginin değiştirilebilmesi. Bu basit özellik, aidiyet hissini maksimuma çıkarır.
4.  **Tek Tıkla Paylaşım/İndirme (Export to Image):** Kadro tamamlandığında bunu bir resim (`.png`) olarak indirebilmek projenin "viral" olmasını sağlayan temel taşıdır.

Bu 4 ana geliştirme kalemi çıkartılıp yüksek UX ile sunulduğunda, piyasadaki karmaşık uygulamalara kıyasla kullanıcı tatmininin %80'ine rahatlıkla ulaşılacaktır.
