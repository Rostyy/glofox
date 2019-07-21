[APP IS HERE](https://glofox.netlify.com/)

# TASK SUMMARY
The app for loading, searching, getting next, random and random non-alcoholic beer is done. All data was fetched from [PUNKAPI](https://punkapi.com/).
Here is following explanation of an app:

## Components
In app you can see four main visual components:
 1. Description card with three buttons "Another Beer", "Random Beer" and "Random non alcoholic beer".
 2. Search field with radio buttons and "Search" button.
 3. Pagination component (back and forward arrows).
 4. Beers list component.
 
### Beers list
When user first starts an app - list of beers is fetched from backend (API) using `https://api.punkapi.com/v2/beers` endpoint with parameters as `page` and `per_page` to have pagination.

So e.g. for first load `https://api.punkapi.com/v2/beers?page=1&per_page=50`. I took `50` beers per page. 

Also these beers are filtered - so they should have valid `ìmage_url`, `description` and excluded images with generic labels (with `ìmage_url="https://images.punkapi.com/v2/keg.png"`).

### Pagination component
User can select pages (back and forth) - accordingly appropriate beer list will appear.

### Search field
User can search beers from list (current page only). Input field has validation, so user can search only alphanumeric characters, hyphen and spaces.

If user types special character - error message appears and search no longer possible. If user clear search filed - all beers before starting search appeared automatically (there is no need to press "Search button").

User can search "By Name" and "By Descriptions" - there are two radio buttons for this ("By Name" - default).
 
### Description card
When user first starts an app - random beer is fetched from backend (API) using `https://api.punkapi.com/v2/beers/random` endpoint.

I decided to use this endpoint even fetched beer can have no origin label or image.

I choose this endpoint intentionally (if needed this beer can be fetched from existing beers list, so with original labels and good image url's).

User can click following buttons:
1. Another beer - iteration from first beer starts and it highlights beer card in beers list in blue color; selected beer appears in description card.
2. Random beer - random beer from beers list is selected and according blue card highlighted in beers list; random beer appears in description card.
3. Random non alcoholic beer - random beer from beers list is selected and according blue card highlighted in beers list; random beer appears in description card. If page(beers list on current page) doesn't have non alcoholic beers - "No beer found for your action" message appears in description card.

## Future improvements
Because lack of time:
1. Still need to be finished "Next page" functionality (button) because user can click it now infinite time (as beers are cached this can cause performance issue), so this button should be disabled when all beers are fetched.
2. Also I would invest more time in template structure, I think it can be done better.

## Technical description
IMPORTANT: since I checked all beers from [PUNKAPI](https://punkapi.com/) there are no beers with `abv` less then `0.05%` (as mentioned in task description), so I chose `3%` as threshold for nonalcoholic beer to be able to visualize "Random non alcoholic beer" button functionality.

I tried to use here SOLID, DRY, KISS principles.

In this app I used cached strategy: when user first starts app beers from first page is loaded and cached. When user clicks next page - beers from next page is loaded and cached, so when user goes back - beers are fetched from the cache. This is valid for all pages of course.

Also was used `Singleton` pattern to reset beersArray index when changing pages (this is for Another Beer functionality, so user can start from first beer); file `./app/classes/beer-iterator/beer-iterator.ts`.

### Framework
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.2.

In this app user can fetch beers from [PUNKAPI](https://punkapi.com/).

### Testing
Unit tests are provided and passed successfully.

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng test --coverage` create tests report. This can be found in `coverage` folder in root of project. Each component, service, pipe and other entities can be checked separately (there are corresponding files).

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

### Deployed (Netlify)
As mentioned before app was deployed on Netlify [deployed app](https://glofox.netlify.com/)
