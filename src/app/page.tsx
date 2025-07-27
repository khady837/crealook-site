
'use client';

import React from 'react';

export default function Home() {
return (
<main style={{ textAlign: 'center', padding: '60px 20px', fontFamily: 'Arial, sans-serif' }}>
<h1 style={{ fontSize: '36px', color: '#b71c1c' }}>Bienvenue sur CréaLook</h1>
<p style={{ fontSize: '18px', color: '#555', marginTop: '10px' }}>
La plateforme dédiée aux créateurs, commerçants, artisans et entrepreneurs locaux.
</p>

<div style={{ marginTop: '30px', marginBottom: '40px' }}>
<a href="/createur" style={{
padding: '12px 24px',
backgroundColor: '#c2185b',
color: '#fff',
borderRadius: '6px',
textDecoration: 'none',
marginRight: '15px',
fontWeight: 'bold'
}}>
Je suis un créateur
</a>

<a href="/produits" style={{
padding: '12px 24px',
backgroundColor: '#c2185b',
color: '#fff',
borderRadius: '6px',
textDecoration: 'none',
fontWeight: 'bold'
}}>
Je veux découvrir les produits
</a>
</div>

<h2 style={{ fontSize: '24px', color: '#222', marginBottom: '20px' }}>Catégories populaires</h2>

<div style={{
display: 'flex',
flexWrap: 'wrap',
justifyContent: 'center',
gap: '12px'
}}>
{[
'Mode & Couture',
'Bijoux & Accessoires',
'Beauté & Cosmétique',
'Déco & Art',
'Alimentation',
'Restaurants',
'Livreurs',
'Multimédia (TV / Téléphones)',
'Immobilier & Location',
'Revendeurs de Produits'
].map((categorie, index) => (
<div key={index} style={{
backgroundColor: '#f8bbd0',
padding: '10px 16px',
borderRadius: '8px',
color: '#6a1b9a',
fontWeight: '500',
fontSize: '15px'
}}>
{categorie}
</div>
))}
</div>
</main>
);
}

