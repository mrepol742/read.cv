import { ImageResponse } from 'next/og'
import profileData from '../public/content/profileData.json';

export const runtime = 'edge'

export const alt = profileData.general.byline;
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  const imageSrc = await fetch(new URL('../public/content/media/profilePhoto.jpg', import.meta.url)).then(
    (res) => res.arrayBuffer()
  )

  return new ImageResponse(
    (
      <div
        style={{
          background: 'black',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <img src={imageSrc as any} height="400" style={{ borderRadius: '50%' }} />
      </div>
    ),
    {
      ...size,
    }
  )
}
