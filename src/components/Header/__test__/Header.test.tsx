import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';

import { Header, HeaderProps } from '../Header';

jest.mock('next/router', () => ({
  useRouter() {
    return {
      asPath: '',
      pathname: '',
      push: jest.fn(),
      query: {},
      route: '/'
    };
  }
}));

describe('Header', () => {
  const navigationToggle = jest.fn();

  let props: HeaderProps;
  let wrapper: RenderResult;

  const createWrapper = () => <Header {...props} />;

  beforeEach(() => {
    props = {
      navigation: {
        open: false
      },
      navigationToggle
    };

    wrapper = render(createWrapper());
  });

  it('matches snapshot', () => {
    expect(wrapper.container.childNodes).toMatchSnapshot();
  });
});
