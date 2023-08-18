import {InputFormPage} from "../page-objects/input-form.page"
import userData from "../fixtures/data.json"

describe('Test Scenario 2 - Input form test', () => {

    beforeEach(() => {
        cy.visit('/selenium-playground')
        cy.viewport('samsung-note9')
        InputFormPage.clickInputFormLink();
    })

    it('Verify the input form acessibility standard', () => {
        cy.injectAxe()
        cy.checkA11y(null, null, null, true);
    })

    it('Fill input form and verify page and performance after form submission', () => {
        InputFormPage.fillInputForm(userData)
        InputFormPage.submitFormAndVerify(userData)
        const customThresholds = {
            performance: 30,
            accessibility: 50,
            seo: 70,
            'first-contentful-paint': 3000,
            'largest-contentful-paint': 3500,
            'cumulative-layout-shift': 0.1,
            'total-blocking-time': 1500,
        };
    
        const desktopConfig = {
            formFactor: 'desktop',
            screenEmulation: { disabled: true },
        };
    
        cy.lighthouse(customThresholds, desktopConfig);
        
    })



})
