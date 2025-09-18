// src/components/CommentSection.tsx
'use client';
import { useState } from 'react';

interface Comment {
  id: number;
  author: string;
  text: string;
}

export default function CommentSection() {
  const [comments, setComments] = useState<Comment[]>([
    { id: 1, author: 'Mahasiswa A', text: 'Presentasi 3D nya sangat keren dan informatif!' },
    { id: 2, author: 'Pengunjung B', text: 'Navigasinya mudah, boothnya juga menarik.' },
  ]);
  const [newComment, setNewComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
    if (newComment.trim() === '') return;

  const newId = comments.length > 0 ? Math.max(...comments.map(c => c.id)) + 1 : 1;
  setComments([...comments, { id: newId, author: 'Anda', text: newComment }]);
  setNewComment('');
  };

  return (
    <div className="comment-section">
      <h3>Komentar & Ulasan</h3>
      <form onSubmit={handleSubmit} className="comment-form">
        <textarea
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Tulis komentar Anda di sini..."
          rows={3}
        />
        <button type="submit">Kirim</button>
      </form>
      <div className="comment-list">
        {comments.map((comment) => (
          <div key={comment.id} className="comment-item">
            <strong>{comment.author}</strong>
            <p>{comment.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}