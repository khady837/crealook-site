
'use client'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function DashboardPage() {
const router = useRouter()
const [email, setEmail] = useState('')

useEffect(() => {
const token = localStorage.getItem('token')
if (!token) {
router.push('/login')
return
}

try {
const payload = JSON.parse(atob(token.split('.')[1]))
if (payload?.email) {
setEmail(payload.email)
}
} catch (error) {
console.error('Token invalide', error)
router.push('/login')
}
}, [])

return (
<div style={{ padding: '40px' }}>
<h1>Bienvenue {email ? `, ${email}` : ''} sur votre tableau de bord !</h1>
<p>Vous êtes connecté avec succès.</p>
</div>
)
}



