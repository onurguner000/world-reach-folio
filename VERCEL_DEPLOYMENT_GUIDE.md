# 🚀 Vercel Deployment Guide - Onur Güner Portfolio

Bu guide, projenizi Vercel'e deploy etmek için gereken tüm adımları içerir.

---

## 📋 ÖN HAZIRLIK (Local'de Yapılması Gerekenler)

### 1. Projeyi Test Edin
```bash
# Bağımlılıkları yükleyin (eğer yoksa)
npm install

# Development modunda çalıştırın
npm run dev

# Production build test edin
npm run build
npm run preview
```

✅ **Kontrol Listesi:**
- [ ] Tüm sayfalar düzgün çalışıyor mu?
- [ ] Dil değiştirme çalışıyor mu? (EN, TR, ZH, DE, ES, FR, AR)
- [ ] Calendly entegrasyonu çalışıyor mu?
- [ ] Responsive tasarım sorunsuz mu?
- [ ] Console'da hata var mı?

---

## 🔧 VERCEL HAZIRLIĞI (Dosyalar Oluşturuldu ✅)

Aşağıdaki dosyalar otomatik olarak oluşturuldu:

1. ✅ `vercel.json` - Vercel yapılandırma dosyası
2. ✅ `.vercelignore` - Deploy edilmeyecek dosyalar
3. ✅ `.gitignore` - Güncellenmiş (Vercel klasörü eklendi)

---

## 📦 GIT REPOSITORY HAZIRLIĞI

### 1. Git Repository Oluşturun (Eğer yoksa)

```bash
# Git başlatın
git init

# Tüm dosyaları ekleyin
git add .

# İlk commit
git commit -m "feat: Initial commit - Onur Güner Portfolio with i18n and Calendly"
```

### 2. GitHub'a Yükleyin

**GitHub'da:**
1. https://github.com/new adresine gidin
2. Repository adı: `world-reach-folio` (veya istediğiniz isim)
3. **Public** veya **Private** seçin
4. **Create repository** butonuna tıklayın

**Terminal'de:**
```bash
# Remote ekleyin (YOUR_USERNAME kısmını kendi kullanıcı adınızla değiştirin)
git remote add origin https://github.com/YOUR_USERNAME/world-reach-folio.git

# Main branch'e push edin
git branch -M main
git push -u origin main
```

---

## 🌐 VERCEL'DE DEPLOYMENT

### Adım 1: Vercel Hesabı Oluşturma

1. **Vercel'e gidin:** https://vercel.com
2. **Sign Up** butonuna tıklayın
3. **Continue with GitHub** seçeneğini seçin
4. GitHub hesabınızla giriş yapın ve Vercel'e izin verin

### Adım 2: Yeni Proje Oluşturma

1. **Vercel Dashboard'da:**
   - **"Add New..."** butonuna tıklayın
   - **"Project"** seçeneğini seçin

2. **Import Git Repository:**
   - GitHub repository'leriniz listelenecek
   - `world-reach-folio` repository'sini bulun
   - **"Import"** butonuna tıklayın

### Adım 3: Proje Yapılandırması

**Configure Project** ekranında:

#### 1. Project Name
```
world-reach-folio
```
(veya istediğiniz domain-friendly isim)

#### 2. Framework Preset
```
Vite
```
(Otomatik algılanmalı)

#### 3. Root Directory
```
./
```
(Varsayılan - değiştirmeyin)

#### 4. Build Settings
```
Build Command:     npm run build
Output Directory:  dist
Install Command:   npm install
Development Command: npm run dev
```
(Otomatik algılanmalı, değiştirmeyin)

#### 5. Environment Variables
**Şu an için boş bırakın** (ihtiyaç yok)

### Adım 4: Deploy

1. **"Deploy"** butonuna tıklayın
2. ⏳ Vercel build sürecini başlatacak (2-3 dakika sürer)
3. ✅ Deploy tamamlandığında:
   - 🎉 Konfeti animasyonu göreceksiniz
   - 🔗 Canlı URL gösterilecek (örn: `world-reach-folio.vercel.app`)

---

## 🎯 DEPLOY SONRASI KONTROLLER

### 1. Sitenizi Test Edin

**Vercel Dashboard'da:**
- **"Visit"** butonuna tıklayın veya URL'yi tarayıcıda açın

**Test Listesi:**
- [ ] Ana sayfa yükleniyor mu?
- [ ] 7 dil çevirisi çalışıyor mu?
- [ ] Calendly modal açılıyor mu?
- [ ] `/book` route'u çalışıyor mu?
- [ ] Hero arka plan görseli yükleniyor mu?
- [ ] Navbar ve Footer logosu (`19.png`) görünüyor mu?
- [ ] Mobil responsive çalışıyor mu?
- [ ] Harita modal'ı çalışıyor mu?

