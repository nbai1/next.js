import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get('code')
  const state = req.nextUrl.searchParams.get('state')

  if (!code) {
    return NextResponse.redirect('/')
  }

  const body = new URLSearchParams({
    grant_type: 'authorization_code',
    code,
    redirect_uri: 'https://oqo.us/auth/callback',
    client_id: process.env.NODELOC_CLIENT_ID as string,
    client_secret: process.env.NODELOC_CLIENT_SECRET as string
  })

  const tokenRes = await fetch('http://conn.nodeloc.cc/oauth2/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString()
  })

  if (!tokenRes.ok) {
    return new NextResponse('Token exchange failed', { status: 500 })
  }

  const tokenData = await tokenRes.json()
  const userInfo = await fetch('http://conn.nodeloc.cc/oauth2/userinfo', {
    headers: { Authorization: `Bearer ${tokenData.access_token}` }
  }).then(r => r.json())

  const res = NextResponse.redirect('/')
  res.headers.append('Set-Cookie', `nl-user=${userInfo.username}; Path=/`)
  return res
}
