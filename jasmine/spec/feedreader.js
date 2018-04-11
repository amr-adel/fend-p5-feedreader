/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This test suite is all about the RSS feeds definitions,
     * the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This test makes sure that the 'allFeeds' variable has been
         * defined and that it is not empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        
        /* This test makes sure that each feed object in the 'allFeeds' array
         *  has a 'url' defined and that the 'url' is not empty.
         */
        it('each feed has a url, and it\'s not empty', function() {
            expect(allFeeds.some(feed => !feed.hasOwnProperty('url'))).not.toBe(true);
            expect(allFeeds.some(feed => feed.url === '')).not.toBe(true);
        });

        /* This test makes sure that each feed object in the allFeeds array
         *  has a 'name' defined and that the 'name' is not empty.
         */
        it('each feed has a name, and it\'s not empty', function() {
            expect(allFeeds.some(feed => !feed.hasOwnProperty('name'))).not.toBe(true);
            expect(allFeeds.some(feed => feed.name === '')).not.toBe(true);
        });
    });


    /* This test suite is all about the menu visibility behavior */
    describe('The menu', function() {
        /* This test makes sure that the 'menu' element is hidden by default. */
        it('menu element is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });

        /* This test makes sure that the 'menu' element will toggle visibility
         * if the 'menu icon' clicked.
         */
        it('menu element changes visibility when the menu icon is clicked', function() {
            $('.menu-icon-link').click(); // Simulate a mouse click
            expect($('body').hasClass('menu-hidden')).toBe(false);
            
            $('.menu-icon-link').click(); // Simulate another mouse click
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    
    /* This test suite is all about the initial entries that loads by default */
    describe('Initial Entries', function() {
        /* This uses Jasmine's beforeEach and asynchronous done() function to make
         * sure that there is at least a single '.entry' element within the '.feed'
         * container after the 'loadFeed()' function is called.
         */
        beforeEach(function (done) {
            loadFeed(0, function () {
                done();
            });
        });

        it('there is at least a single .entry element within the .feed container', function() {
            expect($('.entry').length >= 1).toBe(true);
        });
    });


    /* This test suite is all about the content of the '.feed' container after
     * calling a new feed by 'loadFeed()' function.
     */
    describe('New Feed Selection', function() {
        /* This test ensures when a new feed is loaded by the loadFeed function
         * that the content actually changes.
         */
        let feedId = 0;
        let content = "";
        
        beforeEach(function (done) {
            loadFeed(feedId, function () {
                done();
            });
        });

        /* Loop through 'allFeeds' array and ensure that each feed loads a new content. */
        allFeeds.forEach(function (feed) {
            it('when the \'' + feed.name + '\' feed is loaded by the loadFeed() function, the content changes', function() {
                expect($('.feed')[0].innerText !== content).toBe(true);
                
                content = $('.feed')[0].innerText;
                feedId++;
            });
        })

    });

}());