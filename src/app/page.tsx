'use client';
import { useSession } from 'next-auth/react';
import './page.module.css';
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [data, setData] = useState<{ id: string; name: string }[]>([]);
  const { data: session } = useSession();
  const [error, setError] = useState<string | null>(null);

  const handleGetData = async () => {
    try {
      const res = await fetch('/api/data');
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      setData(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="profile-container">
      <Link href="/auth/signin">ログイン</Link>
      <Link href="/auth/signup">新規登録</Link>
      <Link href="/user">ログインユーザー専用</Link>
      <h1 className="profile-title">プロフィール情報</h1>

      {session ? (
        <div className="profile-info">
          <div className="info-row">
            <span className="info-label">名前：</span>
            <span>{session.user?.name}</span>
          </div>
          <div className="info-row">
            <span className="info-label">メール：</span>
            <span>{session.user?.email}</span>
          </div>
        </div>
      ) : (
        <p className="not-logged-in">ログインしていません</p>
      )}
      <button type="button" onClick={handleGetData}>
        データ取得
      </button>
      <div>
        {data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}
