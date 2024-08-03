exports.config = {
    runner: 'local',
    framework: 'cucumber',
    specs: ['./test/features/*.feature'],
    tags: [],
    cucumberOpts: {
        require: ['./test/step-definitions/*.js'],
        backtrace: false,
        requireModule: ['@babel/register'],
        failAmbiguousDefinitions: true,
        format: ['json:./reports/cucumber_report.json'],
        strict: true,
        tagsInTitle: false,
        timeout: 60000,
        // ignoreUndefinedDefinitions: true
    },
    reporters: ['spec'],
    //services: ['selenium-standalone'],
    services: ['chromedriver'],
    // Tambahkan konfigurasi browser dan URL di sini
    capabilities: [{
        maxInstances: 1,
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: [] // Kosongkan atau hapus jika tidak ingin headless
        }
    }],
    logLevel: 'info',
    //baseUrl: 'https://kasirdemo.belajarqa.com',
    baseUrl: 'https://kasirdemo.vercel.app/',
};
