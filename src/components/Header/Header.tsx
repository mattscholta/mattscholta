import * as React from 'react';
import { color } from '@barguide/style-guide';
import classnames from 'classnames';
import Link from 'next/link';

import { Logo } from '@src/components/Logo';
import { data } from '@src/data/header';
import { Hamburger, Octocat } from '@src/icons';
import { analytics } from '@src/utils/analytics';

import styles from './styles.module.css';

export interface HeaderProps {
  navigation: any;
  navigationToggle: any;
}

/**
 * @name Header
 * @description Primary Navigation Header
 */
const Header: React.FC<HeaderProps> = (_props) => {
  // const { navigation, navigationToggle } = props;

  // Hooks
  const [isOpen, setIsOpen] = React.useState(false);

  // Styles
  const cssNav = classnames(styles.nav, {
    // [styles.open]: navigation.open
    [styles.open]: isOpen
  });

  // Markup
  const onToggleNav = () => {
    setIsOpen(!isOpen);
  };

  const onTrackEvent = (page: any) => () => {
    analytics.event('nav-header', 'click', page);
  };

  // const onNavLinkClick = (page: any) => () => {
  //   // onNavLinkClick(page);
  //   analytics.event('nav-header', 'click', page);

  //   if (navigation.open) navigationToggle();
  //   if (isOpen) onToggleNav();
  // };

  // Markup
  const renderLink = (node: any) => {
    const { children, href } = node;
    const key = `nav-primary-${children}`;

    return (
      <Link href={href} key={key}>
        <a className={styles.link}>{children}</a>
      </Link>
    );
  };

  return (
    <div className={styles.component}>
      <div className="ui-container u-flex">
        <button
          className={styles.menu}
          onClick={onToggleNav}
          onKeyPress={onToggleNav}
          type="button"
        >
          <Hamburger fill={color.white} height={20} width={20} />
        </button>
        <Link href="/">
          <Logo className={styles.svgBrand} fill={color.white} />
        </Link>
        <nav className={cssNav}>{data.map(renderLink)}</nav>
        <a
          href="https://www.github.com/visormatt"
          onClick={onTrackEvent('github')}
          onKeyPress={onTrackEvent('github')}
          rel="noopener noreferrer"
          target="_blank"
          title="Find me on Github"
        >
          <Octocat
            className={styles.svgOctocat}
            color={color.gray[8]}
            fill={color.white}
          />
        </a>
      </div>
    </div>
  );
};

export { Header };
