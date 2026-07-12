// Generates src/data/tasks.js plus every src/tasks/**/*.jsx starter page
// (and companion src/hooks/*.js / src/context/*.jsx stubs) from the manifest below.
// Run with: npm run generate
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SRC = path.join(__dirname, '..', 'src');

function slugify(str) {
  return str
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[/&]/g, ' ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function pascalCase(str) {
  const name = str
    .replace(/[()]/g, '')
    .replace(/[/&]/g, ' ')
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join('');
  // A leading digit isn't a valid JS identifier start (e.g. "404 Page" -> "404Page").
  return /^[0-9]/.test(name) ? `Page${name}` : name;
}

// ---------------------------------------------------------------------------
// Categories
// ---------------------------------------------------------------------------

const CATEGORIES = [
  { name: 'Beginner (JSX & Components)', label: '🟢 Beginner (JSX & Components)', slug: 'beginner', type: 'component' },
  { name: 'useState', label: '🟡 useState', slug: 'use-state', type: 'state' },
  { name: 'Events', label: '🟠 Events', slug: 'events', type: 'event' },
  { name: 'Forms', label: '🔵 Forms', slug: 'forms', type: 'form' },
  { name: 'Lists', label: '🟣 Lists', slug: 'lists', type: 'list' },
  { name: 'Filtering & Searching', label: '🟤 Filtering & Searching', slug: 'filtering-searching', type: 'filter' },
  { name: 'useEffect', label: '🔴 useEffect', slug: 'use-effect', type: 'effect' },
  { name: 'Routing', label: '🟠 Routing', slug: 'routing', type: 'routing' },
  { name: 'Custom Hooks', label: '🟢 Custom Hooks', slug: 'custom-hooks', type: 'hook' },
  { name: 'Context API', label: '🔵 Context API', slug: 'context-api', type: 'context' },
  { name: 'Advanced React', label: '🟣 Advanced React', slug: 'advanced-react', type: 'advanced' },
  { name: 'Performance', label: '🔴 Performance', slug: 'performance', type: 'performance' },
  { name: 'Mini Projects', label: '⚫ Mini Projects', slug: 'mini-projects', type: 'project' },
  { name: 'Intermediate Projects', label: '🟡 Intermediate Projects', slug: 'intermediate-projects', type: 'project' },
  { name: 'Expert-Level Projects', label: '🔥 Expert-Level Projects', slug: 'expert-projects', type: 'project' },
];

// ---------------------------------------------------------------------------
// Task manifest: title / description / requirements per category.
// hook tasks additionally carry `hookName`; context tasks carry `ctx`.
// ---------------------------------------------------------------------------

