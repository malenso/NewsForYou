# NewsForYou
 A custom news curation service

## Gotchas
- **Problem:** Trying to get access to the article from the card template to the page template but can't pass input parameter two levels deep. Could make news service response global but would need to move subscription logic<br>
**Solution:** Pass articles response from service to home component; input parameter from home component to article card component; save articles response into session storage and access from article page component

- Have to subscribe to the service or nothing happens (unless you use async pipe)

- After RXJS v6 update have to use .pipe regardless

- Initialize news service in the constructor...

- **Problem:** How to save http response from into a variable that's available to all components?<br>
**Solution**: WIP, saved article response to session storage and can access it from anywhere

- **Problem:** Suddenly getting cors issue when calling to API<br>
**Solution:** Created proxy rewrite rules for running locally

