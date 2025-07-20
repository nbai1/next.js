'use client'
import { useEffect, useState } from 'react'
import Board from '../components/Board'

export default function Home() {
  const [user, setUser] = useState<string | null>(null)

  useEffect(() => {
    const stored = sessionStorage.getItem('nl-user')
    if (stored) setUser(stored)
  }, [])

  const login = () => {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: process.env.NEXT_PUBLIC_NODELOC_CLIENT_ID as string,
      redirect_uri: 'https://oqo.us/auth/callback',
      scope: 'openid profile',
      state: Math.random().toString(36).slice(2)
    })
    window.location.href = `http://conn.nodeloc.cc/oauth2/auth?${params.toString()}`
  }

  return (
    <main style={{ padding: 20 }}>
      <h1>NL Chinese Chess</h1>
      {!user && <button onClick={login}>Login with NodeLoc</button>}
      {user && <p>Welcome, {user}</p>}
      <div style={{ marginTop: 20 }}>
        <Board />
      </div>
    </main>
  )
}
