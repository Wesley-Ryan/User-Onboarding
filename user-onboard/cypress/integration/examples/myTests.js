describe("Onboarding App", () => { 
    beforeEach(() => { 
        cy.visit("http://localhost:3000/")
    })

const usernameInput = () => cy.get('input[name=username]') 
const emailInput = () => cy.get('input[name=password]') 
const urlInput = () => cy.get('input[name=url]') 
const tosCheckbox = () => cy.get('input[id=checkbox]')
const submitBtn = () => cy.get('button[id=submitBtn]') 

it('The inputs work properly', () => { 
//verify elements
usernameInput().should('exist')
emailInput().should('exist')
urlInput().should('exist')
submitBtn().should('exist')

//fill out the form 
usernameInput().type('test Username')
emailInput().type('test@email.com')
urlInput().type('test Username')

//submit the form
tosCheckbox().click()
submitBtn().click()

//check the data 
cy.contains("test Username").should('exist')
cy.contains("test@email.com").should('exist')
})

})
