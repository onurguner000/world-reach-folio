# 🚀 Vercel Deployment - Hızlı Komutlar

Kopyala-yapıştır komutları. Her adımı sırayla çalıştırın.

---

## 1️⃣ HAZIRLIK

```bash
# Bağımlılıkları yükle
npm install

# Development test
npm run dev
# → http://localhost:5173 açılacak, test edin ve Ctrl+C ile durdurun

# Production build test
npm run build
npm run preview
# → Test edin ve Ctrl+C ile durdurun
```

---

## 2️⃣ GIT BAŞLAT (İlk Defa İse)

```bash
# Git başlat
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "feat: Initial commit - Onur Güner Portfolio"
```

---

## 3️⃣ GITHUB'A YÜKLE

### A) GitHub'da Repository Oluştur

1. https://github.com/new adresine git
2. Repository name: `world-reach-folio`
3. Public/Private seç
4. "Create repository" tıkla

### B) Terminal'de Bağla ve Yükle

```bash
# YOUR_USERNAME yerine GitHub kullanıcı adınızı yazın
git remote add origin https://github.com/YOUR_USERNAME/world-reach-folio.git

# Main branch'e push et
git branch -M main
git push -u origin main
```

**Örnek:**
```bash
# Eğer kullanıcı adınız "onurguner000" ise:
git remote add origin https://github.com/onurguner000/world-reach-folio.git
git branch -M main
git push -u origin main
```

---

## 4️⃣ VERCEL'E DEPLOY

### Web Arayüzünden (Kolay)

1. **Vercel'e git:** https://vercel.com
2. **Sign Up/Login** → "Continue with GitHub"
3. **Dashboard** → "Add New..." → "Project"
4. **Import Git Repository** → Reponuzu seçin
5. **Configure Project:**
   - Framework: Vite ✓
   - Build Command: `npm run build` ✓
   - Output Directory: `dist` ✓
6. **Deploy** butonuna tıkla
7. ⏳ 2-3 dakika bekle
8. ✅ Tamamlandı! URL'nizi alın

---

## 5️⃣ GELECEKTEKİ GÜNCELLEMELER

Her değişiklik sonrası bu 3 komutu çalıştırın:

```bash
# 1. Değişiklikleri kaydet
git add .

# 2. Commit et
git commit -m "feat: Yapılan değişikliğin açıklaması"

# 3. GitHub'a yükle (Vercel otomatik deploy eder!)
git push origin main
```

**Örnekler:**
```bash
git commit -m "feat: Yeni hizmet eklendi"
git commit -m "fix: Calendly bug düzeltildi"
git commit -m "style: Renk paleti güncellendi"
git commit -m "docs: README güncellendi"
```

---

## 🆘 HATA ÇÖZÜM KOMUTLARI

### Eğer Build Başarısız Olursa:

```bash
# 1. Local'de test et
npm run build

# 2. Hataları düzelt, sonra:
git add .
git commit -m "fix: Build errors fixed"
git push origin main
```

### Eğer Dependencies Hatası Varsa:

```bash
# 1. Package lock'u güncelle
npm install

# 2. Commit et
git add package.json package-lock.json
git commit -m "fix: Update dependencies"
git push origin main
```

### Eğer Git Remote Hatası Varsa:

```bash
# Remote'u kontrol et
git remote -v

# Eğer remote yoksa ekle:
git remote add origin https://github.com/YOUR_USERNAME/world-reach-folio.git

# Eğer remote yanlışsa değiştir:
git remote set-url origin https://github.com/YOUR_USERNAME/world-reach-folio.git
```

---

## 📦 FAYDALII GIT KOMUTLARI

```bash
# Durumu kontrol et
git status

# Değişiklikleri gör
git diff

# Commit geçmişi
git log --oneline

# Son commit'i geri al (dosyalar kalır)
git reset --soft HEAD~1

# Branch oluştur
git checkout -b feature/new-feature

# Branch'ler arası geç
git checkout main
git checkout feature/new-feature

# Branch'leri birleştir
git checkout main
git merge feature/new-feature
```

---

## 🎯 HIZLI TEST

Deploy sonrası bu URL'leri test edin:

```
https://your-site.vercel.app           → Ana sayfa
https://your-site.vercel.app/book      → Calendly sayfası
```

---

## 🔗 FAYDALII LİNKLER

**Vercel:**
- Dashboard: https://vercel.com/dashboard
- Docs: https://vercel.com/docs

**GitHub:**
- Repositories: https://github.com?tab=repositories
- Docs: https://docs.github.com

**Bu Proje:**
- Detaylı Guide: [VERCEL_DEPLOYMENT_GUIDE.md](./VERCEL_DEPLOYMENT_GUIDE.md)
- Checklist: [deploy-checklist.md](./deploy-checklist.md)

---

## 💡 PRO TİPS

```bash
# Tüm değişiklikleri tek seferde ekle, commit et ve push et
git add . && git commit -m "feat: Güncellemeler" && git push

# Alias oluştur (daha hızlı push için)
git config --global alias.acp '!git add . && git commit -m "$1" && git push'
# Kullanımı: git acp "feat: Değişiklik açıklaması"

# Branch silme
git branch -d branch-name

# Force push (DİKKATLİ KULLAN)
git push -f origin main
```

---

**Başarılar! 🚀**

Bu komutları her zaman başvurmak için saklayın.
