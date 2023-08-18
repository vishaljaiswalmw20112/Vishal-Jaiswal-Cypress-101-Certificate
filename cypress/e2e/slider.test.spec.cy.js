import {SliderPage} from "../page-objects/slider-demo.page.js"


describe('Test Scenario 1 - Slider Test', () => {

  it('should drag the slider to make it 95 and validate the range value', () => {
    cy.visit('/selenium-playground')
    SliderPage.clickDragAndDropLink();
    SliderPage.dragAndDropSlider15();
  })

})