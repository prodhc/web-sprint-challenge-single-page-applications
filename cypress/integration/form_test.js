describe('Testing the sprint challenge app', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000');
	});

	it('Sanity Check', () => {
		expect(1 + 2).to.equal(3);
	});
});