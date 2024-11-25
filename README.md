# Proiect_TehnologiiWeb_Grupa1116_Duminica_Mihail_Catalin_tema11

# Favorite Artists Manager - DeviantArt Integration

## Descrierea Proiectului

Favorite Artists Manager este o aplicație web modernă care îți permite să gestionezi lista ta de artiști preferați, integrată cu platforma **DeviantArt** pentru a aduce conținut actualizat în timp real. Proiectul combină un backend RESTful robust construit cu Node.js și Express.js cu un frontend dinamic realizat în React, oferind o experiență fluidă utilizatorilor.

Aplicația permite utilizatorilor să:
- Vizualizeze lista artiștilor preferați și lucrările acestora.
- Adauge sau să elimine artiști din lista lor favorită.
- Sincronizeze datele cu platforma DeviantArt pentru a vedea ultimele creații ale artiștilor.

## Tehnologii Folosite

### Backend
- **Node.js**: Motorul principal al aplicației backend, utilizat pentru performanță și scalabilitate.
- **Express.js**: Framework minimalist și flexibil pentru a construi RESTful APIs eficiente.
- **Sequelize**: ORM (Object Relational Mapper) pentru a simplifica interacțiunea cu baza de date **MySQL**, oferind un mod intuitiv de a gestiona datele și relațiile dintre ele.

### Frontend
- **React**: Bibliotecă populară pentru dezvoltarea interfețelor de utilizator interactive și dinamice.

### Baza de date
- **MySQL**: Baza de date relațională utilizată pentru stocarea informațiilor despre utilizatori, artiști și preferințele acestora.

## Funcționalități Cheie

1. **Autentificare și autorizare**:
   - Utilizatorii își pot crea conturi și se pot autentifica pentru a-și personaliza experiența.

2. **Sincronizare cu DeviantArt**:
   - Backend-ul integrează API-ul DeviantArt pentru a extrage detalii actualizate despre artiști și lucrările lor.

3. **Administrarea preferințelor**:
   - Adăugarea și eliminarea artiștilor favoriți dintr-o interfață prietenoasă.

4. **REST API**:
   - API-ul backend expune endpoint-uri RESTful care permit interacțiunea dintre frontend și server.

5. **Design Responsiv**:
   - Interfața este optimizată pentru utilizarea pe dispozitive mobile și desktop.

## Instalare și Configurare

### Prerechizite
- **Node.js** și **npm/yarn**
- **MySQL** instalat și configurat
- Chei API pentru integrarea cu DeviantArt

### Pași de instalare

1. Clonează acest depozit:
   ```bash
   git clone https://github.com/username/favorite-artists-manager.git


