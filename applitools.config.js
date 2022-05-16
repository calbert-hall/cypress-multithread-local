module.exports = {
    testConcurrency: 5,
    apiKey: 'APPLITOOLS_API_KEY',
    //
    //batch: {id: process.env.FIXED_APPLITOOLS_BATCH_ID},
    batch: {id: "const_batch_id", name: "Multithreaded test"},
    browser: [
        // Add browsers with different viewports
        {width: 800, height: 600, name: 'chrome'},
        {width: 1600, height: 1200, name: 'firefox'},
        {width: 800, height: 600, name: 'safari'},
        // Add mobile emulation devices in Portrait mode
        {deviceName: 'iPhone X', screenOrientation: 'portrait'},
        {deviceName: 'Pixel 2', screenOrientation: 'portrait'}
    ],
    // set batch name to the configuration
    showLogs: true,
    //dontCloseBatches: true,
}
