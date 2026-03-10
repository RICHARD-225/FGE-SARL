# 🔧 Dépannage EmailJS - Checklist Complète

## ❌ Erreur: "Impossible d'envoyer le message"

### **Étape 1: Vérifier la console du navigateur**

1. **Ouvrez F12** (Developer Tools)
2. **Allez à l'onglet Console**
3. **Remplissez le formulaire et envoyez**
4. **Regardez le message d'erreur complet** (rouge)

Copiez le message complet ici : `_________`

---

## 🔍 Causes et solutions

### **❌ Erreur 400 : "Bad Request"**
```
Variables du template ne correspondent pas
```

**Solution:**
1. Allez sur https://dashboard.emailjs.com/
2. **Email Templates** → Votre template
3. **Vérifiez les variables exactes** entre `{{ }}`
4. Elles doivent être EXACTEMENT:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_email}}`

❌ **Version incorrecte:**
```
Bonjour {{name}},
Votre message: {{msg}}
```

✅ **Version correcte:**
```
From: {{from_name}} <{{from_email}}>
Message: {{message}}
Send to: {{to_email}}
```

---

### **❌ Erreur 401 : "Unauthorized"**
```
Clés InvalidError: SERVICE_ID, TEMPLATE_ID ou PUBLIC_KEY
```

**Solution:**
1. Allez sur https://dashboard.emailjs.com/
2. **Account → API** 
3. Copiez votre **Public Key** exacte
4. Allez à `src/config/emailjs.ts`
5. Remplacez PUBLIC_KEY
6. Sauvegardez et rechargez le navigateur (Ctrl+Shift+R pour hard refresh)

❌ **Mauvais format:**
```typescript
PUBLIC_KEY: 'abc123',  // Trop court
```

✅ **Bon format:**
```typescript
PUBLIC_KEY: 'Fsub9_FDPzbozHkJg',  // 15+ caractères
```

---

### **❌ Erreur 404 : "Not Found"**
```
SERVICE_ID ou TEMPLATE_ID introuvable
```

**Solution:**
1. Allez sur https://dashboard.emailjs.com/
2. **Email Services** → Copiez votre Service ID (commence par `service_`)
3. **Email Templates** → Copiez votre Template ID (commence par `template_`)
4. Modifiez `src/config/emailjs.ts`
5. Vérifiez qu'il n'y a pas d'espaces avant/après

❌ **Mauvais:**
```typescript
SERVICE_ID: ' service_poe9jjl',  // Espace avant!
TEMPLATE_ID: 'template_br7evf8 ',  // Espace après!
```

✅ **Bon:**
```typescript
SERVICE_ID: 'service_poe9jjl',
TEMPLATE_ID: 'template_br7evf8',
```

---

### **❌ Email reçu mais vide ou incomplet**

**Cause:** Variables du template mal écrites

1. Vérifiez le template sur EmailJS Dashboard
2. Les variables doivent être EXACTEMENT comme données envoyées
3. Utilisez ce template modèle:

```
Subject: 📧 Nouveau message from {{from_name}}

From: {{from_name}} ({{from_email}})
To: {{to_email}}

---
Message:
{{message}}

---
Email reçu le: [Date]
```

---

## ✅ Vérification complète avant envoi

### **1. Dashboard EmailJS**

**Email Services:**
- [ ] Service créé ✅ (doit avoir une coche verte)
- [ ] Gmail connecté et autorisé
- [ ] Service ID noté (ex: `service_poe9jjl`)

**Email Templates:**
- [ ] Template créé
- [ ] Variables utilisées: `{{from_name}}`, `{{from_email}}`, `{{message}}`, `{{to_email}}`
- [ ] Template ID noté (ex: `template_br7evf8`)

**Account → API:**
- [ ] Public Key copié (ex: `Fsub9_FDPzbozHkJg`)

### **2. Fichier `src/config/emailjs.ts`**

```typescript
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_poe9jjl',        // ← Rempli ✅
  TEMPLATE_ID: 'template_br7evf8',      // ← Rempli ✅
  PUBLIC_KEY: 'Fsub9_FDPzbozHkJg',      // ← Rempli ✅
};
```

- [ ] SERVICE_ID présent et sans espaces
- [ ] TEMPLATE_ID présent et sans espaces
- [ ] PUBLIC_KEY présent et sans espaces
- [ ] Aucun "YOUR_" dedans

### **3. Code `src/components/ContactForm.tsx`**

```typescript
const handleSubmit = async (e: React.FormEvent) => {
  await emailjs.send(
    EMAILJS_CONFIG.SERVICE_ID,
    EMAILJS_CONFIG.TEMPLATE_ID,
    {
      from_name: formData.name,        // ← Variable 1
      from_email: formData.email,      // ← Variable 2
      message: formData.message,        // ← Variable 3
      to_email: 'fraternitegroupeentreprise@gmail.com',  // ← Variable 4
    }
  );
}
```

- [ ] Variables correspondent au template
- [ ] `from_name`, `from_email`, `message`, `to_email` présentes

---

## 🧪 Test pas à pas

### **Test 1: Vérifier que EmailJS est chargé**
1. Ouvrez F12 → Console
2. Tapez: `emailjs`
3. Si vous voyez un objet → ✅ Bien chargé
4. Si erreur → Réinstallez: `npm install @emailjs/browser`

### **Test 2: Vérifier l'initialisation**
```javascript
// Tapez dans console:
window.EMAILJS_CONFIG
// Doit afficher vos 3 clés
```

### **Test 3: Tester manuellement**
Dans console (F12):
```javascript
emailjs.init('Fsub9_FDPzbozHkJg');  // Votre PUBLIC_KEY

emailjs.send('service_poe9jjl', 'template_br7evf8', {
  from_name: 'Test',
  from_email: 'test@test.com',
  message: 'Ceci est un test',
  to_email: 'kouamerichardk03@gmail.com'
}).then(res => console.log('✅ Succès:', res))
  .catch(err => console.error('❌ Erreur:', err));
```

Si vous voyez `✅ Succès`, c'est que EmailJS fonctionne !

---

## 🆘 Problèmes avancés

### **"CORS error" ou erreur de sécurité**
1. Allez dans Dashboard EmailJS
2. **Account → Security**
3. Ajoutez `localhost:5173` aux domaines autorisés
4. Ajoutez votre domaine production quand vous deploierez

### **Gmail dit "compte non autorisé"**
1. Déconnectez le service dans EmailJS
2. Reconnectez-le
3. Cliquez "Allow" quand Google vous demande

### **"Quota exceeded"** (trop d'emails)
- Plan gratuit = 200 emails/mois
- Vérifiez combien d'emails vous avez envoyés
- Attendez le mois suivant ou upgradez

---

## 📋 Template de test

Créez un template simple pour tester:

**Subject:**
```
Test Email - {{from_name}}
```

**Body:**
```
Test Email

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

To: {{to_email}}

---
Si vous voyez ce message, EmailJS fonctionne!
```

---

## 🚀 Après correction

```bash
# Effacez le cache du navigateur
Ctrl+Shift+Delete

# Ou hard refresh
Ctrl+Shift+R

# Relancez npm
npm run dev

# Testez le formulaire
```

---

## 📞 Si rien ne marche

Envoyez-moi:
1. **La capture d'erreur complète** de la console (F12)
2. **Les 3 clés** (SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY)
3. **Les variables du template** depuis EmailJS Dashboard
4. **Screenshot du template** dans Dashboard EmailJS

Je diagnostiquerai le problème exact ! 🔧
