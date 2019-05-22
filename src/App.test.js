import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import FarmManager from './components/FarmManager';

describe('<App />', () => {
    it('should render without an error', () => {
      let component = shallow(<App />);
      expect(component.exists()).toBe(true);
    });
    // it('should contain a Farm Manager component', () => {
    //   let component = shallow(<App />);
    //   expect(component.find(FarmManager).length).toEqual(1);
    // })
});