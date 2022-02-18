import {configure} from "enzyme";
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()});
/* Permite simular las peticiones que hacemos por medio del navegador sin necesidad de hacerlas 
con la libreria de fetch  */
global.fetch =  require('jest-fetch-mock')