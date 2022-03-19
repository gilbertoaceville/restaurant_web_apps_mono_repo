# Crunchies Web Apps Mono Repo

Single Repo to contain all Crunchies web apps: Admin, Restaurant, Consumer, Public

### Folder Structure
_admin, consumer, restaurant_: represent the repos for the Admin, Consumer and Restaurant Apps. Each folder has the following sub-folders
  _features_: holds the screens for a specific feature. Each screen is usually a sub-folder which has 2 JavaScript files: the component file of the screen and the Styled Component file containing the design for the screen.
  
  _infrastructure_: contains things like navigation, themes etc

  _services_: which contains the data access files (GraphQL queries etc) needed for the features to access data from the backend

_lib_: Contains 2 sub-folders
  _components_: which will hold the shared components from the design e.g. buttons, labels etc.
  _assets_: will hold the shared assets like images etc