### 2. Özel Domain Bağlama (Opsiyonel)

**Eğer kendi domain'iniz varsa (örn: onurguner.com):**

1. **Vercel Dashboard > Project > Settings > Domains**
2. **"Add"** butonuna tıklayın
3. Domain adınızı girin: `onurguner.com`
4. **DNS Ayarları** (Domain sağlayıcınızda):
   ```
   Type: A
   Name: @
   Value: 76.76.21.21

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
5. **Verify** butonuna tıklayın
6. ✅ SSL sertifikası otomatik oluşturulacak (birkaç dakika)

---

## 🔄 GÜNCELLEME YAPMAK (Gelecekte)

### 1. Kod Değişiklikleri Yaptıktan Sonra:

```bash
# Değişiklikleri kaydedin
git add .
git commit -m "feat: Yeni özellik eklendi"
git push origin main
```

### 2. Vercel Otomatik Deploy Edecek
- ✅ Her `git push` işleminde Vercel otomatik build ve deploy eder
- ⏱️ 2-3 dakika içinde değişiklikler canlıya yansır
- 🔔 E-posta bildirimi alırsınız

---

## 📊 VERCEL DASHBOARD ÖZELLİKLERİ

### Analytics (Analizler)
- **Deployments:** Tüm deploy geçmişi
- **Analytics:** Ziyaretçi istatistikleri
- **Speed Insights:** Performans metrikleri
- **Logs:** Hata logları

### Faydalı Özellikler:
- **Preview Deployments:** Her branch için otomatik preview URL
- **Rollback:** Önceki versiyona geri dönme
- **Environment Variables:** API key'leri ekleme
- **Custom Headers:** SEO ve güvenlik ayarları

---

## 🐛 SORUN GİDERME

### Deploy Başarısız Olursa:

#### 1. Build Loglarını Kontrol Edin
```
Vercel Dashboard > Deployments > Failed Build > Logs
```

#### 2. Yaygın Hatalar:

**❌ Module not found:**
```bash
# Local'de eksik bağımlılıkları yükleyin
npm install
git add package.json package-lock.json
git commit -m "fix: Update dependencies"
git push
```

**❌ Build failed:**
```bash
# Local'de build test edin
npm run build

# Hataları düzeltin ve push edin
```

**❌ Page not found (404):**
- `vercel.json` dosyasının doğru olduğundan emin olun
- Rewrites kuralları SPA routing için gerekli

#### 3. Calendly Widget Yüklenmiyor:
- Calendly URL'sini kontrol edin: `src/constants/calendly.ts`
- Tarayıcı console'da hata var mı kontrol edin
- Calendly script'i bloke edilmiş olabilir (Ad blocker kapatın)

---

## 🎨 URL YAPISI

**Vercel Otomatik URL:**
```
https://world-reach-folio.vercel.app
https://world-reach-folio-git-main-username.vercel.app
```

**Özel Domain (Varsa):**
```
https://onurguner.com
https://www.onurguner.com
```

**Route'lar:**
```
/           → Ana sayfa
/book       → Calendly tam sayfa
/*          → 404 → Ana sayfa yönlendirme
```

---

## ✅ FINAL CHECKLIST

Deploy öncesi son kontrol:

- [ ] `npm run build` local'de çalışıyor
- [ ] Git repository GitHub'da
- [ ] Vercel hesabı oluşturuldu
- [ ] Proje import edildi
- [ ] Build ayarları doğru
- [ ] Deploy başarılı
- [ ] Canlı site çalışıyor
- [ ] Tüm özellikler test edildi
- [ ] Domain bağlandı (opsiyonel)

---

## 🎉 BAŞARILI DEPLOY SONRASI

**Artık siteniz canlı!** 🚀

**Paylaşabileceğiniz URL:**
```
https://world-reach-folio.vercel.app
```

**Sosyal Medya Paylaşımı İçin:**
- LinkedIn profil URL'sine ekleyin
- WhatsApp Business'ta paylaşın
- E-posta imzanıza ekleyin
- Kartvizitinize QR kod olarak basın

---

## 📞 DESTEK

**Vercel Dokümantasyon:**
- https://vercel.com/docs

**Community Support:**
- https://github.com/vercel/vercel/discussions

**Bu Proje:**
- GitHub Issues açabilirsiniz

---

## 🔥 PRO TIPS

1. **Performance:** Vercel Edge Network otomatik CDN sağlar
2. **SSL:** Ücretsiz HTTPS otomatik aktif
3. **Git Integration:** Branch başına preview URL
4. **Zero Config:** Ayar yapmadan çalışır
5. **Instant Rollback:** Tek tık ile önceki versiyona dönme

---

**İyi şanslar! 🎊**

Deploy sırasında sorun yaşarsanız, build loglarını paylaşın.
