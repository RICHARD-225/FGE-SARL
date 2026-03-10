# 🚀 Guide Rapide - EmailJS + Images Locales

## ⚡ 5 minutes pour configurer EmailJS

### 1. Allez sur https://www.emailjs.com/
- Sign Up (gratuit)
- Connectez votre Gmail ou autre email

### 2. Créez un Service & Template
**Service** :
- Email Services → Add Service → Gmail
- Notez le **Service ID** (commence par `service_`)

**Template** :
- Email Templates → Create
- Utilisez ce contenu :
```
Subject: Nouveau message depuis Fraternité Groupe

From: {{from_name}} ({{from_email}})
Message: {{message}}
```
- Notez le **Template ID** (commence par `template_`)

### 3. Obtenez votre Public Key
- Account → API → Copiez **Public Key**

### 4. Configurez le projet
Ouvrez `src/config/emailjs.ts` et remplissez vos 3 clés :

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_ABC123...',      // ← Votre Service ID
  TEMPLATE_ID: 'template_XYZ789...',    // ← Votre Template ID
  PUBLIC_KEY: 'abc123_public_key_...',  // ← Votre Public Key
};
```

### 5. Testez !
```bash
npm run dev
```
- Allez à http://localhost:5173/contact
- Remplissez le formulaire et cliquez "Envoyer"
- Vérifiez votre email ! 📧

---

## 🖼️ Remplacer les images Pexels

### Étape 1: Préparez vos images
Créez un dossier avec vos images locales :

```
public/assets/images/
├── services/
│   ├── informatique.jpg
│   ├── papeterie.jpg
│   ├── imprimerie.jpg
│   ├── securite.jpg
│   └── immobilier.jpg
└── gallery/
    ├── image1.jpg
    ├── image2.jpg
    ... (12 images)
```

### Étape 2: Mettez à jour le code

**Home.tsx** - Ligne ~30
```typescript
// ❌ Avant
image: 'https://images.pexels.com/photos/1714208/...',

// ✅ Après
image: '/assets/images/services/informatique.jpg',
```

**Services.tsx** - Idem, tous les `image:` 

**Gallery.tsx** - Idem, tous les `image:`

---

## 🔒 Bonus: Variables d'environnement (sécurité)

Pour ne pas exposer vos clés en public :

### Créez `.env.local` à la racine du projet
```env
VITE_EMAILJS_SERVICE_ID=service_abc...
VITE_EMAILJS_TEMPLATE_ID=template_xyz...
VITE_EMAILJS_PUBLIC_KEY=abc_public_key...
```

### Modifiez `src/config/emailjs.ts`
```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};
```

### Ajoutez à `.gitignore`
```
.env
.env.local
.env.*.local
```

✅ Vos clés ne seront jamais pushées !

---

## 📱 Tester en production

```bash
npm run build
npm run preview
```

EmailJS fonctionne aussi après le build ! 🎉

---

## ❓ Besoin d'aide ?

| Problème | Solution |
|----------|----------|
| Email non reçu | Vérifiez les spams, relancez npm run dev, testez depuis https://dashboard.emailjs.com/ |
| Erreur "Invalid keys" | Vérifiez SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY dans emailjs.ts |
| Images ne s'affichent pas | Vérifiez le chemin `/assets/images/filename.jpg` |
| Quota dépassé | Plan gratuit = 200 emails/mois, upgradez si nécessaire |

---

## 📚 Ressources

- EmailJS docs: https://www.emailjs.com/docs/
- Vite guide: https://vitejs.dev/
- React docs: https://react.dev/

Bon code ! 🚀
