'use client'
import Image, { StaticImageData } from 'next/image';
import { CSSProperties, FC, useEffect, useRef, useState } from 'react';

interface Props {
  /**
   * The source URL for the logo image.
   */
  src: string | StaticImageData;
  /**
   * The alternative text for the logo image.
   */
  alt: string;
  /**
   * An array of objects representing navigation items. Each object should have a `name` (display text) and `href` (URL).
   */
  listItems: { name: string; href: string }[];
  /**
   * Additional styles for the header element.
   */
  headerAddStyles?: CSSProperties;
  /**
   * Additional styles for the main navigation container.
   */
  navAddStyles?: CSSProperties;
  /**
   * Additional styles for the logo in the navigation.
   */
  navLogoAddStyles?: CSSProperties;
  /**
   * Additional styles for the navigation menu container.
   */
  navMenuAddStyles?: CSSProperties;
  /**
   * Additional styles for the navigation list container.
   */
  navListAddStyles?: CSSProperties;
  /**
   * Additional styles for each navigation item.
   */
  navItemAddStyles?: CSSProperties;
  /**
   * Additional styles for each navigation link.
   */
  navLinkAddStyles?: CSSProperties;
  /**
   * Additional styles for the navigation toggle button.
   */
  navToggleAddStyles?: CSSProperties;
}

/**
 * explicacion
 * @param src The source URL for the logo image.
 * @param alt The alternative text for the logo image.
 * @param listItems An array of objects representing navigation items. Each object should have a `name` (display text) and `href` (URL).
 * @param Button The React component to be used as a button in the navbar.
 * @param headerAddStyles Additional styles for the header element.
 * @param navAddStyles Additional styles for the main navigation container.
 * @param navLogoAddStyles Additional styles for the logo in the navigation.
 * @param navMenuAddStyles Additional styles for the navigation menu container.
 * @param navListAddStyles Additional styles for the navigation list container.
 * @param navItemAddStyles Additional styles for each navigation item.
 * @param navLinkAddStyles Additional styles for each navigation link.
 * @param navToggleAddStyles Additional styles for the navigation toggle button.
 * @returns navbar
 */
