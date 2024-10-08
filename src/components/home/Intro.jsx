import React, { useEffect, useState, useRef } from 'react';


const Intro = () => {
const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (textRef.current) {
        const { top, bottom } = textRef.current.getBoundingClientRect();
        const isInView = top < window.innerHeight && bottom >= 0;
        if (isInView) {
          setIsVisible(true);
          observer.disconnect();
        }
      }
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (isVisible && textRef.current) {
      const textContent = textRef.current.innerText.split(' '); // Split by words
      let newHtml = '';
      const animationDelay = 3; // Adjust delay

      textContent.forEach((word, wordIndex) => {
        newHtml += '<span class="word">';
        word.split('').forEach((char, charIndex) => {
          newHtml += `<span class="char" style="animation-delay:${animationDelay * (wordIndex * word.length + charIndex)}ms">${char}</span>`;
        });
        newHtml += '</span>&nbsp;'; // Add space after each word
      });

      textRef.current.innerHTML = newHtml;

      // Prevent word breaks
      const allWords = textRef.current.querySelectorAll('.word');

      allWords.forEach(word => {
        // Temporarily set word to nowrap to check for word break
        word.style.whiteSpace = 'nowrap';
        const initialWidth = word.getBoundingClientRect().width;
        word.style.whiteSpace = '';

        // If word's width changes (i.e., breaks), apply nowrap
        if (word.getBoundingClientRect().width !== initialWidth) {
          word.style.whiteSpace = 'nowrap';
        }
      });
    }
  }, [isVisible]);

  return (
    <div id="intro" className="center">
      <p 
        ref={textRef}
        className={`intro-p text-draw ${isVisible ? 'reveal' : 'hidden'}`}
      >
        Hey! I'm Adam, a full stack developer with a diverse background and extensive skillset. I've spent many years managing people and projects, learning to measure and maximize impact, and collaborating across teams. I have an excellent eye for detail and love solving problems. 
      </p>
    </div>
  );
};


export default Intro;

