# Understanding the App

## Indicab

Indicab is a car rental application with the following features:


### User Features:
- Car browsing/selection based on specifications.
- Location-based search with pick-up/drop-off selection.
- Trip start/end date and time selection using calendar and time pickers.
- Self-drive option.
- Car delivery/pickup options.
- User authentication (Sign In/Sign Up with email/phone and social login).
- Search results display with filtering.
- Detailed booking information display with price breakdown.
- Payment processing with multiple payment method options.
- Booking confirmation.
- Booking management (My Bookings) to view booking history.
- User profile viewing and editing.
- Document upload (driving license).
- Menu with navigation (Home, My Bookings, Document Verification, Terms & Conditions, Need Help, Rate Us, Logout).

### Operator/Supplier Features:
*(Out of scope for initial version, but considered for future)*
- Car listing.
- Car availability management.
- Delivery/pickup options.

## I. Planning Phase

### Detailed Requirements Gathering:

#### User Stories:
- As a user, I want to search for cars by category, location, and date/time.
- As a user, I want to see a list of available cars with details like image, name, and price.
- As a user, I want to be able to filter search results.
- As a user, I want to view detailed information about a car before booking.
- As a user, I want to manage my bookings (view history, upcoming trips).
- As a user, I want to be able to sign in and sign up for an account.
- As a user, I want to be able to update my profile information.
- As a user, I want to upload my driving license for verification.
- As a user, I want to be able to make payments.

### Functional Requirements:
#### Car Search:
- **Category selection:** Predefined list of car categories (e.g., Sedan, SUV, Hatchback).
- **Location selection:** List of predefined locations (e.g., "City Center", "Airport"). Use Google Places API for suggestions.
- **Date/time selection:** Calendar view for date, time picker for time.
- **Filtering:** Filter results by price range, car type, availability.

#### Car Details:
- Display car image, name, description, features, price per day, availability.

#### Booking:
- Display booking summary: Car details, dates/times, location, price breakdown (base fare, taxes, fees).
- Payment processing: Integration with a payment gateway.

#### User Authentication:
- **Sign In:** Email/phone number and password.
- **Sign Up:** Full name, email address, phone number, password, profile picture (optional).
- **Social login:** Facebook, Google. Use Firebase Authentication.

#### Profile Management:
- View profile: Display user information.
- Edit profile: Allow users to update their information.
- Document Upload: Upload driving license photo from camera or gallery.
- My Bookings: Display a list of past and upcoming bookings with car details and booking dates.

### Menu:
- Home: Navigate to the main search screen.
- My Bookings: Navigate to the booking history screen.
- Document Verification: Navigate to the document upload screen.
- Terms & Conditions: Display the app's terms and conditions (static content).
- Need Help?: Display contact information or FAQ (static content).
- Rate Us: Redirect to the app's page on the Google Play Store.
- Logout: Clear the user's session and navigate to the sign-in screen.
- About Section: Display static information about the app.

## Non-Functional Requirements:
### Performance:
- Search results should load in < 2 seconds.
- App should be responsive and not freeze.

### Security:
- User data should be encrypted in transit and at rest. Use HTTPS for all API communication.
- Implement secure authentication and authorization. Use JWT (JSON Web Tokens) for API authentication.
- Protect against common vulnerabilities (e.g., SQL injection, XSS).
- Payment information should be handled securely (PCI DSS compliance if applicable).

### Usability:
- The app should have a clean and intuitive user interface.
- Navigation should be clear and consistent.
- Error messages should be informative and helpful.

### Scalability:
- The app should be able to handle a growing number of users and car listings.
- The backend should be designed to scale horizontally.

### Reliability:
- The app should be stable and crash-free.

### Maintainability:
- The code should be well-organized, documented, and easy to maintain.

### UI/UX Design:
- Follow Material Design principles.
- Use a consistent color scheme (e.g., Rent4Ride logo colors).
- Ensure all text is legible and has sufficient contrast.
- Provide clear visual feedback for user interactions.
- Optimize for different screen sizes and resolutions.