const TASKS_RAW = {
  'Beginner (JSX & Components)': [
    { title: 'Hello World', description: "Render a simple 'Hello, World!' heading using JSX — the classic first React component.", requirements: ['Render an <h1> that says "Hello, World!"', 'Component must be a valid functional component', 'No props or state needed'] },
    { title: 'Personal Profile Card', description: 'Build a static card that displays your name, a short bio, and a photo/avatar placeholder.', requirements: ['Show a name, title/role, and a short bio', 'Include an image or avatar placeholder', 'Style it as a card using the .card class'] },
    { title: 'User Card with Props', description: "Turn the profile card into a reusable component that accepts a user's data via props.", requirements: ['Accept name, role, and avatarUrl as props', 'Render at least two <UserCard /> instances with different props', 'Provide sensible fallback values for missing props'] },
    { title: 'Greeting Card (Morning/Afternoon/Evening)', description: 'Render a greeting message that changes based on the current time of day.', requirements: ['Use the current hour to decide Morning/Afternoon/Evening', 'Render a single greeting message', 'Handle the edge cases around midnight and noon'] },
    { title: 'Product Card', description: "Display a product's image, name, price, and an 'Add to Cart' button.", requirements: ['Show product image, name, and price', 'Include an Add to Cart button (no need to wire up real cart logic)', 'Accept the product data as props so it is reusable'] },
    { title: 'Simple Navbar', description: 'Build a horizontal navigation bar with a logo/title and a few nav links.', requirements: ['Render a brand/logo on the left and links on the right', 'Use semantic <nav> markup', 'Links can be placeholder <a> tags'] },
    { title: 'Footer Component', description: 'Build a footer with copyright text, social links, and the current year.', requirements: ['Show a copyright line with the current year computed in JS', 'Include a few social/contact links', 'Keep it as a standalone reusable component'] },
    { title: 'Reusable Button Component', description: 'Create a Button component that supports variants (primary/secondary) and forwards its props.', requirements: ['Accept children, onClick, and a variant prop', 'Apply different styling per variant', 'Forward any other native button props (e.g. disabled, type)'] },
    { title: 'Avatar Component', description: "Build an Avatar component that shows a user's image, or their initials if no image is provided.", requirements: ['Accept name and optional imageUrl props', 'Fall back to initials when imageUrl is missing', 'Support at least two sizes via a size prop'] },
    { title: 'Pricing Card', description: 'Build a pricing plan card showing a plan name, price, feature list, and a call-to-action button.', requirements: ['Accept plan name, price, and a list of features as props', 'Render the features as a list', "Highlight a 'featured' plan differently via a prop"] },
  ],
  useState: [
    { title: 'Counter', description: 'A minimal counter that increments by 1 on button click.', requirements: ['Track count in state', 'One button increments the count', 'Display the current count'] },
    { title: 'Counter with Increment/Decrement', description: 'Extend the counter with both increment and decrement buttons, plus a reset button.', requirements: ['Increment and decrement buttons update state correctly', 'Add a reset button that sets count back to 0', 'Prevent count from going below 0 (bonus)'] },
    { title: 'Like Button', description: 'A social-media style like button that toggles liked state and updates a like count.', requirements: ['Clicking toggles between liked/unliked', 'Like count increases/decreases accordingly', 'Button style changes when liked'] },
    { title: 'Toggle Button (ON/OFF)', description: 'A single button that switches between ON and OFF state and shows the current status.', requirements: ['Boolean state tracks on/off', 'Button label and color reflect the current state', 'Clicking flips the state'] },
    { title: 'Show/Hide Password', description: 'A password input with an eye icon/button to toggle showing the raw text.', requirements: ["Input type toggles between 'password' and 'text'", 'A button/icon toggles the boolean state', "Reflect the current mode in the toggle button's label"] },
    { title: 'Character Counter', description: 'A textarea that shows a live count of characters typed, with a max-length warning.', requirements: ['Track the input value in state', 'Display current length / max length', 'Show a warning style when nearing/exceeding the limit'] },
    { title: 'Live Text Preview', description: 'As the user types in an input, mirror the text live in a preview area below.', requirements: ['Controlled input stores its value in state', 'Preview area re-renders with the latest value on every keystroke', 'Show a placeholder message when the input is empty'] },
    { title: 'Temperature Converter', description: 'Convert a temperature between Celsius and Fahrenheit as the user types.', requirements: ['Two inputs (C and F) stay in sync with each other', 'Conversion math is correct in both directions', 'Handle non-numeric input gracefully'] },
    { title: 'BMI Calculator', description: "Calculate BMI from a user's height and weight and show the resulting category.", requirements: ['Inputs for height (cm) and weight (kg)', 'Compute BMI = weight / (height in meters)^2', 'Show category (underweight/normal/overweight/obese) based on the result'] },
    { title: 'Age Calculator', description: "Given a birth date, calculate and display the person's current age.", requirements: ['Accept a date of birth via a date input', 'Compute age in years (accounting for whether the birthday has passed this year)', "Show an error/prompt state until a date is chosen"] },
  ],
  Events: [
    { title: 'Click Event Demo', description: 'Demonstrate handling a click event and reading data from the event object.', requirements: ['Attach an onClick handler to a button', 'Log or display something derived from the click event', 'Show a click counter'] },
    { title: 'Mouse Hover Box', description: 'A box that changes appearance while the mouse is hovering over it.', requirements: ['Use onMouseEnter/onMouseLeave to track hover state', 'Change background color or scale while hovered', 'Reset back to normal when the mouse leaves'] },
    { title: 'Keyboard Event Tracker', description: 'Show which key was last pressed while an input is focused.', requirements: ['Use onKeyDown (or onKeyUp) to capture key presses', 'Display the key name and key code', 'Handle special keys like Enter/Escape distinctly'] },
    { title: 'Color Changer', description: 'Buttons for a few colors that change the background color of a preview box when clicked.', requirements: ['Render a set of color swatch buttons', 'Clicking a swatch updates the preview box background', 'Track the currently selected color in state'] },
    { title: 'Random Background Generator', description: 'A button that sets the page/box background to a randomly generated color.', requirements: ['Generate a random hex color on click', 'Update the background using that color', 'Display the current hex code as text'] },
    { title: 'Dice Roller', description: 'Simulate rolling a six-sided die and display the result.', requirements: ['Button triggers a new random roll (1-6)', 'Display the resulting number (bonus: as a dice face)', "Disable/animate briefly while 'rolling' (optional)"] },
    { title: 'Coin Toss', description: 'Simulate flipping a coin and display Heads or Tails.', requirements: ['Button triggers a random Heads/Tails result', 'Display the result clearly', 'Track a running tally of heads vs tails (bonus)'] },
    { title: 'Random Quote Generator', description: 'Show a random quote from a hardcoded list each time a button is clicked.', requirements: ['Maintain an array of quote objects (text + author)', 'Button picks a new random quote, avoiding immediate repeats (bonus)', 'Display the quote and its author'] },
    { title: 'Rock Paper Scissors', description: 'Play a single round of rock-paper-scissors against the computer.', requirements: ['User picks rock, paper, or scissors via buttons', "Computer's choice is randomized", 'Determine and display the winner using correct game rules'] },
    { title: 'Number Guessing Game', description: 'The app picks a random number in a range; the user guesses until they get it right.', requirements: ['Pick a random target number on mount/reset', 'Give higher/lower feedback after each guess', 'Track number of attempts and show a win message'] },
  ],
  Forms: [
    { title: 'Login Form', description: 'A login form with email and password fields and basic client-side validation.', requirements: ['Controlled email and password inputs', 'Show a validation error if a field is empty or email is malformed', 'On valid submit, show a success message (no real backend needed)'] },
    { title: 'Signup Form', description: 'A signup form with name, email, password, and confirm-password fields.', requirements: ['All fields are controlled inputs', 'Confirm-password must match password', 'Show inline error messages per field'] },
    { title: 'Contact Form', description: 'A simple contact form with name, email, and message fields.', requirements: ['Controlled inputs for name, email, and message', 'Require all fields before allowing submit', "Show a 'message sent' confirmation on submit"] },
    { title: 'Feedback Form', description: 'Collect a star/number rating plus optional comments from the user.', requirements: ['A rating control (e.g. 1-5 buttons or stars)', 'An optional comment textarea', 'Display a summary of the submitted feedback'] },
    { title: 'Multi-Step Form', description: 'Split a form into multiple steps (e.g. personal info → address → review) with next/back navigation.', requirements: ['Track the current step in state', 'Preserve entered data when moving between steps', 'A final review step summarizing all entered data'] },
    { title: 'Form Validation', description: 'Generic validation practice: required fields, min length, and pattern matching (e.g. email).', requirements: ['Validate on submit (and optionally on blur)', 'Show a specific error message per invalid field', 'Disable submit while the form is invalid (bonus)'] },
    { title: 'Password Strength Checker', description: 'As the user types a password, show a live strength meter (weak/medium/strong).', requirements: ['Evaluate strength based on length, casing, digits, and symbols', 'Update the meter live as the user types', 'Show which criteria are met/unmet'] },
    { title: 'OTP Input', description: 'A one-time-password input made of individual digit boxes with auto-focus advance.', requirements: ['Render N separate single-character inputs', 'Typing a digit auto-focuses the next box', 'Backspace on an empty box focuses the previous box'] },
    { title: 'Credit Card Form', description: 'A credit card form with card number, expiry, and CVV, including basic formatting.', requirements: ['Auto-format the card number with spaces every 4 digits', 'Validate expiry as a future MM/YY date', 'Mask or limit CVV to the correct digit length'] },
    { title: 'Survey Form', description: 'A multi-question survey combining text input, radio buttons, and checkboxes.', requirements: ['Include at least one text field, one radio group, and one checkbox group', 'Collect all answers into a single state object', 'Show a summary of answers after submit'] },
  ],
  Lists: [
    { title: 'Todo App', description: 'A classic todo list: add, complete, and delete tasks.', requirements: ['Add a new todo via an input + button/Enter', "Toggle a todo's completed state", 'Delete a todo from the list'] },
    { title: 'Shopping List', description: 'Track shopping items with quantities, and mark items as picked up.', requirements: ['Add an item with a name and quantity', 'Mark an item as picked up (visually distinct)', 'Remove an item from the list'] },
    { title: 'Notes App', description: 'Create, edit, and delete short text notes.', requirements: ['Add a new note with a title/body', 'Edit an existing note in place', 'Delete a note'] },
    { title: 'Employee Directory', description: 'Display a list of employees with name, department, and role.', requirements: ['Render each employee as a card/row', 'Seed at least 5 sample employees', 'Group or label employees by department (bonus)'] },
    { title: 'Student List', description: 'Display a list of students with name and grade, supporting add/remove.', requirements: ['Render students from an array in state', 'Add a new student via a small form', 'Remove a student from the list'] },
    { title: 'Movie List', description: 'Display a list of movies with title, year, and rating.', requirements: ["Render each movie's title, year, and rating", 'Seed at least 5 sample movies', 'Sort the list by rating (bonus)'] },
    { title: 'Recipe List', description: 'Display a list of recipes with name, cook time, and ingredient count.', requirements: ['Render each recipe as a card', "Clicking a recipe expands/collapses its ingredient list", 'Seed at least 4 sample recipes'] },
    { title: 'Book Library', description: "Track a small library of books, including a 'read/unread' status.", requirements: ["Render each book's title, author, and read status", 'Toggle a book between read and unread', 'Add a new book to the collection'] },
    { title: 'Contact List', description: 'A contacts list showing name, phone, and email, with the ability to remove a contact.', requirements: ['Render contacts from state', 'Remove a contact by id', 'Add a new contact via a small form'] },
    { title: 'Dynamic Table', description: 'Render tabular data from an array of objects into an HTML table dynamically.', requirements: ['Generate table headers from the object keys', 'Render one <tr> per data row using .map()', 'Support removing a row (bonus)'] },
  ],
  'Filtering & Searching': [
    { title: 'Search Users', description: 'Filter a list of users by name as the user types in a search box.', requirements: ['Seed an array of sample users', 'Filter case-insensitively as the query changes', "Show a 'no results' message when nothing matches"] },
    { title: 'Search Products', description: 'Filter a product catalog by name using a search input.', requirements: ['Seed an array of sample products', 'Filter by matching the product name against the query', 'Highlight the matching substring (bonus)'] },
    { title: 'Filter by Category', description: 'Filter a list of items using a category dropdown/button group.', requirements: ['Seed items that each have a category field', 'Selecting a category filters the visible items', "Include an 'All' option that clears the filter"] },
    { title: 'Filter by Price', description: 'Filter products using a min/max price range.', requirements: ['Two numeric inputs (or a range slider) for min and max price', 'Only show items within the selected range', 'Handle an empty/invalid range gracefully'] },
    { title: 'Sort Products', description: 'Sort a product list by price or name, ascending or descending.', requirements: ['A control to choose the sort field (price/name)', 'A control to choose direction (asc/desc)', 'Sorting must not mutate the original array'] },
    { title: 'Search + Sort Combined', description: 'Combine a search box and a sort control operating on the same list.', requirements: ['Filtering and sorting both apply to the same source array', 'Order of operations should not matter (filter then sort)', 'Use useMemo to avoid recomputing needlessly (bonus)'] },
    { title: 'Live Search Suggestions', description: 'As the user types, show a dropdown of matching suggestions below the input.', requirements: ['Show up to N matching suggestions as the query changes', 'Clicking a suggestion fills the input', 'Hide the dropdown when there are no matches or input is empty'] },
    { title: 'Country Search', description: 'Search a hardcoded list of countries by name.', requirements: ['Seed at least 15-20 sample countries', 'Filter as the user types', 'Show a flag emoji or code next to each result (bonus)'] },
    { title: 'Emoji Search', description: 'Search a small emoji dataset by name/keyword.', requirements: ['Seed an array of {emoji, name, keywords}', 'Filter by matching the query against name or keywords', 'Render matching emoji in a grid'] },
    { title: 'FAQ Search', description: 'Search FAQ questions by keyword and reveal matching answers.', requirements: ['Seed an array of {question, answer}', 'Filter questions by matching the query', 'Clicking a question expands/collapses its answer'] },
  ],
  useEffect: [
    { title: 'Digital Clock', description: 'Display the current time and update it every second.', requirements: ['Use useEffect + setInterval to tick every second', 'Clean up the interval on unmount', 'Format the time as HH:MM:SS'] },
    { title: 'Stopwatch', description: 'A start/stop/reset stopwatch with elapsed time display.', requirements: ['Start begins incrementing elapsed time', 'Stop pauses it without losing the current value', 'Reset sets elapsed time back to 0, and the interval is cleaned up properly'] },
    { title: 'Countdown Timer', description: 'Count down from a given number of seconds to zero.', requirements: ['Accept a starting number of seconds', 'Tick down once per second using useEffect', "Stop at zero and show a 'done' message, cleaning up the interval"] },
    { title: 'Fetch Users API', description: 'Fetch a list of users from a public API and render them.', requirements: ['Fetch from https://jsonplaceholder.typicode.com/users on mount', 'Show a loading state while fetching', 'Handle and display fetch errors'] },
    { title: 'GitHub User Search', description: 'Look up a GitHub user by username and display their public profile info.', requirements: ['Fetch from https://api.github.com/users/<username> when the user searches', 'Show avatar, name, bio, and public repo count', "Handle 'user not found' gracefully"] },
    { title: 'Random Dog Image', description: 'Fetch and display a random dog image, with a button to get a new one.', requirements: ['Fetch from https://dog.ceo/api/breeds/image/random on mount and on button click', 'Show a loading indicator while fetching', 'Handle fetch failures'] },
    { title: 'Random Cat Facts', description: 'Fetch and display a random cat fact, with a button to get another.', requirements: ['Fetch from https://catfact.ninja/fact on mount and on button click', 'Show a loading state between fetches', 'Handle fetch failures'] },
    { title: 'Weather App', description: 'Look up current weather for a city name using a weather API.', requirements: ['Fetch weather data when the user submits a city', 'Display temperature and conditions', 'Show loading and error states'] },
    { title: 'Currency Converter', description: 'Convert an amount between two currencies using live (or mocked) exchange rates.', requirements: ['Fetch/derive exchange rates for the selected currencies', 'Recalculate the converted amount when amount or currencies change', 'Handle the loading/error state for the rate fetch'] },
    { title: 'Quote API', description: 'Fetch a random quote from a public API each time the user requests one.', requirements: ['Fetch a quote on mount and on button click', 'Show a loading state while fetching', 'Handle fetch errors with a friendly message'] },
  ],
  Routing: [
    { title: 'Multi-page Website', description: 'Simulate a small multi-page site (Home, About, Contact) with client-side navigation.', requirements: ["At least 3 distinct 'pages'", 'Nav links/buttons switch between them', 'The active page is visually indicated in the nav'] },
    { title: 'Blog Website', description: 'Simulate a blog with a post list page and a post detail page.', requirements: ['A list view showing post titles', 'Clicking a post shows its detail view', 'A way to navigate back to the list'] },
    { title: 'Portfolio Website', description: 'Simulate a personal portfolio with Home, Projects, and Contact sections as separate pages.', requirements: ['At least 3 sections navigable independently', 'Each section has distinct sample content', 'Persistent nav visible across all pages'] },
    { title: 'Product Details Page', description: 'Simulate navigating from a product list to a detail view for the selected product.', requirements: ['A list of products, each clickable', 'Selecting one shows its full detail view', 'A back action returns to the list'] },
    { title: 'Dashboard Layout', description: 'Simulate a dashboard shell with a sidebar and a main content area that changes per section.', requirements: ['Persistent sidebar with a few navigation items', 'Selecting a sidebar item changes the main content', 'Highlight the active sidebar item'] },
    { title: 'Nested Routes Demo', description: 'Simulate nested navigation, e.g. a Settings page with Profile/Security sub-sections.', requirements: ['A top-level page with its own sub-navigation', 'Sub-navigation switches nested content without leaving the parent page', 'Track both the parent and child selection in state'] },
    { title: 'Protected Route Demo', description: "Simulate a page that's only accessible when 'logged in', otherwise showing a login prompt.", requirements: ["A boolean 'authenticated' state (toggle for demo purposes)", 'Protected content only renders when authenticated', 'Show a login prompt/button when not authenticated'] },
    { title: '404 Page', description: "Build a friendly 'page not found' view with a link back home.", requirements: ['Clear 404 messaging', 'A button/link back to the home view', 'Reusable so it could be shown for any unknown path'] },
    { title: 'Breadcrumb Navigation', description: 'Show a breadcrumb trail that reflects the current simulated navigation depth.', requirements: ['Breadcrumb updates as the user navigates deeper', 'Clicking a breadcrumb segment jumps back to that level', 'Home is always the first breadcrumb'] },
    { title: 'Sidebar Navigation', description: 'Build a collapsible sidebar with navigation items and active-item highlighting.', requirements: ['Sidebar can collapse/expand', 'Clicking an item marks it active and shows related content', 'Active item is visually distinct'] },
  ],
  'Custom Hooks': [
    { title: 'useToggle', hookName: 'useToggle', description: 'Build a reusable hook that manages a boolean toggle state.', requirements: ['Returns [value, toggle] (or similar)', 'toggle() flips the boolean', 'Optionally accept an initial value'] },
    { title: 'useCounter', hookName: 'useCounter', description: 'Build a reusable hook for counter logic with increment/decrement/reset.', requirements: ['Returns the count plus increment/decrement/reset functions', 'Accepts an optional initial value and step', 'Demo component uses the hook instead of local useState'] },
    { title: 'useLocalStorage', hookName: 'useLocalStorage', description: 'Build a hook that syncs a piece of state with localStorage.', requirements: ['Reads the initial value from localStorage if present', 'Writes to localStorage whenever the value changes', 'Falls back to a provided default when nothing is stored'] },
    { title: 'useWindowSize', hookName: 'useWindowSize', description: "Build a hook that tracks the current window width/height.", requirements: ['Returns { width, height } updated on resize', 'Subscribes on mount and cleans up the resize listener on unmount', 'Demo displays the live values'] },
    { title: 'useDebounce', hookName: 'useDebounce', description: 'Build a hook that returns a debounced version of a fast-changing value.', requirements: ['Accepts a value and a delay in ms', 'Only updates the returned value after the delay has passed without changes', 'Demo shows both the raw and debounced value side by side'] },
    { title: 'useClipboard', hookName: 'useClipboard', description: 'Build a hook that copies text to the clipboard and reports success/failure.', requirements: ['Exposes a copy(text) function', "Tracks a 'copied' status that resets after a short delay", 'Demo has a button that copies sample text and shows feedback'] },
    { title: 'useDarkMode', hookName: 'useDarkMode', description: 'Build a hook that manages a dark/light theme toggle, persisted across reloads.', requirements: ['Returns the current theme and a toggle function', 'Persists the choice (e.g. via localStorage)', 'Demo visibly changes styling based on the theme'] },
    { title: 'useFetch', hookName: 'useFetch', description: 'Build a generic data-fetching hook that returns data/loading/error.', requirements: ['Accepts a URL and re-fetches when it changes', 'Returns { data, loading, error }', 'Demo uses it against a public API endpoint'] },
    { title: 'useOnlineStatus', hookName: 'useOnlineStatus', description: 'Build a hook that tracks whether the browser is currently online.', requirements: ['Returns a boolean online status', 'Subscribes to the online/offline window events and cleans up on unmount', 'Demo shows a live status indicator'] },
    { title: 'usePrevious', hookName: 'usePrevious', description: 'Build a hook that returns the previous value of a piece of state/props.', requirements: ['Returns the value from the render before the latest one', 'Uses a ref internally rather than state', 'Demo shows current vs previous value side by side'] },
  ],
  'Context API': [
    { title: 'Theme Switcher', ctx: 'Theme', description: 'Use Context to share a light/dark theme across the whole demo without prop drilling.', requirements: ['ThemeContext exposes the current theme and a toggle function', 'At least two nested components read the theme via context', 'Toggling updates every consumer at once'] },
    { title: 'Authentication Context', ctx: 'Auth', description: 'Model a simple authentication state (user, login, logout) shared via Context.', requirements: ['AuthContext exposes the current user and login/logout functions', 'A demo shows different UI when logged in vs logged out', 'logout() clears the current user'] },
    { title: 'Language Switcher', ctx: 'Language', description: 'Share the selected UI language across components using Context.', requirements: ['LanguageContext exposes the current language and a setter', 'At least two components render text that depends on the language', 'Switching updates all consumers immediately'] },
    { title: 'Shopping Cart Context', ctx: 'Cart', description: 'Share cart state (items, add/remove, total) across components using Context.', requirements: ['CartContext exposes items plus addItem/removeItem', 'A derived total is available to consumers', 'A demo adds a couple of sample products and shows the running total'] },
    { title: 'User Profile Context', ctx: 'UserProfile', description: "Share the current user's profile info across components using Context.", requirements: ['UserProfileContext exposes profile fields and an updateProfile function', 'At least two components read from the context', 'Updating the profile in one place reflects everywhere it is used'] },
    { title: 'Notification Context', ctx: 'Notification', description: 'Build a global notification/toast queue accessible from anywhere via Context.', requirements: ['NotificationContext exposes a notify(message) function and the current queue', 'Notifications auto-dismiss after a delay', 'A demo triggers a notification from a button'] },
    { title: 'Wishlist Context', ctx: 'Wishlist', description: 'Share a wishlist of items (add/remove/check) across components using Context.', requirements: ['WishlistContext exposes the wishlist plus add/remove/toggle functions', 'A demo lists sample products with an add-to-wishlist button', 'Show the current wishlist count somewhere else in the tree'] },
    { title: 'Settings Page', ctx: 'Settings', description: 'Share app-wide settings (e.g. notifications on/off, font size) via Context.', requirements: ['SettingsContext exposes a settings object and an updateSetting function', 'A settings form updates values through context, not local state', "Another component reflects a setting's current value"] },
    { title: 'Global Loader', ctx: 'Loader', description: 'Provide a global loading indicator that any component can trigger via Context.', requirements: ['LoaderContext exposes isLoading and show/hide functions', 'A demo component triggers show() before a fake async action and hide() after', 'A global overlay/spinner renders whenever isLoading is true'] },
    { title: 'Toast Notification System', ctx: 'Toast', description: 'Build a reusable toast system (success/error/info) accessible via Context.', requirements: ['ToastContext exposes a function to push a toast with a type and message', 'Toasts render in a fixed position and auto-dismiss', 'A demo triggers at least two different toast types'] },
  ],
  'Advanced React': [
    { title: 'Modal Component', description: 'Build a reusable modal dialog that opens/closes and can be dismissed via backdrop or Escape.', requirements: ['Modal only renders when open', 'Closes on backdrop click and on Escape key', 'Content is passed in via children/props'] },
    { title: 'Accordion', description: 'Build an accordion where clicking a header expands/collapses its panel.', requirements: ['Multiple sections, each with a header and body', "Clicking a header toggles that section's open state", 'Support either single-open or multi-open mode'] },
    { title: 'Tabs', description: 'Build a tabbed interface that shows one panel at a time based on the active tab.', requirements: ['A row of tab buttons plus a content area', 'Clicking a tab makes it active and shows its panel', 'The active tab is visually distinct'] },
    { title: 'Image Carousel', description: 'Build an image carousel with next/prev controls and slide indicators.', requirements: ['Next/prev buttons move through a set of images', 'Indicator dots show the current slide and are clickable', 'Wrap around at the start/end (bonus)'] },
    { title: 'Infinite Scroll', description: 'Load more list items automatically as the user scrolls near the bottom.', requirements: ['Detect when the user has scrolled near the bottom', 'Append the next batch of items to the list', 'Show a loading indicator while the next batch loads'] },
    { title: 'Pagination', description: 'Split a list into pages with Previous/Next and page-number controls.', requirements: ["Only render the current page's slice of items", 'Previous/Next navigate correctly at the boundaries', 'Show the current page and total page count'] },
    { title: 'Drag & Drop Todo', description: 'Reorder todo items by dragging and dropping them.', requirements: ['Items can be dragged and dropped into a new position', 'The underlying array order updates to match', 'Visually indicate the item being dragged (bonus)'] },
    { title: 'Kanban Board', description: 'Build a simple kanban board with columns (e.g. To Do/In Progress/Done) and draggable cards.', requirements: ['At least 3 columns holding cards', 'Cards can move between columns via drag and drop', 'Support adding a new card to a column'] },
    { title: 'Virtualized List', description: 'Render only the visible slice of a very large list for performance.', requirements: ['Render a list of a few thousand items without lag', 'Only render the rows currently in/near the viewport', 'Scrolling updates which rows are rendered'] },
    { title: 'Command Palette', description: 'Build a Cmd+K style command palette for fuzzy-searching and running actions.', requirements: ['A keyboard shortcut opens the palette', 'Typing filters a list of commands/actions', 'Selecting a command runs it and closes the palette'] },
  ],
  Performance: [
    { title: 'Memoization Demo', description: "Demonstrate the difference between a component that re-renders unnecessarily and one that doesn't.", requirements: ['Show an unnecessary re-render happening', 'Fix it using the appropriate memoization technique', 'Prove the fix using console logs or React DevTools'] },
    { title: 'React.memo Example', description: 'Wrap a child component in React.memo to skip re-renders when its props have not changed.', requirements: ['A parent re-renders frequently (e.g. via a counter)', "A child should not re-render when its own props are unchanged", 'Verify with a render counter or console.log in the child'] },
    { title: 'useMemo Example', description: 'Use useMemo to avoid recomputing an expensive derived value on every render.', requirements: ['An expensive computation derived from some state', 'Wrap it in useMemo with the correct dependency array', "Show it's skipped when unrelated state changes"] },
    { title: 'useCallback Example', description: 'Use useCallback to keep a function reference stable across renders.', requirements: ['A callback passed down to a memoized child', 'Wrap it in useCallback with the correct dependencies', 'Show the child no longer re-renders due to a new function reference'] },
    { title: 'Lazy Loading Components', description: "Use React.lazy + Suspense to load a component only when it's needed.", requirements: ["A component is only fetched/loaded when first rendered", 'Show a fallback while it loads', 'Trigger the lazy load from a button/toggle'] },
    { title: 'Code Splitting', description: 'Split a heavier feature into its own chunk that loads on demand.', requirements: ['Use dynamic import() for the heavier module/component', 'Wrap it with Suspense and a loading fallback', 'Confirm (conceptually or via build output) it is a separate chunk'] },
    { title: 'Debounced Search', description: 'Debounce a search input so filtering only runs after the user pauses typing.', requirements: ['Typing quickly should not trigger a filter on every keystroke', 'Filtering runs only after a short pause (e.g. 300ms)', 'Show the debounced query alongside the raw input value'] },
    { title: 'Throttled Scroll', description: 'Throttle a scroll event handler so it runs at most every N milliseconds.', requirements: ['Attach a scroll listener (window or a scrollable container)', 'Throttle the handler to run at most once per interval', 'Display something derived from scroll position (e.g. scroll %)'] },
    { title: 'Optimized Large List', description: "Take a large list that's slow to render and apply optimizations to speed it up.", requirements: ['Start from a list large enough to visibly lag (e.g. 5,000+ rows)', 'Apply at least one concrete optimization (memoized rows, windowing, etc.)', 'Note/measure the before vs after difference'] },
    { title: 'Skeleton Loading UI', description: 'Show skeleton placeholders while data is loading instead of a blank screen or spinner.', requirements: ["Render skeleton shapes matching the eventual content's layout", "Swap to real content once data has 'loaded' (simulate with a timeout)", 'Skeletons should roughly match final content dimensions'] },
  ],
  'Mini Projects': [
    { title: 'Expense Tracker', description: 'Track income/expenses with a running balance and a transaction list.', requirements: ['Add a transaction with a description, amount, and type (income/expense)', 'Show a running total/balance', 'Remove a transaction', 'Consider splitting into TransactionForm + TransactionList + Balance components'] },
    { title: 'Habit Tracker', description: 'Track daily habits and whether they were completed each day.', requirements: ['Add a habit to track', 'Mark a habit complete/incomplete for today', 'Show a simple streak or completion count', 'Consider a HabitList + HabitItem component split'] },
    { title: 'Pomodoro Timer', description: 'A work/break timer following the Pomodoro technique.', requirements: ['Countdown for a work session, then a break session', 'Start/pause/reset controls', 'Switch automatically between work and break phases', 'Consider a TimerDisplay + Controls component split'] },
    { title: 'Weather Dashboard', description: 'A richer weather app showing current conditions plus a short forecast.', requirements: ['Search by city and fetch current weather', 'Show a multi-day (or hourly) forecast summary', 'Handle loading and error states', 'Consider a SearchBar + CurrentWeather + Forecast component split'] },
    { title: 'Movie Search App', description: 'Search a movie API/dataset and show results with poster, title, and year.', requirements: ['A search input triggers fetching/filtering movies', 'Render results in a grid of cards', 'Show a details view/modal for a selected movie', 'Consider a SearchBar + MovieGrid + MovieCard split'] },
    { title: 'Recipe Finder', description: 'Search recipes by ingredient or name and view full recipe details.', requirements: ['Search/filter a list of recipes', 'Show recipe details including ingredients and steps', "Handle a 'no recipes found' state", 'Consider a SearchBar + RecipeList + RecipeDetail split'] },
    { title: 'GitHub Explorer', description: 'Search GitHub users and browse their public repositories.', requirements: ['Search for a username and fetch their profile', 'List their public repos with stars/language', 'Handle loading/error/not-found states', 'Consider a SearchBar + UserProfile + RepoList split'] },
    { title: 'Chat UI', description: 'A chat interface with a message list and an input to send new (local) messages.', requirements: ['Render a scrollable list of messages with sender distinction', 'Send a new message via the input, appending it to the list', 'Auto-scroll to the latest message', 'Consider a MessageList + MessageBubble + MessageInput split'] },
    { title: 'Markdown Editor', description: 'A live markdown editor with a side-by-side rendered preview.', requirements: ['Textarea for raw markdown input', 'Live preview rendering basic markdown (headers, bold, lists, etc.)', 'Keep editor and preview in sync as the user types', 'Consider an Editor + Preview component split'] },
    { title: 'Calculator', description: 'A working calculator supporting basic arithmetic operations.', requirements: ['Number pad plus +, -, ×, ÷, and = buttons', 'Correctly chains multiple operations', 'Clear/reset the current calculation', 'Consider a Display + Keypad component split'] },
  ],
  'Intermediate Projects': [
    { title: 'E-commerce Store', description: 'A small storefront: product grid, product detail, and a cart.', requirements: ['Product grid with add-to-cart', 'Cart page/section showing items, quantities, and total', 'Basic checkout summary (no real payment)', 'Consider ProductGrid + ProductCard + Cart + CartItem components'] },
    { title: 'Trello Clone', description: 'A Trello-style board with lists and draggable cards.', requirements: ['Multiple lists, each holding cards', 'Add a new card to a list', 'Drag cards between lists', 'Consider Board + List + Card components'] },
    { title: 'Spotify UI Clone', description: 'Recreate the core layout of a music player UI (sidebar, track list, now-playing bar).', requirements: ['Sidebar navigation, main track/playlist list, and a persistent player bar', 'Selecting a track updates the now-playing bar', 'Play/pause toggle in the player bar (audio playback optional)', 'Consider Sidebar + TrackList + PlayerBar components'] },
    { title: 'Netflix Clone', description: 'Recreate a browse UI with hero banner and horizontally-scrollable content rows.', requirements: ['A hero/banner section for a featured title', 'Multiple horizontally-scrollable rows of titles (e.g. by genre)', 'Clicking a title shows more details (modal or section)', 'Consider Hero + Row + Card components'] },
    { title: 'Google Keep Clone', description: 'A notes app with a Pinterest-style masonry/grid layout and colors.', requirements: ['Add/edit/delete notes', 'Notes support a background color', 'Pin a note so it stays at the top', 'Consider NoteGrid + NoteCard + NoteEditor components'] },
    { title: 'Gmail UI Clone', description: 'Recreate the core Gmail layout: sidebar folders, an email list, and a reading pane.', requirements: ['Sidebar with folders (Inbox/Sent/Trash, etc.)', 'Email list filtered by the selected folder', 'Selecting an email shows it in a reading pane', 'Consider Sidebar + EmailList + EmailItem + ReadingPane components'] },
    { title: 'Admin Dashboard', description: 'A dashboard shell with stat cards, a data table, and a sidebar.', requirements: ['A row of summary stat cards', 'A data table with sortable columns', 'Sidebar navigation between at least two dashboard sections', 'Consider Sidebar + StatCard + DataTable components'] },
    { title: 'Blogging Platform', description: 'A blog with a post list, post detail view, and a basic post editor.', requirements: ['List of posts with title/excerpt', 'Full post detail view', 'A form to create/edit a post (stored in local state)', 'Consider PostList + PostDetail + PostEditor components'] },
    { title: 'URL Shortener', description: 'Take a long URL and generate a shortened version, tracked in a list.', requirements: ['Input for a long URL, generating a short code', 'List of previously shortened URLs with click counts (simulated)', 'Copy-to-clipboard for a shortened link', 'Consider ShortenForm + LinkList components'] },
    { title: 'URL Bookmark Manager', description: 'Save, tag, and organize bookmarked URLs.', requirements: ['Add a bookmark with a URL, title, and tags', 'Filter bookmarks by tag', 'Delete a bookmark', 'Consider BookmarkForm + BookmarkList + TagFilter components'] },
  ],
  'Expert-Level Projects': [
    { title: 'File Explorer', description: 'A tree-view file explorer supporting nested folders and files.', requirements: ['Recursive rendering of nested folders/files', 'Expand/collapse folders', 'Support adding/removing a file or folder (in local state)', 'Consider a recursive FileTree/TreeNode component'] },
    { title: 'VS Code Explorer', description: 'Recreate a VS Code-like sidebar file tree plus a tabbed editor area.', requirements: ['A file tree sidebar like File Explorer above', 'Clicking a file opens it in a tab', 'Multiple tabs can be open with a close button each', 'Consider Sidebar + TreeNode + TabBar + EditorPane components'] },
    { title: 'JSON Viewer', description: 'Pretty-print and let the user collapse/expand nested JSON data.', requirements: ['Recursively render arbitrarily nested objects/arrays', 'Collapse/expand any object or array node', 'Syntax-highlight keys, strings, numbers, booleans distinctly', 'Consider a recursive JsonNode component'] },
    { title: 'API Testing Tool (Postman Lite)', description: 'A minimal API client: choose a method/URL, send a request, view the response.', requirements: ['Inputs for HTTP method and URL (and optional body)', 'Send the request and display status/headers/body', 'Handle request errors gracefully', 'Consider RequestForm + ResponseViewer components'] },
    { title: 'Whiteboard App', description: 'A freehand drawing canvas with basic tools.', requirements: ['Draw freehand on a <canvas> while the mouse is held down', 'Support at least a color and stroke-width control', 'A clear-canvas button', 'Consider a Toolbar + Canvas component split'] },
    { title: 'Real-time Chat', description: "Simulate a real-time chat between two 'users' in the same app (no real backend required).", requirements: ['Two simulated participants exchanging messages', 'New messages appear without a page reload', 'Show typing/online status indicators (simulated)', 'Consider ChatWindow + MessageList + MessageInput components'] },
    { title: 'Kanban with Drag & Drop', description: 'A fuller kanban board: columns, drag-and-drop cards, and per-card details.', requirements: ['Multiple columns with draggable cards, reorderable within and across columns', 'Add/edit/delete a card, including a title and description', 'Persist board state in local state (or localStorage) across interactions', 'Consider Board + Column + Card + CardModal components'] },
    { title: 'Spreadsheet Clone', description: 'A minimal spreadsheet grid supporting cell selection and simple formulas.', requirements: ['An editable grid of cells addressed like A1, B2, etc.', 'Selecting and editing a cell updates its value', 'Support at least a basic formula like =A1+B2 (bonus)', 'Consider a Grid + Cell component split'] },
    { title: 'Figma Comments UI', description: 'Overlay positioned comment pins on a canvas/image with a comment thread per pin.', requirements: ['Click on the canvas to drop a new comment pin at that position', "Clicking a pin opens its comment thread", 'Add replies to a thread', 'Consider Canvas + CommentPin + CommentThread components'] },
    { title: 'Mini React DevTools Clone', description: "Visualize a fake component tree and let the user inspect a selected node's props/state.", requirements: ['Render a tree of sample components (name + children)', "Selecting a node shows its mock props/state in an inspector panel", 'Highlight the currently selected node in the tree', 'Consider a Tree + TreeNode + Inspector component split'] },
  ],
};

