describe('Search for books',() => {

beforeEach(()=>
{
 cy.visit('https://staticwebappautomationbookstore.azurewebsites.net/')
})

it('should return one book with title Agile testing', () => {
    const title = 'Agile Testing'
    const expectedCount = 1

    // Search
    cy.get('#searchBar').type(title, {delay:250})

    // Verify Account
    cy.get('li:not(.ui-screen-hidden').should('have.length',expectedCount,'There should be length as 1')

})

it('should return multiple books with title test',() => {
    const title = 'Test'
    const expectedBooks =
    ['Test Automation in the Real World',
    'Experiences of Test Automation',
    'Agile Testing',
    'How Google Tests Software',
    'Java For Testers']

    const expectedCount = expectedBooks.length

    cy.get('#searchBar').type(title, {delay: 250} )

    cy.get('li:not(.ui-screen-hidden)').should('have.length',expectedCount, `There should be exactly ${expectedCount} book(s) visible`)

    expectedBooks.forEach(b => cy.get('h2').should('contain.text', b,`${b} should be visible`))



})


})