import React from 'react';
import ReactDOM from 'react-dom';
import AddItem from '../components/AddItem';
import { CubbyContextProvider } from '../CubbyContext';
import ItemsApiService from '../services/items-api-service';

describe('<AddItem />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <CubbyContextProvider>
        <AddItem />
      </CubbyContextProvider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
