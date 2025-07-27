// src/app/layout.tsx
export const metadata = {
title: 'CréaLook',
description: 'Votre plateforme pour créateurs',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="fr">
<body>{children}</body>
</html>
)
}

