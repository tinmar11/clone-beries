import React from "react";
import Link from "next/link";

import PropTypes from "prop-types";

const NavigationLinksMobile = (props) => {
  return (
    <>
      <nav className={`navigation-links-nav ${props.rootClassName} `}>
        <div
          className="navigation-links-thq-dropdown list-item"
        >
          <div
            className="navigation-links-dropdown-toggle"
          >
            <span className="navigation-links-link1 nav-link">Mint</span>
            <div
              className="navigation-links-dropdown-arrow"
            >
              <svg viewBox="0 0 1024 1024" className="navigation-links-icon">
                <path d="M426 726v-428l214 214z"></path>
              </svg>
            </div>
            
          </div>
          <ul
            className="navigation-links-dropdown-list"
          >
            <li
              className="navigation-links-dropdown list-item"
            >
              <Link href="/mint-pack-1">
                <a>
                  <div
                    className="navigation-links-dropdown-toggle1 dropdown"
                  >
                    <span className="navigation-links-text1">Pack 1</span>
                  </div>
                </a>
              </Link>
            </li>
            <li
              className="navigation-links-dropdown1 list-item"
            >
              <Link href="/mint-pack-2">
                <a>
                  <div
                    className="navigation-links-dropdown-toggle1 dropdown"
                  >
                    <span className="navigation-links-text1">Pack 2</span>
                  </div>
                </a>
              </Link>
            </li>
            <li
              className="navigation-links-dropdown2 list-item"
            >
              <Link href="/mint-pack-3">
                <a>
                  <div
                    className="navigation-links-dropdown-toggle1 dropdown"
                  >
                    <span className="navigation-links-text1">Pack 3</span>
                  </div>
                </a>
              </Link>
            </li>
            <li
              className="navigation-links-dropdown3 list-item"
            >
              <Link href="/mint-pack-4">
                <a>
                  <div
                    className="navigation-links-dropdown-toggle1 dropdown"
                  >
                    <span className="navigation-links-text1">Pack 4</span>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
        <Link href="/burn">
          <a className="navigation-links-link1 nav-link">{props.Burn}</a>
        </Link>
        <Link href="/key-owner">
          <a className="navigation-links-link1 nav-link">{props.text2}</a>
        </Link>
        
      </nav>
      <div className="row3">
        <div className="social">
          <a href="https://www.instagram.com/beries.eth/" target="_blank"><img
            src="../assets/insta-icon-200h.webp"
            className="footerLogo"
            
          /></a> 
          <a href="https://medium.com/@BeRies" target="_blank"><img
            src="../assets/medium-icon-200h.webp"
            className="footerLogo"
            
          /></a> 
          <a href="https://twitter.com/0xberies" target="_blank"  ><img
            src="../assets/twitter-icon-200h.webp"
            className="footerLogo"

          /></a> 
        </div>
        <span
          className="footerLink"
        >
          BeRies is Worldwide
        </span>
      </div>
       
      <style jsx>
        {`
          .row3 {
            display: flex;
            text-align: right;
            align-self: stretch;
            justify-content: space-between
            width: 100vw;
            flex-direction: row;
            color: #0000ff;
            margin-top: 90%;
 
          }
          .social {
            gap: 20px;
            display: flex;
            width: 50vw
          }
          .footerLogo {
            width: 21px;
          }
          .footerLink {
            font-size: 16px;
            font-weight: 600;
            width:50vw;

          }

          .navigation-links-nav {
            flex: 0 0 auto;
            display: flex;
            align-items: center;
            flex-direction: row;
          }
          .navigation-links-thq-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
            margin-bottom : 10px;
          }
          .navigation-links-dropdown-toggle {
            fill: #595959;
            color: #595959;
            width: 100%;
            display: inline-flex;
            align-items: center;
            border-radius: var(--dl-radius-radius-radius2);
          }

          .navigation-links-icon {
            width: 18px;
            height: 18px;
            transition: 0.3s;
            transform: rotate(90deg);
          }
          .navigation-links-dropdown-list {
            left: 0%;
            width: max-content;
            display: flex;
            z-index: 100;
            min-width: 100%;
            align-items: stretch;
            border-color: #d9d9d9;
            border-radius: var(--dl-radius-radius-radius4);
            flex-direction: column;
            list-style-type: none;
            background-color: var(--dl-color-gray-white);
            list-style-position: inside;
            border-bottom-left-radius: 10px;
            border-bottom-right-radius: 10px;
          }
          .navigation-links-dropdown {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }
          .navigation-links-dropdown-toggle1 {
            color: #0000ff;
            transition: 0.3s;
            text-decoration: none;
          }

          .navigation-links-text1 {
            width: 100%;
            cursor: pointer;
            display: flex;
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
          }
          .navigation-links-dropdown1 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }


          .navigation-links-dropdown-toggle1:hover {
            fill: #fff;
            color: #ffffff;
            background-color: #0000ff;
            width: 100vw;

          }

          .navigation-links-dropdown2 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }

          .navigation-links-dropdown3 {
            cursor: pointer;
            display: inline-block;
            position: relative;
            border-radius: var(--dl-radius-radius-radius2);
          }


          .navigation-links-link1 {
            text-decoration: none;
            font-weight: 600;
          }

          @media (max-width: 767px) {
            .navigation-links-nav {
              align-items: flex-start;
              flex-direction: column;
            }

            .navigation-links-link1 {
              font-size: 35px;
              color: #0000ff;
              font-weight: 600;
            }

            .navigation-links-text {
              color: #0000ff;
              font-size: 35px;
              margin-right: 4px;
              margin-bottom: 15px;
            }


          }

          @media (max-width: 479px) {
            .navigation-links-nav {
            }
            .navigation-links-dropdown-toggle {
            }
            .navigation-links-dropdown-list {
              left: 0%;
            }
            .navigation-links-root-class-name12 {
              display: none;
            }


          }
        `}
      </style>
    </>
  );
};

NavigationLinksMobile.defaultProps = {
  Burn: "Burn",
  rootClassName: "NavigationLinksMobile",
  text2: "Key Owner",
};

NavigationLinksMobile.propTypes = {
  Burn: PropTypes.string,
  rootClassName: PropTypes.string,
  text2: PropTypes.string,
};

export default NavigationLinksMobile;
