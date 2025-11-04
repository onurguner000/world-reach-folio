# ✅ Vercel Deploy Checklist

Bu dosyayı deploy sırasında yanınızda tutun ve her adımı işaretleyin.

---

## 📦 HAZIRLIK (Local)

```bash
# 1. Test edin
npm install
npm run dev
# ✓ Site çalışıyor mu? → Tarayıcıda kontrol edin

# 2. Production build test
npm run build
npm run preview
# ✓ Build başarılı mı? → dist/ klasörü oluştu mu?

# 3. Değişiklikleri commit edin
git add .
git commit -m "feat: Production ready - Vercel deployment"
```

**Manual Kontrol:**
- [ ] Tüm sayfalar çalışıyor
- [ ] 7 dil değişimi çalışıyor (EN, TR, ZH, DE, ES, FR, AR)
- [ ] Calendly popup açılıyor
- [ ] /book sayfası çalışıyor
- [ ] Logolar görünüyor (19.png)
- [ ] Console'da hata yok

---

## 🌐 GITHUB

```bash
# Repository oluşturun (GitHub.com'da)
# Repository URL'nizi kopyalayın

# Remote ekleyin
git remote add origin https://github.com/YOUR_USERNAME/world-reach-folio.git

# Push edin
git branch -M main
git push -u origin main
```

**Kontrol:**
- [ ] GitHub'da repository oluşturuldu
- [ ] Kod push edildi
- [ ] Repository Public veya Private (Vercel her ikisini de destekler)

---

## 🚀 VERCEL DEPLOYMENT

### 1. Vercel Hesabı
- [ ] https://vercel.com adresine gidin
- [ ] "Sign Up" ile hesap oluşturun
- [ ] "Continue with GitHub" ile bağlanın

### 2. Proje Import
- [ ] "Add New..." → "Project" tıklayın
- [ ] GitHub repository'nizi bulun
- [ ] "Import" butonuna tıklayın

### 3. Ayarlar Kontrolü
```
Project Name:        world-reach-folio ✓
Framework:           Vite ✓
Build Command:       npm run build ✓
Output Directory:    dist ✓
Install Command:     npm install ✓
```
- [ ] Tüm ayarlar doğru
- [ ] Environment Variables: Boş (şimdilik)

### 4. Deploy
- [ ] "Deploy" butonuna tıklayın
- [ ] ⏳ 2-3 dakika bekleyin
- [ ] ✅ "Congratulations!" mesajını gördünüz mü?

---

## 🎯 POST-DEPLOY TEST

**Vercel URL'iniz:** `https://world-reach-folio.vercel.app`

### Functional Tests
- [ ] Ana sayfa yükleniyor
- [ ] Hero arka plan görseli var
- [ ] Navbar logosu (19.png) görünüyor
- [ ] Footer logosu (19.png) görünüyor
- [ ] Dil değiştirme çalışıyor (7 dil)
- [ ] Calendly butonu çalışıyor (Navbar + Hero)
- [ ] Calendly popup açılıyor
- [ ] Popup çıkış butonu çalışıyor
- [ ] `/book` sayfası açılıyor
- [ ] Harita modalı çalışıyor
- [ ] Servis detayları modalı çalışıyor
- [ ] "Open in Google Maps" çalışıyor
- [ ] "Open in Apple Maps" çalışıyor

### Mobile Tests
- [ ] iPhone görünümü düzgün
- [ ] iPad görünümü düzgün
- [ ] Android görünümü düzgün
- [ ] Calendly modal mobilde tam ekran

### Performance
- [ ] Sayfa yükleme hızlı (< 3 saniye)
- [ ] Görsel yüklemeleri sorunsuz
- [ ] Animasyonlar akıcı
- [ ] Console'da hata yok

---

## 🎨 ÖZEL DOMAIN (Opsiyonel)

Eğer kendi domain'iniz varsa (örn: `onurguner.com`):

### Vercel'de:
1. [ ] Dashboard → Settings → Domains
2. [ ] "Add" butonuna tıklayın
3. [ ] Domain adınızı girin: `onurguner.com`
4. [ ] DNS talimatlarını alın

### Domain Sağlayıcınızda:
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

5. [ ] DNS ayarlarını yapın
6. [ ] Vercel'de "Verify" tıklayın
7. [ ] ⏳ SSL sertifikası bekleniyor (5-30 dakika)
8. [ ] ✅ Domain aktif ve HTTPS çalışıyor

---

## 📱 PAYLAŞIM

Artık siteniz canlı! Paylaşabileceğiniz yerler:

- [ ] LinkedIn profiline ekleyin
- [ ] WhatsApp Business'ta paylaşın
- [ ] E-posta imzanıza ekleyin
- [ ] Kartvizite QR kod ekleyin
- [ ] Google Business Profile'a link ekleyin
- [ ] Sosyal medyada duyurun

**Paylaşım URL'niz:**
```
https://world-reach-folio.vercel.app
```
(veya özel domain'iniz)

---

## 🔄 GELECEKTEKİ GÜNCELLEMELER

Her değişiklikten sonra:

```bash
# 1. Değişiklikleri commit edin
git add .
git commit -m "feat: Yeni özellik eklendi"

# 2. GitHub'a push edin
git push origin main

# 3. Vercel otomatik deploy eder!
```

- [ ] Değişiklik yaptım
- [ ] Git commit + push yaptım
- [ ] Vercel otomatik deploy etti (2-3 dakika)
- [ ] Canlı siteyi kontrol ettim

---

## 🆘 SORUN ÇÖZÜM

### Build Başarısız Olursa:

1. **Vercel Dashboard:**
   - [ ] Deployments → Failed Build
   - [ ] Logs'u açın
   - [ ] Hatayı kopyalayın

2. **Local'de Test:**
```bash
npm run build
# Hata varsa düzeltin
```

3. **Yaygın Hatalar:**

**Module not found:**
```bash
npm install
git add package.json package-lock.json
git commit -m "fix: Update dependencies"
git push
```

**TypeScript errors:**
```bash
# Hataları düzeltin
npm run build
git add .
git commit -m "fix: TypeScript errors"
git push
```

**vercel.json missing:**
- [ ] Dosyanın proje root'unda olduğundan emin olun
- [ ] Git'e eklendiğinden emin olun

---

## 📊 VERCEL DASHBOARD

Deploy sonrası yapabilecekleriniz:

- [ ] **Analytics:** Ziyaretçi sayısını görün
- [ ] **Speed Insights:** Performance metrikleri
- [ ] **Deployments:** Tüm deploy geçmişi
- [ ] **Logs:** Runtime logları
- [ ] **Environment Variables:** API key'leri ekleyin

---

## ✨ BAŞARILI! 

Tebrikler! Siteniz artık canlıda! 🎉

**Vercel Avantajları:**
✅ Otomatik SSL/HTTPS
✅ Global CDN
✅ Her push otomatik deploy
✅ Preview deployments (branch başına)
✅ Zero downtime
✅ Instant rollback

---

**Sorularınız için:**
- 📖 [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md) - Detaylı guide
- 🌐 https://vercel.com/docs - Vercel dokümantasyon
- 💬 GitHub Issues - Teknik destek

**İyi çalışmalar! 🚀**
