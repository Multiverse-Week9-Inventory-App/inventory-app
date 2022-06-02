# Code Review

## Taskboard + Workflow

* I like that we break each task down by User story with subtask for stack
* Consider using `- [ ]` and converting to Issue
* Mob + pair coding > solo
* Consider creating git branches for each feature/issue, making PRs when complete, and merging after review

## API

### Sequelize
* price => `Sequelize.DECIMAL(2)`, `Sequelize.INT`
* Can we add a default string for images?
* Category `Sequelize.ENUM("shirts", "hats", "dresses")`

### Express
* Nice RESTful routes for Tier I
* res.send() for stringsm res.json() for data
* good job implementing express router()

## Front-end

### React
* Awesome to see React Router -- ambitious!
* Nice conditional rendering in Items component
* Add Item is now working... looking forward to it.

### CSS
* can we add responsive design with flexbox (or another framework?)

## Roadmap
* Tiers I, II complete
* Tier III
	* check out useEffect for infinite requests
* Tier IV
	* put route for item
	* edit item form
	* fetch put request on form submission
	* bonus: can you do this inline on the single item view?




