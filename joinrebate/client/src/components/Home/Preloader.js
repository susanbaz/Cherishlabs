import React from 'react';

function Preloader() {
  return (
    <div className="hb_preloader_wrapper">
      <div className="hb_preloader_box">
        <div className="flower">
          {[1, 2, 3, 4, 5, 6].map((index) => (
            <svg
              key={index}
              className="flower__leaf flower__leaf--default"
              height="22"
              viewBox="0 0 14 22"
              width="14"
            >
              <path d="M6.673 20.87c.666.636 1.506 1.234 1.506 1.234S-.743 18.956.21 9.924C.618 6.084 2.896 2.79 6.875.12c.487-.327 1.143-.293 1.61.083.2.163 4.868 3.988 5.336 9.796.303 3.745-1.2 7.388-4.462 10.826l-1.353-1.26s-.286-.205-.348-.514l-.182-.01c-3.757-7.04.43-13.195.43-13.195-1.402 5.468.184 9.927.98 12.022 3.055-3.832 4.7-10.286-1.022-16.197-6.13 3.16-9.006 11.954-1.19 19.196z"></path>
            </svg>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Preloader;
