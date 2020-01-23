const add = (a,b) => a + b
const generateGreeting = (name = 'Anonymous') => `Hello ${name}!`

test('should add two numbers', () => {
    const result = add(3,4)
    expect(result).toBe(7)
})

test('should be a name', () => {
    const name = generateGreeting('Mike')
    expect(name).toBe('Hello Mike!')
})

test('should generate greeting for no name', () => {
    const name = generateGreeting()
    expect(name).toBe('Hello Anonymous!')
})