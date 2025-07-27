
import Link from 'next/link';

export default function CreateurPage() {
return (
<main style={{
padding: '2rem',
textAlign: 'center',
fontFamily: 'sans-serif',
backgroundColor: '#fff5f8',
minHeight: '100vh'
}}>
<h1 style={{ color: '#b3005e', fontSize: '2.5rem' }}>Bienvenue sur l’espace créateur de CréaLook</h1>

<p style={{ fontSize: '1.2rem', marginTop: '1rem', color: '#333' }}>
Ici, vous pouvez créer votre profil, présenter vos produits, gérer vos ventes, et rejoindre une communauté d’entrepreneurs locaux.
</p>

<div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
<Link href="/signup">
<button style={buttonStyle}>Créer un compte</button>
</Link>
<Link href="/login">
<button style={buttonStyle}>Se connecter</button>
</Link>
</div>

<div style={{ marginTop: '3rem', color: '#444' }}>
<p>Sur CréaLook, vous pouvez :</p>
<ul style={{ listStyle: 'none', padding: 0, lineHeight: '1.8' }}>
<li>📦 Ajouter vos produits ou services</li>
<li>📲 Recevoir des commandes directement</li>
<li>📢 Gagner en visibilité auprès de milliers de clients</li>
<li>🤝 Rejoindre un réseau de créateurs passionnés</li>
</ul>
</div>

<p style={{ marginTop: '2rem', fontWeight: 'bold', color: '#b3005e' }}>
✨ N’attendez plus, démarrez votre boutique dès aujourd’hui !
</p>
</main>
);
}

const buttonStyle = {
backgroundColor: '#cc0066',
color: '#fff',
padding: '0.8rem 1.5rem',
fontSize: '1rem',
border: 'none',
borderRadius: '8px',
cursor: 'pointer',
};