// ---------------------------------------------------------------------------
// Flatten manifest into TASKS with computed routing/naming fields
// ---------------------------------------------------------------------------

const TASKS = [];
for (const category of CATEGORIES) {
  const rawTasks = TASKS_RAW[category.name] || [];
  for (const raw of rawTasks) {
    const slug = slugify(raw.title);
    TASKS.push({
      category: category.name,
      categorySlug: category.slug,
      type: category.type,
      title: raw.title,
      slug,
      path: `/${category.slug}/${slug}`,
      description: raw.description,
      requirements: raw.requirements,
      componentName: pascalCase(raw.title),
      hookName: raw.hookName,
      ctx: raw.ctx,
    });
  }
}

// ---------------------------------------------------------------------------
// Skeleton templates, keyed by category type
// ---------------------------------------------------------------------------

function header(task) {
  return `import TaskInfo from '../../components/TaskInfo.jsx';

const description = ${JSON.stringify(task.description)};

const requirements = ${JSON.stringify(task.requirements, null, 2)};
`;
}

function footer(task, body) {
  return `export default function ${task.componentName}() {
${body}
}
`;
}

// Files the user needs to open/edit for this task, shown in the TaskInfo panel.
function filePathsFor(task) {
  const paths = [`src/tasks/${task.categorySlug}/${task.slug}.jsx`];
  if (task.type === 'hook') paths.push(`src/hooks/${task.hookName}.js`);
  if (task.type === 'context') paths.push(`src/context/${task.ctx}Context.jsx`);
  return paths;
}

