# React Hooks: Dynamic Form

This repo contains the source code for dynamically generating an html form based on a shallow object model.

The state of the form is managed using a couple custom React Hooks, which leverage "useState"

## Getting started

1. Clone the repo
2. yarn install && yarn start
3. If not automatically opened by react-scripts, navigate to localhost:3000

The form doesn't send any information anywhere currently, it just accepts inputs, modifys the underlying state, and then resets the inputs with empty strings on submit.
