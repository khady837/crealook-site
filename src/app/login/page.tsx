
'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
const [email, setEmail] = useState('')
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const router = useRouter()

const handleSubmit = async (e: React.FormEvent) => {
e.preventDefault()

const res = await fetch('/api/auth/login', {
method: 'POST',
headers: {
'Content-Type': 'application/json',
},
body: JSON.stringify({ email, password }),
})

if (res.ok) {
const data = await res.json()
localStorage.setItem('token', data.token)
router.push('/dashboard')
} else {
setError('Erreur lors de la connexion')
}
}

return (
<div style={{ padding: '40px' }}>
<h1>Connexion</h1>
<form onSubmit={handleSubmit}>
<div>
<label>Email :</label><br />
<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
</div>
<div>
<label>Mot de passe :</label><br />
<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
</div>
<button type="submit">Se connecter</button>
</form>
{error && <p style={{ color: 'red' }}>{error}</p>}
</div>
)
}