function page(task, imports, logic, jsx) {
  const filePaths = JSON.stringify(filePathsFor(task));
  return `${header(task)}${imports ? imports + '\n' : ''}
${footer(
  task,
  `${logic}
  return (
    <div className="task-page">
      <TaskInfo
        title=${JSON.stringify(task.title)}
        description={description}
        requirements={requirements}
        filePaths={${filePaths}}
      />
      <div className="task-workspace">
${jsx}
      </div>
    </div>
  );`,
)}`;
}

const SKELETONS = {
  component: (task) =>
    page(
      task,
      '',
      `  // TODO: accept props if this component should be reusable (e.g. { name, role, imageUrl })`,
      `        <div className="card">
          {/* TODO: build the JSX for "${task.title}" here */}
          <p>Your component markup goes here.</p>
        </div>`,
    ),

  state: (task) =>
    page(
      task,
      `import { useState } from 'react';`,
      `  // TODO: declare the state this task needs, e.g.
  // const [value, setValue] = useState(initialValue);`,
      `        <div className="stack">
          {/* TODO: render UI driven by state, plus controls that call your setters */}
          <p>Your code here.</p>
        </div>`,
    ),

  event: (task) =>
    page(
      task,
      `import { useState } from 'react';`,
      `  const [state, setState] = useState(null); // TODO: rename/shape this for the task

  // TODO: implement the event handler(s) this task needs (onClick/onMouseEnter/onKeyDown/etc.)
  function handleEvent(event) {
    // TODO
  }`,
      `        <div className="stack">
          {/* TODO: attach handleEvent to the right JSX element/event */}
          <button className="btn" onClick={handleEvent}>
            Trigger
          </button>
        </div>`,
    ),

  form: (task) =>
    page(
      task,
      `import { useState } from 'react';`,
      `  // TODO: add one useState per field this form needs (or a single formData object)
  const [formData, setFormData] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    // TODO: update formData for this field
  }

  function handleSubmit(event) {
    event.preventDefault();
    // TODO: validate and handle the submitted data
  }`,
      `        <form className="stack" onSubmit={handleSubmit}>
          {/* TODO: add labeled <input> fields, wiring value+onChange to formData */}
          <button className="btn primary" type="submit">
            Submit
          </button>
        </form>`,
    ),

  list: (task) =>
    page(
      task,
      `import { useState } from 'react';`,
      `  const [items, setItems] = useState([
    // TODO: seed a few starter items relevant to "${task.title}"
  ]);

  function handleAdd(item) {
    // TODO: add item to items
  }

  function handleRemove(id) {
    // TODO: remove item by id from items
  }`,
      `        <div className="stack">
          {/* TODO: render items.map(...) as a list, plus add/remove controls */}
          <p>{items.length} items</p>
        </div>`,
    ),

  filter: (task) =>
    page(
      task,
      `import { useMemo, useState } from 'react';`,
      `  const [items] = useState([
    // TODO: seed sample data to filter/search/sort for "${task.title}"
  ]);
  const [query, setQuery] = useState('');

  const visibleItems = useMemo(() => {
    // TODO: filter/sort \`items\` based on \`query\` (and any other controls you add)
    return items;
  }, [items, query]);`,
      `        <div className="stack">
          <input
            className="input"
            placeholder="Search..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* TODO: render visibleItems */}
        </div>`,
    ),

  effect: (task) =>
    page(
      task,
      `import { useEffect, useState } from 'react';`,
      `  const [data, setData] = useState(null);

  useEffect(() => {
    // TODO: run the side effect this task needs (timer, fetch, subscription...)
    // Remember to return a cleanup function if you start an interval/timeout/subscription.

    return () => {
      // TODO: cleanup here if needed
    };
  }, []);`,
      `        <div className="stack">
          {/* TODO: render \`data\` / loading / error states */}
          <p>Your code here.</p>
        </div>`,
    ),

  routing: (task) =>
    page(
      task,
      `import { useState } from 'react';`,
      `  // This demo simulates multiple "pages" with local state so it can live on one route.
  // In a full app you'd use <Routes>/<Route> (see src/App.jsx) instead of this switch.
  const [currentPage, setCurrentPage] = useState('home');

  // TODO: define the pages this task needs, e.g. { home: <Home />, about: <About /> }`,
      `        <div className="stack">
          <div className="row">
            {/* TODO: nav buttons that call setCurrentPage(...) */}
          </div>
          {/* TODO: render the component for currentPage */}
        </div>`,
    ),

  hook: (task) =>
    page(
      task,
      `import { ${task.hookName} } from '../../hooks/${task.hookName}.js';`,
      `  // TODO: call ${task.hookName}(...) once you've implemented it in src/hooks/${task.hookName}.js
  // const value = ${task.hookName}(...);`,
      `        <div className="stack">
          {/* TODO: use the hook's return value in this demo UI */}
          <p>Your code here.</p>
        </div>`,
    ),

  context: (task) => {
    const ctxName = `${task.ctx}Context`;
    const providerName = `${task.ctx}Provider`;
    const hookName = `use${task.ctx}Context`;
    return `${header(task)}import { ${providerName}, ${hookName} } from '../../context/${ctxName}.jsx';

function Demo() {
  // TODO: consume ${hookName}() here and build the UI
  return <p>Your code here.</p>;
}

${footer(
  task,
  `  return (
    <div className="task-page">
      <TaskInfo
        title=${JSON.stringify(task.title)}
        description={description}
        requirements={requirements}
        filePaths={${JSON.stringify(filePathsFor(task))}}
      />
      <div className="task-workspace">
        <${providerName}>
          <Demo />
        </${providerName}>
      </div>
    </div>
  );`,
)}`;
  },

  advanced: (task) =>
    page(
      task,
      `import { useState } from 'react';`,
      `  // TODO: model whatever state this UI pattern needs (open/closed, active index, dragged item...)
  const [state, setState] = useState(null);`,
      `        <div className="stack">
          {/* TODO: build the interactive pattern for "${task.title}" */}
          <p>Your code here.</p>
        </div>`,
    ),

  performance: (task) =>
    page(
      task,
      `import { useCallback, useMemo, useState } from 'react';`,
      `  const [count, setCount] = useState(0);
  const [items] = useState(() => Array.from({ length: 2000 }, (_, i) => i));

  // TODO: this recomputes on every render — fix with useMemo where it belongs
  const expensiveResult = items.filter((n) => n % 2 === 0).length;

  // TODO: wrap any handler passed to a memoized child in useCallback
  function handleClick() {
    setCount((c) => c + 1);
  }`,
      `        <div className="stack">
          <p>Even count: {expensiveResult}</p>
          <button className="btn" onClick={handleClick}>
            Re-render ({count})
          </button>
          {/* TODO: apply the optimization this task is about, then verify with React DevTools */}
        </div>`,
    ),

  project: (task) =>
    page(
      task,
      `import { useState } from 'react';`,
      `  // TODO: sketch the state shape this project needs, e.g.
  // const [items, setItems] = useState([]);

  // TODO: break this into sub-components as it grows (see the requirements above for a suggested split)`,
      `        <div className="stack">
          {/* TODO: build "${task.title}" here — start with static markup, then wire up state */}
          <p>Your code here.</p>
        </div>`,
    ),
};

