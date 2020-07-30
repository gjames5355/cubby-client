import React from 'react';
import ReactDOM from 'react-dom';
import Registration from '../components/Registration';
import { CubbyContextProvider } from '../CubbyContext';
import AuthApiService from '../services/auth-api-service';

describe('<Registration />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <CubbyContextProvider>
        <Registration />
      </CubbyContextProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
