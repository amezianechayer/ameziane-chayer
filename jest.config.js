module.exports = {
    roots: ['<rootDir>'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx'],
    testPathIgnorePatterns: ['<rootDir>[/\\\\](node_modules|.next)[/\\\\]'],
    transformIgnorePatters: ['[/\\\\]node_modules[/\\\\].+\\.(ts|tsx)$'],
    watchPlugins: [
        'jest-watch-typeahead/filename',
        'jest-watch-typeahead/testname',
    ],
    moduleNameMapper: {
        '\\.(css|less|sass|scss)$': 'identity-ogj-proxy',
        '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/test/__mocks__/fileMock.js'
    },
}