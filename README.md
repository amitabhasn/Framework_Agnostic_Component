# Framework_Agnostic_Component

Problem statement:
 
Current state, IT groups within one IT organization developed alike UI capabilities around multiple JavaScript frame works including Angular, React, Vue.js

Impacts:

Solutions around common use cases developed multiple times. 
Lack of reuse
Increased maintenance & support cost.
Lack of portability…

Ambitions: Design for portability/agnostic (lift and shift)  (do not hardcode yourself)
Goals: Over time, migrate IT groups around one Web UI Framework e.g. Vue.js…

Approach:
1. In order to create framework agnostic components (that are truly reusable and interoperable with all the benefits of the React/Vue.js   
   ecosystems) we can not choose  any one framework, because that will lock into that stack. Hence, we need to use Custom Elements (extend 
   HTML & define own custom tags) or API based solutions, that would give us a built-in component model without any framework lock-in. 
2. Its an opportunity for large organization to consolidate their front-end UI into a pattern libraries (e.g. MailChimp, PolymerJS etc.). 
   This could be very useful as a company grows and splits into multiple teams. This would increase the re-usability, consistency and 
   reduce the manageability overhead.
   
Proposed Solution:

The Custom Element API based solution based on the Lifecycle callbacks. Standard callbacks used are as follows - 

	connectedCallback () {
	// Called every time the element is inserted into the DOM
	}
	
	disconnectedCallback() {
    // Called every time the element is removed from the DOM. 
	}
  
	attributeChangedCallback(attrName, oldVal, newVal) {
    // Called when an attribute was added, removed, or updated
	}
	
	adoptedCallback() {
		// Called if the element has been moved into a new document
	}