## Technical Design:
### Technology Stack:
- **Frontend:** Android (Kotlin). Use Kotlin version 1.9 or later.
- **Backend:** Java (Spring Boot 3). Use Java 17 or later.
- **Database:** PostgreSQL 15.
- **API:** RESTful, using JSON for data exchange.

### Mapping:
#### Search Screen:
- "Select Category" -> Spinner (or AutoCompleteTextView with predefined categories)
- "Select Location" -> AutoCompleteTextView (integrated with Google Places API)
- "Start Trip" -> EditText (triggers DatePickerDialog and TimePickerDialog)
- "End Trip" -> EditText (triggers DatePickerDialog and TimePickerDialog)
- "Search" -> Button

#### Sign In Screen:
- "Enter your Email or phone number" -> EditText
- "Enter your password" -> EditText
- "Sign In" -> Button
- "Sign up" -> Button (navigates to Sign Up screen)
- "Facebook" -> ImageButton (or custom button, uses Firebase Authentication)
- "Google" -> ImageButton (or custom button, uses Firebase Authentication)

#### Sign Up Screen:
- "User Image" -> ImageView (for profile picture, uses ActivityResultLauncher for image selection)
- "Enter full name" -> EditText
- "Email address" -> EditText
- "Phone number" -> EditText
- "Create password" -> EditText
- "Sign Up Now" -> Button

#### Search Results Screen:
- RecyclerView to display a list of cars.
- Custom item layout for each car: ImageView (car image), TextView (car name), TextView (price).

#### Car Details Screen:
- ImageView (car image), TextView (car name, description, features), TextView (price), Button ("Book Now").

#### Booking Information Screen:
- TextView elements to display booking details: car image, name, dates/times, location, price breakdown (base fare, taxes, fees), total amount.
- "Proceed to payment" -> Button

#### Payment Screen:
- Payment method selection: RadioGroup or Spinner (Credit Card, PayPal).
- Credit Card fields: EditText (card number, name, expiry date, CVV).
- "Pay Now" -> Button

#### Booking Confirmation Screen:
- TextView for confirmation message (e.g., "Your booking is confirmed!").
- "Go to my Bookings" -> Button

#### My Bookings Screen:
- RecyclerView to display a list of bookings.
- Custom item layout: ImageView (car image), TextView (car name), TextView (booking dates).

### Menu (Drawer):
- DrawerLayout for the drawer layout.
- NavigationView for the menu items.
- ImageView (user profile picture), TextView (user name) in the header.
- Menu items: ListView or RecyclerView within the NavigationView.

#### My Profile Screen:
- ImageView (profile picture), EditText (full name, email, phone), RadioGroup (gender), Button ("Update Profile").

#### Upload Document Screen:
- ImageView (for displaying the uploaded document), Button ("Use Camera"), Button ("Upload from Gallery").

### Architecture:
- **Backend:** Layered architecture (Controller, Service, Repository).
- **Frontend:** MVVM (Model-View-ViewModel). Use Android Architecture Components (ViewModel, LiveData, Room).

### Database Schema:
- **users:** (user_id SERIAL PRIMARY KEY, full_name VARCHAR(255), email VARCHAR(255) UNIQUE, phone_number VARCHAR(20) UNIQUE, password VARCHAR(255), gender VARCHAR(10), profile_picture VARCHAR(255) -- URL to image)
- **cars:** (car_id SERIAL PRIMARY KEY, name VARCHAR(255), description TEXT, category VARCHAR(50), price_per_day DECIMAL(10, 2), location_id INT, availability BOOLEAN, image_url VARCHAR(255))
- **locations:** (location_id SERIAL PRIMARY KEY, name VARCHAR(255), latitude DECIMAL(10, 6), longitude DECIMAL(10, 6))
- **bookings:** (booking_id SERIAL PRIMARY KEY, user_id INT, car_id INT, start_date TIMESTAMP, end_date TIMESTAMP, pickup_location_id INT, dropoff_location_id INT, total_amount DECIMAL(10, 2), booking_status VARCHAR(20))
- **payment_details:** (payment_id SERIAL PRIMARY KEY, booking_id INT, payment_method VARCHAR(50), transaction_id VARCHAR(255), payment_status VARCHAR(20))
- **documents:** (document_id SERIAL PRIMARY KEY, user_id INT, document_type VARCHAR(50), document_url VARCHAR(255), verification_status VARCHAR(20))

