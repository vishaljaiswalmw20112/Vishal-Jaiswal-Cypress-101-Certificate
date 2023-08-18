import selectors from '../fixtures/selectors.json'
import '@testing-library/cypress/add-commands';

export class SliderPage {

    static clickDragAndDropLink() {
        cy.xpath(selectors.slidersLocators.dragAndDropLinkXpath, {timeout: 50000}).click({force: true})
    }

    static dragAndDropSlider15() {

      cy.get(selectors.slidersLocators.defaultValue15SliderNew, {timeout: 50000})
      .as('range')
      .invoke('val', "95")
      .trigger('change')
      cy.wait(5000)

      cy.get(selectors.slidersLocators.defaultValue15SliderNew)
      .trigger('mousedown', { which: 1 }) 
      .trigger('mousemove', { clientX: 50 })
      .trigger('mouseup', { force: true });
        
    
    }
}