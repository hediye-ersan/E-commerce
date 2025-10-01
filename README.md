## 🛍️ E‑Ticaret Frontend (React + Vite)

Modern, hızlı ve responsive bir e‑ticaret arayüzü. Kategori bazlı ürün listeleme, gelişmiş filtreleme, sepet, favoriler ve sipariş geçmişi akışlarını içerir.

### Özellikler
- **Ürün listeleme**: Men/Women kategorileri; grid görünüm, kart bileşenleri
- **Filtreleme**: Fiyat aralığı, renk, beden, stil; mobil tam ekran filtre paneli
- **Favoriler**: Favori ürünleri yönetme (örnek veri ile)
- **Sepet**: Sepete ekleme/çıkarma, miktar güncelleme (context)
- **Sipariş geçmişi**: Filtre/arama ile listeleme (context)
- **Erişilebilirlik**: Renk seçimlerinde `aria-pressed`, ikon butonlarda `aria-label`

### Teknolojiler
- React `^19.x`, Vite `^7`
- React Router DOM `^5.3.4` (v6'ya yükseltilmeden çalışacak şekilde)
- Tailwind CSS `^4`
- lucide-react ikonları

---

## 🚀 Başlangıç

Vercel Link:
- https://e-commerce-drab-six-ds21nudubw.vercel.app/

Gereksinimler:
- Node.js `>= 18`
- npm `>= 9`

Kurulum ve geliştirme:

```bash
npm install
npm run dev      # http://localhost:5173
```

Üretim derlemesi ve önizleme:

```bash
npm run build
npm run preview  # local static preview
```

Lint:

```bash
npm run lint
```

---

## 📁 Proje Yapısı

```
src/
  components/
    Navbar.jsx           # Mobil/desktop kullanıcı menüsü, arama
    Filters.jsx          # Fiyat/renk/beden/stil filtre paneli
    ProductCard.jsx      # Ürün kartı (React.memo, lazy image)
    ...
  pages/
    HomePage.jsx
    CategoryPage.jsx     # /category/:category (men|women)
    ProductDetailPage.jsx
    FavoritesPage.jsx
    OrderHistoryPage.jsx
    Cart.jsx
  contexts/
    CartContext.jsx
    AuthContext.jsx
    OrderHistoryContext.jsx
  utils/
    products.js          # Mock ürün verisi (kategori/cinsiyet/renk/beden)
    constants.js         # Filtre sabitleri (renk/beden/stil/kategori)
  App.jsx                # Router v5: Switch/Route tanımları
  main.jsx               # BrowserRouter + App
```

---

## 🔎 Filtreleme Akışı (Kategori Sayfası)

- `utils/products.js`: Mock dataset (name, price, color, size, style, gender)
- `components/Category.jsx`:
  - Route'dan `men|women` alınır; ürünler filtrelenir
  - Fiyat min/max dinamik hesaplanır ve `Filters` bileşenine aktarılır
  - Filtreler `onApply` ile uygulanır; sonuç sayısı gösterilir
- `components/Filters.jsx`:
  - Fiyat aralığı slider’ları, renk/beden/stil seçimleri
  - Uygula ve Temizle (Clear) butonları; mobilde tam ekran panel destekli

---

## 🧭 Rotalar (React Router v5)

- `/` → `HomePage`
- `/category/:category` → `CategoryPage` (men|women)
- `/product/:id` → `ProductDetailPage`
- `/cart` → `Cart`
- `/favorites` → `FavoritesPage`
- `/orders` → `OrderHistoryPage`

> Not: `Navbar` mobil menüde kullanıcı ikonu menüyü açar; Favorites/Orders linkleri buradan da erişilebilir.

---

## 🧩 Geliştirme Notları

- `ProductCard` `React.memo` ile sarılıdır; görsellere `loading="lazy"` eklenmiştir.
- Filtre sabitleri `utils/constants.js` altındadır; tek kaynaktan yönetilir.
- Mobil kullanıcı menüsünde dış tıklama yönetimi için desktop/mobil ayrı `ref` kullanılır.
- Router v6'ya geçiş yapılmamıştır; `useHistory` kullanan akışlar v5 ile uyumludur.


## 🤝 Katkı
1. Bu repoyu fork’layın
2. Branch açın (`feat/...`, `fix/...`)
3. Değişikliklerinizi yapın ve lint’ten geçirin
4. PR açın

---


