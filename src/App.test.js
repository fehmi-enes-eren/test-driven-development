// import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, {shallow}  from "enzyme"
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({adapter: new EnzymeAdapter()})

test('renders non-empty without crashing', () => {
  const wrapper = shallow(<App />)
  //console.log(wrapper.debug())
  expect(wrapper.exists()).toBe(true) // if the wrapper is empty or not
});

test("renders without an error", ()=>{
  const wrapper = shallow(<App />)
  const appComponent = wrapper.find('[data-test="component-app"]')
  expect(appComponent.length).toBe(1)
})

test("renders button", ()=>{})
test("renders counter display", ()=>{})
test("counter starts at 0", ()=>{})
test("clicking on button increments counter display", ()=>{})



//enzyme docs
//jestjs.io / api reference / expect

// ----- Unit Testing -----
// very isolated and very narrow , one function or one component

// ----- Integration Testing ------
// how multiple units work together

// ---- Acceptance/End-to-End (E2E) Testing ------
// USes actual browser and connections to server (Cyprus or selenium)

// --- Functional Testing ----
// Can be any of above; focuses on user flow


// Code-based-tests == testing implementation
// Functional Tests == testing behavior




// Removing data-test Attributes
//babel-plugin-react-remove-properties
// npm run eject  --> makes the configuration files editable by us

