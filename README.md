# NewsForYou
 A custom news curation service

## Gotchas
- **Problem:** Trying to get access to the article from the card template to the page template but can't pass input parameter two levels deep. Could make news service response global but would need to move subscription logic<br>
**Solution:** Pass articles response from service to home component; input parameter from home component to article card component; save articles response into session storage and access from article page component

- Have to subscribe to the service or nothing happens (unless you use async pipe)

- After RXJS v6 update have to use .pipe regardless

- Initialize news service in the constructor...

- **Problem:** How to save http response from into a variable that's available to all components?<br>
**Solution**: Saved article response to session storage and can access it from anywhere

- **Problem:** Suddenly getting cors issue when calling to API<br>
**Solution:** Created proxy rewrite rules for running locally

- [ngModel] is the deprecated data binding (as of Angular 6), use Angular forms instead

- Need Reactive Form Modules package when using form builder to set default value for dropdown

- **Problem:** Using the async pipe in the sorting dropdown doesn't seem feasible<br>
- **Solution:** Created custom filter and passed in filter value 

- **Problem:** On page refresh, dropdown sort selection is resetting to default value even when sort order is preserved
- **Solution:** need to use [value] to preserve selection