### API Design:
- Use RESTful principles.
- Use JSON for request and response bodies.
- Implement proper HTTP status codes.
- Use JWT for authentication and authorization.

### Endpoints:
- POST /api/auth/signup: User registration.
- POST /api/auth/signin: User login.
- GET /api/cars: Get a list of cars (with optional query parameters for filtering).
- GET /api/cars/{carId}: Get details of a specific car.
- POST /api/bookings: Create a new booking.
- GET /api/bookings/{bookingId}: get a specific booking
- GET /api/bookings/user: Get all bookings for the logged-in user.
- POST /api/payment: Process a payment.
- GET /api/user/profile: Get the user's profile information.
- PUT /api/user/profile: Update the user's profile information.
- POST /api/documents: Upload a user document.
- GET /api/locations: Get the list of available locations.

### Third-Party Libraries:
#### Backend:
- Spring Boot Starter Web: For building RESTful APIs.
- Spring Boot Starter Data JPA: For database interaction with PostgreSQL.
- Spring Security: For authentication and authorization (JWT).
- PostgreSQL Driver: For connecting to the PostgreSQL database.
- MapStruct: For mapping between DTOs and entities.

#### Frontend:
- Retrofit 2: For making HTTP requests to the backend API.
- Kotlin Coroutines: For handling asynchronous operations.
- AndroidX ViewModel and LiveData: For implementing the MVVM architecture.
- Room Persistence Library: For local database caching (optional).
- Google Maps Android SDK / Google Places API: For location services and autocomplete.
- Firebase Authentication: For social login (Facebook, Google).
- Glide or Coil: For loading images from URLs.
- Material Design Components for Android: For UI elements.
- Payment gateway SDK (e.g., Stripe Android SDK).
- ActivityResultLauncher API: For handling camera and gallery access.

### Tools:
#### Backend:
- VSCode, IntelliJ IDEA (optional), Docker (for database and backend deployment).

#### Frontend:
- Android Studio, VSCode (for XML and some Kotlin).

#### Database:
- DBeaver (for database management).

#### Version Control:
- Git (GitHub).

#### Project Management:
- Jira, Trello, or Asana.

## Project Planning:
### Tasks and Timeline:
#### Phase 1: Backend Development (4 weeks):
- Week 1: Set up project, database, and core entities.
- Week 2: Implement user authentication API.
- Week 3: Implement car management and search APIs.
- Week 4: Implement booking and payment APIs.

#### Phase 2: Android App Development (6 weeks):
- Week 1-2: Set up project, UI layout for core screens (Search, Sign In/Up).
- Week 3: Implement user authentication and profile management.
- Week 4: Implement car search and details functionality.
- Week 5: Implement booking and payment functionality.
- Week 6: Implement My Bookings, Menu, Document Upload and navigation.

#### Phase 3: Testing (2 weeks):
- Week 1: Unit and integration testing.
- Week 2: System and user acceptance testing.

#### Phase 4: Deployment (1 week):
- Deploy backend and release Android app.

### Total Estimated Time: 13 weeks

### Team Roles:
- You: Full-stack developer (Java/Spring Boot and Android/Kotlin).

### Budget:
*(To be determined based on infrastructure and other costs)*
- Backend server costs (e.g., AWS, Heroku).
- Domain name and SSL certificate.
- Payment gateway transaction fees.
- Contingency: Add 1-2 weeks to the timeline for unexpected issues.