const NavbarHorizontal: FC<Props> = ({ 
  src, alt, listItems,
  headerAddStyles, navAddStyles, navLogoAddStyles, navMenuAddStyles, navListAddStyles, 
  navItemAddStyles, navLinkAddStyles, navToggleAddStyles 
}) => {
  
  // ===============MEDIA QUERIES 768PX==============//
  const [isMobil, setIsMobil] = useState(
    typeof window !== 'undefined' && window.innerWidth < 768
  );
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setIsMobil( typeof window !== 'undefined' && window.innerWidth < 768 );
      }
  
      window.addEventListener( 'resize', handleResize );
  
      return () => {
        window.removeEventListener( 'resize', handleResize )
      };
    }
  },[]);
  // ===============MEDIA QUERIES 768PX==============//


  // ===============STYLES HOVER==============//
  const [hoveredNavLinkIndex, setHoveredNavLinkIndex] = useState<number>(-1);
  const handleNavLinkMouseEnter = (index: number) => {
    setHoveredNavLinkIndex(index);
  };
  const handleNavLinkMouseLeave = () => {
    setHoveredNavLinkIndex(-1);
  };
  // ===============STYLES HOVER==============//


  // ===============CHANGE BACKGROUND HEADER==============//
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const navMenuRef = useRef(null);

  const handleShowMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const hiddenMenu = () => setIsMenuVisible(false);
  // ===============CHANGE BACKGROUND HEADER==============//

  
  // ===============CHANGE BACKGROUND HEADER==============//
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    // funcion para manejar evento scroll
    const handleScroll = () => {
      window.scrollY > 120
        ? setScroll(true)
        : setScroll(false)
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    };
  },[])
  // ===============CHANGE BACKGROUND HEADER==============//



  // =====================NAV STYLES=====================//
  const customStyle: Record<string, CSSProperties> = {
    header: {
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 100,
      backgroundColor: !scroll ? "transparent" : "#FBFEFD",
    },
    nav: {
      width: "100vw",
      padding: "0 2rem 0 1rem",
      height: "5rem",
      display: "flex",
      justifyContent: isMobil ? "space-between" : "space-around",
      alignItems: "center"
    },
    navLogo: {
      width: "4rem",
      color: "#707070",
      fontWeight: "500",
      cursor: "pointer",
    },
    navMenu: {
      position: isMobil ? "fixed" : undefined,
      // top: isMobil ? "-100%" : undefined,
      left: isMobil ? "0" : undefined,
      width: isMobil ? "100%" : undefined,
      padding: isMobil ? "1.5rem 0 1rem" : undefined,
      textAlign: isMobil ? "center" : undefined,
      backgroundColor: isMobil ? "#FBFEFD" : undefined,
      transition: isMobil ? ".4s" : undefined,
      boxShadow: isMobil ? "0 4px 4px rgba(0,0,0,0.1)" : undefined,
      borderRadius: isMobil ? "0 0 1rem 1rem" : undefined,
      zIndex: isMobil ? "100" : undefined,
    },
    navList: {
      listStyle: "none",
      display: isMobil ? undefined : "flex",
      alignItems: "center",
      gap: isMobil ? "" : "1.5rem",
    },
    navItem: { 
      marginBottom: isMobil ? "1rem" : undefined,
    },
    navLink: {
      color: isMobil ? "#707070" : !scroll ? "#FBFEFD" : "#707070",
      fontWeight: "500",
      transition: ".3s",
      textDecoration: "none",
    },
    navToggle: {
      color: "#707070",
      fontWeight: "500",
      fontSize: "1.3rem",
      cursor: "pointer",
    },
    buttonAlt: {
      display: isMobil ? "none" : "block",
    },
    button: { display: isMobil ? "block" : "none" },
    hover: {
      color: "#0e6a3a",
    },
  }

  
  return (
    <header
      style={{
        ...customStyle.header,
        boxShadow: scroll ? "0 2px 4px rgba(0,0,0,0.1)" : "",
        ...headerAddStyles
      }}
    >
      <nav
        style={{
          ...customStyle.nav,
          ...navAddStyles
        }}
        data-aos='fade-down'
        data-aos-duration='500'
      >
        <a href="#">
          <Image src={src} alt={alt} 
            style={{
              ...customStyle.navLogo,
              ...navLogoAddStyles,
            }}
          />
        </a>

        <div
          ref={navMenuRef}
          style={{
            ...customStyle.navMenu,
            top: `${ isMenuVisible ? "4rem" : '-30rem' }`,
            ...navMenuAddStyles
          }}
        >
          <ul 
            style={{
              ...customStyle.navList,
              ...navListAddStyles,
            }}
          >
            {listItems.map(({name, href}, i) => (
              <li 
                key={name + i}
                style={{
                  ...customStyle.navItem,
                  ...navItemAddStyles,
                }}
              >
                <a 
                  href={href}
                  onClick={ hiddenMenu }
                  style={{
                    ...customStyle.navLink,
                    ...( hoveredNavLinkIndex === i && customStyle.hover ),
                    ...navLinkAddStyles,
                  }}
                  onMouseEnter={() => handleNavLinkMouseEnter(i) }
                  onMouseLeave={ handleNavLinkMouseLeave }
                >{name}</a>
              </li>
            ))}
            <div style={{
              ...customStyle.button
            }}>
              <button className={`px-4 py-2 text-white ${isMobil ? "bg-[#0e6a3a]" : scroll ? "bg-[#0e6a3a] " : " bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-60 "} font-bold rounded-md bg-clip-padding `}>
                Ingresar
              </button>
            </div>
          </ul>
        </div>

        {isMobil && (
          <div
            onClick={ handleShowMenu }
            style={{
              ...customStyle.navToggle,
              ...navToggleAddStyles,
            }}
          >
            <MenuBurguer
              scroll={scroll}
            />
          </div>
        )}

        <div style={{...customStyle.buttonAlt}}
        >
          <button className={`px-4 py-2 text-white ${scroll ? "bg-[#0e6a3a] " : " bg-gray-400 backdrop-filter backdrop-blur-sm bg-opacity-60 "} font-bold rounded-md bg-clip-padding `}>
            Ingresar
          </button>
        </div>
      </nav>
    </header>
  )
}

export default NavbarHorizontal


const MenuBurguer = ({scroll}:{scroll:boolean}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`feather feather-align-justify ${!scroll ? "text-white" : ""}`}>
      <line x1="21" y1="10" x2="3" y2="10"></line>
      <line x1="21" y1="6" x2="3" y2="6"></line>
      <line x1="21" y1="14" x2="3" y2="14"></line>
      <line x1="21" y1="18" x2="3" y2="18"></line>
    </svg>
  )
}

// EXAMPLE USE
/* 
<NavbarHorizontal
  src='logo.png'
  alt='nombre logo'
  Button={Button}
  listItems={[
    { name: 'Nosotros', href: '#home' },
    { name: 'Servicios', href: '#services' },
    { name: 'Contactanos', href: '#contact' },
    { name: 'Blog', href: '#blog' },
  ]}
  headerAddStyles={{backgroundColor: "#fefc7c"}}
/> 
*/
