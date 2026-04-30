# Histoires d'ici - Prototype MVP

Ce projet est un prototype fonctionnel de la plateforme de valorisation touristique "Histoires d'ici".

## 🚀 Architecture Multi-Sites (Data-Driven)
Le principe fondamental de ce prototype est que **le code est indépendant du contenu**. 

- Pour ajouter un nouveau site touristique, il suffit de mettre à jour le fichier `src/data/mock.ts`.
- L'interface générera automatiquement la page du site, sa galerie d'histoires et son lecteur immersif.

## 🛠️ Stack Technique
- **Frontend** : React + TypeScript + Vite
- **Styling** : Vanilla CSS (Minimaliste & Moderne)
- **Icônes** : Lucide React

## 📦 Installation et Lancement
1. Installer les dépendances :
   ```bash
   npm install
   ```
2. Lancer le serveur de développement :
   ```bash
   npm run dev
   ```

## 📂 Structure du projet
- `src/types/` : Définition des modèles de données (Site, Story).
- `src/data/` : Contient les données des sites et des récits (simule une base de données).
- `src/pages/` : Les 3 vues principales (Accueil, Détail Site, Lecture).
- `src/components/` : Composants réutilisables.
"# histoires-d-ici"  