// ---------------------------------------------------------------------------
// Companion hook / context file stubs
// ---------------------------------------------------------------------------

function hookStub(hookName) {
  return `// TODO: implement ${hookName}
export function ${hookName}(/* args */) {
  // TODO
}
`;
}

function contextStub(ctx) {
  const ctxName = `${ctx}Context`;
  const providerName = `${ctx}Provider`;
  const hookName = `use${ctx}Context`;
  return `import { createContext, useContext, useState } from 'react';

const ${ctxName} = createContext(undefined);

export function ${providerName}({ children }) {
  // TODO: define the state/actions this context should expose
  const value = {};

  return <${ctxName}.Provider value={value}>{children}</${ctxName}.Provider>;
}

export function ${hookName}() {
  const ctx = useContext(${ctxName});
  if (ctx === undefined) {
    throw new Error('${hookName} must be used within a ${providerName}');
  }
  return ctx;
}
`;
}

// ---------------------------------------------------------------------------
// Write everything
// ---------------------------------------------------------------------------

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
}

let taskFileCount = 0;
let hookFileCount = 0;
let contextFileCount = 0;
const seenHooks = new Set();
const seenContexts = new Set();

for (const task of TASKS) {
  const skeleton = SKELETONS[task.type];
  if (!skeleton) {
    throw new Error(`No skeleton defined for type "${task.type}" (task "${task.title}")`);
  }

  const taskFilePath = path.join(SRC, 'tasks', task.categorySlug, `${task.slug}.jsx`);
  writeFile(taskFilePath, skeleton(task));
  taskFileCount += 1;

  if (task.type === 'hook' && !seenHooks.has(task.hookName)) {
    writeFile(path.join(SRC, 'hooks', `${task.hookName}.js`), hookStub(task.hookName));
    seenHooks.add(task.hookName);
    hookFileCount += 1;
  }

  if (task.type === 'context' && !seenContexts.has(task.ctx)) {
    writeFile(path.join(SRC, 'context', `${task.ctx}Context.jsx`), contextStub(task.ctx));
    seenContexts.add(task.ctx);
    contextFileCount += 1;
  }
}

// Metadata-only manifest consumed by Home.jsx and App.jsx (no starter code inside).
const dataFileContent = `// Auto-generated by scripts/generate.mjs — do not hand-edit, re-run the script instead.

export const CATEGORIES = ${JSON.stringify(
  CATEGORIES.map((c) => ({ name: c.name, label: c.label, slug: c.slug })),
  null,
  2,
)};

export const TASKS = ${JSON.stringify(
  TASKS.map((t) => ({
    category: t.category,
    categorySlug: t.categorySlug,
    title: t.title,
    slug: t.slug,
    path: t.path,
    description: t.description,
    requirements: t.requirements,
  })),
  null,
  2,
)};
`;
writeFile(path.join(SRC, 'data', 'tasks.js'), dataFileContent);

console.log(`Generated ${taskFileCount} task pages, ${hookFileCount} hook stubs, ${contextFileCount} context stubs, and src/data/tasks.js.`);
