import { useEffect, useRef } from "react";
import Link from "next/link";
import BLOG from "@/blog.config";
import { useLocale } from "@/lib/locale";

const NavBar = () => {
  const locale = useLocale();
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || "/", show: true },
    { id: 1, name: locale.NAV.ABOUT, to: "/about", show: BLOG.showAbout },
    { id: 2, name: locale.NAV.RSS, to: "/feed", show: true },
    { id: 3, name: locale.NAV.SEARCH, to: "/search", show: true },
  ];
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map(
          (link) =>
            link.show && (
              <li
                key={link.id}
                className="block ml-4 text-black dark:text-gray-50 nav"
              >
                <Link href={link.to}>
                  <a>{link.name}</a>
                </Link>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

const Header = ({ navBarTitle, fullWidth }) => {
  const useSticky = !BLOG.autoCollapsedNavBar;
  const navRef = useRef(null);
  const sentinalRef = useRef([]);
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add("sticky-nav-full");
      } else {
        navRef.current?.classList.remove("sticky-nav-full");
      }
    } else {
      navRef.current?.classList.add("remove-sticky");
    }
  };
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler);
    obvserver.observe(sentinalRef.current);
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentinalRef]);
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? "max-w-3xl px-4" : "px-4 md:px-24"
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <a aria-label={BLOG.title}>
              <div className="h-6">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g id="Слой_1" />
                  <g id="Слой_2">
                    <path
                      d="M22.235,13.112c2.148,0,3.896-1.748,3.896-3.896c0-2.147-1.747-3.895-3.896-3.895   c-2.147,0-3.895,1.748-3.895,3.895C18.34,11.364,20.088,13.112,22.235,13.112z"
                      fill="#3185FC"
                    />
                    <path
                      d="M7.228,55.643c1.548,0,2.806-1.26,2.806-2.807c0-1.548-1.258-2.807-2.806-2.807   c-1.547,0-2.806,1.259-2.806,2.807C4.422,54.383,5.681,55.643,7.228,55.643z"
                      fill="#3185FC"
                    />
                    <circle cx="75.072" cy="25.073" fill="#3185FC" r="2.806" />
                    <path
                      d="M88.46,54.405c1.547,0,2.807-1.26,2.807-2.807c0-1.548-1.26-2.807-2.807-2.807   c-1.548,0-2.807,1.259-2.807,2.807C85.653,53.146,86.912,54.405,88.46,54.405z"
                      fill="#3185FC"
                    />
                    <path
                      d="M25.473,35.827l-2.068,3.581l4.951,2.858l-5.72,2.521l1.667,3.784l8.492-3.743l3.423,1.977l-5.722,2.524   c-0.75,0.331-1.233,1.072-1.233,1.892c0,0.818,0.484,1.562,1.234,1.892l5.72,2.521l-3.422,1.975l-8.492-3.74l-1.667,3.785   l5.719,2.52l-4.95,2.857l2.068,3.582l4.951-2.858l-0.675,6.215l4.11,0.447l1.002-9.224l3.424-1.978l-0.676,6.217   c-0.089,0.814,0.312,1.605,1.022,2.015c0.321,0.185,0.677,0.277,1.033,0.277c0.431,0,0.86-0.136,1.222-0.4l5.045-3.694v3.953   l-7.488,5.479l2.442,3.337l5.046-3.692v5.719h4.136v-5.717l5.044,3.69l2.443-3.337l-7.487-5.479v-3.954l5.044,3.694   c0.66,0.482,1.544,0.531,2.256,0.123c0.709-0.409,1.11-1.2,1.021-2.015l-0.675-6.217l3.426,1.978l1.002,9.224l4.11-0.447   l-0.675-6.213l4.95,2.856l2.068-3.582l-4.95-2.857l5.719-2.52l-1.667-3.785l-8.492,3.74l-3.423-1.977l5.719-2.52   c0.75-0.33,1.234-1.073,1.234-1.892c0-0.819-0.484-1.561-1.234-1.892l-5.719-2.524l3.424-1.977l8.491,3.743l1.667-3.784   l-5.72-2.521l4.951-2.859l-2.068-3.581l-4.951,2.858l0.674-6.216l-4.111-0.446l-0.999,9.224l-3.426,1.978l0.675-6.217   c0.09-0.814-0.312-1.604-1.021-2.014c-0.71-0.408-1.594-0.362-2.256,0.123l-5.044,3.693v-3.954l7.487-5.478l-2.443-3.338   l-5.044,3.691v-5.717h-4.136v5.718l-5.046-3.692l-2.442,3.338l7.488,5.479v3.953l-5.045-3.693   c-0.662-0.485-1.545-0.531-2.255-0.123c-0.71,0.41-1.111,1.2-1.022,2.014l0.676,6.217l-3.424-1.977l-1.002-9.224l-4.11,0.447   l0.675,6.215L25.473,35.827z M36.457,51.221l4.2-1.853l3.207,1.851l-3.208,1.852L36.457,51.221z M42.228,61.216l0.496-4.563   l3.208-1.852v3.701L42.228,61.216z M53.771,61.216l-3.702-2.713v-3.701l3.208,1.851L53.771,61.216z M59.541,51.221l-4.197,1.85   l-3.207-1.852l3.207-1.851L59.541,51.221z M53.771,41.223l-0.494,4.563l-3.208,1.852v-3.704L53.771,41.223z M42.228,41.222   l3.705,2.712v3.703l-3.208-1.853L42.228,41.222z"
                      fill="#3185FC"
                    />
                  </g>
                </svg>
              </div>
            </a>
          </Link>
          {navBarTitle ? (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {navBarTitle}
            </p>
          ) : (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {BLOG.title}{" "}
              <span className="font-normal">{BLOG.description}</span>
            </p>
          )}
        </div>
        <NavBar />
      </div>
    </>
  );
};

export default Header;
