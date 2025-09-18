// src/components/StarRating.tsx
'use client';

import { useState } from 'react';
import { FaStar } from 'react-icons/fa';

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              style={{ display: 'none' }} // Sembunyikan radio button asli
            />
            <FaStar
              className="star"
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
              size={24}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(0)}
            />
          </label>
        );
      })}
      <p>Rating: {rating} dari 5</p>
    </div>
  );
}