## II. Development Phase
### Backend Development (Java/Spring Boot):
- Set up the development environment:
  - Install Java JDK 17.
  - Install Spring Boot CLI.
  - Set up a PostgreSQL 15 database (locally or on a cloud service like AWS RDS).
  - Create a new Spring Boot project using Spring Initializr or Spring Boot CLI.
  - Configure the application.properties or application.yml file with database connection details, port (e.g., server.port=8080), and other properties.
  - Implement the database schema using Spring Data JPA:
    - Create entity classes that map to the database tables (e.g., User, Car, Location, Booking).
    - Use JPA annotations (e.g., @Entity, @Table, @Id, @GeneratedValue, @Column, @ManyToOne) to define the mapping.
    - Define repositories (interfaces that extend JpaRepository) for database access.
  - Develop RESTful APIs using Spring MVC:
    - Create controllers (classes annotated with @RestController) to handle HTTP requests.
    - Define endpoints using @GetMapping, @PostMapping, @PutMapping, @DeleteMapping annotations.
    - Use @Autowired to inject services and repositories.
    - Implement request and response bodies using Data Transfer Objects (DTOs).
    - Handle data validation using @Valid annotation and BindingResult.
    - Implement error handling using @ExceptionHandler.
    - Implement pagination and sorting for car search API.
    - Implement user authentication using Spring Security and JWT:
      - Configure Spring Security to use JWT for authentication.
      - Create a JwtTokenProvider class to generate and validate JWT tokens.
      - Create a JwtRequestFilter to intercept incoming requests and validate the JWT token.
      - Define a UserDetailsServiceImpl to load user details from the database.
      - Secure the API endpoints using @PreAuthorize annotation.
  - Implement business logic:
    - Create service classes (annotated with @Service) to encapsulate the business logic.
    - Implement methods for car search, booking, payment processing, etc.
    - Use transactions (@Transactional) to ensure data consistency.
  - Write unit tests using JUnit and Mockito:
    - Write unit tests for the service layer to test the business logic.
    - Use Mockito to mock dependencies (e.g., repositories).
    - Use MockMvc to test the API endpoints.
  - Deploy the backend:
    - Package the application as a JAR or WAR file.
    - Deploy to a cloud platform (e.g., AWS Elastic Beanstalk, Heroku) or a virtual private server (VPS).
    - Configure a reverse proxy (e.g., Nginx) to handle incoming requests.

### Android App Development (Kotlin):
- Set up the development environment:
  - Install Android Studio.
  - Install the latest Android SDK (API level 34).
  - Create a new Android project in Android Studio, selecting "Empty Activity" as the initial template.
  - Configure Gradle build files.
- Create UI layouts using XML:
  - Create XML layout files for each screen (e.g., activity_search.xml, activity_sign_in.xml, activity_sign_up.xml, fragment_search_results.xml, activity_car_details.xml, activity_booking_confirmation.xml, activity_payment.xml, fragment_my_bookings.xml, activity_profile.xml, activity_upload_document.xml).
  - Use ConstraintLayout for flexible layout design.
  - Use Material Design Components (e.g., MaterialButton, TextInputLayout, RecyclerView) for a consistent look and feel.
- Implement custom item layouts for RecyclerView items (e.g., for displaying cars in search results, bookings in "My Bookings").
- Implement the menu using a DrawerLayout and NavigationView.
- Implement app logic using Kotlin and MVVM:
  - Create ViewModel classes for each screen to manage the UI data and handle user interactions.
  - Use LiveData to observe data changes in the UI.
  - Use Repository classes to abstract data access (from local database or remote API).
  - Use Kotlin Coroutines for asynchronous operations (e.g., making API requests, database operations).
  - Use Fragments for modular UI components (e.g., for search results, my bookings).
  - Implement navigation using the Android Navigation Component.
