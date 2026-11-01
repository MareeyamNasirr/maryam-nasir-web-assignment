# UniSphere | Web Technologies Assignment 03

**Student:** Maryam Nasir | **Roll:** AI-09 | **University:** UET Lahore

## Run
Open the **whole project folder** in VS Code, then right-click `index.html` and choose **Open with Live Server**. Do not move HTML files out of their folders. All links use the supplied structure. Internet is needed for the Axios CDN and public API.

## Assignment 03 features
- Existing five pages maintained, with CSS paths resolving to `css/styles.css`.
- Dashboard (`src/pages/dashboard.html`) accessible from every navbar.
- Create, read, update, delete study tasks using a JavaScript array of objects.
- Local Storage key `unis_study_tasks_v1`; records survive refresh in the same browser.
- Search by title/course/notes, status and priority filters using `filter`, `some`, `find`, `map`.
- Axios GET to `https://jsonplaceholder.typicode.com/posts?_limit=6`, rendered into cards with loading and error handling.
- Responsive styling and validation. Sign-in is a **browser-only academic demo**, not secure production authentication.

## Screenshots to take for LMS
1. Expanded VS Code folder tree.
2. Dashboard with a newly added task.
3. Edit task and saved updated task.
4. Delete task and list after deletion.
5. Search and filter results.
6. Refresh browser and show saved task still present.
7. Live API cards with success status.

## GitHub Pages
Push this entire folder's **contents** to your existing GitHub repository (keep `index.html` at repository root). Repository > Settings > Pages > Deploy from a branch > main / (root) > Save. Wait for the Pages URL and test the dashboard and API. Subsequent commits to `main` update the site. **Links cannot be provided until you publish from your account.**

## API
JSONPlaceholder free public test API: https://jsonplaceholder.typicode.com/guide/
Axios CDN: https://cdn.jsdelivr.net/npm/axios@1.7.9/dist/axios.min.js
