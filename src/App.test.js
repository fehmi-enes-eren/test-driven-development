// import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme, {shallow}  from "enzyme"
import EnzymeAdapter from "@wojtekmaj/enzyme-adapter-react-17"

Enzyme.configure({adapter: new EnzymeAdapter()})

// Refactor your codes - DRY coding - Note can make it official
/*
Factory function to create a ShallowWrapper for the App component.
@function setup
@retuns {ShallowWrapper}
*/
const setup = () => shallow(<App />)
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test="${val}"]`)

test('renders non-empty without crashing', () => {
  const wrapper = setup();
  //console.log(wrapper.debug())
  expect(wrapper.exists()).toBe(true) // if the wrapper is empty or not
});

test("renders without an error", ()=>{
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, "component-app")
  expect(appComponent.length).toBe(1)
})

test("renders button", ()=>{
  const wrapper = setup();
  const button = findByTestAttr(wrapper, "increment-button")
  expect(button.length).toBe(1)
})
test("renders counter display", ()=>{
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, "counter-display")
  expect(counterDisplay.length).toBe(1)
})
test("counter starts at 0", ()=>{
  const wrapper = setup();
  const counterVal = findByTestAttr(wrapper, "count")
  //expect(counterVal.length).toBe(1);

  //const counterVal = findByTestAttr(wrapper, "count").text()
  expect(counterVal.text()).toBe("0")
})

test("clicking on button increments counter display", ()=>{
  const wrapper = setup();
  const buttonIncrement = findByTestAttr(wrapper, "increment-button")
  buttonIncrement.simulate("click")

  const counterVal = findByTestAttr(wrapper, "count").text()
  expect(counterVal).toBe("1")

  
})

test("clicking on button decrements counter display", ()=>{
  const wrapper = setup();
  const buttonIncrement = findByTestAttr(wrapper, "increment-button")
  buttonIncrement.simulate("click")

  const buttonDecrement = findByTestAttr(wrapper, "decrement-button")
  buttonDecrement.simulate("click")

  const counterVal = findByTestAttr(wrapper, "count").text()
  expect(counterVal).toBe("0")

  
})

describe('error when the counts go below 0', () => {
  test("error message doesnt show when it is not needed", ()=>{
    const wrapper = setup();
    const errorHasHiddenClass = findByTestAttr(wrapper, "error-message").hasClass("hidden")
    expect(errorHasHiddenClass).toBe(true)
  });
});

describe('count is 0 and decrement button is clicked', () => {
  
  let wrapper;

  beforeEach(()=>{
    wrapper = setup();
    const button = findByTestAttr(wrapper,"decrement-button");
    button.simulate("click")
  })

  test("show error message",()=>{
    const errorHasHiddenClass = findByTestAttr(wrapper, "error-message").hasClass("hidden")
    expect(errorHasHiddenClass).toBe(false)
  });
  test("remove error messsage when incButton is clicked",()=>{
    const incButton = findByTestAttr(wrapper, "increment-button");
    incButton.simulate("click");
    const errorHasHiddenClass  = findByTestAttr(wrapper, "error-message").hasClass("hidden")
    expect(errorHasHiddenClass ).toBe(true)
  })
});








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
// Check package doc for usage ("with options one")
// npm run build
// npm install -g serve
//serve -s build
