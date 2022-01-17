import * as React from 'react';
import classnames from 'classnames';

import styles from './styles.module.css';

export interface <%= name %>Props {
  className?: string;
}

/**
 * @name <%= name %>
 * @description tbd...
 */
export const <%= name %>: React.FC<<%= name %>Props> = (props) => {
  const { className } = props;

  // Hooks

  // Setup

  // Styles
  const cssComponent = classnames(styles.component, className);

  // Handlers

  // Markup

  // Life Cycle

  // 🔌 Short Circuit

  return (
    <div className={cssComponent}>
      <h2><%= name %></h2>
    </div>
  );
};
