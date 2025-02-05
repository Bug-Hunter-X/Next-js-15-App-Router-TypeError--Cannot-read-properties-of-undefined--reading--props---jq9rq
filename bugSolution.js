```javascript
// app/page.js

import { async } from 'next/navigation';

export default async function Home() {
  const res = await fetch('https://rickandmortyapi.com/api/character');
  const data = await res.json();
  return (
    <div>
      <h1>Next.js 15 App</h1>
      <ul>
        {data.results.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
}
```