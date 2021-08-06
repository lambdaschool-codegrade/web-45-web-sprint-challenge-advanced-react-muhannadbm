# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What are the main differences between a stateful and a functional component?
stateful components is where the logical processing and data manipulation happens 
while functional components should be used to display the results(Presentational components), also no render function used in functional components, while render is used in stateful components

2. When does a componentWillMount function be called? What about a componentWillUpdate?
componentWillMount is invoked immediately before mounting occurs while componentWillUpdate() is called every time a re-render is required such as changing a state

3. Define stateful logic.
it's a computational logic where all logic is being implemented in one place such as a hook
4. What are the three step of creating a successful test? What is done in each phase?
Arrange: get the component to render
Act: do the expected behavior from user
Assert: ensure values resulted match the expected values
