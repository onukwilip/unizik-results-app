import React, { useState, useCallback, useEffect, useRef } from 'react';
import { RefreshIcon, ChevronLeftIcon, ChevronRightIcon } from './icons';
import type { Course } from '../types';
import styles from './CourseCarousel.module.css';

interface Props {
  courses: Course[];
}

const CourseCarousel: React.FC<Props> = ({ courses }) => {
  const [current, setCurrent] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const prev = useCallback(() => setCurrent((c) => Math.max(0, c - 1)), []);
  const next = useCallback(() => setCurrent((c) => Math.min(courses.length - 1, c + 1)), [courses.length]);

  const handleRefresh = () => {
    setSpinning(true);
    console.log('Refreshing courses...');
    setTimeout(() => setSpinning(false), 600);
  };

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  }, [prev, next]);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>Course Offered</h2>
        <button
          className={`${styles.refreshBtn} ${spinning ? styles.spinning : ''}`}
          onClick={handleRefresh}
          aria-label="Refresh courses"
        >
          <RefreshIcon />
        </button>
      </div>

      <div className={styles.carouselWrapper} ref={wrapperRef} tabIndex={0} role="region" aria-label="Course carousel">
        <div className={styles.track} style={{ transform: `translateX(-${current * 100}%)` }}>
          {courses.map((course) => (
            <div key={course.id} className={styles.slide}>
              <div className={styles.card}>
                <div>
                  <div className={styles.courseName}>{course.name}</div>
                  <div className={styles.courseCode}>{course.code}</div>
                </div>
                <button className={styles.viewBtn}>View Details</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.dots}>
        {courses.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.dotActive : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Go to course ${i + 1}`}
          />
        ))}
      </div>

      <div className={styles.navBtns}>
        <button className={styles.navBtn} onClick={prev} disabled={current === 0} aria-label="Previous course">
          <ChevronLeftIcon />
        </button>
        <button className={styles.navBtn} onClick={next} disabled={current === courses.length - 1} aria-label="Next course">
          <ChevronRightIcon />
        </button>
      </div>
    </section>
  );
};

export default CourseCarousel;
