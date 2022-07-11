import { useEffect, useRef } from 'react'
import Link from 'next/link'
import BLOG from '@/blog.config'
import { useLocale } from '@/lib/locale'

const NavBar = () => {
  const locale = useLocale()
  const links = [
    { id: 0, name: locale.NAV.INDEX, to: BLOG.path || '/', show: true },
    { id: 1, name: locale.NAV.ABOUT, to: '/about', show: BLOG.showAbout },
    { id: 2, name: locale.NAV.RSS, to: '/feed', show: true },
    { id: 3, name: locale.NAV.SEARCH, to: '/search', show: true }
  ]
  return (
    <div className="flex-shrink-0">
      <ul className="flex flex-row">
        {links.map(
          link =>
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
  )
}

const Header = ({ navBarTitle, fullWidth }) => {
  const useSticky = !BLOG.autoCollapsedNavBar
  const navRef = useRef(null)
  const sentinalRef = useRef([])
  const handler = ([entry]) => {
    if (navRef && navRef.current && useSticky) {
      if (!entry.isIntersecting && entry !== undefined) {
        navRef.current?.classList.add('sticky-nav-full')
      } else {
        navRef.current?.classList.remove('sticky-nav-full')
      }
    } else {
      navRef.current?.classList.add('remove-sticky')
    }
  }
  useEffect(() => {
    const obvserver = new window.IntersectionObserver(handler)
    obvserver.observe(sentinalRef.current)
    // Don't touch this, I have no idea how it works XD
    // return () => {
    //   if (sentinalRef.current) obvserver.unobserve(sentinalRef.current)
    // }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sentinalRef])
  return (
    <>
      <div className="observer-element h-4 md:h-12" ref={sentinalRef}></div>
      <div
        className={`sticky-nav m-auto w-full h-6 flex flex-row justify-between items-center mb-2 md:mb-12 py-8 bg-opacity-60 ${
          !fullWidth ? 'max-w-3xl px-4' : 'px-4 md:px-24'
        }`}
        id="sticky-nav"
        ref={navRef}
      >
        <div className="flex items-center">
          <Link href="/">
            <a aria-label={BLOG.title}>
              <div className="h-6">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  vision="1.1"
                >
                  <g id="surface1">
                    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(19.215686%,52.156863%,98.823529%);fill-opacity:1;" d="M 8.339844 4.917969 C 9.144531 4.917969 9.800781 4.261719 9.800781 3.457031 C 9.800781 2.652344 9.144531 1.996094 8.339844 1.996094 C 7.53125 1.996094 6.878906 2.652344 6.878906 3.457031 C 6.878906 4.261719 7.53125 4.917969 8.339844 4.917969 Z M 8.339844 4.917969 "/>
                    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(19.215686%,52.156863%,98.823529%);fill-opacity:1;" d="M 2.710938 20.867188 C 3.289062 20.867188 3.761719 20.394531 3.761719 19.8125 C 3.761719 19.234375 3.289062 18.761719 2.710938 18.761719 C 2.128906 18.761719 1.660156 19.234375 1.660156 19.8125 C 1.660156 20.394531 2.128906 20.867188 2.710938 20.867188 Z M 2.710938 20.867188 "/>
                    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(19.215686%,52.156863%,98.823529%);fill-opacity:1;" d="M 29.203125 9.402344 C 29.203125 9.984375 28.734375 10.453125 28.152344 10.453125 C 27.570312 10.453125 27.101562 9.984375 27.101562 9.402344 C 27.101562 8.820312 27.570312 8.351562 28.152344 8.351562 C 28.734375 8.351562 29.203125 8.820312 29.203125 9.402344 Z M 29.203125 9.402344 "/>
                    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(19.215686%,52.156863%,98.823529%);fill-opacity:1;" d="M 33.171875 20.402344 C 33.753906 20.402344 34.226562 19.929688 34.226562 19.347656 C 34.226562 18.769531 33.753906 18.296875 33.171875 18.296875 C 32.59375 18.296875 32.121094 18.769531 32.121094 19.347656 C 32.121094 19.929688 32.59375 20.402344 33.171875 20.402344 Z M 33.171875 20.402344 "/>
                    <path style=" stroke:none;fill-rule:nonzero;fill:rgb(19.215686%,52.156863%,98.823529%);fill-opacity:1;" d="M 9.550781 13.433594 L 8.777344 14.777344 L 10.632812 15.851562 L 8.488281 16.796875 L 9.113281 18.214844 L 12.296875 16.808594 L 13.582031 17.550781 L 11.4375 18.5 C 11.15625 18.621094 10.972656 18.898438 10.972656 19.207031 C 10.972656 19.515625 11.15625 19.792969 11.4375 19.917969 L 13.582031 20.863281 L 12.296875 21.601562 L 9.113281 20.199219 L 8.488281 21.621094 L 10.632812 22.566406 L 8.777344 23.636719 L 9.550781 24.980469 L 11.410156 23.90625 L 11.15625 26.238281 L 12.695312 26.40625 L 13.074219 22.949219 L 14.355469 22.207031 L 14.101562 24.535156 C 14.070312 24.84375 14.21875 25.140625 14.488281 25.292969 C 14.605469 25.363281 14.742188 25.398438 14.875 25.398438 C 15.035156 25.398438 15.195312 25.34375 15.332031 25.246094 L 17.222656 23.859375 L 17.222656 25.34375 L 14.417969 27.398438 L 15.332031 28.648438 L 17.222656 27.265625 L 17.222656 29.410156 L 18.773438 29.410156 L 18.773438 27.265625 L 20.667969 28.648438 L 21.582031 27.398438 L 18.773438 25.34375 L 18.773438 23.859375 L 20.667969 25.246094 C 20.914062 25.425781 21.246094 25.445312 21.511719 25.292969 C 21.777344 25.140625 21.929688 24.84375 21.894531 24.535156 L 21.640625 22.207031 L 22.925781 22.945312 L 23.304688 26.40625 L 24.84375 26.238281 L 24.589844 23.910156 L 26.445312 24.980469 L 27.222656 23.636719 L 25.367188 22.566406 L 27.511719 21.621094 L 26.886719 20.199219 L 23.703125 21.601562 L 22.417969 20.863281 L 24.5625 19.917969 C 24.84375 19.792969 25.023438 19.515625 25.023438 19.207031 C 25.023438 18.898438 24.84375 18.621094 24.5625 18.496094 L 22.417969 17.550781 L 23.703125 16.808594 L 26.886719 18.214844 L 27.511719 16.792969 L 25.367188 15.847656 L 27.222656 14.777344 L 26.445312 13.433594 L 24.589844 14.503906 L 24.84375 12.175781 L 23.300781 12.007812 L 22.925781 15.464844 L 21.640625 16.207031 L 21.894531 13.875 C 21.929688 13.570312 21.777344 13.273438 21.511719 13.121094 C 21.246094 12.96875 20.914062 12.984375 20.667969 13.167969 L 18.773438 14.550781 L 18.773438 13.070312 L 21.582031 11.015625 L 20.667969 9.765625 L 18.773438 11.148438 L 18.773438 9.003906 L 17.222656 9.003906 L 17.222656 11.148438 L 15.332031 9.765625 L 14.417969 11.015625 L 17.222656 13.070312 L 17.222656 14.550781 L 15.332031 13.167969 C 15.085938 12.984375 14.753906 12.96875 14.488281 13.121094 C 14.21875 13.273438 14.070312 13.570312 14.101562 13.875 L 14.355469 16.207031 L 13.074219 15.46875 L 12.695312 12.007812 L 11.15625 12.175781 L 11.410156 14.507812 Z M 13.671875 19.207031 L 15.246094 18.511719 L 16.449219 19.207031 L 15.246094 19.902344 Z M 15.835938 22.957031 L 16.023438 21.246094 L 17.222656 20.550781 L 17.222656 21.9375 Z M 20.164062 22.957031 L 18.777344 21.9375 L 18.777344 20.550781 L 19.980469 21.246094 Z M 22.328125 19.207031 L 20.753906 19.902344 L 19.550781 19.207031 L 20.753906 18.511719 Z M 20.164062 15.457031 L 19.980469 17.167969 L 18.777344 17.863281 L 18.777344 16.476562 Z M 15.835938 15.457031 L 17.226562 16.476562 L 17.226562 17.863281 L 16.023438 17.167969 Z M 15.835938 15.457031 "/>
                  </g>
                </svg>
              </div>
            </a>
          </Link>
          {navBarTitle
            ? (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {navBarTitle}
            </p>
              )
            : (
            <p className="ml-2 font-medium text-day dark:text-night header-name">
              {BLOG.title}{' '}
              <span className="font-normal">{BLOG.description}</span>
            </p>
              )}
        </div>
        <NavBar />
      </div>
    </>
  )
}

export default Header
