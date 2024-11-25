import React from "react";
import "./Slider.css";

const SliderProduct = () => {
  return (
    <div>
      <div
        className="component slider-nav"
        id="sliderNav"
        style={{
          touchAction: "pan-y",
          userSelect: "none",
          WebkitUserDrag: "none",
          WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
          height: "551px",
        }}
      >
        <div
          className="slider-wrapper zoom zoomed-out"
          style={{
            opacity: 1,
            transform: "matrix(0.4, 0, 0, 0.4, 0, 0)",
            transformOrigin: "50vw 45vh 0px",
          }}
        >
          <ul
            className="slides flickity-enabled is-draggable"
            style={{
              width: "1400vw",
              transform: "translateX(-650vw)",
              top: "0px",
            }}
            tabIndex="0"
          >
            <div
              className="flickity-viewport"
              style={{
                height: "742px",
                touchAction: "pan-y",
              }}
            >
              <div
                className="flickity-slider"
                style={{
                  left: "0px",
                  transform: "translateX(46.42%)",
                }}
              >
                {/* 1 */}
                <li
                  className="cell active is-selected"
                  aria-selected="true"
                  style={{
                    position: "absolute",
                    left: "0%",
                  }}
                >
                  <div className="inner" data-link="#">
                    <div
                      className="background"
                      style={{
                        backgroundImage:
                          'url("https://minaleandmann.com/wp-content/uploads/2018/04/1-13.jpg")',
                        transform: "matrix(1, 0, 0, 1, 0, 0)",
                      }}
                      data-desktop="https://minaleandmann.com/wp-content/uploads/2018/04/1-13.jpg"
                      data-mobile="https://minaleandmann.com/wp-content/uploads/2018/05/11.-Cannon-Place-Mobile-Banner.jpg"
                    ></div>
                  </div>

                  <div
                    className="append"
                    style={{
                      visibility: "inherit",
                      opacity: 1,
                    }}
                  >
                    <div className="inner">
                      <p>design matters</p>
                      <span>London Design Studio</span>
                    </div>
                  </div>
                </li>
                {/* 2 */}
                <li
                  className="cell active is-selected"
                  aria-selected="true"
                  style={{
                    position: "absolute",
                    left: "0%",
                  }}
                >
                  <div className="inner" data-link="#">
                    <div
                      className="background"
                      style={{
                        backgroundImage:
                          'url("https://minaleandmann.com/wp-content/uploads/2018/04/1-13.jpg")',
                        transform: "matrix(1, 0, 0, 1, 0, 0)",
                      }}
                      data-desktop="https://minaleandmann.com/wp-content/uploads/2018/04/1-13.jpg"
                      data-mobile="https://minaleandmann.com/wp-content/uploads/2018/05/11.-Cannon-Place-Mobile-Banner.jpg"
                    ></div>
                  </div>

                  <div
                    className="append"
                    style={{
                      visibility: "inherit",
                      opacity: 1,
                    }}
                  >
                    <div className="inner">
                      <p>design matters</p>
                      <span>London Design Studio</span>
                    </div>
                  </div>
                </li>
                {/* 3 */}
                <li
                  className="cell active is-selected"
                  aria-selected="true"
                  style={{
                    position: "absolute",
                    left: "0%",
                  }}
                >
                  <div className="inner" data-link="#">
                    <div
                      className="background"
                      style={{
                        backgroundImage:
                          'url("https://minaleandmann.com/wp-content/uploads/2018/04/1-13.jpg")',
                        transform: "matrix(1, 0, 0, 1, 0, 0)",
                      }}
                      data-desktop="https://minaleandmann.com/wp-content/uploads/2018/04/1-13.jpg"
                      data-mobile="https://minaleandmann.com/wp-content/uploads/2018/05/11.-Cannon-Place-Mobile-Banner.jpg"
                    ></div>
                  </div>

                  <div
                    className="append"
                    style={{
                      visibility: "inherit",
                      opacity: 1,
                    }}
                  >
                    <div className="inner">
                      <p>design matters</p>
                      <span>London Design Studio</span>
                    </div>
                  </div>
                </li>
                {/* 4 */}
                <li
                  className="cell active is-selected"
                  aria-selected="true"
                  style={{
                    position: "absolute",
                    left: "0%",
                  }}
                >
                  <div className="inner" data-link="#">
                    <div
                      className="background"
                      style={{
                        backgroundImage:
                          'url("https://minaleandmann.com/wp-content/uploads/2018/04/1-13.jpg")',
                        transform: "matrix(1, 0, 0, 1, 0, 0)",
                      }}
                      data-desktop="https://minaleandmann.com/wp-content/uploads/2018/04/1-13.jpg"
                      data-mobile="https://minaleandmann.com/wp-content/uploads/2018/05/11.-Cannon-Place-Mobile-Banner.jpg"
                    ></div>
                  </div>

                  <div
                    className="append"
                    style={{
                      visibility: "inherit",
                      opacity: 1,
                    }}
                  >
                    <div className="inner">
                      <p>design matters</p>
                      <span>London Design Studio</span>
                    </div>
                  </div>
                </li>
                {/* 5 */}
                <li
                  className="cell active is-selected"
                  aria-selected="true"
                  style={{
                    position: "absolute",
                    left: "0%",
                  }}
                >
                  <div className="inner" data-link="#">
                    <div
                      className="background"
                      style={{
                        backgroundImage:
                          'url("https://minaleandmann.com/wp-content/uploads/2018/04/1-13.jpg")',
                        transform: "matrix(1, 0, 0, 1, 0, 0)",
                      }}
                      data-desktop="https://minaleandmann.com/wp-content/uploads/2018/04/1-13.jpg"
                      data-mobile="https://minaleandmann.com/wp-content/uploads/2018/05/11.-Cannon-Place-Mobile-Banner.jpg"
                    ></div>
                  </div>

                  <div
                    className="append"
                    style={{
                      visibility: "inherit",
                      opacity: 1,
                    }}
                  >
                    <div className="inner">
                      <p>design matters</p>
                      <span>London Design Studio</span>
                    </div>
                  </div>
                </li>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SliderProduct;
