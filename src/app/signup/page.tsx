

'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SignupPage() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e: React.FormEvent) => {
e.preventDefault();
console.log('Nom :', name);
console.log('Email :', email);
console.log('Mot de passe :', password);
// Ici, tu peux envoyer les données à un backend plus tard
};

return (
<div style={{ padding: '2rem', textAlign: 'center' }}>
<h1 style={{ color: '#c2185b' }}>Créer un compte</h1>
<form onSubmit={handleSubmit} style={{ marginTop: '1rem' }}>
<input
type="text"
placeholder="Nom complet"
value={name}
onChange={(e) => setName(e.target.value)}
required
style={{ margin: '0.5rem', padding: '0.5rem' }}
/>
<input
type="email"
placeholder="Adresse email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
style={{ margin: '0.5rem', padding: '0.5rem' }}
/>
<input
type="password"
placeholder="Mot de passe"
value={password}
onChange={(e) => setPassword(e.target.value)}
required
style={{ margin: '0.5rem', padding: '0.5rem' }}
/>
<br />
<button type="submit" style={{ backgroundColor: '#c2185b', color: '#fff', padding: '0.5rem 1rem', border: 'none', borderRadius: '4px' }}>
S'inscrire
</button>
</form>

<p style={{ marginTop: '1rem' }}>
Déjà un compte ? <Link href="/login">Se connecter</Link>
</p>
</div>
);
}

