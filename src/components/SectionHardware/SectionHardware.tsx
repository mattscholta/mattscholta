import * as React from 'react';
import classnames from 'classnames';

import * as links from '@src/data/uses';

import styles from './styles.module.css';

export interface SectionHardwareProps {
  className?: string;
}

/**
 * @name SectionHardware
 * @description Stateless Component / Pure Function
 */
const SectionHardware: React.FC<SectionHardwareProps> = (props) => {
  const { className } = props;

  // Styles
  const cssHardware = classnames('ui-list-disc u-flex-grow ', styles.hardware);

  // Setup
  const propsLink = { rel: 'noopener noreferrer', target: '_blank' };

  return (
    <section className={className}>
      <h2 className="ui-heading">Hardware</h2>
      <sub className="ui-subhead" />

      <p>
        I've been happily developing on a <b>Mac</b> over the last <b>10+</b>{' '}
        years. However, I grew up on PC's and built a few rigs over the years
        for gaming and work. Now days a perk of working in Software our employer
        often supplies a well equipped box.
      </p>

      <div className="u-flex">
        <ul className={cssHardware}>
          <li>
            Laptop -{' '}
            <a {...propsLink} href="https://support.apple.com/kb/SP776">
              15" MacBook Pro, 2018
            </a>
          </li>
          <li>
            Monitor -{' '}
            <a
              {...propsLink}
              href="https://www.amazon.com/gp/product/B074JKT894"
            >
              34" LG Curved Ultra-wide
            </a>
          </li>
          <li>
            Storage -{' '}
            <a {...propsLink} {...propsLink} href={links.hrefEnclosure}>
              TerraMaster RAID Enclosure
            </a>
          </li>
          <li className="nested">
            <a {...propsLink} {...propsLink} href={links.hrefHardDrives}>
              2x WD Gold 4TB @7200 RPM
            </a>
          </li>

          <li>
            Desk -{' '}
            <a
              {...propsLink}
              href="https://www.amazon.com/gp/product/B07HJJLLML"
            >
              Adjustable height Desk
            </a>
          </li>
          <li>
            Keyboard -{' '}
            <a href="https://www.apple.com/shop/product/MLA22B/A/magic-keyboard-us-english">
              Apple Magic Keyboard
            </a>
          </li>
          <li>
            Music -{' '}
            <a
              {...propsLink}
              href="https://www.amazon.com/Bose-QuietComfort-Wireless-Headphones-Cancelling/dp/B0756CYWWD"
            >
              Bose Headphones
            </a>
          </li>
          <li>
            Mouse -{' '}
            <a
              {...propsLink}
              href="https://www.apple.com/shop/product/MLA02LL/A/magic-mouse-2-silver"
            >
              Apple Magic Mouse
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export { SectionHardware };
