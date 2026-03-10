# 📸 Dossier des Images

Placez vos images locales ici selon cette structure :

```
images/
├── services/
│   ├── informatique.jpg
│   ├── papeterie.jpg
│   ├── imprimerie.jpg
│   ├── securite.jpg
│   └── immobilier.jpg
├── gallery/
│   ├── tshirt-1.jpg
│   ├── flyers-1.jpg
│   ├── camera-1.jpg
│   ├── fournitures-1.jpg
│   ├── ordinateur-1.jpg
│   └── (ajouter les 12 images pour la galerie)
├── testimonials/
│   ├── kouassi.jpg
│   ├── adjoua.jpg
│   ├── yao.jpg
│   └── (autres témoignages)
└── hero.jpg (image d'arrière-plan hero)
```

## Utilisation dans le code

### Dans Home.tsx - Services
```typescript
const services = [
  {
    icon: <FaLaptop />,
    title: 'Informatique',
    description: '...',
    services: [...],
    image: '/assets/images/services/informatique.jpg',  // ✅ Chemin local
  },
  // ... etc
];
```

### Dans Gallery.tsx
```typescript
const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: 'T-shirt personnalisé',
    category: 'Imprimerie',
    image: '/assets/images/gallery/tshirt-1.jpg',  // ✅ Chemin local
  },
  // ... etc
];
```

### Dans Testimonials.tsx
```typescript
const testimonials = [
  {
    name: 'Kouassi Michel',
    role: 'Directeur PME',
    comment: '...',
    rating: 5,
    photo: '/assets/images/testimonials/kouassi.jpg',  // ✅ Chemin local
  },
  // ... etc
];
```

## 🔍 Recommandations

- **Format** : JPG ou PNG
- **Taille** : Optimisez vos images (max 500KB chacune)
- **Résolution** : 
  - Services: 800x600px minimum
  - Galerie: 800x600px
  - Témoignages: 200x200px (photos carrées)
- **Optimisation** : Utilisez TinyPNG.com ou Squoosh.app pour compresser

## Compression automatique avec ImageMagick

Si vous avez beaucoup d'images, créez un script npm :

```json
// Dans package.json
"scripts": {
  "optimize-images": "imagemin public/assets/images --out-dir=public/assets/images-optimized"
}
```

Installez imagemin :
```bash
npm install --save-dev imagemin imagemin-mozjpeg imagemin-pngquant
```

