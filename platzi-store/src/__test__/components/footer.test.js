import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';
import {create} from 'react-test-renderer'

describe('<Footer />', () => {
  const footer = mount(<Footer />);
  test('Render del compoente Footer', () => {
    expect(footer.length).toEqual(1);
  });
  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});

/* Suite para testing de UI estatica que no varía */

describe('Footer SnapShot', () => { 
  test('Comprobar la UI del componente Footer', () => { 
    const footer = create(<Footer/>)
    expect(footer.toJSON()).toMatchSnapshot();
   })
 })

 