# Feed Reader Testing

This is my entry for project 5 (*Feed Reader Testing*) from Udacity's  [Front-End Nanodegree](https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001) program.
Find starter code and more information [HERE
](https://github.com/udacity/frontend-nanodegree-feedreader)


# This project was built on [Jasmine](https://jasmine.github.io/) to:

1. Ensure that each feed object in the `allFeeds` array has a URL defined and that the URL is not empty.
2. Ensure that each feed object in the `allFeeds` array has a name defined and that the name is not empty.
3. Ensure that the menu element is hidden by default.
4. Ensure that the menu changes visibility when the menu icon is clicked.
5. Ensure that when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container.
6. Ensure that when a new feed is loaded by the `loadFeed` function that the content actually changes.

### Known issue
'Linear Digressions' feed contains all posts since 2014!! (about 173 entry), which sometimes cause
```js
Error: Timeout - Async callback was not invoked within timeout specified by jasmine.DEFAULT_TIMEOUT_INTERVAL.
```

### To see it in action
#### Clone repository
via `HTTPS` 
```js
https://github.com/amr-adel/fend-p5-feedreader.git
```
Or via `SSH` 
```js
git@github.com:amr-adel/fend-p5-feedreader.git
```

---
#### Or download repository
As a ZIP archive [Feed Reader Testing](https://github.com/amr-adel/fend-p5-feedreader/archive/master.zip)