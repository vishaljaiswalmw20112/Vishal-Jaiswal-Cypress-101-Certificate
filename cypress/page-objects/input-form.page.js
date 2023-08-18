import selectors from '../fixtures/selectors.json'
import '@testing-library/cypress/add-commands';

export class InputFormPage {

    static clickInputFormLink() {
        cy.xpath(selectors.inputFormLocators.inputFormSubmitLinkXpath, {timeout: 50000}).click({force: true})
        cy.get('.loginform').should('be.visible')

    }

    static fillInputForm(data) {
        const randomEmail = Math.floor(100000000 + Math.random() * 900000000)+data.email
        cy.get(selectors.inputFormLocators.nameTextBox, {timeout: 50000}).type(data.name)
        cy.get(selectors.inputFormLocators.emailTextBox).type(randomEmail)
        cy.get(selectors.inputFormLocators.passwordTextBox).type(data.password)
        cy.get(selectors.inputFormLocators.companyTextBox).type(data.company)
        cy.get(selectors.inputFormLocators.websiteTextBox).type(data.website)
        cy.xpath(selectors.inputFormLocators.countryDropDownXpath).select(data.Country)
        cy.get(selectors.inputFormLocators.cityTextBox).type(data.city)
        cy.get(selectors.inputFormLocators.address1TextBox).type(data.address1)
        cy.get(selectors.inputFormLocators.address2TextBox).type(data.address2)
        cy.get(selectors.inputFormLocators.stateTextBox).type(data.state)
        cy.get(selectors.inputFormLocators.zipTextBox).type(data.zipcode)
    }

    static submitFormAndVerify(data) {
        cy.xpath(selectors.inputFormLocators.formSubmitButtonXpath).click()
        cy.get(selectors.inputFormLocators.successMessage).should('have.text', data.successMsg)
    }
}