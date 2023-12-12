import React, { useEffect, useRef } from 'react';

function Button({ text, textColor, onClick }) {
  const btnRef = useRef(null);



  useEffect(() => {
    if (btnRef.current) {
      const btn = btnRef.current;

      btn.onmousemove = function (e) {
        const x = e.pageX - btn.offsetLeft;
        const y = e.pageY - btn.offsetTop;

        btn.style.setProperty('--x', x + 'px');
        btn.style.setProperty('--y', y + 'px');
      };
    }
  }, []);

useEffect(() => {
    if (btnRef.current) {
      const btn = btnRef.current;

      btn.onclick = function () {
        if (onClick) {
          onClick();
        }
      };
    }
  }, [onClick]);


  const hoverColor = textColor === 'text-navlight' ? 'hover:text-navlightdark'  : textColor === 'text-navlightdark'  ? 'hover:text-navlight' : textColor === 'text-darkorange' ? 'hover:text-dark' : textColor === "text-dark" ? "hover:text-darkorange" : 'hover:text-red-500';
const backgroundColor = textColor === 'text-navlight' ? 'before:bg-navlight'  : textColor === 'text-navlightdark'  ? 'before:bg-navlightdark' : textColor === 'text-darkorange' ? 'before:bg-darkorange' : textColor=== "text-dark" ? "before:bg-dark" : 'before:bg-red-500';
// console.log("hc", hoverColor);
// console.log("tc", textColor);
// console.log("bc", backgroundColor);

  return (
    <div
      ref={btnRef}
      className={`btn m-10 overflow-hidden  before:translate-y-[-50%] before:translate-x-[-50%] relative inline-flex px-4 py-1 bg-transparent tracking-widest before:absolute before:w-0 before:top-[var(--y)] before:left-[var(--x)] before:h-0 before:rounded-full rounded-full ${backgroundColor} ${hoverColor} hover:before:h-[400px] hover:before:w-[400px] select-none`}
      style={{ transition: 'color 0.5s' }}
    >
      <span className='z-50'>{text}</span>
    </div>
  );
}

export default Button;
