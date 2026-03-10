# 📧 Guide d'intégration EmailJS

## Étapes pour configurer EmailJS

### 1️⃣ Créer un compte EmailJS
1. Allez sur **https://www.emailjs.com/**
2. Cliquez sur **"Sign Up"** (inscription gratuite)
3. Complétez votre profil

### 2️⃣ Configurer votre Email Service
EmailJS supporte Gmail, Outlook, Yahoo, etc.

#### **Avec Gmail** (recommandé):
1. Allez sur le **Dashboard** → **Email Services**
2. Cliquez sur **"Add New Service"**
3. Sélectionnez **Gmail**
4. Connectez votre compte Gmail
5. Donnez un nom au service (ex: `gmail_service`)
6. Notez le **Service ID** (ex: `service_a1b2c3d4e5f6g7h8`)

⚠️ **Gmail 2FA** : Si vous avez l'authentification 2FA, utilisez une **App Password** à la place de votre mot de passe normal :
- Allez sur https://myaccount.google.com/apppasswords
- Sélectionnez: Mail + Windows/Mac/Linux
- Copiez le mot de passe de 16 caractères

### 3️⃣ Créer un Template d'Email
1. Allez sur **Email Templates** → **Create New Template**
2. Donnez un nom (ex: `contact_form_email`)
3. Notez le **Template ID**
4. Copiez ce template ci-dessous dans l'éditeur :

```
Subject: Nouveau message depuis le formulaire de contact

From: {{from_name}} <{{from_email}}>

Message:
{{message}}
```

**Variables disponibles** : `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_email}}`

### 4️⃣ Obtenir votre Public Key
1. Allez sur **Account** → **API Keys**
2. Copiez la **Public Key**

### 5️⃣ Remplir le fichier config
Ouvrez `src/config/emailjs.ts` et remplissez :

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_a1b2c3d4e5f6g7h8',      // Votre Service ID
  TEMPLATE_ID: 'template_xyz789abc',           // Votre Template ID
  PUBLIC_KEY: 'abc123xyz_public_key_',         // Votre Public Key
};
```

✅ **Voilà ! C'est prêt !** Testez le formulaire.

---

## 🖼️ Remplacer les images Pexels par les vôtres

### Option 1️⃣ : Images locales (recommandé)

#### **Créer un dossier public/assets/images**
```
project/
├── public/
│   └── assets/
│       └── images/
│           ├── informatique.jpg
│           ├── papeterie.jpg
│           ├── imprimerie.jpg
│           ├── securite.jpg
│           ├── immobilier.jpg
│           └── testimonial-1.jpg
```

#### **Utiliser dans le code**
Dans `src/pages/Home.tsx`, `Services.tsx`, etc., remplacez :

```typescript
// ❌ Avant (Pexels)
image: 'https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg?auto=compress&cs=tinysrgb&w=800',

// ✅ Après (Local)
image: '/assets/images/informatique.jpg',
```

⚠️ Les images doivent être placées dans le dossier `public/` pour être accessibles lors du build.

### Option 2️⃣ : Hébergement externe (Cloudinary, Imgur, etc.)

1. Uploadez vos images sur **Cloudinary** (cloudinary.com)
2. Copiez l'URL de l'image
3. Remplacez directement dans le code

```typescript
image: 'https://res.cloudinary.com/your-account/image/upload/v123/informatique.jpg',
```

---

## 📱 Tests recommandés

### Tester EmailJS
```bash
npm run dev
```
1. Allez sur http://localhost:5173/contact
2. Remplissez le formulaire
3. Cliquez sur "Envoyer le message"
4. Vérifiez votre email (vérifiez also les spams/bulk)

### Déboguer les erreurs
Si vous voyez une erreur :
1. Ouvrez la console (F12)
2. Vérifiez les logs
3. Assurez-vous que SERVICE_ID, TEMPLATE_ID et PUBLIC_KEY sont corrects

---

## 🔒 Sécurité - Mettre en variable d'environnement

Pour ne pas exposer vos clés, créez `.env.local` :

```env
VITE_EMAILJS_SERVICE_ID=service_abc...
VITE_EMAILJS_TEMPLATE_ID=template_xyz...
VITE_EMAILJS_PUBLIC_KEY=xyz_public_key...
```

Puis modifiez `src/config/emailjs.ts` :

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || '',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || '',
};
```

Et `.gitignore` :
```
.env
.env.local
.env.*.local
```

---

## 📊 Plans EmailJS

**Gratuit** : 200 emails/mois
**Payant** : À partir de $9/mois pour 10,000 emails

Pour ce projet (site vitrine), le plan **gratuit** est suffisant ! 🎉