- Implement features:
  - Car Search:
    - Implement UI for category, location, and date/time selection.
    - Use AutoCompleteTextView with Google Places API to suggest locations.
    - Use DatePickerDialog and TimePickerDialog for date/time selection.
    - Make a request to the backend API (GET /api/cars) with appropriate query parameters to fetch cars based on the search criteria.
    - Display the search results in a RecyclerView.
    - Implement filtering (price, category) using a PopupMenu or a separate fragment.
  - Car Details:
    - Display car details fetched from the backend API (GET /api/cars/{carId}).
    - Handle the "Book Now" button click to navigate to the booking information screen.
  - Booking:
    - Display booking summary.
    - Handle the "Proceed to payment" button click to navigate to the payment screen.
    - Implement the payment screen UI.
    - Integrate with a payment gateway SDK (e.g., Stripe Android SDK) to process the payment.
    - Make a request to the backend API (POST /api/bookings) to create a new booking.
    - Make a request to the backend API (POST /api/payment) to record the payment.
    - Display a booking confirmation message.
  - User Authentication:
    - Implement UI for Sign In and Sign Up screens.
    - Handle user input validation.
    - Make requests to the backend API (POST /api/auth/signup, POST /api/auth/signin) to register and log in users.
    - Implement social login using Firebase Authentication (Facebook, Google).
    - Store the JWT token securely (e.g., using EncryptedSharedPreferences).
    - Handle successful login/registration and navigate to the main screen.
  - Profile Management:
    - Implement UI for displaying and editing user profile information.
    - Fetch user profile data from the backend API (GET /api/user/profile).
    - Update user profile data using the backend API (PUT /api/user/profile).
    - Use ActivityResultLauncher to handle profile picture updates.
  - Document Upload:
    - Implement UI for uploading a driving license photo.
    - Use ActivityResultLauncher to access the camera and image gallery.
    - Upload the image to the backend API (POST /api/documents).
  - My Bookings:
    - Fetch the user's bookings from the backend API (GET /api/bookings/user).
    - Display the bookings in a RecyclerView.
- Menu:
  - Implement a DrawerLayout and NavigationView for the menu.
  - Handle menu item clicks to navigate to different screens.
- Write unit and UI tests:
  - Write unit tests for ViewModel classes to test the UI logic. Use Mockito to mock the Repository.
  - Write UI tests using Espresso to test user interactions.

## III. Testing Phase
### Unit Testing:
- Backend: Test service layer methods using JUnit and Mockito. Mock the repository layer. Test API endpoints using MockMvc.
- Frontend: Test ViewModel methods using JUnit and Mockito. Mock the Repository.

### Integration Testing:
- Test the interaction between the Android app and the backend API. Use a test environment or a mock server (e.g., WireMock) to simulate the backend.

### System Testing:
- Test the entire application (both frontend and backend) to ensure all features work as expected. Deploy the application to a staging environment.

### User Acceptance Testing (UAT):
- Have a group of users test the app in a realistic environment. Gather feedback and fix any issues.

### Performance Testing:
- Use tools like JMeter to perform load testing and stress testing on the backend API.
- Use Android Profiler to monitor the app's performance on different devices.

### Security Testing:
- Perform penetration testing to identify vulnerabilities.
- Use tools like OWASP ZAP to scan for web application vulnerabilities.
- Ensure that all data is encrypted and that authentication and authorization are implemented correctly.

## IV. Deployment Phase
### Prepare for Deployment:
#### Backend:
- Configure the production database.
- Set up a production server (e.g., AWS EC2, Google Compute Engine).
- Configure a reverse proxy (e.g., Nginx) for load balancing and SSL termination.
- Obtain an SSL certificate for HTTPS.
- Set up logging and monitoring (e.g., using ELK stack or similar).

#### Frontend:
- Generate a signed APK or bundle for release.
- Create a Google Play Store developer account.
- Write release notes.
- Prepare screenshots and a description for the app listing.

### Deployment:
#### Backend:
- Deploy the backend application to the production server.
- Configure the domain name to point to the server.
- Ensure that the database is accessible to the application.

#### Frontend:
- Upload the signed APK or bundle to the Google Play Store.
- Submit the app for review.
- Release the app to the public.

## V. Maintenance Phase
### Monitoring:
- Monitor the app's performance and identify any issues using tools like Firebase Crashlytics, Google Analytics, and server-side monitoring tools.

### Bug Fixing:
- Fix any bugs that are reported by users or identified through testing.

### Updates:
- Release updates with new features, improvements, and bug fixes.

### Support:
- Provide support to users through email, in-app feedback, or other channels.
